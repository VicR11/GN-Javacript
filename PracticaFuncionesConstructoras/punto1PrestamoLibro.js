/*1. Libro (Objeto básico + if)
Crear un sistema de préstamo de libros.
Tareas:
1.Usa el constructor Libro para crear un objeto con título y autor.
2.Agrega una propiedad prestado = false.
3.Implementa el método prestar() que:
•Cambie prestado a true si el libro está disponible.
•Muestre un mensaje de error si ya está prestado (usando if).
4.Prueba prestar el libro dos veces y observa los mensajes*/

function Libro(titulo,autor){
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false

    this.prestar = function(){
        if(!this.prestado){
            this.prestado = true
            console.log("Prestando libro .......")
        }else {
            //Libro.prestado = false
            console.log("El libro ya esta prestado")
        }
    }

}
libro1 = new Libro("libro1","apellido1")
libro1.prestar();
libro1.prestar();
libro1.prestar();