# Guia de Manutenção do Site "Vozes da Amazônia"

Este documento fornece instruções detalhadas para a manutenção contínua do site WordPress do podcast "Vozes da Amazônia", garantindo sua segurança, desempenho e atualização regular de conteúdo.

## 1. Manutenção Regular (Mensal)

### Atualizações de Software

1. **Atualizar WordPress:**
   - Acesse o painel administrativo do WordPress
   - Verifique se há atualizações disponíveis (notificação no topo do painel)
   - Antes de atualizar, faça um backup completo do site
   - Clique em "Atualizar agora" para instalar a versão mais recente
   - Após a atualização, verifique se o site está funcionando corretamente

2. **Atualizar Temas e Plugins:**
   - Vá para "Plugins" > "Plugins Instalados"
   - Verifique se há atualizações disponíveis
   - Atualize um plugin de cada vez, verificando o funcionamento do site após cada atualização
   - Vá para "Aparência" > "Temas" e atualize o tema quando necessário

3. **Verificar Plugins Inativos:**
   - Remova plugins que não estão sendo utilizados
   - Plugins inativos podem representar riscos de segurança

### Backup do Site

1. **Realizar Backup Completo:**
   - Use o plugin UpdraftPlus para realizar backups mensais
   - Vá para "UpdraftPlus" > "Backup / Restaurar"
   - Clique em "Fazer Backup Agora"
   - Selecione todas as opções (Arquivos e Banco de Dados)
   - Aguarde a conclusão do backup

2. **Verificar Backups Automáticos:**
   - Confirme se os backups automáticos estão funcionando
   - Verifique se os arquivos de backup estão sendo armazenados corretamente
   - Teste a restauração de um backup em ambiente de teste, se possível

3. **Armazenar Backups Externamente:**
   - Configure o UpdraftPlus para enviar backups para serviços de armazenamento em nuvem (Google Drive, Dropbox)
   - Mantenha pelo menos três backups recentes

### Verificação de Segurança

1. **Verificar Tentativas de Login:**
   - Instale e configure o plugin "Wordfence Security"
   - Verifique o relatório de tentativas de login mal-sucedidas
   - Bloqueie IPs suspeitos, se necessário

2. **Verificar Vulnerabilidades:**
   - Use o Wordfence para escanear o site em busca de malware ou arquivos suspeitos
   - Corrija quaisquer vulnerabilidades identificadas
   - Verifique se todos os plugins estão atualizados para versões sem vulnerabilidades conhecidas

3. **Atualizar Senhas:**
   - Troque a senha de administrador a cada 3 meses
   - Use senhas fortes (combinação de letras maiúsculas e minúsculas, números e símbolos)
   - Considere ativar autenticação de dois fatores

### Otimização de Performance

1. **Limpar Cache:**
   - Se estiver usando W3 Total Cache ou outro plugin de cache:
   - Vá para as configurações do plugin
   - Limpe todos os caches
   - Verifique a performance do site após a limpeza

2. **Otimizar Banco de Dados:**
   - Use o plugin "WP-Optimize" para:
     - Remover revisões de posts desnecessárias
     - Limpar comentários de spam
     - Otimizar tabelas do banco de dados
   - Execute esta otimização mensalmente

3. **Verificar Velocidade do Site:**
   - Use ferramentas como Google PageSpeed Insights ou GTmetrix
   - Analise os resultados e implemente as recomendações sugeridas
   - Monitore o tempo de carregamento das páginas principais

## 2. Atualização de Conteúdo (Conforme Necessário)

### Adicionar Novos Episódios

1. **Criar Novo Post de Episódio:**
   - Vá para "Posts" > "Adicionar Novo"
   - Use um título claro e descritivo para o episódio
   - Adicione uma imagem destacada relacionada ao tema do episódio
   - Escreva uma descrição detalhada, incluindo os principais tópicos abordados
   - Adicione tags relevantes e selecione a categoria apropriada (temporada)

2. **Incorporar Player do Spotify:**
   - Obtenha o código de incorporação do episódio no Spotify
   - Adicione-o ao post usando o bloco "HTML Personalizado" ou o widget apropriado no Elementor
   - Verifique se o player está funcionando corretamente

3. **Atualizar Página de Episódios:**
   - Se estiver usando Elementor, edite a página "Episódios"
   - Atualize a seção de episódios recentes para incluir o novo episódio
   - Verifique se a filtragem por temporada está funcionando corretamente

4. **Atualizar Página Inicial:**
   - Edite a página inicial para exibir o episódio mais recente na seção de destaque
   - Atualize a seção "Episódios Recentes" se necessário

### Adicionar Novos Eventos

