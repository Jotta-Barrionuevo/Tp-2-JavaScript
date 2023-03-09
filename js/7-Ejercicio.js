let repeticiones= parseInt(prompt(`Ingrese un numero de repeticiones del 1 al 50`));

if(repeticiones >0 && repeticiones <=50){



for(let fila= repeticiones; fila >= 1; fila--){
    for(let columna = fila; columna >= 1; columna -- )
    document.write(fila)
    document.write(`<br>`)
}
}else{
    alert(`Ingresaste una opcion invalida`)
}