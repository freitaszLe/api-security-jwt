const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const authRoutes = require("./routes/auth");
const externaRoutes = require("./routes/externa");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

// Rotas da API
app.use("/auth", authRoutes);
app.use("/externa", externaRoutes);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📖 Documentação: http://localhost:${PORT}/api-docs`);
  console.log(`💻 Teste a aplicação: http://127.0.0.1:5500/api-security-jwt/frontend/index.html`);
});