1. **Criar Evento no Site:**
   - Edite a página "Eventos" usando Elementor
   - Adicione o novo evento na seção "Próximos Webinars"
   - Inclua todas as informações relevantes: data, hora, título, descrição, palestrantes
   - Adicione botões para inscrição e compartilhamento

2. **Configurar Formulário de Inscrição:**
   - Verifique se o formulário de inscrição está configurado para o novo evento
   - Teste o formulário para garantir que as inscrições estão sendo recebidas corretamente

3. **Após o Evento:**
   - Mova o evento da seção "Próximos Webinars" para "Webinars Anteriores"
   - Adicione o link para a gravação, se disponível
   - Atualize as informações conforme necessário

### Atualizar Informações da Equipe

1. **Editar Página Sobre:**
   - Acesse a página "Sobre" no Elementor
   - Atualize as informações da equipe conforme necessário
   - Adicione novos membros ou atualize informações existentes
   - Mantenha a formatação consistente com o restante do site

### Atualizar Métricas e Estatísticas

1. **Atualizar Números:**
   - Edite as seções de métricas na página inicial e na página "Sobre"
   - Atualize os números de episódios, temporadas e ouvintes
   - Mantenha os dados consistentes em todas as páginas

## 3. Manutenção Técnica (Trimestral)

### Revisão de Links

1. **Verificar Links Quebrados:**
   - Instale e use o plugin "Broken Link Checker"
   - Verifique todos os links internos e externos
   - Corrija ou remova links quebrados
   - Atualize links para recursos externos que possam ter mudado

2. **Verificar Links de Mídia Social:**
   - Confirme se todos os links para redes sociais estão funcionando
   - Atualize os links se houver mudanças nas URLs

### Revisão de SEO

1. **Analisar Desempenho SEO:**
   - Use o Yoast SEO para verificar o desempenho SEO das páginas principais
   - Verifique se todas as páginas têm meta descrições e títulos otimizados
   - Analise as palavras-chave principais e ajuste o conteúdo se necessário

2. **Verificar Análises do Google:**
   - Acesse o Google Analytics (se configurado)
   - Analise o tráfego do site, páginas mais visitadas e taxa de rejeição
   - Use esses dados para melhorar o conteúdo e a estrutura do site

3. **Verificar Indexação:**
   - Use o Google Search Console para verificar se todas as páginas estão indexadas
   - Identifique e corrija problemas de rastreamento
   - Envie um sitemap atualizado, se necessário

### Revisão de Acessibilidade

1. **Verificar Contraste de Cores:**
   - Use ferramentas como WAVE ou Lighthouse para verificar o contraste
   - Ajuste as cores para melhorar a legibilidade, se necessário

2. **Verificar Textos Alternativos:**
   - Confirme se todas as imagens têm textos alternativos descritivos
   - Adicione textos alternativos às imagens que não os têm

3. **Testar Navegação por Teclado:**
   - Verifique se é possível navegar pelo site usando apenas o teclado
   - Ajuste a ordem de tabulação, se necessário

### Testes de Compatibilidade

1. **Testar em Diferentes Navegadores:**
   - Verifique o site nos principais navegadores (Chrome, Firefox, Safari, Edge)
   - Corrija problemas específicos de navegadores

2. **Testar em Dispositivos Móveis:**
   - Verifique a responsividade em diferentes tamanhos de tela
   - Teste em dispositivos reais, se possível
   - Ajuste layouts problemáticos

## 4. Manutenção Anual

### Revisão de Design

1. **Avaliar Design Atual:**
   - Verifique se o design ainda está moderno e relevante
   - Considere pequenas atualizações visuais para manter o site atual
   - Compare com sites similares para identificar tendências

2. **Atualizar Elementos Visuais:**
   - Considere atualizar imagens de destaque
   - Revise a paleta de cores e tipografia
   - Atualize elementos gráficos conforme necessário

### Revisão de Conteúdo

1. **Auditar Todo o Conteúdo:**
   - Verifique todas as páginas principais
   - Atualize informações desatualizadas
   - Melhore textos conforme necessário
   - Verifique a consistência de tom e estilo

2. **Atualizar Página "Sobre":**
   - Revise e atualize a história e missão do podcast
   - Atualize informações sobre contribuições acadêmicas
   - Adicione novas conquistas ou marcos importantes

3. **Atualizar FAQ:**
   - Adicione novas perguntas frequentes baseadas em feedback recebido
   - Atualize respostas existentes conforme necessário

### Planejamento de Recursos

1. **Avaliar Necessidades de Hospedagem:**
   - Verifique se o plano de hospedagem atual ainda atende às necessidades
   - Considere atualizar se o tráfego aumentou significativamente

