let edad = parseInt(prompt("Ingrese su edad"));
if (!isNaN(edad) === true) {
  if (edad >= 18) document.write("Ya puede conducir");
} else {
  document.write(`La edad ingresada no es un número válido`);
}
if (edad <= 17) {
  document.write("No puede conducir");
}
