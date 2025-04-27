

let tarea = document.getElementById("inputTarea")
let lista = document.querySelector("ul")
let botonAgregar = document.getElementById("agregar")
let eliminarTodo = document.getElementById("EliminarLista")
let listaTareas = JSON.parse(localStorage.getItem("KeyLista")) || [] 
let contador = 0;

if(listaTareas.length >0){
    mostrarLista(); //para que no se muestre solo despues de dar click
    contador = listaTareas[listaTareas.length -1].id+1
}

let tareaObj ={}

botonAgregar.addEventListener("click", function(event) {
    event.preventDefault(); 
    tareaObj ={
        id:contador++,
        tarea:tarea.value,
        checked : false
    };
    listaTareas.push(tareaObj)
    localStorage.setItem("KeyLista",JSON.stringify(listaTareas))
    tarea.value ="";
    mostrarLista()

});


function mostrarLista(){
    const listaActual = JSON.parse(localStorage.getItem("KeyLista"))
    lista.innerHTML = ""
    listaActual.forEach((element) => {

        lista.innerHTML += `<li data-id="${element.id}">
        <label>
        <input type="checkbox" ${element.checked ? "checked" : ""}>
            <span>${element.tarea}</span>
        </label>
        <button class="EliminarTarea">Eliminar</button>
    </li>` 
    })
    
}




lista.addEventListener("click", function(event) {
  if (event.target.classList.contains("EliminarTarea")) {
        listaTareas = listaTareas.filter(item => item.id !== Number(event.target.parentElement.dataset.id));
        localStorage.setItem("KeyLista", JSON.stringify(listaTareas));
        mostrarLista()   
   }
    //event.target.closest("li") sube por los elementos padres hasta encontrar el primero que sea un <li>
   if(event.target.checked){
        listaTareas.forEach((item) => {
            if(item.id == event.target.closest("li").dataset.id){
                item.checked=true
            }
        });
        localStorage.setItem("KeyLista", JSON.stringify(listaTareas));
   }

   if(!event.target.checked){
        listaTareas.forEach((item) => {
            if(item.id == event.target.closest("li").dataset.id){
                item.checked=false
            }
        });
        localStorage.setItem("KeyLista", JSON.stringify(listaTareas));
    }  
});


eliminarTodo.addEventListener("click", function() {
     localStorage.removeItem("KeyLista");
     listaTareas =[]
     mostrarLista()
     contador = 0;
  });

  

 

