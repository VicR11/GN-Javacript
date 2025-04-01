import{ageCalculator}  from "./task3.js"

export class FriendAge {
    constructor(name, year, month, day){
        this.name = name
        this.year = year
        this.month = month
        this.day = day
    }

    returnAge(){
        let edad = ageCalculator(this.year,this.month,this.day)
        return `${this.name} is ${edad} today!`;
        
    }
}

let clase1 = new FriendAge("Carlos", 1998,3,23)
clase1.returnAge()