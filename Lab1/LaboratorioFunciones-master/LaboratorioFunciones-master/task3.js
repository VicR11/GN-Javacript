const inventario = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "reloj", precio: 15 },
    { nombre: "chaqueta", precio: 70 },
    { nombre: "medias", precio: 18 },
    { nombre: "short", precio: 25 },
    { nombre: "pantaloneta", precio: 18 },
   ];

function buscarProducto(nombre, inventario){
    
    for (item of inventario){
        if(item.nombre == producto)
            return true
    }
    return null;

}

const prompt = require("prompt-sync")();
producto = prompt("Ingrese el nombre del producto que quiere validar: ");

console.log("El producto : "+producto+ (buscarProducto(producto, inventario)? " si existe" : " no existe" ))
   
