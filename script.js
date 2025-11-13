/*
  LANDING PAGE AFROTUNDE (v5-retry - Indicador de Scroll)
  Cliente: Karla (Afrotunde)
  Desenvolvedor: Pablo Rosa Gomes (Seu Senhor)
  IA Assistente: Gemini
  Foco: Santuário Ori (Elegância, Afro, Espiritual)
  Objetivo: Captação de Clientes (Conversão)
*/

/* ======== 1. LÓGICA DE TEMA (RODA IMEDIATAMENTE) ======== */
(() => {
    // Função para aplicar o tema (lê do localStorage ou do sistema)
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.documentElement.lang = "pt-BR"; 
        } else {
            document.documentElement.removeAttribute('data-theme');
            document.documentElement.lang = "pt-BR"; 
        }
    };
    
    // Função para inicializar o tema
    const initializeTheme = () => {
        let savedTheme = null;
        try {
            // Tenta ler a preferência salva pelo usuário
            savedTheme = localStorage.getItem('theme-preference');
        } catch (e) {
            console.warn('localStorage não está disponível.');
        }
        
        if (savedTheme) {
            // Se tiver uma preferência salva, usa ela
            applyTheme(savedTheme);
        } else {
            // Senão, usa a preferência do sistema operacional
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(systemPrefersDark ? 'dark' : 'light');
        }
    };
    
    // Roda a inicialização imediatamente
    initializeTheme();
})();
/* ======== FIM DA LÓGICA DE TEMA ======== */


