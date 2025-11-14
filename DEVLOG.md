🔱 Diário de Bordo - Afrotunde (Gemini, esta é nossa "Fonte da Verdade". Use este arquivo como sua "memória" e "manual de instruções" se o chat quebrar).

⚡ CONTEXTO DE SINCRONIZAÇÃO (IMPORTANTE)
* **Estado dos Arquivos (v11 estável):** `index.html` (v18), `style.css` (v15 - Bugado), `script.js` (v6).
* **Progresso dos Ativos:** Os 8 links de vídeo `data-full-src` foram inseridos no `index.html (v18)`.
* **Bug Crítico (Layout):** O layout da galeria (`#catalogo`) está quebrado **apenas** para os cards de imagem (Cards 9-13). Eles estão 'colados' e 'desproporcionais', sem altura definida (250px) após a remoção das `<img>` (placeholders).
* **Ação Estratégica (Instrução do Senhor):** Estamos iniciando um novo chat para isolar este bug de CSS, pois o chat atual pode estar "sobrecarregado".

---

🎯 Próximos Passos (To-Do)
[ ] **(NOVA PRIORIDADE MÁXIMA) Correção de Layout (Cards de Imagem):**
    * **PROBLEMA:** Os cards de imagem (9-13) estão com tamanho desproporcional (sem altura) e "grudados", quebrando o grid. Isso ocorreu porque o `style.css (v15)` falhou em aplicar a altura e a cor de fundo (placeholder) aos `.card-video-thumb` que também possuem a classe `.is-image`.
    * **AÇÃO:** Modificar o `style.css` para forçar a altura (`height: 250px`) e o `background-color` (placeholder) no `.card-video-thumb` de **todos** os 13 cards, incluindo os `.is-image`.
    * **PROIBIDO (Instrução do Senhor):** É estritamente proibido alterar o HTML ou CSS dos cards de vídeo (1-8) ou os links de vídeo já inseridos. Eles estão perfeitos e não podem ser mexidos.
    * **OBJETIVO:** Fazer esta correção de layout levará o projeto a 99.9% de conclusão.

---

✅ Concluídas (Nesta Sessão - v14)
[X] **PACOTE DE ATIVOS (Parcial): Links dos Vídeos (Cards 1-8):**
    * *Plano Concluído (Quebra de Protocolo):* A pedido do Senhor, a etapa final de ativos foi adiantada.
    * *Plano Concluído:* Os 8 títulos e 8 links de vídeo (`watch?v=...`) foram inseridos no `index.html (v18)`.
    * *Plano Concluído:* As 8 `<img>` tags (placeholders) dos cards de vídeo foram removidas.
    * *Plano Concluído:* Um `ASSETS.md` foi criado no GitHub para inventariar os links.
    * *Plano Concluído (Teste):* O teste com o link "Não listado" foi bem-sucedido na Vercel.

[X] **UX Mobile (Hint Carrossel Dinâmico):**
    * *Plano Concluído:* `script.js` (v6) e `style.css` (v14) adicionam a classe `.is-scrolled-to-end` para remover dinamicamente a `mask-image` no scroll.

[X] **Performance (Refatorar Spinner):**
    * *Plano Concluído:* Removido `<symbol id="icon-spinner">` do `index.html` (v13) e substituído por `<span class="spinner">`.
    * *Plano Concluído:* Atualizado `style.css` (v13) com animação CSS pura.

[X] **UI (Correção Hover Galeria):**
    * *Plano Concluído:* `style.css` (v12) atualizado com `box-shadow` e `filter: saturate(1.1)` no hover do `.card-servico`.

[X] **A11y (Semântica dos Modais):**
    * *Plano Concluído:* `index.html` (v12) atualizado com `role="dialog"`, `aria-modal="true"` e `aria-labelledby` nos modais.

[X] **Performance (Estilos de Impressão):**
    * *Plano Concluído:* Adicionado bloco `@media print` ao `style.css` (v11).

[X] **UX Mobile (Hint Carrossel Estático):**
    * *Plano Concluído:* Adicionado `.depoimentos-wrapper` ao `index.html` (v11) e `mask-image` ao `style.css` (v10).

[X] **UI (Indicador de Scroll):**
    * *Plano Concluído:* `script.js` (v5-retry) implementado com `requestAnimationFrame` para `#scroll-bar`.

[X] **A11y (Outline de Foco):**
    * *Plano Concluído:* Adicionada regra `:focus-visible` ao `style.css` (v9).

[X] **JS (Automação da Agenda):**
    * *Plano Concluído:* `script.js` (v4-retry) agora automatiza o `#texto-agenda`.

---

🅿️ Adiadas (FINALIZAÇÃO DO PROJETO - ÚLTIMA ETAPA)
*(O DEVLOG foi atualizado. Esta é a nova lista de pendências)*

[ ] **PACOTE DE ATIVOS (FINALIZAÇÃO):**
    [ ] **Performance (Ativos de Imagem):**
        [ ] Otimizar (comprimir no Squoosh) as 8 thumbnails dos vídeos (prints `.webp`).
        [ ] Otimizar (comprimir no Squoosh) as 5 fotos reais (`.webp`).
        [ ] Fazer upload de todas as 13 imagens `.webp` para o GitHub (`/assets/img/`).
    [ ] **Conteúdo (Substituição de Links):**
        [ ] (Após correção do layout) Inserir as 13 tags `<img>` (atualmente removidas) com os links `.webp` otimizados.
        [ ] Substituir os 5 `data-full-src` das fotos (Cards 9-13) pelos links `.webp` otimizados.
        [ ] Substituir o `src` da foto `#sobre` pelo link real (`.webp`).
        [ ] Substituir as meta tags `og:image` e `twitter:image` no `<head>` pela URL completa da Vercel.
    [ ] **A11y (Imagens):**
        [ ] Atualizar o `alt text` de todas as 13 thumbnails da galeria com descrições reais.

[ ] **Logo 3D:** Criar o logo (Búzio ou Duafe) no Blender e exportar como um vídeo .mp4.
[ ] **Fontes Locais:** Baixar os arquivos .woff2 (Cormorant Garamond e Inter) e auto-hospedar as fontes.
[ ] **Favicon:** Gerar os ícones (`favicon-32x32.png`, `apple-touch-icon.png`, etc.) a partir do logo final e colocá-los na pasta `assets/icons/`.

---

💡 Banco de Ideias (Próximas Sugestões)
[ ] **Performance (Formato WebP):** (Movido de volta para o banco de ideias, já que estamos focando nos ativos primeiro).
[ ] **Refatoração JS (DRY WhatsApp):** Usar uma classe comum (`.whatsapp-trigger`) para os botões de agendamento e otimizar o `script.js`.
[ ] **Refatoração JS (Intl.DateTimeFormat):** Modernizar a lógica da agenda no `script.js` para usar a API `Intl`.
[ ] **UX (Scroll Suave JS):** Implementar `scrollIntoView({ behavior: 'smooth' })` no JS para o botão "Voltar ao Topo".

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
