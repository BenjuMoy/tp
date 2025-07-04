const form = document.getElementById('loginForm')
const mensajeError = document.getElementById('mensajeError')

form.addEventListener('submit', function(event) {
  event.preventDefault()

  const email = form.email.value.trim()
  const password = form.password.value

  mensajeError.textContent = ''

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    mensajeError.textContent = 'El correo electrónico no es válido.'
    return
  }

  if (password.length < 6) {
    mensajeError.textContent = 'La contraseña debe tener al menos 6 caracteres.'
    return
  }

  mensajeError.textContent = ''
  alert('Registro exitoso!')
  form.reset()
})