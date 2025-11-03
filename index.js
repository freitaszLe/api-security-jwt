const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const authRoutes = require("./routes/auth");
const externaRoutes = require("./routes/externa");
const app = express();

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
});
