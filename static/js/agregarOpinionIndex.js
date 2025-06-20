const form = document.getElementById('form-opinion');
const commentsContainer = document.getElementById('comments-container');

function añadirComentario(comentario) {
  const elementoComentario = document.createElement('p');
  elementoComentario.textContent = comentario;

  commentsContainer.appendChild(elementoComentario);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const fecha = document.getElementById('fecha').value;
  const texto = document.getElementById('texto').value;

  if (nombre === "" || fecha === "" || texto === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }

  const comentario = `${nombre} [${fecha}]: ${texto}`;

  añadirComentario(comentario);

  document.getElementById('nombre').value = '';
  document.getElementById('fecha').value = '';
  document.getElementById('texto').value = '';
});