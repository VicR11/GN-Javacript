export function ageCalculator(year, month, day) {
    let fechaActual = new Date();
    let fechaNac = new Date(year,month,day)
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    if (fechaActual.getMonth() < fechaNac.getMonth() || (fechaActual.getMonth() === fechaNac.getMonth() && fechaActual.getDate() < fechaNac.getDate())) { edad--; } return edad;
    

}


 //console.log(ageCalculator(1998,11,5));



 //function calcularEdad(fechaNacimiento) { const fechaActual = new Date(); const fechaNac = new Date(fechaNacimiento); let edad = fechaActual.getFullYear() - fechaNac.getFullYear(); // Ajustar la edad si el cumpleaños aún no ha pasado este año if (fechaActual.getMonth() < fechaNac.getMonth() || (fechaActual.getMonth() === fechaNac.getMonth() && fechaActual.getDate() < fechaNac.getDate())) { edad--; } return edad;}// Ejemplo de uso const fechaNacimiento = "1990-01-15"; // Formato: AAAA-MM-DD const edad = calcularEdad(fechaNacimiento);console.log("La edad es: " + edad + " años");