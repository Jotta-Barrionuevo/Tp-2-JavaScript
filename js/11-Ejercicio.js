let edad1 = parseInt(prompt("Introduce la edad de la primera persona:"));
let edad2 = parseInt(prompt("Introduce la edad de la segunda persona:"));
let edad3 = parseInt(prompt("Introduce la edad de la tercera persona:"));

let nombre1 = prompt("Introduce el nombre de la primera persona:");
let nombre2 = prompt("Introduce el nombre de la segunda persona:");
let nombre3 = prompt("Introduce el nombre de la tercera persona:");

let mayorEdad = Math.max(edad1, edad2, edad3);

let nombreMayor;
if (mayorEdad === edad1) {
  nombreMayor = nombre1;
} else if (mayorEdad === edad2) {
  nombreMayor = nombre2;
} else {
  nombreMayor = nombre3;
}

document.write(
  "La persona de mayor edad es " + nombreMayor + " con " + mayorEdad + " años."
);
