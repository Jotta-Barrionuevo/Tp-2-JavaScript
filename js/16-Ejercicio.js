let texto = prompt("Introduce una cadena de texto:");

let resultado = "";

for (let i = texto.length - 1; i >= 0; i--) {
  resultado += texto[i];
}

document.write("El texto al revés es: " + resultado);
