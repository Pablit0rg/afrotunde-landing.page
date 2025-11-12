🔱 Diário de Bordo - Afrotunde (Gemini, esta é nossa "Fonte da Verdade". Use este arquivo como sua "memória" e "manual de instruções" se o chat quebrar).

⚡ CONTEXTO DE SINCRONIZAÇÃO (IMPORTANTE)
* **Estado dos Arquivos (v6):** `index.html` (v7), `style.css` (v7), `site.webmanifest` (v1).
* **Debug (JS):** O `script.js` (v4) que continha a lógica da "Barra de Progresso de Scroll" causou um bug de renderização (o CSS não foi aplicado).
* **Ação Estratégica:** Revertemos para o `script.js` (v3) (o arquivo estável anterior) para manter o site funcional. O `index.html` e `style.css` (v7) contêm os elementos da barra de scroll, mas eles estão "inertes" (desativados) até depurarmos o JS.
* **Placeholders (v5):** As 8 thumbnails da galeria foram substituídas pela URL `i.pinimg.com`. O PIX e o link do WhatsApp foram atualizados com os dados reais da Karla.

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

[X] **SEO (Meta Tags OG & Twitter Cards).**
    * *Plano Concluído:* Adicionadas as tags `og:title`, `og:description`, `og:image` (placeholder) e `og:url` no `<head>` para compartilhamento no WhatsApp/Facebook e Twitter.

[X] **A11y (Links Externos).** (Movido do Banco de Ideias).
    * *Plano Concluído:* Adicionado `icon-external-link` ao SVG sprite. Adicionado ícone e `aria-label` aos 2 links do Instagram (`#contato` e `footer`) que usam `target="_blank"`.

[X] **Performance (YouTube Preconnect).**
    * *Plano Concluído:* Adicionado `<link rel="preconnect" href="https://www.youtube.com">` no `<head>` para acelerar o carregamento do player de vídeo.

[X] **SEO (Favicon & Manifesto).** (Movido do Banco de Ideias).
    * *Plano Concluído:* Criado o novo arquivo `site.webmanifest` (v1). Adicionados os links placeholders para os favicons (`apple-touch-icon`, etc.) e o link para o manifesto no `<head>`.

[X] **Dados (WhatsApp & PIX).**
    * *Plano Concluído:* O número do PIX (`41992929516`) foi atualizado. Os 2 links do WhatsApp (`#whatsapp-btn-hero` e `#whatsapp-btn`) foram atualizados com o número real (`wa.me/5541992929516`) e uma mensagem automática profissional.

[X] **Placeholders (Galeria).**
    * *Plano Concluído:* Substituídas as 8 imagens `thumb-XX.jpg` pela nova URL placeholder `i.pinimg.com`.

[X] **A11y (Skip Link).**
    * *Plano Concluído:* Confirmado que o "Skip Link" (`.skip-link`) está funcionando corretamente (só aparece no `:focus` do teclado) e não será removido, pois é uma feature de acessibilidade.

[X] **UI (Layout Navbar & Footer).**
    * *Plano Concluído:* Botões de tema (desktop e mobile) movidos para o início da `<nav>` no `index.html` e CSS ajustado.
    * *Plano Concluído:* Ícone do Instagram no `footer` movido para *depois* do "@pablit0rg".

[X] **UI (Bugs de Estilo & Refinamento).**
    * *Plano Concluído (Bugfix):* Corrigida a regra CSS no `footer` para que a cor oficial do Instagram (`--cor-instagram-icon`) se aplique *apenas* ao `.icon-instagram` e não a outros ícones no mesmo link.
    * *Plano Concluído (Refinamento):* Aumentado o tamanho do `#theme-toggle-mobile` no menu hamburger para `40px` para melhorar a "zona de toque".
    * *Plano Concluído (Refinamento):* Cor do botão de Tema (desktop e mobile) alterada para Dourado (`--cor-tema-toggle`) em ambos os temas para destaque.

[X] **UI (Efeito de Foco no FAQ).** (Movido do Banco de Ideias).
    * *Plano Concluído:* Adicionada regra CSS para que o `summary` da pergunta mude para a cor de acento (`--cor-acento-secundario`) quando o `<details>` estiver `[open]`.

---

