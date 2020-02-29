//funcion que cambia color del titulo indefinidamente
$(document).ready(function() {
    function tituloColor() {
        if ($(".main-container h1").hasClass("main-titulo")) {
            $(".main-container h1").removeClass("main-titulo");
            $(".main-container h1").addClass("main-titulo2");
        }
        else {
          $(".main-container h1").removeClass("main-titulo2");
          $(".main-container h1").addClass("main-titulo");
        }
    }
    setInterval(tituloColor, 750);
});

//funcion que llena el tablero aleatoriamente al iniciar
function llenarTablero(){
  var columnas = $("div[class^='col']");
  for (var i = 1; i <= 7; i++) {
    var x = 1;
    while (x <= 7) {
      var numImagen = Math.floor((Math.random() * 4) + 1);
      $(".col-"+x).append("<div class='row-'"+i+"><img src='image/"+numImagen+".png' class='dulce'/></div>");
      x++;
    }
  }
};

//funcion que obtiene lineas de columna y filas para recorrer
function obtenerLinea(arreglo, indice){

  var columna1 = $('.col-1').children();
  var columna2 = $('.col-2').children();
  var columna3 = $('.col-3').children();
  var columna4 = $('.col-4').children();
  var columna5 = $('.col-5').children();
  var columna6 = $('.col-6').children();
  var columna7 = $('.col-7').children();

  var arregloColumnas = $([columna1, columna2, columna3, columna4, columna5, columna6, columna7]);

  var fila1 = "", fila2 = "", fila3 = "",fila4 = "", fila5 = "", fila6 = "", fila7 = "";
  var arregloFilas = $([fila1, fila2, fila3, fila4, fila5, fila5, fila7]);

  for (var i = 0; i < 7; i++) {
    var filas = $([fila1, fila2, fila3, fila4, fila5, fila5, fila7]);
    for (var j = 0; j < 7; j++) {
      filas[j] = $([arregloColumnas[i].children(j)]);
    }
    arregloFilas = filas;
  }

  if (arreglo === 'columns') {
    return arregloColumnas;
  }else if (arreglo === 'rows') {
    return arregloFilas;
  }
};

//funcion que valida eliminaciones en una columna

$(".btn-reinicio").on("click", function(){
  llenarTablero();
  obtenerLinea();
});
