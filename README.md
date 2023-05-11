# bootcamp-cypress
Bottcamp Cypress projeto básico do zero 
---
### Iniciando um projeto Cypress
- Para preparar o ambiente com Node.JS
- Precisa ter o Node.JS instalado na sua máquina
- Lembrando que é necessário ter o navegador atualizado e adicionado em variáveis de ambiente o caminho do mesmo em PATH
- Se cria uma pasta com nome do projeto
- No terminal da sua IDE abra a pasta do projeto, execute o comando **npm init -y** o arquivo package.json será criado
- Em seguida execute o comando **npm install cypress** para baixar o Cypress no seu projeto
- Neste momento se pode usar o comando **npx cypress open** ele vai abrir a tela do Cypress
- O Cypress tem algumas opções de exemplos de testes
- Na pasta support fica o arquivo js 
- O arquivo commands é utilizado para criação de comandos do seu projeto
- Na pasta fixture ficam os arquivos .json usados nos testes
- O arquivo json é utilizado para configurações do projeto, por exemplo, a nossa baseUrl
- Após isso já se pode criar o arquivo de testes que fica normalmente na pasta integration com a extensão .cy.js
- Neste arquivo iremos escrever o primeiro teste adicionando o describe para dar contexto ao teste e o it para criar o teste
- Temos o comando **npx cypress run** ele executa o projeto pelo terminal com vídeos dos testes
- Temos o Cypress cloud, que tem Dashboard, screenshots entre outras funcionalidades como CI/CD e GitHub Actions
---
#### Isso é um iniciozinho muito básico do que se pode fazer com Cypress e como ele é completo
Se pode realizar testes
- End-to-End
- Interface de Usuário
- API’s
- Componentes
- Unidade

