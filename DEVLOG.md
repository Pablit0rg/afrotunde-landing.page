🔱 Diário de Bordo - Afrotunde
(Gemini, esta é nossa "Fonte da Verdade". Use este arquivo como sua "memória" e "manual de instruções" se o chat quebrar).

🎯 Próximos Passos (To-Do)
[ ] Performance (CSS): Implementar content-visibility: auto; nas seções #catalogo, #stats, #depoimentos e #contato para que o navegador não as renderize até que estejam perto da tela.

✅ Concluídas (Nesta Sessão)
Otimizações de SEO (Prioridade Alta)
[X] JSON-LD: Otimizado o <script> no <head> com image (logo) e areaServed: "CIC, Curitiba".

[X] Semântica (Jornada): Trocado os <h3> da seção "Números" por <div> para melhor semântica (números não são títulos).

[X] Acessibilidade (Botões): Adicionado aria-label nos botões de "Fechar" (Modal e Notificação) e no botão "Voltar ao Topo".

[X] Galeria (Vídeos): Confirmado que a galeria usará vídeos. As tarefas de otimização de <img> (alt, lazy-loading, etc.) foram removidas por não se aplicarem.

Features e Ajustes (Prioridade Média)
[X] Nova Seção: Criada a seção #sobre com a foto placeholder da Karla e o texto descritivo.

[X] Ajuste de Layout (Navbar): Corrigido o bug do ícone de Tema (Dark/Light) que ficava pequeno. A solução foi criar dois botões separados: #theme-toggle-desktop (visível no desktop) e #theme-toggle-mobile (dentro do menu hambúrguer).

[X] Ajuste (CSS): Texto da seção #sobre agora está com text-align: justify;.

[X] Ajuste (CSS): Cor do ícone do Instagram no footer foi verificada e está correta, usando a variável --cor-instagram-icon.

[X] Ajuste (CSS): Adicionada uma borda verde-oliva sutil (--cor-borda-notificacao) na barra de notificação (#notification-bar) para diferenciá-la dos CTAs.

[X] Pesquisa: Concluída a pesquisa sobre ferramentas de Logo 3D (Spline vs. Lottie vs. Blender).

Melhorias de UX e Acessibilidade (Premium)
[X] UX (Mobile): Invertida a ordem da seção #sobre no mobile (CSS) para que o texto apareça antes da imagem, melhorando a leitura.

[X] Acessibilidade (Modais): Implementado aria-hidden="true" no script.js para que leitores de tela foquem apenas no modal (Menu, Lightbox, Wpp) quando estiver aberto.

[X] Semântica (Footer): Trocada a tag <p class="desenvolvido-por"> pela tag <address> no index.html, que é a tag correta para os créditos do autor.

[X] Acessibilidade (Teclado): Implementado "Trap Focus" no script.js para "prender" a navegação via "Tab" dentro dos modais abertos.

[X] Estética (Scroll Spy): Implementado o menu de navegação ativo, que destaca (com sublinhado) a seção que o usuário está visualizando.

[X] UX (Galeria): Adicionada uma legenda (Caption) dinâmica no Lightbox, que puxa o <h4> (ex: "Tranças Nagô") do card clicado.

[X] Acessibilidade (Teclado): Adicionado o link "Pular para o conteúdo principal" (.skip-link) no topo do index.html (invisível até receber foco).

[X] Acessibilidade (Movimento): Implementado prefers-reduced-motion (CSS e JS) para desabilitar animações (fade-in, contadores) para usuários que solicitam movimento reduzido no S.O.

[X] UX (Footer): Adicionados os links de navegação (Início, Sobre, etc.) no rodapé para facilitar a navegação.

🅿️ Adiadas (Aguardando PC Pessoal)
(Tarefas que exigem downloads/softwares que o senhor não pode usar no PC da empresa)

[ ] Logo 3D: Criar o logo (Búzio ou Duafe) no Blender (opção gratuita) e exportar como um vídeo .mp4 curto para usar no site.

[ ] Fontes Locais: Baixar os arquivos .woff2 (Cormorant Garamond e Inter) e auto-hospedar as fontes na pasta assets/fonts para otimizar a performance (remover chamada ao Google Fonts).

💡 Banco de Ideias (Próximas Sugestões)
[ ] A11y (Imagens): Atualizar alt text das thumbnails da galeria quando a Karla enviar as fotos/vídeos reais (descrever a imagem).

[ ] Performance (JS): Usar "Event Delegation" na galeria (1 listener no .galeria-grid em vez de 8 nos cards).

[ ] UX (Vibração): Adicionar navigator.vibrate() nos botões de CTA/PIX (feedback tátil no mobile).

[ ] A11y (Links): Adicionar ícone de "link externo" e aria-label nos links que saem do site (Instagram, portfólio).

📜 Manual da Gemini (Nosso Workflow)
(Instruções para a IA Gemini manter o fluxo de trabalho do dev)

ENTREGA DE CÓDIGO: Sempre mandar os documentos (.html, .css, .js) completos, um por um.

COMANDO DE FLUXO: Aguardar o comando "próximo Gemini" do usuário antes de enviar o próximo arquivo.

EFICIÊNCIA: Se um arquivo não sofreu alteração, não o envie. Apenas avise: "O arquivo [nome.css] não sofreu alterações."

PADRÃO DE CÓDIGO: O código deve ser limpo, moderno e com blocos de comentários rápidos e objetivos ("sem encher linguiça").

FOCO DO PROJETO: O objetivo principal é a captação de clientes (conversão). O objetivo secundário é criar uma landing page premium (presente/portfólio) com estética de "Santuário Ori" (elegante, espiritual, afro).

"RE-SINCRONIZAÇÃO": O usuário usará este arquivo DEVLOG.md para me "re-sincronizar" em novos chats. Devo ler este manual e o To-Do para entender o estado atual do projeto.

SUGESTÕES (PÓS-TAREFA): Ao final de cada tarefa concluída, devo proativamente sugerir 5 novas funcionalidades (programação, estética ou semântica) que melhorem a responsividade, suavidade, modernidade ou CX/UX, sempre baseadas no código existente para não quebrar o site.

BÔNUS DE JS (PÓS-TAREFA): Juntamente com as 5 sugestões, devo sempre fornecer 5 exemplos de programação JavaScript moderna (leve, focada em performance mobile, carregamento rápido e estética "Santuário").