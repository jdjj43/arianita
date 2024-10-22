document.addEventListener("DOMContentLoaded", function () {
  const isNotHome = () => {
    const path = window.location.pathname;

    if (path !== "/") {
      const inicio = document.getElementById("upper_bar_nav_inicio");
      inicio.classList.remove("hidden");
    }

    if (path === "/directorio") {
      const directorio = document.getElementById("upper_bar_nav_directorio");
      directorio.classList.add('hidden');
    } else {
      const directorio = document.getElementById("upper_bar_nav_directorio");
      directorio.classList.remove('hidden');
    }
  };

  isNotHome();
});
