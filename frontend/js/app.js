function setupLogin() {
  const form = document.getElementById("login-form");
  const msg = document.getElementById("login-msg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    msg.textContent = "🔄 Realizando login...";

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    try {
      await login(usuario, senha);
      msg.textContent = "✅ Login realizado com sucesso!";
      setTimeout(() => (window.location.hash = "#/clima"), 1000);
    } catch (err) {
      msg.textContent = "❌ " + err.message;
    }
  });
}

function setupClima() {
  const btn = document.getElementById("buscar-clima");
  const resultado = document.getElementById("resultado");

  btn.addEventListener("click", async () => {
    const cidade = document.getElementById("cidade").value;
    if (!cidade) {
      resultado.textContent = "Digite o nome de uma cidade!";
      return;
    }

    resultado.textContent = "🔄 Buscando...";
    try {
      const data = await getClima(cidade);
      resultado.innerHTML = `
        <div class="card">
          <h3>${data.cidade}, ${data.pais}</h3>
          <p>🌡️ Temperatura: ${data.temperatura_c}°C</p>
          <p>💧 Umidade: ${data.umidade}%</p>
          <p>☁️ Condição: ${data.condicao}</p>
          <p>🌬️ Vento: ${data.vento_kph} km/h</p>
        </div>
      `;
    } catch (err) {
      resultado.textContent = "❌ " + err.message;
    }
  });
}
