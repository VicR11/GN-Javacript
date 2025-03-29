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
    
  

  const player1 = new Player("Juanito", 2)
  player1.jugar()
  player1.jugar()
  player1.jugar()
  player1.jugar()
  player1.jugar()
  player1.jugar()
  player1.jugar()
  player1.jugar()
  player1.jugar()
  player1.jugar()

 /*export class Player {
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
  }
  levelUp(){
      
      console.log(this.experiencia);
      
      if(this.experiencia%5==0){
      this.level +=1
      console.log(`${this.name} has reached Level ${this.level}!`);
  }
      
    
      
    }
 
    
  }

  const player1 = new Player("Juanito", 2)
 
 player1.jugar()
 player1.jugar()
 player1.jugar()
 player1.jugar()
 player1.jugar()
 player1.levelUp()
 player1.jugar()
 player1.jugar()
 player1.jugar()
 player1.jugar()
 player1.jugar()
 player1.levelUp()*/

 
