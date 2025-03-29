export class Player {
  constructor(name, level) {
    this.name =name,
    this.level = level
  }
  info(){
      console.log(`${this.name} has reached Level ${this.level}!`);
   }
  levelUp(){
      console.log(`${this.name} has reached Level ${this.level}!`);
      this.level +=1
      console.log(`${this.name} has reached Level ${this.level}!`);
    }
    
  }