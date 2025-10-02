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
