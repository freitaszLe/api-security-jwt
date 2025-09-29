const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const SECRET = "segredo123"; // Em produção, isso fica em variável de ambiente

// Rota de login → gera token
router.post("/login", (req, res) => {
  const { usuario, senha } = req.body;

  if (usuario === "admin" && senha === "123") {
    const token = jwt.sign({ usuario }, SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }

  return res.status(401).json({ message: "Credenciais inválidas" });
});

// Middleware para verificar token
function autenticar(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "Token ausente" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token inválido" });
    req.user = user;
    next();
  });
}

// Rota protegida
router.get("/dados", autenticar, (req, res) => {
  res.json({
    mensagem: "Acesso autorizado!",
    usuario: req.user.usuario,
    dados: ["item1", "item2", "item3"],
  });
});

module.exports = router;
