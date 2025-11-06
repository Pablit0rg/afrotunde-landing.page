// Espera o DOM (estrutura HTML) estar pronto antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SELETORES GERAIS ---
    // Selecionamos todos os elementos que vamos usar no JS de uma vez
    const body = document.body;
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    const lightboxOverlay = document.querySelector('.lightbox-overlay');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxVideoPlaceholder = document.querySelector('.lightbox-video-placeholder');
    const lightboxClose = document.querySelector('.lightbox-close');
    const cardServicos = document.querySelectorAll('.card-servico');
    
    const faders = document.querySelectorAll('.fade-in'); // Elementos para o fade-in
    const voltarAoTopoBtn = document.querySelector('.voltar-ao-topo'); // Botão de voltar ao topo

    // --- 2. LÓGICA DO MENU HAMBURGER ---
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            // Bloqueia/desbloqueia a rolagem do body
            body.classList.toggle('no-scroll', navMenu.classList.contains('active'));
        });

        // Fecha o menu mobile quando um link é clicado
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('no-scroll');
            });
        });
    }

    // --- 3. LÓGICA DO LIGHTBOX (MODAL DE VÍDEO/IMAGEM) ---
    if (lightboxOverlay && lightboxImage && lightboxVideoPlaceholder && lightboxClose && cardServicos.length > 0) {
        
        cardServicos.forEach(card => {
            card.addEventListener('click', () => {
                const fullSrc = card.getAttribute('data-full-src');
                
                if (fullSrc === "placeholder-video") {
                    lightboxImage.style.display = 'none'; // Esconde a imagem real
                    lightboxVideoPlaceholder.style.display = 'flex'; // Mostra o placeholder de vídeo
                } else if (fullSrc) { // Se for uma URL real (foto)
                    lightboxImage.src = fullSrc;
                    lightboxImage.style.display = 'block'; // Mostra a imagem real
                    lightboxVideoPlaceholder.style.display = 'none'; // Esconde o placeholder
                }

                lightboxOverlay.classList.add('active');
                body.classList.add('no-scroll'); // Bloqueia a rolagem
            });
        });

        const closeLightbox = () => {
            lightboxOverlay.classList.remove('active');
            // Só desbloqueia a rolagem se o menu mobile também estiver fechado
            if (!navMenu.classList.contains('active')) {
                body.classList.remove('no-scroll');
            }
        };

        lightboxClose.addEventListener('click', closeLightbox);

        lightboxOverlay.addEventListener('click', (e) => {
            // Fecha o lightbox se clicar no overlay (fundo preto), mas não na imagem
            if (e.target === lightboxOverlay) {
                closeLightbox();
            }
        });
    }

    // --- 4. LÓGICA DO FADE-IN AO ROLAR (IntersectionObserver) ---
    if (faders.length > 0) {
        const appearOptions = {
            threshold: 0.1, // Começa a animação quando 10% do elemento está visível
            rootMargin: "0px 0px -50px 0px" // Começa a animar 50px antes de aparecer na tela
        };

        const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return; // Sai se não estiver visível
                } else {
                    entry.target.classList.add('is-visible'); // Adiciona a classe que o CSS vai animar
                    appearOnScroll.unobserve(entry.target); // Para de "assistir" o elemento (melhora a performance)
                }
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    }

    // --- 5. LÓGICA DO BOTÃO "VOLTAR AO TOPO" ---
    // (Esta lógica é combinada com um 'debounce' para performance máxima)
    if (voltarAoTopoBtn) {
        
        // Função 'debounce' (Otimização #5)
        // Isso impede que a função de scroll seja disparada 1000x por segundo, melhorando a performance
        let debounceTimer;
        const debounce = (callback, time) => {
            window.clearTimeout(debounceTimer);
            debounceTimer = window.setTimeout(callback, time);
        };

        // A função que verifica o scroll (otimizada)
        const handleScroll = () => {
            // Se o usuário rolou mais que 400px para baixo
            if (window.scrollY > 400) {
                voltarAoTopoBtn.classList.add('is-visible');
            } else {
                voltarAoTopoBtn.classList.remove('is-visible');
            }
        };

        // "Escuta" o evento de scroll, mas usa o 'debounce' para otimizar
        window.addEventListener('scroll', () => {
            debounce(handleScroll, 100); // Só executa a função 100ms *depois* que o usuário parar de rolar
        });
    }

});
