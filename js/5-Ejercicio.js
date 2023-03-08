while (true) {
  const dni = prompt("Ingrese su número de DNI:");

  if (dni === null) {
    break;
  }

  if (!/^\d+$/.test(dni)) {
    alert("El valor ingresado no es un número válido.");
    continue;
  }

  const dniInt = parseInt(dni);

  if (dniInt < 0 || dniInt > 99999999) {
    alert("El número de DNI debe estar entre 0 y 99999999.");
    continue;
  }

  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  const indiceLetra = dniInt % 23;
  const letraDNI = letras.charAt(indiceLetra);

  alert(`La letra de su DNI es: ${letraDNI}`);
}
