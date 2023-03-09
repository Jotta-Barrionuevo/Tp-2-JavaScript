let texto = prompt("Introduce una cadena de texto:");

let primeraVocal = -1;

for (let i = 0; i < texto.length; i++) {
  let caracter = texto[i].toLowerCase();

  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u"
  ) {
    primeraVocal = i;
    break;
  }
}

if (primeraVocal !== -1) {
  document.write("La primera vocal está en la posición: " + primeraVocal);
} else {
  document.write("No se encontraron vocales en el texto.");
}
