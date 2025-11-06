/* ======== 1. LÓGICA DE TEMA (RODA IMEDIATAMENTE) ======== */
// Esta função é auto-executável e roda ANTES do DOM carregar,
// para evitar o "piscar" da tela (Flash of Unstyled Content).
(() => {
    // Função que aplica o tema no <html>
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.documentElement.lang = "pt-BR"; // Garante o lang
        } else {
            document.documentElement.removeAttribute('data-theme');
            document.documentElement.lang = "pt-BR"; // Garante o lang
        }
    };

    // Função principal que decide qual tema usar
    const initializeTheme = () => {
        let savedTheme = null;
        try {
            // 1. Tenta pegar o tema salvo pelo usuário (a "memória")
            savedTheme = localStorage.getItem('theme-preference');
        } catch (e) {
            console.warn('localStorage não está disponível.');
        }

        if (savedTheme) {
            // 2. Se achou um tema salvo, usa ele
            applyTheme(savedTheme);
        } else {
            // 3. Se não tem tema salvo, detecta o sistema do usuário
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(systemPrefersDark ? 'dark' : 'light');
        }
    };

    initializeTheme();
})();
// --- FIM DA LÓGICA IMEDIATA ---


/* ======== 2. LÓGICA PRINCIPAL (RODA APÓS O HTML CARREGAR) ======== */
// 'DOMContentLoaded' espera o HTML estar pronto
document.addEventListener('DOMContentLoaded', () => {

    // --- SELETORES GERAIS ---
    const body = document.body;
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    const lightboxOverlay = document.querySelector('.lightbox-overlay');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxVideoPlaceholder = document.querySelector('.lightbox-video-placeholder');
    const lightboxClose = document.querySelector('.lightbox-close');
    const cardServicos = document.querySelectorAll('.card-servico');
    
    const faders = document.querySelectorAll('.fade-in'); 
    const voltarAoTopoBtn = document.querySelector('.voltar-ao-topo'); 

    const copyPixBtn = document.querySelector('#copy-pix-btn');
    const pixKeyText = document.querySelector('#pix-key');
    const tooltip = document.querySelector('.tooltip-copy');
    
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const themeToggleButton = document.querySelector('#theme-toggle');
    
    // (NOVOS SELETORES) Para o Scroll Spy
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');


    // --- LÓGICA DO CLIQUE NO BOTÃO DE TEMA ---
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';

            if (newTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
            
            try {
                localStorage.setItem('theme-preference', newTheme);
            } catch (e) {
                console.warn('localStorage não está disponível.');
            }
        });

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme-preference')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }


    // --- LÓGICA DO MENU HAMBURGER ---
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.classList.toggle('no-scroll', navMenu.classList.contains('active'));
        });

        // (MUDANÇA AQUI) O Scroll Spy agora controla o 'active-link',
        // então o clique apenas *fecha* o menu.
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('no-scroll');
                // (Removemos o 'active-link' daqui, o Observer cuida disso)
            });
        });
    }

    // --- FUNÇÕES "HELPER" PARA O LIGHTBOX (VÍDEO) ---
    function getYouTubeID(url) {
        let ID = '';
        url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if (url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        } else {
            ID = url;
        }
        return ID;
    }

    function createYouTubePlayer(url) {
        const videoID = getYouTubeID(url);
        const iframeHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${videoID}?autoplay=1&rel=0&modestbranding=1" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
        lightboxVideoPlaceholder.innerHTML = iframeHTML;
    }

    // --- LÓGICA DO LIGHTBOX (MODAL DE VÍDEO/IMAGEM) ---
    if (lightboxOverlay && lightboxImage && lightboxVideoPlaceholder && lightboxClose && cardServicos.length > 0) {
        
        cardServicos.forEach(card => {
            card.addEventListener('click', () => {
                const fullSrc = card.getAttribute('data-full-src');
                
                lightboxVideoPlaceholder.innerHTML = '';
                lightboxImage.src = '';
                
                if (fullSrc === "placeholder-video") {
                    lightboxImage.style.display = 'none'; 
                    lightboxVideoPlaceholder.style.display = 'flex'; 
                
                } else if (fullSrc && (fullSrc.includes('youtube.com') || fullSrc.includes('youtu.be'))) {
                    lightboxImage.style.display = 'none'; 
                    lightboxVideoPlaceholder.style.display = 'block'; 
                    createYouTubePlayer(fullSrc); 
                
                } else if (fullSrc) { 
                    lightboxImage.src = fullSrc;
                    lightboxImage.style.display = 'block'; 
                    lightboxVideoPlaceholder.style.display = 'none'; 
                }

                lightboxOverlay.classList.add('active');
                body.classList.add('no-scroll'); 
            });
        });

        const closeLightbox = () => {
            lightboxOverlay.classList.remove('active');
            if (!navMenu.classList.contains('active')) {
                body.classList.remove('no-scroll');
            }
            lightboxVideoPlaceholder.innerHTML = '';
        };

        lightboxClose.addEventListener('click', closeLightbox);

        lightboxOverlay.addEventListener('click', (e) => {
            if (e.target === lightboxOverlay) {
                closeLightbox();
            }
        });
    }

    // --- LÓGICA DO FADE-IN AO ROLAR (IntersectionObserver) ---
    if (faders.length > 0) {
        const appearOptions = {
            threshold: 0.1, 
            rootMargin: "0px 0px -50px 0px" 
        };

        const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return; 
                } else {
                    entry.target.classList.add('is-visible'); 
                    appearOnScroll.unobserve(entry.target); 
                }
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    }

    // --- LÓGICA DO BOTÃO "VOLTAR AO TOPO" ---
    if (voltarAoTopoBtn) {
        
        let debounceTimer;
        const debounce = (callback, time) => {
            window.clearTimeout(debounceTimer);
            debounceTimer = window.setTimeout(callback, time);
        };

        const handleScroll = () => {
            if (window.scrollY > 400) {
                voltarAoTopoBtn.classList.add('is-visible');
            } else {
                voltarAoTopoBtn.classList.remove('is-visible');
            }
        };

        window.addEventListener('scroll', () => {
            debounce(handleScroll, 100); 
        });
    }

    // --- LÓGICA DO CLICK TO COPY (PIX) ---
    if (copyPixBtn && pixKeyText && tooltip) {
        copyPixBtn.addEventListener('click', () => {
            const keyToCopy = pixKeyText.innerText;

            navigator.clipboard.writeText(keyToCopy).then(() => {
                tooltip.classList.add('is-visible'); 
                setTimeout(() => {
                    tooltip.classList.remove('is-visible');
                }, 2000);

            }).catch(err => {
                console.error('Falha ao copiar PIX: ', err);
                tooltip.innerText = 'Erro!';
                tooltip.classList.add('is-visible');
                setTimeout(() => {
                    tooltip.classList.remove('is-visible');
                    tooltip.innerText = 'Copiado!'; 
                }, 2000);
            });
        });
    }

    // --- LÓGICA DO CONTADOR ANIMADO ---
    if (statNumbers.length > 0) {
        const animateCounter = (el) => {
            const goal = parseInt(el.getAttribute('data-goal'), 10);
            let current = 0;
            const duration = 2000; 
            const stepTime = Math.max(10, Math.floor(duration / goal)); 

            const timer = setInterval(() => {
                current += 1;
                el.innerText = `${current}+`;
                
                if (current >= goal) {
                    clearInterval(timer);
                    el.innerText = `${goal}+`; 
                }
            }, stepTime);
        };

        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.5 }); 

        statNumbers.forEach(number => {
            counterObserver.observe(number);
        });
    }

    // --- LÓGICA DA BARRA DE NOTIFICAÇÃO ---
    if (notificationBar && closeNotificationBtn) {
        try {
            if (localStorage.getItem('notificationClosed') === 'true') {
                notificationBar.classList.add('is-hidden');
            }
        } catch (e) {
            console.warn('localStorage não está disponível.');
        }

        closeNotificationBtn.addEventListener('click', () => {
            notificationBar.classList.add('is-hidden'); 
            try {
                localStorage.setItem('notificationClosed', 'true');
            } catch (e) {
                console.warn('localStorage não está disponível.');
            }
        });
    }

    // --- (NOVO) LÓGICA DO SCROLL SPY (Navegação Inteligente) ---
    if (navLinks.length > 0 && sections.length > 0) {
        
        // (Reutilizando a ideia do IntersectionObserver de forma leve)
        const spyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Se a seção está [threshold: 0.7] (70%) visível na tela
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    // 1. Remove o 'active-link' de TODOS os links
                    navLinks.forEach(link => link.classList.remove('active-link'));
                    
                    // 2. Encontra o link específico que corresponde à seção e adiciona
                    const activeLink = document.querySelector(`.nav-menu a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active-link');
                    }
                }
            });
        }, { 
            threshold: 0.7 // O link "acende" quando 70% da seção está visível
        });

        // "Assiste" a todas as seções
        sections.forEach(section => {
            spyObserver.observe(section);
        });
    }

});
