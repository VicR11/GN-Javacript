let tarea = document.getElementById("inputTarea")
let lista = document.querySelector("ul")
let botonAgregar = document.getElementById("agregar")




botonAgregar.addEventListener("click", function(event) {
    event.preventDefault(); 
    //lista.innerHTML += `<li>${tarea.value} <button class="EliminarTarea">Eliminar</button></li>`; 
    //tarea.value ="";
    
    let elemento = document.createElement("li")
    elemento.textContent = tarea.value;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("EliminarTarea");

    

    elemento.appendChild(checkbox)
    elemento.appendChild(botonEliminar);
    lista.appendChild(elemento)

    botonEliminar.addEventListener("click", function() {
        elemento.remove(); 
    });

    console.log(elemento);
    
})






