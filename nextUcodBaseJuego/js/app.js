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
