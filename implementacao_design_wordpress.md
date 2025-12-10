# Implementação do Design e Funcionalidades no WordPress

Este documento complementa o guia de configuração do WordPress, fornecendo instruções detalhadas para implementar o design e as funcionalidades específicas do site "Vozes da Amazônia" usando o Elementor e plugins recomendados.

## 1. Preparação do Ambiente Elementor

### Configuração Inicial do Elementor

1. **Instalar Elementor Pro (versão gratuita):**
   - Acesse "Plugins" > "Adicionar novo"
   - Pesquise por "Elementor"
   - Instale e ative o plugin

2. **Configurar Opções do Elementor:**
   - Vá para "Elementor" > "Configurações"
   - Na aba "Geral", ative "Modo de Depuração" durante o desenvolvimento
   - Em "Avançado", ative "Editor em Tela Cheia" para melhor experiência de edição

3. **Importar Modelos Personalizados:**
   - Vá para "Modelos" > "Adicionar Novo"
   - Crie modelos para elementos reutilizáveis como:
     - Header com logo e menu
     - Footer com informações de contato e redes sociais
     - Card de episódio
     - Seção de entrevistados

## 2. Implementação da Página Inicial

### Seção Hero

1. **Criar Seção Hero:**
   - Edite a página "Início" com Elementor
   - Adicione uma seção de largura completa com fundo verde (#2A5E41)
   - Configure um overlay de imagem com opacidade 30%
   - Estrutura: 1 coluna

2. **Adicionar Conteúdo Hero:**
   - Adicione um widget "Título" com o texto "Levando a ciência da Amazônia para todos"
   - Configure: fonte Montserrat, tamanho 48px, cor branca, alinhamento centralizado
   - Adicione um widget "Texto" com "Democratizando o conhecimento ambiental através de ferramentas audiovisuais"
   - Configure: fonte Roboto, tamanho 20px, cor branca, alinhamento centralizado
   - Adicione dois botões lado a lado:
     - "Ouça os Episódios" (cor #F7A239)
     - "Siga no Spotify" (cor #1DB954)

### Seção Player do Spotify

1. **Criar Seção Player:**
   - Adicione uma nova seção com fundo branco
   - Estrutura: 1 coluna
   - Adicione espaçamento de 80px no topo e na base

2. **Adicionar Player:**
   - Adicione um widget "Título" com "Ouça o Episódio Mais Recente"
   - Configure: fonte Montserrat, tamanho 32px, cor #2A5E41, alinhamento centralizado
   - Adicione um widget "HTML" e insira o código de incorporação do Spotify:
   ```html
   <iframe src="https://open.spotify.com/embed/show/2Y2vYvanpFxCKpyxnQpubC" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
   ```
   - Defina largura máxima de 800px e centralize

### Seção Métricas

1. **Criar Seção Métricas:**
   - Adicione uma nova seção com fundo verde (#2A5E41)
   - Estrutura: 3 colunas
   - Adicione espaçamento de 40px no topo e na base

2. **Adicionar Métricas:**
   - Em cada coluna, adicione:
     - Widget "Contador" com os valores (25+, 2, 800+)
     - Configure: fonte Montserrat, tamanho 48px, cor #F7A239
     - Adicione um widget "Texto" abaixo com os rótulos (Episódios, Temporadas, Ouvintes)
     - Configure: fonte Roboto, tamanho 18px, cor branca, transformação para maiúsculas

### Seção Episódios Recentes

1. **Criar Seção Episódios:**
   - Adicione uma nova seção com fundo branco
   - Estrutura: 1 coluna para o título, seguida de 3 colunas para os cards
   - Adicione espaçamento de 80px no topo e na base

2. **Adicionar Título da Seção:**
   - Adicione um widget "Título" com "Episódios Recentes"
   - Configure: fonte Montserrat, tamanho 32px, cor #2A5E41, alinhamento centralizado
   - Adicione margem inferior de 40px

3. **Criar Cards de Episódios:**
   - Para cada coluna, crie um card com:
     - Widget "Imagem" para a capa do episódio
     - Widget "Título" para o nome do episódio (fonte Montserrat, 24px)
     - Widget "Texto" para a tagline (fonte Roboto, itálico)
     - Widget "Lista de Ícones" para os destaques
     - Widget "Botão" para "Ouça no Spotify"
   - Aplique sombra suave e efeito hover

4. **Adicionar Botão "Ver Todos":**
   - Abaixo dos cards, adicione uma nova coluna
   - Adicione um widget "Botão" com "Ver Todos os Episódios"
   - Configure: cor #2A5E41, centralizado, margem superior de 30px

### Seção CTA Redes Sociais

1. **Criar Seção CTA:**
   - Adicione uma nova seção com fundo verde claro (#A4C86B)
   - Estrutura: 1 coluna
   - Adicione espaçamento de 80px no topo e na base

2. **Adicionar Conteúdo CTA:**
   - Adicione um widget "Título" com "Acompanhe o Vozes da Amazônia"
   - Configure: fonte Montserrat, tamanho 32px, cor #2A5E41
   - Adicione um widget "Texto" com "Fique por dentro de todos os episódios e novidades"
   - Adicione dois botões lado a lado:
     - "Siga no Spotify" com ícone do Spotify (cor #1DB954)
     - "Siga no Instagram" com ícone do Instagram (cor #E1306C)

### Seção Newsletter

1. **Criar Seção Newsletter:**
   - Adicione uma nova seção com fundo cinza claro (#F5F5F5)
   - Estrutura: 1 coluna
   - Adicione espaçamento de 60px no topo e na base

2. **Adicionar Formulário:**
   - Adicione um widget "Título" com "Receba Novidades"
   - Configure: fonte Montserrat, tamanho 28px, cor #2A5E41
   - Adicione um widget "Texto" com "Inscreva-se para receber atualizações sobre novos episódios e eventos"
   - Adicione um widget "Formulário" do WPForms (crie previamente um formulário simples de newsletter)
   - Estilize o formulário com cores da identidade visual

## 3. Implementação da Página de Episódios

### Seção Banner

1. **Criar Banner:**
   - Adicione uma seção de largura completa
   - Configure fundo com cor ou imagem relacionada a podcast
   - Adicione um widget "Título" com "Episódios"
   - Adicione um widget "Texto" com "Conheça todos os episódios do podcast Vozes da Amazônia"

### Seção Filtros

1. **Criar Filtros:**
   - Adicione uma nova seção
   - Adicione um widget "Título" com "Filtrar Episódios"
   - Adicione widgets "Botão" para filtros: "Todos", "1ª Temporada", "2ª Temporada"
   - Adicione um widget "Pesquisa" para busca de episódios

2. **Configurar Funcionalidade de Filtro:**
   - Instale o plugin "Essential Addons for Elementor"
   - Use o widget "Filterable Gallery" para criar a galeria filtrável
   - Ou use JavaScript personalizado para implementar a funcionalidade

### Seção Lista de Episódios

1. **Criar Grid de Episódios:**
   - Adicione uma nova seção
   - Use o widget "Posts" ou "Portfolio" do Elementor para criar uma grade
   - Ou crie manualmente com estrutura de 1 coluna por card (para layout de lista)
   - Configure cada card com:
     - Imagem do episódio
     - Título e tagline
     - Data e duração
     - Descrição
     - Destaques
     - Botões de ação

2. **Adicionar Paginação:**
   - Abaixo da grade, adicione um widget "Paginação"
   - Estilize conforme a identidade visual

### Seção Entrevistados

1. **Criar Seção Entrevistados:**
   - Adicione uma nova seção com fundo diferenciado
   - Adicione um widget "Título" com "Conheça os Entrevistados"
   - Adicione um widget "Texto" com descrição

2. **Criar Grid de Entrevistados:**
   - Estrutura: 3 colunas
   - Para cada coluna, adicione:
     - Widget "Imagem" para foto do entrevistado
     - Widget "Título" para nome
     - Widget "Texto" para cargo/instituição
     - Widget "Texto" para mini-bio
     - Widget "Botão" para "Ver Episódios"

### Seção Próxima Temporada

1. **Criar Seção Próxima Temporada:**
   - Adicione uma nova seção com destaque visual
   - Adicione um widget "Título" com "Em Breve: 3ª Temporada"
   - Adicione um widget "Subtítulo" com "Vozes da Amazônia: Ciência e Saberes em Diálogo"
   - Adicione um widget "Texto" com descrição da nova temporada
   - Adicione um widget "Botão" para inscrição de notificações

## 4. Implementação da Página Sobre

### Seção Banner

1. **Criar Banner:**
   - Siga o mesmo padrão das outras páginas
   - Título: "Sobre o Podcast"
   - Subtítulo: "Conheça a história e a missão do Vozes da Amazônia"

### Seção Quem Somos

1. **Criar Seção Quem Somos:**
   - Estrutura: 2 colunas (40% / 60%)
   - Coluna 1: Widget "Imagem" com logo ou foto do criador
   - Coluna 2:
     - Widget "Título" com "Quem Somos"
     - Widget "Subtítulo" com "Danilo Sena"
     - Widget "Texto" com descrição do criador e do projeto

### Seção Equipe

1. **Criar Seção Equipe:**
   - Adicione um widget "Título" com "Nossa Equipe"
   - Estrutura: 3 colunas
   - Para cada membro, adicione:
     - Widget "Imagem" para foto
     - Widget "Título" para nome
     - Widget "Texto" para função

### Seção Missão

1. **Criar Seção Missão:**
   - Adicione uma seção com fundo diferenciado
   - Adicione um widget "Título" com "Nossa Missão"
   - Adicione widgets "Texto" com os parágrafos sobre a missão

### Seção Contribuições Acadêmicas

1. **Criar Seção Contribuições:**
   - Adicione um widget "Título" com "Contribuições Acadêmicas"
   - Adicione um widget "Texto" com introdução
   - Estrutura: 3 colunas ou lista de ícones
   - Para cada contribuição, adicione:
     - Ícone relacionado (graduação, prêmio, etc.)
     - Título da contribuição
     - Descrição

### Seção Temporadas

1. **Criar Seção Temporadas:**
   - Adicione um widget "Título" com "Nossas Temporadas"
   - Estrutura: 3 colunas
   - Para cada temporada, crie um card com:
     - Número da temporada em destaque
     - Título da temporada
     - Descrição
     - Lista de características

### Seção Impacto

1. **Criar Seção Impacto:**
   - Adicione um widget "Título" com "Nosso Impacto"
   - Repita o padrão de métricas da página inicial
   - Adicione widgets "Texto" com descrição do impacto

## 5. Implementação da Página de Contato

### Seção Formulário e Informações

1. **Criar Layout de Duas Colunas:**
   - Estrutura: 2 colunas (60% / 40%)
   - Coluna 1: Formulário de contato
   - Coluna 2: Informações de contato

2. **Configurar Formulário:**
   - Adicione um widget "Título" com "Formulário de Contato"
   - Adicione um widget "Formulário" do WPForms
   - Configure campos: Nome, E-mail, Assunto, Mensagem
   - Estilize conforme identidade visual

3. **Adicionar Informações de Contato:**
   - Adicione um widget "Título" com "Informações de Contato"
   - Adicione widgets "Ícone + Texto" para:
     - E-mail
     - Universidade
     - Plataformas
   - Adicione widgets "Ícones Sociais" para redes sociais

### Seção Sugestões de Temas

1. **Criar Seção Sugestões:**
   - Adicione uma nova seção
   - Adicione um widget "Título" com "Sugestões de Temas"
   - Adicione um widget "Texto" com descrição
   - Adicione um widget "Formulário" do WPForms
   - Configure campos específicos para sugestões de temas

### Seção Colaboração Acadêmica

1. **Criar Seção Colaboração:**
   - Adicione uma nova seção com fundo diferenciado
   - Adicione um widget "Título" com "Colaboração Acadêmica"
   - Adicione um widget "Texto" com descrição
   - Estrutura: 3 colunas
   - Para cada opção, adicione:
     - Ícone relacionado
     - Título
     - Descrição
     - Botão de ação

### Seção FAQ

1. **Criar Seção FAQ:**
   - Adicione uma nova seção
   - Adicione um widget "Título" com "Perguntas Frequentes"
   - Adicione um widget "Acordeão" ou "Toggle"
   - Configure perguntas e respostas
   - Estilize conforme identidade visual

## 6. Implementação da Página de Eventos

### Seção Próximos Webinars

1. **Criar Seção Próximos Webinars:**
   - Adicione um widget "Título" com "Próximos Webinars"
   - Para cada webinar, crie um card com:
     - Imagem relacionada ao tema
     - Data e horário
     - Título do webinar
     - Descrição
     - Informações dos palestrantes
     - Botões de ação (Inscreva-se, Adicionar ao Calendário, Compartilhar)

### Seção Formulário de Inscrição

1. **Criar Seção Inscrição:**
   - Adicione uma seção com fundo diferenciado
   - Adicione um widget "Título" com "Inscreva-se para os Webinars"
   - Adicione um widget "Texto" com descrição
   - Adicione um widget "Formulário" do WPForms
   - Configure campos específicos para inscrição em webinars

### Seção Webinars Anteriores

1. **Criar Seção Webinars Anteriores:**
   - Adicione um widget "Título" com "Webinars Anteriores"
   - Adicione um widget "Texto" com descrição
   - Estrutura: 3 colunas
   - Para cada webinar passado, crie um card com:
     - Imagem
     - Data
     - Título
     - Descrição breve
     - Botão "Assistir Gravação"

### Seção Eventos Acadêmicos

1. **Criar Seção Eventos Acadêmicos:**
   - Adicione um widget "Título" com "Eventos Acadêmicos"
   - Adicione um widget "Texto" com descrição
   - Para cada evento, crie um item com:
     - Data em destaque
     - Título do evento
     - Local
     - Descrição
     - Botão "Mais Informações"

## 7. Ajustes Finais e Responsividade

### Verificar Responsividade

1. **Testar em Diferentes Dispositivos:**
   - No editor Elementor, alterne entre visualizações:
     - Desktop (padrão)
     - Tablet (largura < 1024px)
     - Mobile (largura < 768px)

2. **Ajustar Layouts para Mobile:**
   - Reduza tamanhos de fonte
   - Ajuste espaçamentos
   - Converta layouts multi-colunas para coluna única quando necessário
   - Oculte elementos não essenciais

### Otimizar Velocidade

1. **Reduzir Tamanho de Imagens:**
   - Use o plugin "Smush" para otimizar todas as imagens
   - Verifique se as dimensões das imagens são apropriadas

2. **Minimizar CSS e JavaScript:**
   - Ative a opção de minificação no plugin de cache
   - Remova widgets e estilos não utilizados

### Verificar Links e Funcionalidades

1. **Testar Todos os Links:**
   - Verifique se todos os links internos funcionam corretamente
   - Teste os links para redes sociais e plataformas externas

2. **Testar Formulários:**
   - Envie mensagens de teste em todos os formulários
   - Verifique se as notificações estão sendo recebidas corretamente

## 8. Publicação e Divulgação

### Configurações Finais

1. **Verificar SEO:**
   - Use o Yoast SEO para otimizar todas as páginas
   - Configure meta descrições e títulos SEO

2. **Configurar Compartilhamento Social:**
   - Configure imagens de compartilhamento para redes sociais
   - Teste como as páginas aparecem quando compartilhadas

### Lançamento

1. **Verificação Final:**
   - Faça uma revisão completa de todo o site
   - Corrija quaisquer erros ou problemas encontrados

2. **Backup Pré-Lançamento:**
   - Faça um backup completo do site antes do lançamento oficial

3. **Divulgação:**
   - Prepare materiais para divulgação nas redes sociais
   - Crie um post de lançamento para o Instagram do podcast

## Conclusão

Este guia de implementação fornece instruções detalhadas para criar o site do podcast "Vozes da Amazônia" usando o Elementor no WordPress. Seguindo estas orientações, você conseguirá replicar o design e as funcionalidades do protótipo HTML desenvolvido anteriormente.

Lembre-se de que o Elementor oferece muitas possibilidades de personalização, então sinta-se à vontade para adaptar estas instruções conforme necessário para alcançar o resultado desejado.
