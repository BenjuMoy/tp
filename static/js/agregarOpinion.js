document.getElementById("form-opinion").addEventListener("submit", agregarOpinion);

function agregarOpinion(event) {
  event.preventDefault();
  var nombre = document.getElementById("nombre").value;
  var fecha = document.getElementById("fecha").value;
  var puntaje = document.getElementById("puntaje").value;
  var texto = document.getElementById("texto").value;

  // Validate user input
  if (nombre === "" || fecha === "" || puntaje === "" || texto === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // Create a new opinion
  var nuevaOpinion = document.createElement("div");
  nuevaOpinion.className = "opinion";

  var titulo = document.createElement("h2");
  titulo.textContent = "⭐" + puntaje + "/10";

  var parrafoTexto = document.createElement("p");
  parrafoTexto.textContent = texto;

  var parrafoAutor = document.createElement("p");
  parrafoAutor.textContent = "-" + nombre + " " + fecha;

  nuevaOpinion.appendChild(titulo);
  nuevaOpinion.appendChild(parrafoTexto);
  nuevaOpinion.appendChild(parrafoAutor);

  // Append the new opinion to the.contenido div
  var contenedor = document.getElementsByClassName("contenido")[0];
  contenedor.appendChild(nuevaOpinion);

  // Clear the form fields
  document.getElementById("nombre").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("puntaje").value = "";
  document.getElementById("texto").value = "";
}