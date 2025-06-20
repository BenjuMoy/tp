const form = document.getElementById('registroForm')
const mensajeError = document.getElementById('mensajeError')

form.addEventListener('submit', function(event) {
  event.preventDefault()

  const nombre = form.nombre.value.trim()
  const email = form.email.value.trim()
  const password = form.password.value
  const confirmPassword = form.confirmPassword.value
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  mensajeError.textContent = ''

  if (nombre.length < 5 || nombre.length > 20) {
    mensajeError.textContent = 'El nombre debe estar entre 5 y 20 caracteres.'
    return
  }

  if (!emailRegex.test(email)) {
    mensajeError.textContent = 'El correo electrónico no es válido.'
    return
  }

  if (password.length < 6) {
    mensajeError.textContent = 'La contraseña debe tener al menos 6 caracteres.'
    return
  }

  if (password !== confirmPassword) {
    mensajeError.textContent = 'Las contraseñas no coinciden.'
    return
  }
  
  mensajeError.textContent = ''
  alert('Registro exitoso!')
  form.reset()
})