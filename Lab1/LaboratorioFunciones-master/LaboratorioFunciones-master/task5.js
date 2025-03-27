const usuarios = [
    { nombre: "Juan", edad: 20 },
    { nombre: "Jose", edad: 15 },
    { nombre: "Maria", edad: 10 },
    { nombre: "Felipe", edad: 30 },
    { nombre: "Adriana", edad: 28 },
    { nombre: "Lucy", edad: 50 },

   ];

   function filtrarUsuarios(usuarios, edadMinima) {
    let usuarioEdadMinima = []
    for (item of usuarios){
        if(item.edad <edadMinima )
            usuarioEdadMinima.push(item.nombre)
    }
    return usuarioEdadMinima.join(", ");

}

const prompt = require("prompt-sync")();
edadMinima = prompt("Por favor, ingrese la edad mínima que desea consultar: ");

console.log("Los usuario que tienen la edad minima de "+edadMinima +" son: "+ filtrarUsuarios(usuarios, edadMinima))