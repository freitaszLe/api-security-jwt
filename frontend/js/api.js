const API_URL = "http://localhost:3000";
let token = localStorage.getItem("jwt") || null;

async function login(usuario, senha) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario, senha }),
  });

  if (!response.ok) throw new Error("Credenciais inválidas");
  const data = await response.json();
  token = data.token;
  localStorage.setItem("jwt", token);
  return data;
}

async function getClima(cidade) {
  const response = await fetch(`${API_URL}/externa/clima/${cidade}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status === 401 || response.status === 403) {
    throw new Error("Token inválido ou expirado. Faça login novamente.");
  }

  if (!response.ok) throw new Error("Erro ao buscar clima.");
  return await response.json();
}
