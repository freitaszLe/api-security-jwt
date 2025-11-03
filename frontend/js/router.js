async function navigate(route) {
  const app = document.getElementById("app");

  // Mapeamento de rotas
  const routes = {
    "/login": "./pages/login.html",
    "/clima": "./pages/clima.html",
  };

  app.classList.add("fade-out");
await new Promise((resolve) => setTimeout(resolve, 400));

  // 3. Carrega o novo conteúdo
  const path = routes[route] || routes["/login"];
  
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error("Página não encontrada");
    const html = await response.text();
    app.innerHTML = html;

    // 4. Executa os scripts da página carregada
    if (route === "/login") setupLogin();
    if (route === "/clima") setupClima();

  } catch (error) {
    console.error("Erro ao carregar a página:", error);
    app.innerHTML = `<h2>Erro 404: Página não encontrada</h2>`;
  }
  
  // 5. Remove a classe para iniciar o "fade-in"
  app.classList.remove("fade-out");
}

window.addEventListener("hashchange", () => {
  const route = window.location.hash.replace("#", "");
  navigate(route);
});

window.addEventListener("load", () => {
  const route = window.location.hash.replace("#", "") || "/login";
  navigate(route);
});
