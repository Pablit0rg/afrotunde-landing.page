🔱 Diário de Bordo - Afrotunde (Gemini, esta é nossa "Fonte da Verdade". Use este arquivo como sua "memória" e "manual de instruções" se o chat quebrar).

⚡ CONTEXTO DE SINCRONIZAÇÃO (IMPORTANTE) Os arquivos .css e .js que estavam neste Diário (v2) estavam desatualizados. O senhor forneceu os arquivos corretos (v3), que usam a "paleta terrosa" e têm seletores diferentes (ex: .card-servico, .modal-overlay). Estes arquivos v3 são agora a nossa Fonte da Verdade.

🎯 Próximos Passos (To-Do) [ ] A11y (Links): Adicionar ícone de "link externo" e aria-label nos links que saem do site (Instagram, portfólio). (Movido do Banco de Ideias).

✅ Concluídas (Nesta Sessão) [X] Sincronização (v3): Definidos os arquivos style.css (paleta terrosa) e script.js (v3) como a "Fonte da Verdade" oficial do projeto.

[X] Performance (JS): Usado "Event Delegation" na galeria. (Movido do To-Do / Identificado como completo na Sincronização v3).

Plano Concluído: Removidos os múltiplos listeners de .card-servico e adicionado um único listener no pai (.galeria-grid).

[X] UX (Spinner no Botão Hero): Corrigido o HTML do botão (adicionado <span class="btn-text">) para o spinner de loading funcionar corretamente. (Movido do Banco de Ideias / Identificado como completo na Sincronização v3).

[X] UX (Vibração Tátil): Implementado navigator.vibrate(50) (com verificação de prefers-reduced-motion) nos botões de ação (CTAs, modais, menu, etc.) no script.js (v3).

[X] Performance (CSS): Implementado content-visibility: auto; nas seções #sobre, #catalogo, #stats, #depoimentos e #contato no style.css (v3).

[X] Debug (JS): Corrigidos seletores de notificação no script.js (v3) (.notification-bar e .close-notification) que estavam desalinhados com o style.css (v3).

--- (Concluídas em Sessões Anteriores) --- [X] JSON-LD: Otimizado o <script> no <head> com image (logo) e areaServed: "CIC, Curitiba". [X] Semântica (Jornada): Trocado os <h3> da seção "Números" por <div>. [X] Acessibilidade (Botões): Adicionado aria-label nos botões de "Fechar" (Modal e Notificação) e no botão "Voltar ao Topo". [X] Galeria (Vídeos): Confirmado que a galeria usará vídeos. [X] Nova Seção: Criada a seção #sobre com a foto placeholder da Karla e o texto descritivo. [X] Ajuste de Layout (Navbar): Corrigido o bug do ícone de Tema (Dark/Light). [X] Ajuste (CSS): Texto da seção #sobre agora está com text-align: justify;. [X] Ajuste (CSS): Cor do ícone do Instagram no footer foi verificada (v2). [X] Ajuste (CSS): Adicionada uma borda verde-oliva sutil na barra de notificação (v2). [X] Pesquisa: Concluída a pesquisa sobre ferramentas de Logo 3D (Spline vs. Lottie vs. Blender). [X] UX (Mobile): Invertida a ordem da seção #sobre no mobile (CSS). [X] Acessibilidade (Modais): Implementado aria-hidden="true" no script.js. [X] Semântica (Footer): Trocada a tag <p class="desenvolvido-por"> pela tag <address>. [X] Acessibilidade (Teclado): Implementado "Trap Focus" no script.js. [X] Estética (Scroll Spy): Implementado o menu de navegação ativo. [X] UX (Galeria): Adicionada uma legenda (Caption) dinâmica no Lightbox. [X] Acessibilidade (Teclado): Adicionado o link "Pular para o conteúdo principal" (.skip-link). [X] Acessibilidade (Movimento): Implementado prefers-reduced-motion (CSS e JS). [X] UX (Footer): Adicionados os links de navegação (Início, Sobre, etc.) no rodapé.

🅿️ Adiadas (Aguardando PC Pessoal) (Tarefas que exigem downloads/softwares que o senhor não pode usar no PC da empresa)

[ ] Logo 3D: Criar o logo (Búzio ou Duafe) no Blender (opção gratuita) e exportar como um vídeo .mp4 curto para usar no site. [ ] Fontes Locais: Baixar os arquivos .woff2 (Cormorant Garamond e Inter) e auto-hospedar as fontes na pasta assets/fonts para otimizar a performance (remover chamada ao Google Fonts).

💡 Banco de Ideias (Próximas Sugestões) [ ] A11y (Imagens): Atualizar alt text das thumbnails da galeria quando a Karla enviar as fotos/vídeos reais (descrever a imagem). [ ] Estética (Indicador de Scroll): Criar uma barra de progresso de leitura no topo.

📜 Manual da Gemini (Nosso Workflow) (Instruções para a IA Gemini manter o fluxo de trabalho do dev)

ENTREGA DE CÓDIGO: Sempre mandar os documentos (.html, .css, .js) completos, um por um. COMANDO DE FLUXO: Aguardar o comando "próximo Gemini" do usuário antes de enviar o próximo arquivo. EFICIÊNCIA: Se um arquivo não sofreu alteração, não o envie. Apenas avise: "O arquivo [nome.css] não sofreu alterações." PADRÃO DE CÓDIGO: O código deve ser limpo, moderno e com blocos de comentários rápidos e objetivos ("sem encher linguiça"). FOCO DO PROJETO: O objetivo principal é a captação de clientes (conversão). O objetivo secundário é criar uma landing page premium (presente/portfólio) com estética de "Santuário Ori" (elegante, espiritual, afro). "RE-SINCRONIZAÇÃO": O usuário usará este arquivo DEVLOG.md para me "re-sincronizar" em novos chats. Devo ler este manual e o To-Do para entender o estado atual do projeto. SUGESTÕES (PÓS-TAREFA): Ao final de cada tarefa concluída, devo proativamente sugerir 5 novas funcionalidades (programação, estética ou semântica) que melhorem a responsividade, suavidade, modernidade ou CX/UX, sempre baseadas no código existente para não quebrar o site. BÔNUS DE JS (PÓS-TAREFA): Juntamente com as 5 sugestões, devo sempre fornecer 5 exemplos de programação JavaScript moderna (leve, focada em performance mobile, carregamento rápido e estética "Santuário").
