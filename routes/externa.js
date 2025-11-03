const express = require("express");
const axios = require("axios");
const jwt = require("jsonwebtoken");

const router = express.Router();
const SECRET = "segredo123"; 

// Middleware de autenticação 
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

// Rota protegida que consome WeatherAPI
router.get("/clima/:cidade", autenticar, async (req, res) => {
  const cidade = req.params.cidade;
  const API_KEY = "17c94d136c0e4bd7ba1133400250311";

  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cidade}&lang=pt`
    );

    const data = response.data;
    res.json({
      cidade: data.location.name,
      pais: data.location.country,
      temperatura_c: data.current.temp_c,
      condicao: data.current.condition.text,
      umidade: data.current.humidity,
      vento_kph: data.current.wind_kph,
    });
  } catch (error) {
    res.status(500).json({
      mensagem: "Erro ao obter dados do clima",
      detalhe: error.message,
    });
  }
});

module.exports = router;
