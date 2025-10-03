const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
// Mostrar la sección de proyectos al hacer clic en el menú
document.getElementById('enlace-proyectos').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('proyectos').style.display = 'block';
});
// Mostrar la sección de inicio al hacer clic en el menú
document.getElementById('enlace-inicio').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('inicio').style.display = 'block';
});
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los enlaces del menú
  const enlaces = document.querySelectorAll(".sidebar ul li a");
  const secciones = document.querySelectorAll(".seccion");

  enlaces.forEach(enlace => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();

      // Ocultar todas las secciones
      secciones.forEach(sec => sec.style.display = "none");

      // Mostrar solo la sección seleccionada
      const idSeccion = this.getAttribute("id").replace("enlace-", "");
      document.getElementById(idSeccion).style.display = "block";
    });
  });
});

// Cerrar el sidebar si se hace clic fuera
document.addEventListener('click', (e) => {
  const isClickInsideSidebar = sidebar.contains(e.target);
  const isClickOnMenuBtn = menuBtn.contains(e.target);

  if (!isClickInsideSidebar && !isClickOnMenuBtn) {
    sidebar.classList.remove('active');
  }
});

