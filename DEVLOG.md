🔱 Diário de Bordo - Afrotunde (Gemini, esta é nossa "Fonte da Verdade". Use este arquivo como sua "memória" e "manual de instruções" se o chat quebrar).

⚡ CONTEXTO DE SINCRONIZAÇÃO (IMPORTANTE)
* **Estado dos Arquivos:** `index.html` (v4), `style.css` (v4), `site.webmanifest` (v1).
* **Debug (JS):** O `script.js` (v4) que continha a lógica da "Barra de Progresso de Scroll" causou um bug de renderização (o CSS não foi aplicado).
* **Ação Estratégica:** Revertemos para o `script.js` (v3) (o arquivo que o senhor colou para mim) para manter o site estável. O `index.html` e `style.css` (v4) contêm os elementos da barra de scroll, mas eles estão "inertes" (desativados) até depurarmos o JS.
* **Placeholders:** As 8 thumbnails da galeria foram substituídas pela URL `i.pinimg.com` (v4).

---

🎯 Próximos Passos (To-Do)
* (Nenhuma tarefa imediata. Vamos escolher uma do "Banco de Ideias" ou "Adiadas" na próxima sessão.)

---

✅ Concluídas (Nesta Sessão)
[X] **Nova Seção: FAQ (Acordeão Semântico).** (Movido do To-Do).
    * *Plano Concluído:* Criada a seção `#faq` com `<details>` e `<summary>` (sem JS). Adicionados links de navegação no header e footer.

[X] **UX (Carrossel Mobile de Depoimentos).** (Movido do Banco de Ideias).
    * *Plano Concluído:* Usado `scroll-snap` no `style.css` para transformar a seção `#depoimentos` em um carrossel "swipe" apenas em telas móveis.

[X] **SEO (Schema Review).** (Movido do Banco de Ideias).
    * *Plano Concluído:* O JSON-LD `HairSalon` (no `<head>`) foi atualizado para "aninhar" a propriedade `review` com os 2 depoimentos e `ratingValue: "5"`.

[X] **SEO (Meta Tags Open Graph).**
    * *Plano Concluído:* Adicionadas as tags `og:title`, `og:description`, `og:image` (placeholder) e `og:url` no `<head>` para compartilhamento no WhatsApp/Facebook.

[X] **A11y (Links Externos).** (Movido do Banco de Ideias).
    * *Plano Concluído:* Adicionado `icon-external-link` ao SVG sprite. Adicionado ícone e `aria-label` aos 2 links do Instagram (`#contato` e `footer`) que usam `target="_blank"`.

[X] **Performance (YouTube Preconnect).**
    * *Plano Concluído:* Adicionado `<link rel="preconnect" href="https://www.youtube.com">` no `<head>` para acelerar o carregamento do player de vídeo.

[X] **SEO (Favicon & Manifesto).** (Movido do Banco de Ideias).
    * *Plano Concluído:* Criado o novo arquivo `site.webmanifest` (v1). Adicionados os links placeholders para os favicons (`apple-touch-icon`, etc.) e o link para o manifesto no `<head>`.

[X] **Placeholders (Galeria).**
    * *Plano Concluído:* Substituídas as 8 imagens `thumb-XX.jpg` pela nova URL placeholder `i.pinimg.com`.

---

🐞 Adiadas (Para Debug/Próxima Sessão)
[ ] **UI (Indicador de Scroll):** (Movido do Banco de Ideias).
    * **PROBLEMA:** A implementação do `script.js` (v4) quebrou a renderização do CSS.
    * **PLANO:** Na próxima sessão, vamos depurar o `script.js` (v4) com calma, garantir que a lógica do `requestAnimationFrame` está correta e que não há erros de sintaxe (como o `});` extra que causei).

---

🅿️ Adiadas (Aguardando Ativos da Cliente)
(Tarefas que exigem downloads/softwares/arquivos finais)

[ ] **PLACEHOLDERS (REVISÃO FINAL):**
    * [ ] **Foto (Sobre):** Substituir a foto da seção `#sobre` pela foto real da Karla.
    * [ ] **Foto (Open Graph):** Substituir a URL `og:image` e `twitter:image` pela foto real da Karla.
    * [ ] **Galeria (Thumbnails):** Substituir as 8 thumbnails `i.pinimg.com` pelos vídeos/fotos reais.
    * [ ] **Galeria (Vídeos):** Substituir os `data-full-src="placeholder-video"` pelos links reais do YouTube.
    * [ ] **Favicon:** Gerar os ícones (`favicon-32x32.png`, `apple-touch-icon.png`, etc.) a partir do logo final e colocá-los na pasta `assets/icons/`.

[ ] **Logo 3D:** Criar o logo (Búzio ou Duafe) no Blender e exportar como um vídeo .mp4.
[ ] **Fontes Locais:** Baixar os arquivos .woff2 (Cormorant Garamond e Inter) e auto-hospedar as fontes.

---

💡 Banco de Ideias (Próximas Sugestões)
[ ] **Automação (Notificação):** (Sua ideia) Usar `new Date()` no `script.js` para atualizar automaticamente o mês na barra de notificação (ex: "A agenda para [Próximo Mês] está aberta!").
[ ] **Performance (Lazy Load YouTube Player):** Implementar o "padrão de fachada" no lightbox (carregar o player do YouTube só ao clicar no "play").
[ ] **UI (Efeito de Foco no FAQ):** Adicionar CSS para que o `summary` (pergunta) mude para a cor `--cor-acento-secundario` quando o `details` estiver `[open]`.
[C] **Performance (Font-Display: Swap):** Adicionar `&display=swap` na URL de importação do Google Fonts (CSS).
[ ] **A11y (Outline de Foco):** Customizar o `:focus-visible` no CSS para usar as cores do projeto.
[ ] **A11y (Imagens):** Atualizar o `alt text` das thumbnails da galeria (quando recebermos as reais).
[ ] **SEO (Twitter Cards):** (Movido do To-Do. A implementação foi feita, mas não testamos).
