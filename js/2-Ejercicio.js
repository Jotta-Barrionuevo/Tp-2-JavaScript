// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
let nota = prompt("Introduce una nota del 0 al 10:");

if (isNaN(nota) || nota < 0 || nota > 10){
    alert("Introduce un número válido");

}else if (nota >= 0 && nota <= 2){
  alert("Muy deficiente");

}else if (nota >= 3 && nota <= 4){
  alert("Insuficiente");

}else if (nota >= 5 && nota <= 6){
    alert("Suficiente");

}else if (nota == 7){
  alert("Bien");

}else if (nota >= 8 && nota <= 9){
  alert("Notable");

}else{
  alert("Sobresaliente");
}
