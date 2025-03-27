/*2. Lista de Compras (Array + for)
Gestionar una lista dinámica de productos.
Tareas:
1.Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
2.Añade 3 productos con el método agregar().
3.Implementa el método mostrar() que use un for para listar los productos numerados (ej: "1.
Manzanas").
4.Muestra la lista completa en consola.*/

function ListaCompras(){
    this.productos = [];


    this.agregar = function(producto){
        this.productos.push(producto)
    }

    this.mostrar = function(producto){
        for (i=0; i<this.productos.length; i++){
            console.log(i+". "+this.productos[i])
        }
    }

}
lista1 = new ListaCompras()
lista1.agregar("Manzanas")
lista1.agregar("Pera")
lista1.agregar("Bnano")
lista1.mostrar()







// 1. Constructor del objeto libro
/*function libro(titulo,autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
    this.prestar = function () {
        if(this.prestado){
            console.log("El libro esta prestado");       
        }else{
            this.prestado = true
            console.log("El libro esta dispnible");
        }
    }
}
let libro1 = new libro("100 años de soledad", "Gabriel García Marquez");
libro1.prestar();
libro1.prestar();
libro1.prestar();*/