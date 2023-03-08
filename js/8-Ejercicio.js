let n = parseInt(prompt("Introduce un número entre 1 y 50"));

if (isNaN(n) || n < 1 || n > 50) {
  document.write("Número inválido");
} else {
  let piramide = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      piramide += j;
    }
    piramide += "<br>";
  }

  document.write(piramide);
}
