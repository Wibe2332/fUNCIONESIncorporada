//Funciones incorporadas en el ejercicio de cadenas

//Obtener la longitud de una cadena
let candena1 = "Hola";

console.log(candena1.length); // 13
//las cadenas son inmutables, no se pueden modificar directamente

console.log(candena1);

candena1 = "Adios";

console.log(candena1);

//Recorrer cada una de los caracteres
for (let i = 0; i < candena1.length; i++) {
    console.log(candena1[i]);
}