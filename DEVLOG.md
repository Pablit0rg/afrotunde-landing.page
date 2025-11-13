🔱 Diário de Bordo - Afrotunde (Gemini, esta é nossa "Fonte da Verdade". Use este arquivo como sua "memória" e "manual de instruções" se o chat quebrar).

⚡ CONTEXTO DE SINCRONIZAÇÃO (IMPORTANTE)
* **Estado dos Arquivos (v7):** `index.html` (v9), `style.css` (v8), `script.js` (v3 estável), `site.webmanifest` (v1).
* **Debug (JS):** O `script.js` (v4) (Barra de Progresso) ainda está pendente de depuração. Estamos no (v3) estável.
* **Novos Ativos (v8):** A cliente (Karla) enviou os 8 vídeos (.mp4) e 5 fotos (.jpeg).
* **Ação Estratégica (v10):** Por decisão do desenvolvedor, o upload, otimização e linkagem de todos os ativos (fotos/vídeos) foi movido para a **ÚLTIMA ETAPA** do projeto (ver seção "Adiadas") para não bloquear o desenvolvimento do código.

---

🎯 Próximos Passos (To-Do)
* (Nenhuma tarefa imediata. O bloco de "Substituição de Ativos" foi movido para "Adiadas" por estratégia).
* (Na próxima sessão, vamos depurar o `script.js` (v4) ou escolher uma tarefa do "Banco de Ideias").

---

✅ Concluídas (Nesta Sessão - v9)
[X] UI (Layout Galeria): (Movido do Banco de Ideias) Implementada a nova galeria de 13 cards (8 vídeos, 5 fotos) no index.html (v9) usando placeholders.
[X] UI (CSS Galeria): Adicionada a classe `.is-image` e a regra CSS (no `style.css` v8) para ocultar o ícone "Play" em cards de imagem, diferenciando fotos de vídeos.
[X] Conteúdo (Hero H1): Título principal (`h1`) atualizado para "Tranças e Locs em Curitiba".
[X] Conteúdo (Hero Subtítulo): Subtítulo (`.subtitulo`) atualizado para "Por Karla do Vale, Trancista e Loctician."
[X] Conteúdo (Hero CTA): Texto do botão principal (`#whatsapp-btn-hero`) simplificado para "AGENDAR".
[X] Conteúdo (Galeria Slogan): Frase de orgulho da galeria (`#catalogo`) atualizada para "Transformando sua autoestima através da arte no orí" (com ortografia corrigida).
[X] Conteúdo (Sobre): Atualizada a seção `#sobre` com o novo H2 ("Um pouco sobre mim") e o novo texto biográfico autêntico da Karla.
[X] Conteúdo (FAQ): Seção `#faq` totalmente reescrita:
    * [X] Resposta da pergunta "Tempo" atualizada com o novo texto focado em "reservar o dia".
    * [X] Pergunta "Cuidados" removida e substituída por duas novas: "Cuidado com os Locs" e "Cuidado com as Tranças", com textos detalhados.
    * [X] Opção "cartão" removida da pergunta "Formas de pagamento".

--- (Concluídas em Sessões Anteriores - v1 a v8) ---
[X] Nova Seção: FAQ (Acordeão Semântico).
[X] UX (Carrossel Mobile de Depoimentos).
[X] SEO (Schema Review).
[X] SEO (Meta Tags OG & Twitter Cards).
[X] A11y (Links Externos).
[X] Performance (YouTube Preconnect).
[X] SEO (Favicon & Manifesto).
[X] Dados (WhatsApp & PIX).
[X] A11y (Skip Link).
[X] UI (Layout Navbar & Footer).
[X] UI (Bugs de Estilo & Refinamento - Botão Dourado, Botão Mobile, Cor Ícone Footer).
[X] UI (Efeito de Foco no FAQ).
[X] UI (Efeito Hover na Galeria).

---

🐞 Adiadas (Para Debug/Próxima Sessão)
[ ] **UI (Indicador de Scroll):** (Movido do Banco de Ideias).
    * **PROBLEMA:** A implementação do `script.js` (v4) quebrou a renderização do CSS.
    * **PLANO:** Depurar o `script.js` (v4) (lógica do `requestAnimationFrame`) após finalizarmos as tarefas do "Banco de Ideias".

---

🅿️ Adiadas (FINALIZAÇÃO DO PROJETO - ÚLTIMA ETAPA)
*(Por instrução direta do "Senhor", este bloco é a ÚLTIMA etapa do projeto, a ser feita apenas após todo o código estar 100% pronto e depurado).*

[ ] **PACOTE DE ATIVOS (FINALIZAÇÃO):**
    [ ] **Performance (Ativos de Imagem):**
        [ ] Otimizar (comprimir no Squoosh/TinyPNG) as 5 fotos reais.
        [ ] Otimizar (comprimir) as 8 thumbnails dos vídeos (tirar print e comprimir).
        [ ] Otimizar (comprimir) a foto da seção `#sobre` e `og:image`.
        [ ] Fazer upload de todas as imagens otimizadas para o GitHub (`/assets/img/`).
    [ ] **Conteúdo (Vídeos):**
        [ ] Fazer upload dos 8 arquivos .mp4 recebidos para o YouTube (ou Vimeo, se o YouTube falhar) para usarmos o "Padrão de Fachada".
    [ ] **Conteúdo (Substituição de Links):**
        [ ] Substituir os 13 `src` e `data-full-src` dos placeholders da galeria (`#catalogo`) pelos links reais (YouTube e imagens hospedadas).
        [ ] Substituir o `src` da foto `#sobre` pelo link real (`assets/img/foto-karla-perfil.jpg`).
        [ ] Substituir as meta tags `og:image` e `twitter:image` no `<head>` pela URL completa da Vercel (https://afrotunde.../assets/img/foto-karla-perfil.jpg).
    [ ] **A11y (Imagens):**
        [ ] Atualizar o `alt text` de todas as 13 thumbnails da galeria com descrições reais.

[ ] **Logo 3D:** Criar o logo (Búzio ou Duafe) no Blender e exportar como um vídeo .mp4.
[ ] **Fontes Locais:** Baixar os arquivos .woff2 (Cormorant Garamond e Inter) e auto-hospedar as fontes.
[ ] **Favicon:** Gerar os ícones (`favicon-32x32.png`, `apple-touch-icon.png`, etc.) a partir do logo final e colocá-los na pasta `assets/icons/`.

---

💡 Banco de Ideias (Próximas Sugestões)
[ ] **Automação (Notificação):** (Sua ideia) Usar `new Date()` no `script.js` para atualizar automaticamente o mês na barra de notificação (ex: "A agenda para [Próximo Mês] está aberta!").
[ ] **Performance (Font-Display: Swap):** Adicionar `&display=swap` na URL de importação do Google Fonts (CSS).
[ ] **A11y (Outline de Foco):** Customizar o `:focus-visible` no CSS para usar as cores do projeto.
[ ] **Performance (Impressão):** Adicionar um bloco `@media print` no `style.css` para limpar o site para impressão.

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
* (NOVO) LEMBRETE FINAL: Devo *sempre* lembrar o usuário de atualizar o DevLog no GitHub antes de finalizarmos a sessão, independentemente de qualquer coisa.
* **(NOVO) PRIORIDADE MÁXIMA (GEMINI):** A substituição dos ativos (fotos/vídeos) é a **ÚLTIMA TAREFA** do projeto. Se o usuário sugerir qualquer outra tarefa, devo sempre confirmar lembrando-o: "Entendido, senhor, mas lembre-se que os vídeos e fotos são a última prioridade para finalizar o projeto por completo."
