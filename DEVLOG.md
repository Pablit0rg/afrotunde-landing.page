# 🔱 Diário de Bordo - Afrotunde

(Gemini, esta é nossa "Fonte da Verdade". Use este arquivo 
como sua "memória" e "manual de instruções" se o chat quebrar).

## 🎯 Próximos Passos (To-Do)

### 1. Otimizações de SEO (Prioridade Alta)
* [ ] Substituir os `div` da galeria por tags `<img>` (SEO de Imagem).
* [ ] Adicionar `alt` (texto alternativo) descritivo em todas as 8 imagens da galeria.
* [ ] Mudar o `h4` da galeria para descrever o serviço (ex: "Tranças Nagô").
* [ ] Adicionar `loading="lazy"` em todas as `<img>` da galeria.
* [ ] Otimizar o JSON-LD (`script`) no `<head>`:
    * [ ] Adicionar a `image` (logo).
    * [ ] Adicionar o `areaServed`: "CIC, Curitiba".
* [ ] Trocar `<h3>` dos "Números" (Jornada) por `<div>`.
* [ ] Adicionar `aria-label` nos botões (Modal, Voltar ao Topo, Notificação).

### 2. Novas Features e Ajustes (Prioridade Média)
* [ ] **(Novo)** Criar nova seção `#sobre` com foto e texto da Karla (para gerar confiança e humanizar a marca).
* [ ] **(Novo)** CSS: Mudar a cor do ícone do Instagram no footer para a cor oficial (`#E1306C`).
* [ ] **(Novo)** CSS: Adicionar uma borda verde sutil (`border: 2px solid #00FF00;` - *cor a definir*) na barra de notificação (`#notification-bar`) para diferenciá-la dos botões de CTA.
* [ ] **(Novo)** Pesquisar ferramenta de Logo 3D (Spline, Blender, etc.).

### 3. Lembretes Futuros (Baixa Prioridade)
* [ ] **IMPORTANTE:** Quando a Karla se mudar para o **Centro**, atualizar o JSON-LD (`areaServed` e `streetAddress`).
* [ ] Substituir o `[SEU_LINK_WHATSAPP_AQUI]` pelo link real da Karla.
* [ ] Substituir os 8 placeholders da galeria por fotos reais.

### 4. Bugs
* [ ] Nenhum no momento.

---

## 📜 Manual da Gemini (Nosso Workflow)

(Instruções para a IA Gemini manter o fluxo de trabalho do dev)

1.  **ENTREGA DE CÓDIGO:** Sempre mandar os documentos (`.html`, `.css`, `.js`) completos, um por um.
2.  **COMANDO DE FLUXO:** Aguardar o comando "próximo Gemini" do usuário antes de enviar o próximo arquivo.
3.  **EFICIÊNCIA:** Se um arquivo não sofreu alteração, não o envie. Apenas avise: "O arquivo [nome.css] não sofreu alterações."
4.  **PADRÃO DE CÓDIGO:** O código deve ser limpo, moderno e com blocos de comentários rápidos e objetivos ("sem encher linguiça").
5.  **FOCO DO PROJETO:** O objetivo principal é a **captação de clientes (conversão)**. O objetivo secundário é criar uma landing page **premium** (presente/portfólio) com estética de "Santuário Ori" (elegante, espiritual, afro).
6.  **"RE-SINCRONIZAÇÃO":** O usuário usará este arquivo `DEVLOG.md` para me "re-sincronizar" em novos chats. Devo ler este manual e o `To-Do` para entender o estado atual do projeto.
7.  **SUGESTÕES (PÓS-TAREFA):** Ao final de *cada* tarefa concluída, devo proativamente sugerir 5 novas funcionalidades (programação, estética ou semântica) que melhorem a responsividade, suavidade, modernidade ou CX/UX, sempre baseadas no código existente para não quebrar o site.
8.  **BÔNUS DE JS (PÓS-TAREFA):** Juntamente com as 5 sugestões, devo sempre fornecer 5 exemplos de programação JavaScript moderna (leve, focada em performance mobile, carregamento rápido e estética "Santuário").