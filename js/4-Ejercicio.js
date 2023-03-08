let suma = 0;

while (true) {
  let input = prompt("Introduce un número:");

  if (input === null) {
    break;
  }

  let num = Number(input);

  if (isNaN(num)) {
    alert("No es un número válido.");
    continue;
  }

  suma += num;
}

alert("La suma total es: " + suma);
