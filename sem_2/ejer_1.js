// 1. Determina el mayor de tres números: 
// Declara tres variables a, b y c con valores numéricos y utiliza condicionales 
// para determinar cuál de ellos es el mayor. 

let a;
let b;
let c;

function isNumber(value) {
    return !isNaN(Number(value));
}

do {
    a = prompt("Ingrese el número de a:");
    if (!isNumber(a)){
        a = prompt("Ingrese una opcion valida - Ingrese nuevamente el valor de A:");
    }
} while (!isNumber(a));

do {
    b = prompt("Ingrese el número de b:");
    if (!isNumber(b)){
        b = prompt("Ingrese una opcion valida - Ingrese nuevamente el valor de B:");
    }
} while (!isNumber(b));

do {
    c = prompt("Ingre el número de c:");
    if (!isNumber(c)){
        c = prompt("Ingrese una opcion valida - Ingrese nuevamente el valor de C:");
    }
} while (!isNumber(c));

if (a > b && a > c) {
    console.log("El número " + a + " es mayor que "+ b + " y "+c);
} else if (b > a && b > c) {
    console.log("El número " + b + " es mayor que "+ a + " y "+c);
} else if (c > a && c > b) {
    console.log("El número " + c + " es mayor que "+ a + " y "+b);
}
else{
    console.log("Todos los números "+a+", "+b+", "+c+" son iguales");
}
