function caesarShift(str, amount) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    let ascii = str[i].charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
      output += String.fromCharCode(((ascii - 65 + amount + 26) % 26) + 65);
    } else if (ascii >= 97 && ascii <= 122) {
      output += String.fromCharCode(((ascii - 97 + amount + 26) % 26) + 97);
    } else {
      output += str[i];
    }
  }
  return output;
}

document.getElementById("encryptButton").addEventListener("click", function () {
  let inputText = document.getElementById("inputText").value;
  let encryptedText = caesarShift(inputText, 3);
  document.getElementById("outputText").innerText = encryptedText;
});

document.getElementById("decryptButton").addEventListener("click", function () {
  let inputText = document.getElementById("inputText").value;
  let decryptedText = caesarShift(inputText, -3);
  document.getElementById("outputText").innerText = decryptedText;
});
