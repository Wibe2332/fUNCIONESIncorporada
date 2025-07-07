//Redondeo y truncado en JavaScript
let numero = 8.5, Redondeo, Truncado;
//Redondeo
//math.round() redondea al entero más cercano
//.5 se redondea hacia arriba
Redondeo = Math.round(numero);
console.log(Redondeo); // 9

numero = 8.4;
//Redondeo
Redondeo = Math.round(numero);
console.log(Redondeo); // 8//
//Truncado
//Math.trunc() elimina la parte decimal
Truncado = Math.trunc(numero);
console.log(Truncado);

numero = 8.9;
Truncado = Math.trunc(numero);
console.log(Truncado); // 8
console.log(Redondeo);