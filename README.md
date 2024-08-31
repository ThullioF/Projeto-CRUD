<h1 align="center"> Projeto CRUD </h1>
<p align="center">
  <a>Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a>Etapas Do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a>Projeto</a>
</p>

<br>

# 🚀 Tecnologias

### Esse projeto foi desenvolvido com as seguintes tecnologias:

- TypeScript
- JavaScript
- HTML
- CSS

# 💻 Etapas Do Projeto

### Instalação do Vite com React e TypeScript
- Cria projeto React com TypeScript configurado
  - npm create vite@latest nome-do-projeto --template react-ts
- Entrar no diretório do projeto
  - cd nome-do-projeto
- Instalar dependências de um projeto Node.js
  - npm install

### Instalação de dependêndencias necessárias
- npm install axios react-router-dom

### Instalação e configuração do json-server
- Criar um arquivo db.json na raiz do projeto
- Instalar a biblioteca json-server no projeto Node.js
  - npm install json-server
- Iniciar o servisor API com o json-server, servindo dados do arquivo db.json(criado anteriormente) na porta 3001
  - npx json-server --watch db.json --port 3001

### Estrutua do projeto
- src
  - components
    - LivroForm.tsx
    - LivroList.tsx
  - pages
    - Home.tsx
    - AddLivro.tsx
    - EditLivro.tsx
  - services
    - api.ts
  - App.tsx



# 🌐 Projeto

### [Acesse o projeto finalizado, online](https://thulliof.github.io/Projeto-CRUD/)
