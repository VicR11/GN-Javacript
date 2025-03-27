const prompt = require("prompt-sync")();

function validarContraseña(contraseña){
   /* if(contraseña.length > 7 && /[A-Z]/.test(contraseña) && /[a-z]/.test(contraseña) && /\d/.test(contraseña)){
       flag = true
    }else{
       flag = false
    }*/

    return (contraseña.length > 7 && /[A-Z]/.test(contraseña) && /[a-z]/.test(contraseña) && /\d/.test(contraseña)) ? true : false;
}

contraseña = prompt("Ingrese su contraseña: ");
console.log("Su contraseña es: "+(validarContraseña(contraseña)?"Valida":"Invalida"))