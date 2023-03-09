let texto = prompt("Introduce una cadena de texto:");

let numVocales = 0;

for (let i = 0; i < texto.length; i++) {
  let caracter = texto[i].toLowerCase();

  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u"
  ) {
    numVocales++;
  }
}

document.write("El número de vocales en el texto es: " + numVocales);
