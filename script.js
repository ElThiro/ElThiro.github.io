document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const sidebar = document.getElementById("sidebar");
  const enlaces = document.querySelectorAll(".sidebar ul li a");
  const secciones = document.querySelectorAll(".seccion");

  // Abrir/cerrar sidebar al clicar en el botón
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que el clic se propague y cierre el menú
    sidebar.classList.toggle("active");
  });

  // Cambiar entre secciones al hacer clic en los enlaces
  enlaces.forEach(enlace => {
    enlace.addEventListener("click", (e) => {
      e.preventDefault();
      const idSeccion = enlace.id.replace("enlace-", "");

      secciones.forEach(sec => sec.style.display = "none");
      document.getElementById(idSeccion).style.display = "block";

      sidebar.classList.remove("active"); // cerrar sidebar al seleccionar
    });
  });

  // Cerrar sidebar al clicar fuera
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove("active");
    }
  });
});
