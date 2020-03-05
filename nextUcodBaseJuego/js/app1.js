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
  var columnas = $(".panel-tablero div[class^='col-']")
  for (var i = 0; i < columnas.length; i++) {
    var x = 1;
    while (x <= 7) {
      var numImagen = Math.floor((Math.random() * 4) + 1);
      $(columnas[i]).append("<div class='row-"+x+"'><img src='image/"+numImagen+".png' class='dulce'/></div>")
      x++;
    }
  }
};

//funcion que obtiene lineas de columna y filas para recorrer
function obtenerLinea(arreglo, indice){

  var columna1 = $('.panel-tablero .col-1').children();
  var columna2 = $('.panel-tablero .col-2').children();
  var columna3 = $('.panel-tablero .col-3').children();
  var columna4 = $('.panel-tablero .col-4').children();
  var columna5 = $('.panel-tablero .col-5').children();
  var columna6 = $('.panel-tablero .col-6').children();
  var columna7 = $('.panel-tablero .col-7').children();

  var arregloColumnas = $([columna1, columna2, columna3, columna4, columna5, columna6, columna7]);

  var fila1 = $('.panel-tablero .row-1');
  var fila2 = $('.panel-tablero .row-2');
  var fila3 = $('.panel-tablero .row-3');
  var fila4 = $('.panel-tablero .row-4');
  var fila5 = $('.panel-tablero .row-5');
  var fila6 = $('.panel-tablero .row-6');
  var fila7 = $('.panel-tablero .row-7');

  var arregloFilas = $([fila1, fila2, fila3, fila4, fila5, fila6, fila7]);

  if (arreglo === 'columns') {
    return arregloColumnas;
  }else if (arreglo === 'rows') {
    return arregloFilas;
  }
};

//funcion que devuelve arreglo de columnas
function columnaIndice(indice){
  var arregloColumnas = obtenerLinea('columns');
  return arregloColumnas[indice];
}

//funcion que devuelve arreglo de filas
function filaIndice(indice){
  var arregloFilas = obtenerLinea('rows');
  return arregloFilas[indice];
}

//funcion que recorre columnas
function recorreCol(){
  var lineasBorrar = [];
    for (var i = 0; i < 7; i++) {
    var cantDulce = [];
    var columnaN = columnaIndice(i);
    var dulce = [];
    var posDulce = 0;
    dulce = $(columnaN).children().attr('src');
    for (var posDulce = 0; posDulce < 7; posDulce++) {
      dulce[posDulce].parents("div[class^='row-']").addClass("eliminar");
      cantDulce.push(dulce[posDulce]);
      while (dulce[posDulce] == dulce[posDulce + 1]) {
        cantDulce.push(dulce[posDulce + 1]);
        dulce[posDulce + 1].parents("div[class^='row-']").addClass("eliminar");
        posDulce++;
      }
      if (cantDulce.length < 3) {
        $(".eliminar").removeClass("eliminar");
      } else {
        lineasBorrar = $(".eliminar");
      }
    }
  }
  return lineasBorrar;
};

function eliminarElemento(){
  if (cantDulce >= 3) {
    cantDulce.remove();
  }
}




$(".btn-reinicio").on("click", function(){
  llenarTablero();
  recorreCol();
});
