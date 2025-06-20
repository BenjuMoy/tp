function obtenerPuntaje(opinion) {
  var titulo = opinion.getElementsByTagName("h2")[0].innerHTML; 
  var puntajeTexto = "";
  var leyendoNumero = false;

  for (var i = 0; i < titulo.length; i++) {
    var c = titulo[i]; 
    if (leyendoNumero) {
   
      if (c >= "0" && c <= "9") {
        puntajeTexto = puntajeTexto + c;
      } else {
     
        leyendoNumero = false;
      }
    } else {
      
      if (c === "⭐") {
        leyendoNumero = true;
      }
    }
  }

  var puntaje = parseInt(puntajeTexto);
  return puntaje;
}

function mostrarTodas() {
  var opiniones = document.getElementsByClassName("opinion");
  var i = 0;
  while (opiniones[i] != null) {
    opiniones[i].className = "opinion";
    i++;
  }
}

function mostrarPositivas() {
  var opiniones = document.getElementsByClassName("opinion");
  var i = 0;
  while (opiniones[i] != null) {
    var puntaje = obtenerPuntaje(opiniones[i]);
    if (puntaje >= 6) {
      opiniones[i].className = "opinion";
    } else {
      opiniones[i].className = "opinion oculto";
    }
    i++;
  }
}

function mostrarNegativas() {
  var opiniones = document.getElementsByClassName("opinion");
  var i = 0;
  while (opiniones[i] != null) {
    var puntaje = obtenerPuntaje(opiniones[i]);
    if (puntaje < 6) {
      opiniones[i].className = "opinion";
    } else {
      opiniones[i].className = "opinion oculto";
    }
    i++;
  }
}
