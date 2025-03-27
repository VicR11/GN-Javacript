function retirarDinero(saldo, monto){
    if(monto > saldo)
      return "Fondos insuficientes";
    else
      return saldo - monto
}

const prompt = require("prompt-sync")();
saldo = parseFloat(prompt("Por favor, ingrese su saldo: "));
monto = parseFloat(prompt("Por favor, ingrese el monto que quiere retirar: "));

console.log("Su nuevo saldo es: "+retirarDinero(saldo, monto))