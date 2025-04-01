import {rubricExcellent} from "./task6.js"
export function rubricPerfect(nota) {
   if(nota === 11)
    return "Perfect"
   else
    return rubricExcellent(nota)
}
console.log(rubricPerfect(4));
console.log(rubricPerfect(5));
console.log(rubricPerfect(11));
console.log(rubricPerfect(9));
