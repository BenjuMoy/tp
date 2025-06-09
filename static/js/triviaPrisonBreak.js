function main() {
    let correctas = 0
    let resultado = ""


    let r1 = document.getElementsByName("p1")
    let s1 = sacarRespuesta(r1)

    if (s1 === 1) {
      correctas++
      resultado += "<p style='color: lightgreen;'>✅ Pregunta 1: Correcta</p>"
    } else if (s1 === -1) {
      resultado += "<p style='color: orange;'>⚠️ Pregunta 1: No contestada.</p>"
    } else {
      resultado += "<p style='color: red;'>❌ Pregunta 1: Incorrecta.</p>"
    }


    let r2 = document.getElementsByName("p2")
    let s2 = sacarRespuesta(r2)

    if (s2 === 1) {
      correctas++
      resultado += "<p style='color: lightgreen;'>✅ Pregunta 2: Correcta</p>"
    } else if (s2 === -1) {
      resultado += "<p style='color: orange;'>⚠️ Pregunta 2: No contestada.</p>"
    } else {
      resultado += "<p style='color: red;'>❌ Pregunta 2: Incorrecta.</p>"
    }


    let r3 = document.getElementsByName("p3")
    let s3 = sacarRespuesta(r3)

    if (s3 === 2) {
      correctas++
      resultado += "<p style='color: lightgreen;'>✅ Pregunta 3: Correcta</p>"
    } else if (s3 === -1) {
      resultado += "<p style='color: orange;'>⚠️ Pregunta 3: No contestada.</p>"
    } else {
      resultado += "<p style='color: red;'>❌ Pregunta 3: Incorrecta.</p>"
    }


    let r4 = document.getElementsByName("p4")
    let s4 = sacarRespuesta(r4)

    if (s4 === 2) {
      correctas++
      resultado += "<p style='color: lightgreen;'>✅ Pregunta 4: Correcta</p>"
    } else if (s4 === -1) {
      resultado += "<p style='color: orange;'>⚠️ Pregunta 4: No contestada.</p>"
    } else {
      resultado += "<p style='color: red;'>❌ Pregunta 4: Incorrecta. Correcta: <b>Chicago</b></p>"
    }


    let r5 = document.getElementsByName("p5")
    let s5 = sacarRespuesta(r5)

    if (s5 === 1) {
      correctas++
      resultado += "<p style='color: lightgreen;'>✅ Pregunta 5: Correcta</p>"
    } else if (s5 === -1) {
      resultado += "<p style='color: orange;'>⚠️ Pregunta 5: No contestada.</p>"
    } else {
      resultado += "<p style='color: red;'>❌ Pregunta 5: Incorrecta.</p>"
    }


    let r6 = document.getElementsByName("p6")
    let s6 = sacarRespuesta(r6)

    if (s6 === 2) {
      correctas++
      resultado += "<p style='color: lightgreen;'>✅ Pregunta 6: Correcta</p>"
    } else if (s6 === -1) {
      resultado += "<p style='color: orange;'>⚠️ Pregunta 6: No contestada.</p>"
    } else {
      resultado += "<p style='color: red;'>❌ Pregunta 6: Incorrecta.</p>"
    }

    document.getElementById("result").innerHTML =
      "<p><b>Obtuviste " + correctas + " de 6</b> respuestas correctas.</p>" + resultado
}

function sacarRespuesta(radios) {
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
    return parseInt(radios[i].value)
    }
  }
  return -1
}