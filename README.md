# 🔐 Secure REST API com Node.js + JWT

Projeto desenvolvido como parte de um **minicurso de extensão** sobre autenticação em APIs RESTful.  
A aplicação demonstra como implementar **autenticação com JWT (JSON Web Token)** em uma API construída com **Node.js, Express e Swagger**.  

---

## 📌 Funcionalidades
- Registro e login de usuário *(exemplo básico com credenciais fixas)*  
- Geração de **token JWT** após login bem-sucedido  
- Rota protegida que só pode ser acessada com token válido  
- Documentação interativa da API com **Swagger UI**  

---

## 🚀 Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [jsonwebtoken (JWT)](https://www.npmjs.com/package/jsonwebtoken)  
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)  

---

## ⚙️ Instalação e Execução

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/freitaszLe/api-security-jwt.git
   ```
2. **Instalar dependências**
   ```bash
   npm install
   ```
3. **Executar o servidor**
   ```bash
   node index.js
   ```
   
#### 🚀 Servidor disponível em: http://localhost:3000

#### 📖 Documentação da API (Swagger)
- Acesse a documentação interativa pelo navegador:
👉 http://localhost:3000/api-docs


## 🔑 Fluxo de Autenticação
- Login
**Endpoint: POST /auth/login**
  
Corpo da requisição:

   ```json
  {
  "usuario": "admin",
  "senha": "123"
  }
   ```
- Resposta: retorna o token JWT

- Autorização no Swagger
  Clique em Authorize
  Cole apenas o token (sem Bearer)
  O Swagger adiciona o prefixo automaticamente
  Acesso a rota protegida

**Endpoint: GET /auth/dados**

Retorna informações somente se o token for válido

## 📂 Estrutura do Projeto

   ```bash
   auth-api/
├── index.js           # Ponto de entrada da aplicação
├── swagger.js         # Configuração do Swagger
├── package.json       # Dependências e scripts do projeto
├── .gitignore         # Arquivos e pastas ignorados pelo Git
└── README.md          # Documentação do projeto

   ```

## 👩‍💻 Autoria
- Desenvolvido por:
  
  **Leticia Arruda de Freitas;**
  
  **Anthony Gabriel Oliveira Cruz;**
  
  **Andresa Lídia de Figueiredo Martins**

- Projeto de extensão — Engenharia da Computação (IFMT- Campus Cuiabá)
