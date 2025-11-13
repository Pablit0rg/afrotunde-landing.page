🔱 Diário de Bordo - Afrotunde (Gemini, esta é nossa "Fonte da Verdade". Use este arquivo como sua "memória" e "manual de instruções" se o chat quebrar).

⚡ CONTEXTO DE SINCRONIZAÇÃO (IMPORTANTE)
* **Estado dos Arquivos (v7 estável):** `index.html` (v10), `style.css` (v8), `script.js` (v3 estável), `site.webmanifest` (v1).
* **Mudança de UI:** A barra de notificação (`.notification-bar`) no rodapé foi **removida**. Ela foi substituída por um parágrafo (`<p class="texto-agenda">`) na seção Hero (`#inicio`), abaixo do botão CTA.
* **Bug Crítico (JS):** Duas tentativas de atualizar o `script.js` (para v4) falharam.
    1.  A "Barra de Progresso" quebrou o CSS.
    2.  A "Automação da Agenda" (nossa última tentativa) também quebrou o CSS.
* **Ação Estratégica:** Estamos estrategicamente **pausando todo o desenvolvimento de JavaScript** para evitar mais quebras. Mantivemos o `script.js` (v3 estável). O `index.html` (v10) e `style.css` (v8) estão corretos. O texto da agenda está visível, mas **estático** (não automático).

---

🎯 Próximos Passos (To-Do)
* (Nenhuma tarefa imediata. O desenvolvimento de JS está em pausa estratégica).
* (Na próxima sessão, vamos focar apenas em tarefas de HTML/CSS do "Banco de Ideias").

---

✅ Concluídas (Nesta Sessão - v10)
[X] **Dados (WhatsApp & PIX):** (Movido do v9)
    * *Plano Concluído:* O número do PIX (`41992929516`) foi atualizado no `index.html`.
    * *Plano Concluído:* Os 2 links do WhatsApp (`#whatsapp-btn-hero` e `#whatsapp-btn`) foram atualizados com o número real (`wa.me/5541992929516`) e uma mensagem automática profissional.

[X] **A11y (Skip Link):** (Movido do v9)
    * *Plano Concluído:* Confirmado que o "Skip Link" (`.skip-link`) está funcionando corretamente (só aparece no `:focus` do teclado).

[X] **UI (Layout Navbar & Footer):** (Movido do v9)
    * *Plano Concluído:* Botões de tema (desktop e mobile) movidos para o início da `<nav>` no `index.html` (v7).
    * *Plano Concluído:* Ícone do Instagram no `footer` movido para *depois* do "@pablit0rg" no `index.html` (v7).

[X] **UI (Bugs de Estilo & Refinamento):** (Movido do v9)
    * *Plano Concluído (Bugfix):* Corrigida a regra CSS no `footer` (`style.css` v7) para que a cor oficial do Instagram (`--cor-instagram-icon`) se aplique *apenas* ao `.icon-instagram`.
    * *Plano Concluído (Refinamento):* Aumentado o tamanho do `#theme-toggle-mobile` no menu hamburger para `40px` (`style.css` v7).
    * *Plano Concluído (Refinamento):* Cor do botão de Tema (desktop e mobile) alterada para Dourado (`--cor-tema-toggle`) em ambos os temas (`style.css` v7).

[X] **UI (Efeito de Foco no FAQ):** (Movido do v9)
    * *Plano Concluído:* Adicionada regra CSS (`.faq-item[open] summary`) no `style.css` (v7) para que a pergunta mude para a cor de acento.

[X] **UI (Efeito Hover na Galeria):** (Movido do v9)
    * *Plano Concluído:* Adicionado `box-shadow` suave e `filter: saturate(1.1)` no hover dos `.card-servico` (`style.css` v8).

---

🐞 Adiadas (Para Debug/Próxima Sessão)
* (Instrução do Desenvolvedor: Paramos aqui. Estas tarefas serão re-tentadas em um novo chat para isolar o bug).

[ ] **Automação (Notificação da Agenda):**
    * **PROBLEMA:** A tentativa de implementar o `script.js` (v4) para automatizar o texto da agenda (`.texto-agenda`) falhou e quebrou a renderização do CSS.
    * **ESTADO:** O `script.js` (v3) estável foi restaurado.

[ ] **UI (Indicador de Scroll):**
    * **PROBLEMA:** A implementação original do `script.js` (v4) quebrou a renderização do CSS.
    * **ESTADO:** A lógica do `requestAnimationFrame` precisa ser depurada.

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
