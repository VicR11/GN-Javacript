let tarea = document.getElementById("inputTarea")
let lista = document.querySelector("ul")
let botonAgregar = document.getElementById("agregar")
let eliminarTodo = document.getElementById("eliminarLista")
let listaTareas = JSON.parse(localStorage.getItem("KeyLista")) || [] 

if(listaTareas.length>0)
mostrarLista(); //para que no se muestre solo despues de dar click

botonAgregar.addEventListener("click", function(event) {
    event.preventDefault(); 
    listaTareas.push(tarea.value)
    localStorage.setItem("KeyLista",JSON.stringify(listaTareas))
    tarea.value ="";
    mostrarLista()

});


function mostrarLista(){
const listaLocal = JSON.parse(localStorage.getItem("KeyLista"))

lista.innerHTML = ""
listaLocal.forEach(element => {
    lista.innerHTML += `<li>
    <label>
    <input type="checkbox">
        <span>${element}</span>
    </label>
    <button class="EliminarTarea">Eliminar</button>
</li>` 
})
}




lista.addEventListener("click", function(event) {
  if (event.target.classList.contains("EliminarTarea")) {
        listaTareas = listaTareas.filter(tarea => tarea !== event.target.previousElementSibling.textContent.trim());
        localStorage.setItem("KeyLista", JSON.stringify(listaTareas));
        mostrarLista()
   }
   
});


eliminarTodo.addEventListener("click", function(event) {
     localStorage.removeItem("KeyLista");
     mostrarLista()
  });




/*lista.addEventListener("click", function(event) {
    //En este caso checked es un atributo del input por eso se accede directamente 
    if(event.target.checked){
        console.log(event.target);
        event.target.parentElement.classList.toggle("checked")
        console.log(event.target.parentElement);
}});*/



/*


botonAgregar.addEventListener("click", function(event) {
    event.preventDefault(); 
    listaTareas.push(tarea.value)
    localStorage.setItem("KeyLista",JSON.stringify(listaTareas))
    tarea.value ="";
    mostrarLista()

});


function mostrarLista(){
const listaLocal = JSON.parse(localStorage.getItem("KeyLista"))

lista.innerHTML = ""
listaLocal.forEach(element => {
    lista.innerHTML += `<li>
    <label>
    <input type="checkbox">
        <span>${element}</span>
    </label>
    <button class="EliminarTarea">Eliminar</button>
</li>` 
})
}




lista.addEventListener("click", function(event) {
  if (event.target.classList.contains("EliminarTarea")) {
        listaTareas = listaTareas.filter(tarea => tarea !== event.target.previousElementSibling.textContent.trim());
        localStorage.setItem("KeyLista", JSON.stringify(listaTareas));
        mostrarLista()
   }
   
});


eliminarTodo.addEventListener("click", function(event) {
     localStorage.removeItem("KeyLista");
     mostrarLista()
  });


*/