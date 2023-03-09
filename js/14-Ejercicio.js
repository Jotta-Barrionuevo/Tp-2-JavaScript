let texto = prompt("Introduce una cadena de texto:");

let resultado = "";

for (let i = 0; i < texto.length; i++) {
  resultado += texto[i];

  if (i < texto.length - 1) {
    resultado += "-";
  }
}

document.write("El texto con guiones es: " + resultado);
