import {rubricPassFail} from "./task5.js"
export function rubricExcellent(nota) {
    if(nota > 8)
        return "Excellent"
    else
        return rubricPassFail(nota)
}

//console.log(rubricExcellent(5));