🐞 Adiadas (Para Debug/Próxima Sessão)
[ ] **UI (Indicador de Scroll):** (Movido do Banco de Ideias).
    * **PROBLEMA:** A implementação do `script.js` (v4) quebrou a renderização do CSS (o site ficou sem estilos).
    * **PLANO:** Na próxima sessão, vamos depurar o `script.js` (v4) com calma, garantir que a lógica do `requestAnimationFrame` está correta e que não há erros de sintaxe. Estamos atualmente no `script.js` (v3 estável).

---

🅿️ Adiadas (Aguardando Ativos da Cliente)
(Tarefas que exigem downloads/softwares/arquivos finais)

[ ] **PLACEHOLDERS (REVISÃO FINAL):**
    * [ ] **Foto (Sobre):** Substituir a foto da seção `#sobre` pela foto real da Karla.
    * [ ] **Foto (Open Graph):** Substituir a URL `og:image` e `twitter:image` pela foto real da Karla (MUITO IMPORTANTE).
    * [ ] **Galeria (Thumbnails):** Substituir as 8 thumbnails `i.pinimg.com` pelos vídeos/fotos reais.
    * [ ] **Galeria (Vídeos):** Substituir os `data-full-src="placeholder-video"` pelos links reais do YouTube.
    * [ ] **Favicon:** Gerar os ícones (`favicon-32x32.png`, `apple-touch-icon.png`, etc.) a partir do logo final e colocá-los na pasta `assets/icons/`.

[ ] **Logo 3D:** Criar o logo (Búzio ou Duafe) no Blender e exportar como um vídeo .mp4.
[ ] **Fontes Locais:** Baixar os arquivos .woff2 (Cormorant Garamond e Inter) e auto-hospedar as fontes.

---

💡 Banco de Ideias (Próximas Sugestões)
[ ] **Automação (Notificação):** (Sua ideia) Usar `new Date()` no `script.js` para atualizar automaticamente o mês na barra de notificação (ex: "A agenda para [Próximo Mês] está aberta!").
[ ] **Performance (Lazy Load YouTube Player):** Implementar o "padrão de fachada" no lightbox (carregar o player do YouTube só ao clicar no "play").
[ ] **Performance (Font-Display: Swap):** Adicionar `&display=swap` na URL de importação do Google Fonts (CSS).
[ ] **A11y (Outline de Foco):** Customizar o `:focus-visible` no CSS para usar as cores do projeto.
[ ] **Performance (Impressão):** Adicionar um bloco `@media print` no `style.css` para limpar o site para impressão.
[ ] **UI (Efeito Hover na Galeria):** (ADIADO) Adicionar `box-shadow` suave e `filter: saturate(1.1)` no hover dos cards da galeria.
[ ] **A11y (Imagens):** Atualizar o `alt text` das thumbnails da galeria (quando recebermos as reais).

---

📜 Manual da Gemini (Nosso Workflow)
(Instruções para a IA Gemini manter o fluxo de trabalho do dev)

* ENTREGA DE CÓDIGO: Sempre mandar os documentos (.html, .css, .js) completos, um por um.
* COMANDO DE FLUXO: Aguardar o comando "próximo Gemini" do usuário antes de enviar o próximo arquivo.
* EFICIÊNCIA: Se um arquivo não sofreu alteração, não o envie. Apenas avise: "O arquivo [nome.css] não sofreu alterações."
* PADRÃO DE CÓDIGO: O código deve ser limpo, moderno e com blocos de comentários rápidos e objetivos ("sem encher linguiça").
* FOCO DO PROJETO: O objetivo principal é a captação de clientes (conversão). O objetivo secundário é criar uma landing page premium (presente/portfólia) com estética de "Santuário Ori" (elegante, espiritual, afro).
* "RE-SINCRONIZAÇÃO": O usuário usará este arquivo DEVLOG.md para me "re-sincronizar" em novos chats. Devo ler este manual e o To-Do para entender o estado atual do projeto.
* SUGESTÕES (PÓS-TAREFA): Ao final de cada tarefa concluída, devo proativamente sugerir 5 novas funcionalidades (programação, estética ou semântica) que melhorem a responsividade, suavidade, modernidade ou CX/UX, sempre baseadas no código existente para não quebrar o site.
* BÔNUS DE JS (PÓS-TAREFA): Juntamente com as 5 sugestões, devo sempre fornecer 5 exemplos de programação JavaScript moderna (leve, focada em performance mobile, carregamento rápido e estética "Santuário").
* **(NOVO) LEMBRETE FINAL:** Devo *sempre* lembrar o usuário de atualizar o DevLog no GitHub antes de finalizarmos a sessão, independentemente de qualquer coisa.
