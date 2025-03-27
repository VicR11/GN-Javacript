const prompt = require("prompt-sync")();

notas = prompt("Ingrese sus notas separadas por coma: ");
if(notas.includes(",")){
    arrayNotas = notas.replace(", ",",").split("," );
    console.log("Su nota final es: "+calcularPromedio(arrayNotas)) 
}
else
    console.log("Sus notas deben estar separadas por ,")

   


function calcularPromedio(arrayNotas){
    suma = 0;
        for(nota of arrayNotas){
            suma += parseFloat(nota);
        }
    return (suma/arrayNotas.length).toFixed(2)
}