2. **Revisar Plugins:**
   - Avalie se todos os plugins ainda são necessários
   - Pesquise alternativas para plugins que não estão sendo mantidos pelos desenvolvedores
   - Considere plugins premium para funcionalidades importantes

## 5. Resolução de Problemas Comuns

### Problemas de Login

1. **Não Consegue Fazer Login:**
   - Use a função "Esqueceu a senha" para redefinir a senha
   - Verifique se o e-mail de redefinição está chegando (cheque a pasta de spam)
   - Se persistir, acesse o banco de dados via phpMyAdmin para redefinir a senha manualmente

2. **Bloqueado por Tentativas Falhas:**
   - Se estiver usando Wordfence, pode ser necessário desbloquear seu IP
   - Acesse o arquivo .htaccess via FTP e remova regras de bloqueio

### Problemas de Desempenho

1. **Site Lento:**
   - Verifique o relatório de desempenho no W3 Total Cache
   - Otimize imagens grandes usando Smush
   - Desative temporariamente plugins para identificar causas
   - Verifique com a hospedagem se há limitações de recursos

2. **Erros 500:**
   - Verifique o arquivo error_log via FTP
   - Aumente o limite de memória PHP no wp-config.php
   - Desative todos os plugins e reative um por um

### Problemas de Exibição

1. **Layout Quebrado:**
   - Verifique conflitos de CSS
   - Use o modo de depuração do Elementor
   - Verifique se o tema está atualizado
   - Teste em navegação anônima para descartar problemas de cache

2. **Imagens Não Aparecem:**
   - Verifique permissões de arquivos
   - Recarregue as imagens
   - Verifique se os caminhos estão corretos

## 6. Documentação e Registros

### Manter Registro de Alterações

1. **Criar Log de Manutenção:**
   - Mantenha um documento com todas as alterações significativas
   - Registre datas de atualizações importantes
   - Anote problemas encontrados e soluções aplicadas

2. **Documentar Configurações:**
   - Mantenha um registro das configurações importantes
   - Documente personalizações de código
   - Registre senhas e credenciais em um gerenciador de senhas seguro

### Manter Contatos Importantes

1. **Listar Contatos:**
   - Mantenha informações de contato do provedor de hospedagem
   - Registre informações do registrador de domínio
   - Tenha contatos de desenvolvedores ou designers que trabalharam no site

## 7. Plano de Recuperação de Desastres

### Preparação para Emergências

1. **Documentar Procedimentos de Emergência:**
   - Criar um guia passo a passo para restaurar o site a partir de um backup
   - Documentar como migrar para uma nova hospedagem, se necessário
   - Manter cópias offline de arquivos críticos

2. **Testar Restauração:**
   - Periodicamente, teste o processo de restauração em um ambiente de teste
   - Verifique se os backups estão completos e utilizáveis

### Resposta a Incidentes

1. **Site Hackeado:**
   - Isole o site colocando-o em modo de manutenção
   - Restaure a partir do backup mais recente não afetado
   - Atualize todas as senhas
   - Verifique e atualize todos os plugins e temas
   - Considere contratar um especialista em segurança WordPress

2. **Falha de Hospedagem:**
   - Entre em contato com o suporte da hospedagem
   - Se necessário, restaure o site em uma nova hospedagem usando backups
   - Atualize os nameservers do domínio para apontar para a nova hospedagem

## 8. Calendário de Manutenção Sugerido

### Tarefas Semanais
- Verificar se o site está online e funcionando
- Moderar e responder comentários
- Verificar formulários de contato para novas mensagens

### Tarefas Mensais
- Atualizar WordPress, temas e plugins
- Realizar backup completo
- Limpar cache e otimizar banco de dados
- Verificar relatórios de segurança

### Tarefas Trimestrais
- Verificar links quebrados
- Analisar desempenho SEO
- Testar em diferentes navegadores e dispositivos
- Verificar velocidade do site

### Tarefas Anuais
- Revisar design e conteúdo
- Auditar plugins e funcionalidades
- Avaliar plano de hospedagem
- Testar processo de restauração

## Conclusão

Este guia de manutenção fornece as diretrizes necessárias para manter o site "Vozes da Amazônia" funcionando de forma eficiente, segura e atualizada. Seguindo estas recomendações, você garantirá que o site continue a ser uma plataforma eficaz para divulgar o podcast e engajar seu público.

Lembre-se de que a manutenção regular é essencial para o sucesso a longo prazo do site. Dedique tempo para estas tarefas e mantenha registros detalhados de todas as alterações e atualizações realizadas.

Para qualquer dúvida ou assistência adicional, consulte a documentação oficial do WordPress ou entre em contato com um desenvolvedor especializado.