/* ======== 2. LÓGICA PRINCIPAL (RODA APÓS O HTML CARREGAR) ======== */
document.addEventListener('DOMContentLoaded', () => {

    // --- SELETORES GERAIS ---
    const body = document.body;
    const header = document.querySelector('.navbar'); 
    const main = document.querySelector('main'); 
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    // (PERFORMANCE) Seletor trocado para Event Delegation
    const galeriaGrid = document.querySelector('.galeria-grid'); 
    
    const lightboxOverlay = document.querySelector('.lightbox-overlay');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxVideoPlaceholder = document.querySelector('.lightbox-video-placeholder');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    const lightboxCaption = document.querySelector('.lightbox-caption'); 
    
    const faders = document.querySelectorAll('.fade-in'); 
    const voltarAoTopoBtn = document.querySelector('.voltar-ao-topo'); 

    const copyPixBtn = document.querySelector('#copy-pix-btn');
    const pixKeyText = document.querySelector('#pix-key');
    const tooltip = document.querySelector('.tooltip-copy');
    
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const themeToggleButtons = document.querySelectorAll('#theme-toggle-desktop, #theme-toggle-mobile');

    // (v4) Seletor da Automação da Agenda
    const textoAgendaEl = document.querySelector('#texto-agenda'); 

    // (NOVO - v5) Seletor da Barra de Scroll
    const scrollBar = document.querySelector('#scroll-bar');

    const whatsappBtn = document.querySelector('#whatsapp-btn');
    const whatsappBtnHero = document.querySelector('#whatsapp-btn-hero'); 
    const whatsappModal = document.querySelector('#whatsapp-modal');
    const modalCloseBtn = document.querySelector('#modal-close-btn');
    const modalConfirmBtn = document.querySelector('#modal-confirm-btn');
    const modalCancelBtn = document.querySelector('#modal-cancel-btn');

    // ======== (A11Y) HELPERS DE ACESSIBILIDADE ========
    
    // --- 1. Helper Aria-Hidden ---
    const elementosConteudoTotal = [header, main, voltarAoTopoBtn].filter(Boolean);
    const elementosConteudoMain = [main, voltarAoTopoBtn].filter(Boolean);

    const setAriaHidden = (elementos, hidden) => {
        elementos.forEach(el => {
            if (hidden) {
                el.setAttribute('aria-hidden', 'true');
            } else {
                el.removeAttribute('aria-hidden');
            }
        });
    };

    // --- 2. Helper Trap Focus ---
    const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    const trapFocus = (modalElement, e) => {
        if (e.key !== 'Tab') return; 

        const focaveis = modalElement.querySelectorAll(focusableSelector);
        if (focaveis.length === 0) return; 
        
        const primeiroFocavel = focaveis[0];
        const ultimoFocavel = focaveis[focaveis.length - 1];

        if (e.shiftKey) { 
            if (document.activeElement === primeiroFocavel) {
                ultimoFocavel.focus(); 
                e.preventDefault();
            }
        } else { 
            if (document.activeElement === ultimoFocavel) {
                primeiroFocavel.focus(); 
                e.preventDefault();
            }
        }
    };
    
    // --- 3. Helper de Movimento Reduzido ---
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const querMovimentoReduzido = motionQuery.matches;
    
    // --- 4. Helper de Vibração Tátil ---
    const vibrateOnClick = () => {
        if (querMovimentoReduzido) return; 

        if (navigator.vibrate) {
            navigator.vibrate(50); 
        }
    };
    
    // ======== FIM (A11Y) HELPERS ========


    // --- LÓGICA DO CLIQUE NO BOTÃO DE TEMA ---
    if (themeToggleButtons.length > 0) {
        
        const toggleTheme = () => {
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
        };

        themeToggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                vibrateOnClick(); 
                toggleTheme();
            });
        });

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            const savedTheme = localStorage.getItem('theme-preference');
            if (!savedTheme) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }


    // --- LÓGICA DO MENU HAMBURGER ---
    if (hamburger && navMenu) {
        const handleMenuTrapFocus = (e) => trapFocus(navMenu, e);

        hamburger.addEventListener('click', () => {
            vibrateOnClick(); 
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            const menuAberto = navMenu.classList.contains('active');
            body.classList.toggle('no-scroll', menuAberto);
            setAriaHidden(elementosConteudoMain, menuAberto); 

            if (menuAberto) {
                navMenu.querySelector('a')?.focus(); 
                navMenu.addEventListener('keydown', handleMenuTrapFocus);
            } else {
                navMenu.removeEventListener('keydown', handleMenuTrapFocus);
            }
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('no-scroll');
                setAriaHidden(elementosConteudoMain, false); 
                navMenu.removeEventListener('keydown', handleMenuTrapFocus); 
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
    if (lightboxOverlay && lightboxImage && lightboxVideoPlaceholder && lightboxClose && galeriaGrid && lightboxCaption) {
        
        const handleLightboxTrapFocus = (e) => trapFocus(lightboxOverlay, e);

        galeriaGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.card-servico');
            if (!card) return;

            vibrateOnClick(); 
            const fullSrc = card.getAttribute('data-full-src');
            const captionText = card.querySelector('h4')?.innerText || ''; 

            lightboxVideoPlaceholder.innerHTML = '';
            lightboxImage.src = '';
            lightboxCaption.innerText = ''; 
            
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

            lightboxCaption.innerText = captionText;
            lightboxOverlay.classList.add('active');
            body.classList.add('no-scroll'); 
            setAriaHidden(elementosConteudoTotal, true); 
            
            lightboxClose.focus();
            lightboxOverlay.addEventListener('keydown', handleLightboxTrapFocus);
        });
        
        const closeLightbox = () => {
            lightboxOverlay.classList.remove('active');
            if (!navMenu.classList.contains('active') && !whatsappModal.classList.contains('active')) {
                body.classList.remove('no-scroll');
                setAriaHidden(elementosConteudoTotal, false); 
            }
            lightboxVideoPlaceholder.innerHTML = '';
            lightboxCaption.innerText = ''; 
            lightboxOverlay.removeEventListener('keydown', handleLightboxTrapFocus); 
        };

        lightboxClose.addEventListener('click', () => {
            vibrateOnClick(); 
            closeLightbox();
        });
        
        lightboxOverlay.addEventListener('click', (e) => {
            if (e.target === lightboxOverlay) {
                closeLightbox();
            }
        });
    }

    // --- LÓGICA DO FADE-IN AO ROLAR (IntersectionObserver) ---
    if (faders.length > 0) {
        if (querMovimentoReduzido) {
            faders.forEach(fader => {
                fader.classList.add('is-visible');
            });
        } else {
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

        if (!querMovimentoReduzido) {
            window.addEventListener('scroll', () => {
                debounce(handleScroll, 100); 
            });
        }
        
        voltarAoTopoBtn.addEventListener('click', vibrateOnClick);
    }

    // --- (NOVO - v5) LÓGICA DO INDICADOR DE SCROLL ---
    if (scrollBar && !querMovimentoReduzido) {
        let ticking = false;

        const updateScrollProgress = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            
            // Evita divisão por zero se o conteúdo for menor que a tela
            if (scrollHeight === clientHeight) {
                scrollBar.style.width = '0%';
                return;
            }

            const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
            scrollBar.style.width = `${scrollPercent}%`;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateScrollProgress();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }


    // --- LÓGICA DO CLICK TO COPY (PIX) ---
    if (copyPixBtn && pixKeyText && tooltip) {
        copyPixBtn.addEventListener('click', () => {
            vibrateOnClick(); 
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
        
        if (querMovimentoReduzido) {
            statNumbers.forEach(number => {
                const goal = number.getAttribute('data-goal');
                number.innerText = `${goal}+`;
            });
        } else {
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
    }


    // --- (v4) LÓGICA DE AUTOMAÇÃO DA AGENDA ---
    if (textoAgendaEl) {
        try {
            const dataAtual = new Date();
            const mesAtual = dataAtual.getMonth(); // 0 = Jan, 11 = Dez
            const diaDoMes = dataAtual.getDate();

            const nomesMeses = [
                "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
            ];

            let nomeMesSeguinte = nomesMeses[(mesAtual + 1) % 12];
            let statusAgenda = "";

            // REGRA DE NEGÓCIO:
            // - Dias 1-19: Agenda do mês seguinte "em breve".
            // - Dias 20-31: Agenda do mês seguinte "aberta".
            if (diaDoMes < 20) {
                statusAgenda = `abrirá em breve (dia 20/${mesAtual + 1})`;
            } else {
                statusAgenda = "está aberta";
            }
            
            // Atualiza o texto
            textoAgendaEl.innerText = `A agenda para ${nomeMesSeguinte} ${statusAgenda}! Garanta seu horário.`;
            
        } catch (e) {
            console.error("Falha ao automatizar o texto da agenda:", e);
        }
    }
    

    // --- LÓGICA DO MODAL WHATSAPP ---
    if (whatsappModal && modalCloseBtn && modalConfirmBtn && modalCancelBtn) {
        
        const handleWppTrapFocus = (e) => trapFocus(whatsappModal, e);

        const closeModal = () => {
            whatsappModal.classList.remove('active');
            if (!lightboxOverlay.classList.contains('active') && !navMenu.classList.contains('active')) {
                body.classList.remove('no-scroll');
                setAriaHidden(elementosConteudoTotal, false);
            }
            whatsappModal.removeEventListener('keydown', handleWppTrapFocus); 
        };

        const openModal = (e) => {
            e.preventDefault(); 
            whatsappModal.classList.add('active'); 
            body.classList.add('no-scroll'); 
            setAriaHidden(elementosConteudoTotal, true); 

            modalConfirmBtn.focus();
            whatsappModal.addEventListener('keydown', handleWppTrapFocus);
        };

        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', (e) => {
                vibrateOnClick(); 
                openModal(e);
            });
        }
        if (whatsappBtnHero) { 
            whatsappBtnHero.addEventListener('click', (e) => {
                vibrateOnClick(); 
                openModal(e);
            });
        }

        modalCancelBtn.addEventListener('click', () => {
            vibrateOnClick(); 
            closeModal();
        }); 
        
        modalCloseBtn.addEventListener('click', () => {
            vibrateOnClick(); 
            closeModal();
        }); 

        modalConfirmBtn.addEventListener('click', () => {
            vibrateOnClick(); 
            const whatsappLink = whatsappBtnHero.getAttribute('href');
            if(whatsappLink !== "[SEU_LINK_WHATSAPP_AQUI]") {
                window.open(whatsappLink, '_blank'); 
            } else {
                console.warn("Link do WhatsApp não configurado no HTML.");
            }
            closeModal(); 
        });

        whatsappModal.addEventListener('click', (e) => {
            if (e.target === whatsappModal) {
                closeModal();
            }
        });
    }


    // --- LÓGICA DO SCROLL SPY (MENU ATIVO) ---
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    if (sections.length > 0 && navLinks.length > 0) {
        // (A11y) Só ativa o Scroll Spy se o usuário quer movimento
        if (!querMovimentoReduzido) {
            const observerOptions = {
                rootMargin: '-50% 0px -50% 0px', 
                threshold: 0 
            };

            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                        });

                        const activeLink = document.querySelector(`.nav-menu a[href="#${id}"]`);
                        if (activeLink) {
                            activeLink.classList.add('active');
                        }
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                sectionObserver.observe(section);
            });
        }
    }

});
