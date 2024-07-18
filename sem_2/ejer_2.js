// 2. Determina el rango de un número: 
// Declara una variable número con un valor numérico y utiliza condicionales para 
// determinar en qué rango se encuentra. 

let numero;

if (numero > 0 && numero <= 10) {
    console.log("El número " + numero + " se encuentra en el rango de 0 a 10");
} else if (numero > 10 && numero <= 20) {
    console.log("El número " + numero + " se encuentra en el rango de 11 a 20");
} else {
    console.log("El número " + numero + " no se encuentra en el rango de 0 a 20");
}