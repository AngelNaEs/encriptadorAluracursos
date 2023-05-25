function encriptarCadena(cadena) {
  var reglas = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  var resultado = "";

  for (var i = 0; i < cadena.length; i++) {
    var letra = cadena[i];
    if (letra in reglas) {
      resultado += reglas[letra];
    } else {
      resultado += letra;
    }
  }

  return resultado;
}

function desencriptarCadena(cadena) {
  var reglasInversas = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  var resultado = cadena;

  for (var regla in reglasInversas) {
    var posicion = resultado.indexOf(regla);
    while (posicion != -1) {
      resultado =
        resultado.substring(0, posicion) +
        reglasInversas[regla] +
        resultado.substring(posicion + regla.length);
      posicion = resultado.indexOf(regla);
    }
  }

  return resultado;
}

// Encriptar
document.getElementById("encryptButton").addEventListener("click", function () {
  var noText = document.getElementById("noText");
  noText.classList.add("ocultarElement");

  var outputContainer = document.getElementById("outputContainer");
  outputContainer.classList.remove("ocultarElement");

  let inputText = document.getElementById("inputText").value;

  let encryptedText = encriptarCadena(inputText);
  document.getElementById("outputText").innerText = encryptedText;
});
// Desencriptar
document.getElementById("decryptButton").addEventListener("click", function () {
  var noText = document.getElementById("noText");
  noText.classList.add("ocultarElement");

  var outputContainer = document.getElementById("outputContainer");
  outputContainer.classList.remove("ocultarElement");

  let inputText = document.getElementById("inputText").value;

  let encryptedText = desencriptarCadena(inputText);
  document.getElementById("outputText").innerText = encryptedText;
});

// Copiar
document.getElementById("btnCopy").addEventListener("click", function () {
  var textoACopiar = document.getElementById("outputText").innerText;

  navigator.clipboard
    .writeText(textoACopiar)
    .then(function () {
      showNotification("Texto copiado al portapapeles exitosamente!");
    })
    .catch(function (err) {
      showNotification("No se pudo copiar el texto: " + err);
    });

  noText.classList.remove("ocultarElement");
  outputContainer.classList.add("ocultarElement");
});

//Mostrar un mensaje de copiado
function showNotification(message) {
  var notification = document.getElementById("notification");
  notification.textContent = message;
  notification.classList.add("show");

  setTimeout(function () {
    notification.classList.remove("show");
  }, 2500);
}
