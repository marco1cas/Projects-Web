document.addEventListener("DOMContentLoaded", function () {
  const enlacesImagenes = document.querySelectorAll("a[data-img]");
  enlacesImagenes.forEach((enlace) => {
    enlace.addEventListener("click", (event) => {
      event.preventDefault();
      const imagenSeleccionada = enlace.getAttribute("data-img");
      localStorage.setItem("imagenSeleccionada", imagenSeleccionada);
      window.location.href = enlace.getAttribute("href");
    });
  });
});
