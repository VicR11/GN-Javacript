/*3. Semáforo (If/else + estados)
Simular el cambio de luces de un semáforo.
Tareas:
1.Usa el constructor Semaforo (inicia en "rojo").
2.Implementa el método cambiar() que rote entre "rojo" → "verde" → "amarillo" →
"rojo" usando if/else.
3.Llama al método 3 veces y verifica que el ciclo funcione.*/

function Semaforo(){
    this.estado = "rojo";

    this.cambiar = function(){
        if(this.estado == "rojo"){
            this.estado = "verde"
        }else if(this.estado == "verde") {
             this.estado = "amarillo"
        }else{
            this.estado = "rojo"
        }

        return this.estado
    }

}

semaforo1 = new Semaforo();
console.log("Estado inicial: "+semaforo1.estado);
console.log("Cambia: "+semaforo1.cambiar());
console.log("Cambia: "+semaforo1.cambiar());
console.log("Cambia: "+semaforo1.cambiar());
console.log("Cambia: "+semaforo1.cambiar());
