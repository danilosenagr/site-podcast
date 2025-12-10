# Guia de Configuração do WordPress para o Site "Vozes da Amazônia"

Este documento fornece instruções detalhadas para configurar um site WordPress gratuito para o podcast "Vozes da Amazônia", incluindo recomendações de hospedagem, domínio, temas e plugins gratuitos.

## 1. Opções de Hospedagem e Domínio Gratuitos

### Opção 1: WordPress.com (Mais simples)

**Vantagens:**
- Configuração rápida e fácil
- Sem necessidade de conhecimentos técnicos
- Inclui certificado SSL gratuito
- Atualizações automáticas

**Limitações:**
- Personalização limitada na versão gratuita
- Subdomínio no formato: vozesdamazonia.wordpress.com
- Espaço de armazenamento limitado (1GB)
- Não permite instalação de plugins na versão gratuita

**Passos para configuração:**
1. Acesse [WordPress.com](https://wordpress.com/)
2. Clique em "Começar" e escolha o plano gratuito
3. Crie uma conta e escolha o subdomínio (ex: vozesdamazonia.wordpress.com)
4. Siga o assistente de configuração

### Opção 2: InfinityFree + Freenom (Mais flexível)

**Vantagens:**
- Hospedagem totalmente gratuita com recursos ilimitados
- Permite instalação de temas e plugins personalizados
- Domínio personalizado gratuito
- Acesso a banco de dados MySQL e painel cPanel

**Limitações:**
- Requer mais conhecimentos técnicos para configuração
- Domínios gratuitos limitados a extensões como .tk, .ml, .ga
- Sem suporte oficial

**Passos para configuração:**

1. **Registrar um domínio gratuito no Freenom:**
   - Acesse [Freenom](https://www.freenom.com/)
   - Pesquise por "vozesdamazonia" e escolha uma extensão disponível (.tk, .ml, .ga, .cf, .gq)
   - Registre o domínio gratuitamente (pode ser por até 12 meses, renovável)

2. **Criar conta na InfinityFree:**
   - Acesse [InfinityFree](https://infinityfree.net/)
   - Clique em "Sign Up" e crie uma conta
   - No painel, clique em "New Account" para criar uma nova hospedagem
   - Escolha um nome para o site e clique em "Create Account"

3. **Configurar os nameservers do domínio:**
   - No painel da InfinityFree, anote os nameservers fornecidos
   - Volte ao Freenom, acesse "My Domains" > "Manage Domain" > "Management Tools" > "Nameservers"
   - Selecione "Use custom nameservers" e insira os nameservers da InfinityFree
   - Salve as alterações (pode levar até 24 horas para propagar)

4. **Instalar o WordPress:**
   - No painel da InfinityFree, acesse o cPanel
   - Localize e clique em "Softaculous Apps Installer"
   - Encontre WordPress e clique em "Install"
   - Configure as opções:
     - Escolha o protocolo (https://)
     - Insira seu domínio
     - Diretório: deixe em branco para instalar na raiz
     - Nome do site: Vozes da Amazônia
     - Descrição: Podcast de Educação Ambiental
     - Configure nome de usuário e senha de administrador (anote-os!)
   - Clique em "Install" para concluir

## 2. Temas WordPress Gratuitos Recomendados

### Opção Principal: Astra

**Por que escolher:**
- Leve e rápido
- Altamente personalizável
- Compatível com construtores de página
- Otimizado para SEO e dispositivos móveis

**Como instalar:**
1. No painel WordPress, vá para "Aparência" > "Temas" > "Adicionar novo"
2. Pesquise por "Astra"
3. Clique em "Instalar" e depois "Ativar"
4. Vá para "Aparência" > "Personalizar" para ajustar as configurações

### Alternativas:

1. **Kadence** - Excelente para personalização e velocidade
2. **OceanWP** - Bom para sites de mídia e conteúdo
3. **GeneratePress** - Leve e otimizado para performance

## 3. Plugins Essenciais Gratuitos

### Elementor (Construtor de Página)
- **Função:** Permite criar layouts personalizados sem conhecimento de código
- **Instalação:** Painel WordPress > Plugins > Adicionar novo > Pesquisar "Elementor" > Instalar > Ativar

### Podcast Player
- **Função:** Integra players de podcast do Spotify, Apple Podcasts, etc.
- **Instalação:** Painel WordPress > Plugins > Adicionar novo > Pesquisar "Podcast Player" > Instalar > Ativar

### Yoast SEO
- **Função:** Otimiza o site para mecanismos de busca
- **Instalação:** Painel WordPress > Plugins > Adicionar novo > Pesquisar "Yoast SEO" > Instalar > Ativar

### WPForms Lite
- **Função:** Cria formulários de contato e inscrição
- **Instalação:** Painel WordPress > Plugins > Adicionar novo > Pesquisar "WPForms Lite" > Instalar > Ativar

### Smash Balloon Social Photo Feed
- **Função:** Integra feed do Instagram ao site
- **Instalação:** Painel WordPress > Plugins > Adicionar novo > Pesquisar "Smash Balloon Social Photo Feed" > Instalar > Ativar

### UpdraftPlus
- **Função:** Realiza backups automáticos do site
- **Instalação:** Painel WordPress > Plugins > Adicionar novo > Pesquisar "UpdraftPlus" > Instalar > Ativar

## 4. Implementação do Design

### Importando o Tema Inicial

Se você escolher o Astra, pode começar com um template pronto:

1. Instale o plugin "Starter Templates" (pelo mesmo método de instalação de plugins)
2. Vá para "Aparência" > "Starter Templates"
3. Escolha "Elementor" como construtor
4. Procure por templates de podcast ou blog
5. Escolha um template que se assemelhe ao design desejado
6. Clique em "Import Complete Site"

### Personalizando o Site

1. **Cores e Tipografia:**
   - Vá para "Aparência" > "Personalizar" > "Cores Globais"
   - Configure as cores principais baseadas na identidade visual:
     - Verde Floresta: #2A5E41
     - Verde Limão: #A4C86B
     - Marrom: #6D4534
     - Laranja: #F7A239

2. **Logo e Favicon:**
   - Vá para "Aparência" > "Personalizar" > "Identidade do Site"
   - Faça upload do logo "vozes-logo.jpg"
   - Crie e faça upload de um favicon (versão reduzida do logo)

3. **Menu de Navegação:**
   - Vá para "Aparência" > "Menus"
   - Crie um menu principal com as páginas: Início, Episódios, Sobre, Contato, Eventos
   - Atribua-o à posição "Menu Principal"

## 5. Criando as Páginas Principais

### Página Inicial

Usando Elementor:
1. Crie uma nova página chamada "Início"
2. Edite com Elementor
3. Adicione seções para:
   - Hero com título e subtítulo
   - Player do Spotify incorporado
   - Métricas (episódios, temporadas, ouvintes)
   - Episódios recentes
   - Call-to-action para redes sociais
   - Formulário de newsletter

### Página de Episódios

1. Crie uma nova página chamada "Episódios"
2. Edite com Elementor
3. Adicione:
   - Grade de episódios com imagens, títulos e descrições
   - Filtros por temporada
   - Seção "Conheça os Entrevistados"
   - Destaque para a futura 3ª temporada

### Página Sobre

1. Crie uma nova página chamada "Sobre"
2. Edite com Elementor
3. Adicione seções para:
   - História do podcast
   - Equipe
   - Missão
   - Contribuições Acadêmicas (TCCs e publicações)
   - Temporadas
   - Métricas de impacto

### Página de Contato

1. Crie uma nova página chamada "Contato"
2. Edite com Elementor
3. Adicione:
   - Formulário de contato (usando WPForms)
   - Informações de contato
   - Formulário para sugestões de temas
   - FAQ

### Página de Eventos

1. Crie uma nova página chamada "Eventos"
2. Edite com Elementor
3. Adicione seções para:
   - Próximos webinars
   - Formulário de inscrição
   - Webinars anteriores
   - Eventos acadêmicos

## 6. Configurações Adicionais

### Configurar Permalinks
1. Vá para "Configurações" > "Links Permanentes"
2. Selecione "Nome do post"
3. Salve as alterações

### Configurar SEO Básico
1. Vá para "Yoast SEO" > "Geral"
2. Configure informações do site e redes sociais
3. Em "Aparência na Pesquisa", configure título e descrição

### Configurar Formulários
1. Vá para "WPForms" > "Adicionar Novo"
2. Crie formulários para:
   - Contato
   - Sugestão de temas
   - Inscrição para webinars

### Integrar Redes Sociais
1. Configure o plugin Smash Balloon para mostrar o feed do Instagram
2. Adicione botões de compartilhamento nas páginas de episódios

## 7. Otimização e Performance

### Instalar Plugin de Cache
1. Instale e ative o plugin "W3 Total Cache"
2. Vá para "Performance" > "Configurações Gerais"
3. Ative as opções básicas de cache

### Otimizar Imagens
1. Instale e ative o plugin "Smush"
2. Vá para "Smush" > "Bulk Smush"
3. Otimize todas as imagens do site

### Configurar Backup Automático
1. Vá para "UpdraftPlus" > "Configurações"
2. Configure backups semanais
3. Escolha armazenamento em nuvem gratuito (Google Drive ou Dropbox)

## 8. Manutenção Contínua

### Atualizações Regulares
- Mantenha o WordPress, temas e plugins atualizados
- Acesse o painel regularmente para verificar atualizações

### Backup Regular
- Faça backups manuais antes de grandes atualizações
- Verifique se os backups automáticos estão funcionando

### Monitoramento de Performance
- Use o Google PageSpeed Insights para verificar a velocidade do site
- Otimize conforme necessário

### Adição de Conteúdo
- Atualize a página de episódios quando novos episódios forem lançados
- Mantenha a página de eventos atualizada

## Conclusão

Este guia fornece todas as etapas necessárias para configurar um site WordPress gratuito para o podcast "Vozes da Amazônia". Seguindo estas instruções, você terá um site profissional, responsivo e otimizado para SEO, sem custos de hospedagem ou domínio.

Para qualquer dúvida ou assistência adicional, consulte a documentação oficial do WordPress ou entre em contato com a comunidade WordPress Brasil.
