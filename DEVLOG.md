🔱 Diário de Bordo - Afrotunde (Gemini, esta é nossa "Fonte da Verdade". Use este arquivo como sua "memória" e "manual de instruções" se o chat quebrar).

⚡ CONTEXTO DE SINCRONIZAÇÃO (IMPORTANTE)
* **Estado dos Arquivos (v10 estável):** `index.html` (v13), `style.css` (v14), `script.js` (v6), `site.webmanifest` (v1).
* **Foco Atual:** Refinamento de performance, UX Mobile e refatoração de código limpo.

---

🎯 Próximos Passos (To-Do)
* (Auto-promovido da Dica 2)
[ ] **Performance (Formato WebP):** Usar a tag `<picture>` no `index.html` para as imagens principais (ex: seção `#sobre`) para servir `.webp` com fallback `.jpg`.

---

✅ Concluídas (Nesta Sessão - v13)
[X] **UX Mobile (Hint Carrossel Dinâmico):** (Dica 1)
    * *Plano Concluído:* O `script.js` (v6) foi atualizado.
    * *Plano Concluído:* O `style.css` (v14) foi atualizado.
    * *Plano Concluído:* Adicionada lógica JS (`onscroll`) que adiciona a classe `.is-scrolled-to-end` ao `.depoimentos-wrapper` quando o scroll horizontal termina.
    * *Plano Concluído:* A classe `.is-scrolled-to-end` agora remove o `mask-image`, dando feedback de "fim do conteúdo".

[X] **Performance (Refatorar Spinner):**
    * *Plano Concluído:* Removido o `<symbol id="icon-spinner">` do `index.html` (v13).
    * *Plano Concluído:* Substituído o `<svg class="spinner">` por `<span class="spinner">`.
    * *Plano Concluído:* Atualizado o `style.css` (v13) com uma animação de `border` (CSS puro) para o `.spinner`.

[X] **UI (Correção Hover Galeria):**
    * *Plano Concluído:* O `style.css` (v12) foi atualizado para incluir `box-shadow` e `filter: saturate(1.1)` no hover do `.card-servico`, conforme planejado no DEVLOG v8.

[X] **A11y (Semântica dos Modais):**
    * *Plano Concluído:* O `index.html` (v12) foi atualizado com `role="dialog"`, `aria-modal="true"` e `aria-labelledby` nos modais.
    * *Plano Concluído:* Adicionados IDs (`#lightbox-titulo`, `#modal-titulo-wpp`) aos títulos dos modais.

[X] **Performance (Estilos de Impressão):**
    * *Plano Concluído:* Adicionado bloco `@media print` ao `style.css` (v11) para otimizar a impressão (focada no FAQ).

[X] **UX Mobile (Hint Carrossel Estático):**
    * *Plano Concluído:* Adicionado `.depoimentos-wrapper` ao `index.html` (v11).
    * *Plano Concluído:* Adicionado `mask-image` (gradiente) ao `style.css` (v10) no mobile.

[X] **UI (Indicador de Scroll):**
    * *Plano Concluído:* O `script.js` (v5-retry) foi implementado com `requestAnimationFrame` para controlar a barra `#scroll-bar`.

[X] **A11y (Outline de Foco):**
    * *Plano Concluído:* Adicionada regra global `:focus-visible` ao `style.css` (v9) usando a paleta do projeto.

[X] **JS (Automação da Agenda):**
    * *Plano Concluído:* O `script.js` (v4-retry) agora automatiza o texto da agenda (`#texto-agenda`).

[X] **Performance (Font-Display: Swap):**
    * *Plano Concluído:* Verificado que o `style.css` já continha `&display=swap`.

[X] **Dados (WhatsApp & PIX):**
    * *Plano Concluído:* Links de WhatsApp e PIX atualizados no `index.html` (v10).

[X] **UI (Refinamentos v7/v8):**
    * *Plano Concluído:* Layout da Navbar/Footer, cores de ícones (Instagram/Tema) e hover do FAQ (`.faq-item[open] summary`) implementados.

---

🐞 Adiadas (Bugs Conhecidos)
* (Nenhum bug ativo. As implementações de JS v4-v6 precisam de teste de estabilidade).

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
    [D] **Conteúdo (Substituição de Links):**
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
[ ] **Refatoração JS (DRY WhatsApp):** Usar uma classe comum (`.whatsapp-trigger`) para os botões de agendamento e otimizar o `script.js`.
[ ] **Refatoração JS (Intl.DateTimeFormat):** Modernizar a lógica da agenda no `script.js` para usar a API `Intl` em vez de um array de meses.
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
