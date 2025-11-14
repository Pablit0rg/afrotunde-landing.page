# afrotunde-landing.page
🔱 Um "Santuário Digital" para uma Loctician (Ori/Iorubá), focado em converter visitantes em clientes. (HTML5, CSS3, JS).

# 🔱 Portal Afrotunde - Um Santuário Digital

Este repositório contém o código-fonte da landing page "Afrotunde", um projeto de portfólio desenvolvido para uma Loctician (artista de tranças e locs) em Curitiba.

## O Conceito: "Santuário Digital" 🏛️

O design foi além de um simples "site". O conceito principal é um **"Santuário Digital"** inspirado na espiritualidade **Ori (Iorubá)**.

O objetivo foi criar um ambiente digital premium, elegante e seguro, que refletisse o orgulho afro, a autoestima e a energia espiritual que a profissional oferece. Cada detalhe, das fontes `Cormorant Garamond` à paleta de cores (grafite e dourado), foi escolhido para gerar **confiança, autoridade e valor**.

## O Objetivo de Negócio: Captação de Clientes 📈

Apesar da estética de "santuário", o foco principal do projeto é 100% comercial: **captação (conversão) de clientes**.

Toda a estrutura foi pensada para guiar o usuário em uma jornada de 3 passos:
1.  **Gerar Desejo:** Através da galeria de vídeos/fotos (`#catalogo`).
2.  **Vencer a Dúvida:** Através da prova social (`#depoimentos`).
3.  **Converter:** Com CTAs (Call-to-Action) claros e o "Efeito Brilho" para levar o cliente ao agendamento via WhatsApp.

## 🛠️ Tecnologias e Features

Este projeto foi construído "do zero" (sem frameworks) para ser leve e rápido, usando:

* **HTML5 Semântico:** Estrutura limpa e otimizada para SEO (Google).
* **CSS3 Moderno:**
    * **Layout Responsivo (Mobile-First):** Perfeito em qualquer tela.
    * **CSS Grid** e **Flexbox** para alinhamento.
    * **Variáveis CSS (Custom Properties):** Para os temas Dark/Light.
    * **"Glassmorphism" (Vidro Fosco):** Efeito na `navbar` fixa.
    * **Micro-interações:** Efeito "brilho" nos botões e "pulso" nos links mobile (`:active`).
* **JavaScript Puro (Vanilla JS):**
    * Usado apenas para criar o menu hamburger "santuário" (que cobre a tela toda no mobile), garantindo uma naveção limpa e focada na "zona do polegar".

---
---

🔱 Diário de Bordo - Afrotunde (Gemini, esta é nossa "Fonte da Verdade". Use este arquivo como sua "memória" e "manual de instruções" se o chat quebrar).

⚡ CONTEXTO DE SINCRONIZAÇÃO (IMPORTANTE)
* **Estado dos Arquivos (v12 estável):** `index.html` (v27), `style.css` (v16), `script.js` (v6), `site.webmanifest` (v1).
* **Foco Atual:** Projeto 99% concluído. Foco na finalização e otimização de ativos.

---

🎯 Próximos Passos (To-Do)
* (Auto-promovido da Dica 2)
[ ] **Performance (Formato WebP):** Usar a tag `<picture>` no `index.html` para as imagens principais (ex: seção `#sobre`) para servir `.webp` com fallback `.jpg`.

---

✅ Concluídas (Nesta Sessão - v12)
[X] **Bug Fix (FAQ):** (v27)
    * *Plano Concluído:* O `index.html` (v27) foi corrigido, consertando o erro de digitação `classs="faq-item"` para `class="faq-item"`, restaurando as bordas do card "Cuidado com os Locs".
[X] **Conteúdo (Foto Principal):** (v26)
    * *Plano Concluído:* O `index.html` (v26) foi atualizado, substituindo a foto placeholder da modelo na seção `#sobre` pela foto real otimizada (`foto-karla-perfil.webp`).
    * *Plano Concluído:* Atualizadas as meta tags `og:image`, `twitter:image` e `alt` tags para refletir a nova imagem real.
