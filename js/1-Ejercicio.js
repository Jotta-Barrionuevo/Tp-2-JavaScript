let edad = parseInt(prompt("Ingrese su edad"));
if(!isNaN(edad) === true ){
    
if(edad >= 18)
    document.write("Ya puede conducir");
}else{
    document.write(`Ingresaste un texto en lugar de un numero`);    


}