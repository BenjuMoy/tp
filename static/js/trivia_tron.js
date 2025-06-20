function main() {
  let correctas = 0;
  let resultado = "";

  // Pregunta 1
  let r1 = document.getElementsByName("p1");
  let s1 = sacarRespuesta(r1);
  let respuestaCorrecta1 = "Un programa creado por Kevin Flynn";

  if (s1 === 1) {
    correctas++;
    resultado += "<p style='color: lightgreen;'>✅ Pregunta 1: Correcta</p>";
  } else if (s1 === -1) {
    resultado += "<p style='color: orange;'>⚠️ Pregunta 1: No contestada.</p>";
  } else {
    resultado += "<p style='color: red;'>❌ Pregunta 1: Incorrecta.</p>";
  }

  // Pregunta 2
  let r2 = document.getElementsByName("p2");
  let s2 = sacarRespuesta(r2);
  let respuestaCorrecta2 = "Una forma de vida digital espontánea";

  if (s2 === 2) {
    correctas++;
    resultado += "<p style='color: lightgreen;'>✅ Pregunta 2: Correcta</p>";
  } else if (s2 === -1) {
    resultado += "<p style='color: orange;'>⚠️ Pregunta 2: No contestada.</p>";
  } else {
    resultado += "<p style='color: red;'>❌ Pregunta 2: Incorrecta.</p>";
  }

  // Pregunta 3
  let r3 = document.getElementsByName("p3");
  let s3 = sacarRespuesta(r3);
  let respuestaCorrecta3 = "Un escáner láser en el arcade";

  if (s3 === 2) {
    correctas++;
    resultado += "<p style='color: lightgreen;'>✅ Pregunta 3: Correcta</p>";
  } else if (s3 === -1) {
    resultado += "<p style='color: orange;'>⚠️ Pregunta 3: No contestada.</p>";
  } else {
    resultado += "<p style='color: red;'>❌ Pregunta 3: Incorrecta. </p>";
  }

  // Pregunta 4
  let r4 = document.getElementsByName("p4");
  let s4 = sacarRespuesta(r4);
  let respuestaCorrecta4 = "End of Line Club";

  if (s4 === 1) {
    correctas++;
    resultado += "<p style='color: lightgreen;'>✅ Pregunta 4: Correcta</p>";
  } else if (s4 === -1) {
    resultado += "<p style='color: orange;'>⚠️ Pregunta 4: No contestada.</p>";
  } else {
    resultado += "<p style='color: red;'>❌ Pregunta 4: Incorrecta.</p>";
  }

  // Pregunta 5
  let r5 = document.getElementsByName("p5");
  let s5 = sacarRespuesta(r5);
  let respuestaCorrecta5 = "Daft Punk";

  if (s5 === 1) {
    correctas++;
    resultado += "<p style='color: lightgreen;'>✅ Pregunta 5: Correcta</p>";
  } else if (s5 === -1) {
    resultado += "<p style='color: orange;'>⚠️ Pregunta 5: No contestada.</p>";
  } else {
    resultado += "<p style='color: red;'>❌ Pregunta 5: Incorrecta.</p>";
  }

  document.getElementById("result").innerHTML =
    "<p><b>Obtuviste " + correctas + " de 5</b> respuestas correctas.</p>" + resultado;
}

function sacarRespuesta(radios) {
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return parseInt(radios[i].value);
    }
  }
  return -1;
}
