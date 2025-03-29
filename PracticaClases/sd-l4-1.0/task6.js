export class Grupo {
    constructor(name) {
      this.name = name
      this.grupo =[];
      
    }
    agregar(player){
      
      this.grupo.push(player)
    }

    mostrar(){
      console.log("Integrantes grupo "+this.name+" :");
      
      for(let item of this.grupo){
        console.log(item);
        
      }
    }

    eliminar(player){
      
      this.grupo = this.grupo.filter(item => item.name !== player.name);
      
    }
    
    
  }
 
  export class Player {
    constructor(name, level) {
      this.name =name,
      this.level = level,
      this.experiencia = 0
      
    }
    info(){
        console.log(`${this.name} has reached Level ${this.level}!`);
      }
    
    jugar(){
        this.experiencia += 1;   
        if(this.experiencia%5==0)
          this.levelUp()
    }
    levelUp(){
      
      this.level +=1
      console.log(`${this.name} has reached Level ${this.level}!`);
      }
      
    
      
    }
  

  const player1 = new Player("Juanito",2)
  const player2 = new Player("Luis",4)
  const player3 = new Player("Sergio",8)
  const grupo1 = new Grupo("Grupo 1")
  grupo1.agregar(player1)
  grupo1.agregar(player2)
  grupo1.agregar(player3)
  grupo1.mostrar()
  grupo1.eliminar(player2)
  grupo1.mostrar()