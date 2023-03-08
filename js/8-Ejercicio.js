let num = prompt("Introduce un número no mayor de 50");

if (num > 50) {
  document.write("El número es mayor de 50... intenta nuevamente.");
} else {
  for (let i = 1; i <= num; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    document.write(line + "<br>");
  }
}
