let texto = "";
let continuar = true;

while (continuar) {
  let nuevoTexto = prompt(
    "Introduce una cadena de texto (pulsá 'cancelar' para salir):"
  );
  if (nuevoTexto === null) {
    continuar = false;
  } else {
    texto += nuevoTexto + "-";
  }
}

if (texto.length > 0) {
  texto = texto.slice(0, -1);
  let confirmacion = confirm(
    "Las cadenas introducidas son: " + texto + ". ¿Queres continuar?"
  );
  if (confirmacion) {
    alert("Continuando...");
  } else {
    alert("Cancelando...");
  }
} else {
  alert("No se ha introducido ninguna cadena de texto.");
}
