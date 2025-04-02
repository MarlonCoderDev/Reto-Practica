// reto.js

// Función para cambiar el contenido del cuerpo según el menú
function cambiarContenido(pagina) {
  const textoCuerpo = document.getElementById("textoCuerpo");
  switch (pagina) {
    case 'Inicio':
      textoCuerpo.textContent = "Bienvenido a la página de inicio. Aquí encontrarás todo sobre nuestra empresa.";
      break;
    case 'Acerca de':
      textoCuerpo.textContent = "Somos una empresa dedicada a ofrecer los mejores servicios del mercado.";
      break;
    case 'Servicios':
      textoCuerpo.textContent = "Nuestros servicios incluyen desarrollo web, diseño gráfico, y marketing digital.";
      break;
    case 'Contacto':
      textoCuerpo.textContent = "Ponte en contacto con nosotros a través de nuestra página de contacto.";
      break;
    default:
      textoCuerpo.textContent = "Haz clic en un enlace para ver el contenido correspondiente.";
      break;
  }
}

// Función para mostrar un mensaje al hacer clic en el botón del banner
function mostrarMensajeBanner() {
  alert("¡Espero que entiendas la finalidad de esta pagina web.");
}

// Función para mostrar un mensaje al seleccionar un plato del menú
function mostrarMensaje(programacion) {
  alert("Has seleccionado: " + programacion);
}

// Inicializar la página con contenido por defecto cuando carga
document.addEventListener('DOMContentLoaded', function() {
  cambiarContenido('Inicio');
});
