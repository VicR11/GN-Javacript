const prompt = require("prompt-sync")();
function calcularPropina(total, porcentaje){
    return (total*porcentaje/100) + total;
}

total = parseFloat(prompt("Ingrese el valor total de su cuenta: "));
porcentaje = parseFloat(prompt("Ingrese el porcentaje de propina: "));

console.log("el valor total a pagar con propina incluida es: "+ calcularPropina(total, porcentaje))