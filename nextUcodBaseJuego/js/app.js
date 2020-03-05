

//funcion que cambia color del titulo indefinidamente
function tituloColor() {
  if ($(".main-container h1").hasClass("main-titulo")) {
      $(".main-container h1").removeClass("main-titulo");
      $(".main-container h1").addClass("main-titulo2");
  }
  else {
      $(".main-container h1").removeClass("main-titulo2");
      $(".main-container h1").addClass("main-titulo");
  }
};


//funcion que devuelve el nombre de una imagen aleatoriamente
function imagenAleatoria(){
  var numImagen = Math.floor((Math.random() * 4) + 1);
  var imagenAleatoria = "image/"+numImagen+".png";
  return imagenAleatoria;
};

//definicion de variables globales para usar localmente en diferentes funciones y eventos
var puntuacion = 0;
var movimientos = 0;
var clicks = 0;

//funcion que activa eventos al presionar el boton inicio
function firstClickIniciar(){
  clicks++;
  if(clicks == 1){
    var tiempo = 120;
    $('.btn-reinicio').text('Reiniciar');
    llenarTablero();
    startTimer(tiempo, $("#timer"));
    verificacionJugada();
  } else {
    location.reload();//https://www.w3schools.com/jsref/met_loc_reload.asp
  }
};

//funcion que suma movimientos en pantalla
function nuevoMoviemiento(){
  movimientos++;
  $("#movimientos-txt").text(movimientos);
};

//







$('.btn-reinicio').on('click', firstClickIniciar);

$(document).ready(function() {
  setInterval(tituloColor, 750);
});