[X] **Layout Galeria (Correção de Path):** (v25)
    * *Plano Concluído:* O `index.html` (v25) foi corrigido, consertando o `src` quebrado (`assets.img` -> `assets/img`) da imagem "Trança Nagô".
[X] **Layout Galeria (Re-priorização UX):** (v24)
    * *Plano Concluído:* O `index.html` (v24) foi atualizado para trocar a posição dos cards "Twist" (Foto) e "Manutenção" (Foto), melhorando a ordem de visualização.
[X] **Layout Galeria (Estratégia de Conversão):** (v23)
    * *Plano Concluído:* O `index.html` (v23) foi reordenado. Os 4 cards de Imagem (Fotos) agora aparecem *antes* dos 8 cards de Vídeo.
[X] **UI Galeria (Ajuste Fino das Thumbnails):** (v22-manual)
    * *Plano Concluído:* O `index.html` (base v22) foi atualizado pelo "Senhor" com os ajustes manuais de `object-position` (em porcentagem) para um enquadramento perfeito das thumbnails:
        * `Manutenção`: `72%`
        * `Gypsy Braids`: `20%`
        * `Twist`: `35%`
        * `Trança Nagô`: `62%`
[X] **Conteúdo Galeria (Novas Imagens):** (v17)
    * *Plano Concluído:* O `index.html` (v17) foi populado com as 4 novas imagens `.webp`.
[X] **Layout Galeria (Bug do Grid):** (v16)
    * *Plano Concluído:* O `style.css` (v16) foi atualizado, trocando `grid-template-columns: repeat(auto-fit, ...)` por `repeat(auto-fill, ...)`.
[X] **UX Mobile (Hint Carrossel Dinâmico):** (Dica 1)
    * *Plano Concluído:* O `script.js` (v6) foi atualizado.
    * *Plano Concluído:* O `style.css` (v14) foi atualizado.
    * *Plano Concluído:* Adicionada lógica JS (`onscroll`) que adiciona a classe `.is-scrolled-to-end`.
[X] **Performance (Refatorar Spinner):**
    * *Plano Concluído:* O `style.css` (v13) foi atualizado com um spinner de CSS puro.
[X] **UI (Correção Hover Galeria):**
    * *Plano Concluído:* O `style.css` (v12) foi atualizado para incluir `box-shadow` e `filter: saturate(1.1)` no hover do `.card-servico`.
[X] **A11y (Semântica dos Modais):**
    * *Plano Concluído:* O `index.html` (v12) foi atualizado com `role="dialog"`, `aria-modal="true"` e `aria-labelledby` nos modais.
[X] **Performance (Estilos de Impressão):**
    * *Plano Concluído:* Adicionado bloco `@media print` ao `style.css` (v11).
[X] **UX Mobile (Hint Carrossel Estático):**
    * *Plano Concluído:* Adicionado `mask-image` (gradiente) ao `style.css` (v10) no mobile.
[X] **UI (Indicador de Scroll):**
    * *Plano Concluído:* O `script.js` (v5-retry) foi implementado com `requestAnimationFrame` para controlar a barra `#scroll-bar`.
[X] **A11y (Outline de Foco):**
    * *Plano Concluído:* Adicionada regra global `:focus-visible` ao `style.css` (v9).
[X] **JS (Automação da Agenda):**
    * *Plano Concluído:* O `script.js` (v4-retry) agora automatiza o texto da agenda (`#texto-agenda`).

---

🐞 **RECUPERAÇÃO DE LAYOUT (NOTA DE ESTABILIDADE)**
*(Conforme solicitado pelo "Senhor", esta é a "trava de segurança" do layout da galeria v27)*

*Caso a galeria quebre em futuras edições, o layout "perfeito" (v27) depende de duas lógicas principais:*
1.  ***CSS (style.css v16):*** A regra `.galeria-grid` **DEVE** usar `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));`. O uso de `auto-fit` causará bugs visuais (cards esticados).
2.  ***HTML (index.html v27):*** As 4 imagens (`.is-image`) **DEVEM** conter o `style="object-position: center [X]%;"` com as porcentagens manuais definidas pelo "Senhor" para o enquadramento correto da thumbnail.

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
