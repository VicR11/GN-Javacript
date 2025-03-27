function contarPalabras(texto){
   arrayTexto= texto.split(" ");
   return arrayTexto.length;
}


const prompt = require("prompt-sync")();
texto = prompt("Por favor, ingrese el texto para contar la cantidad de palabras separadas por espacios: ");

console.log("Su texto tiene : "+contarPalabras(texto)+" palabras")
