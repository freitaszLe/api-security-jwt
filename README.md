# 🌐 MiniCurso – Secure REST API com Node.js + JWT 

Projeto desenvolvido como parte de um **minicurso de extensão** sobre **autenticação em APIs RESTful e consumo de APIs externas**.  
A aplicação demonstra:
- Como implementar **autenticação com JWT (JSON Web Token)** em uma API Node.js;
- Como proteger rotas;
- E como **um frontend moderno** consome e exibe dados de forma visual.  

---

## 📌 Funcionalidades

### 🖥️ Backend (Node.js + Express)
- **Login e geração de token JWT**
- **Autenticação de rotas protegidas**
- **Consumo de API externa (WeatherAPI)**
- **Documentação interativa com Swagger UI**

### 🎨 Frontend (HTML + CSS + JS puro)
- **Interface moderna e responsiva (Glassmorphism)**
- **Animação de fundo com nuvens e gradiente dinâmico**
- **Exibição visual do clima com ícones dinâmicos ☀️ 🌧️ 🌫️ ⛅**
- **Simulação de SPA (Single Page Application)** com roteamento em JavaScript puro

---

## 🚀 Tecnologias Utilizadas

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [jsonwebtoken (JWT)](https://www.npmjs.com/package/jsonwebtoken)
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)
- [Axios](https://axios-http.com/)
- [CORS](https://www.npmjs.com/package/cors)

### Frontend
- HTML5, CSS3 e JavaScript puro
- Layout em **Glassmorphism**
- **Fundo animado com nuvens e gradiente**
- Ícones e emojis dinâmicos para o clima 🌦️
- Design 100% responsivo

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

### 🌦️ Consumo de API Externa (WeatherAPI)
- Rota Protegida
**Endpoint: GET /externa/clima/:cidade**
  Exemplo:
  
  ```json
      /externa/clima/Cuiaba
   ```
   
   ```json
   {
     "cidade": "Cuiabá",
     "pais": "Brasil",
     "temperatura_c": 33.5,
     "condicao": "Parcialmente nublado",
     "umidade": 56,
     "vento_kph": 8.7
   }
   ```
   
⚠️ É necessário criar uma conta gratuita em https://www.weatherapi.com/
 e inserir sua chave (API_KEY) no arquivo routes/externa.js.
  
---

## 📂 Estrutura do Projeto

   ```bash
   api-security-jwt/
   ├── frontend/
   ├── index.html          # Página principal com roteamento SPA
   ├── css/style.css       # Estilo visual moderno e animado
   ├── js/router.js        # Sistema de rotas do front
   ├── js/api.js           # Conexão com a API Node.js
   ├── js/app.js           # Lógica de login e consumo de clima
   └── pages/
       ├── login.html
       └── clima.html
   ├── index.js           # Ponto de entrada do backend
   ├── routes/
   │   ├── auth.js        # Autenticação e geração de JWT
   │   └── externa.js     # Consumo da WeatherAPI (rota protegida)
   ├── swagger.json       # Configuração do Swagger UI
   ├── package.json       # Dependências do backend
   └── frontend/          # Interface web animada e responsiva


   ```

## 👩‍💻 Autoria
- Desenvolvido por:
  
  **Leticia Arruda de Freitas;**
  
  **Anthony Gabriel Oliveira Cruz;**
  
  **Andresa Lídia de Figueiredo Martins**

- Projeto de extensão — Engenharia da Computação (IFMT- Campus Cuiabá)
