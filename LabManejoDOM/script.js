let tarea = document.getElementById("inputTarea")
let lista = document.querySelector("ul")
let botonAgregar = document.getElementById("agregar")




botonAgregar.addEventListener("click", function(event) {
    event.preventDefault(); 
    lista.innerHTML += `<li>
                            <label>
                            <input type="checkbox">
                            ${tarea.value}
                            </label>
                            <button class="EliminarTarea">Eliminar</button>
                        </li>` 
    tarea.value ="";

    /*let botonEliminarList = document.querySelectorAll(".EliminarTarea")
        botonEliminarList.forEach(botonEliminar =>{
            botonEliminar.addEventListener("click", function(event) {
                console.log(botonEliminar);
                botonEliminar.parentElement.remove();
                
            })
        })*/
    console.log(lista);
    
})

lista.addEventListener("click", function(event) {
     //event.target --> toma el elemento 
   if (event.target.classList.contains("EliminarTarea")) {
        event.target.parentElement.remove();
    }
});


lista.addEventListener("click", function(event) {
    //En este caso checked es un atributo del input porque eso se accede directamente 
    if(event.target.checked){
        event.target.parentElement.classList.toggle("checked")
}

    
    


});














