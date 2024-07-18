// 5.  Número máximo entre cuatro números: 
// Declara cuatro variables a, b, c y d con valores numéricos. Utiliza condicionales 
// para determinar cuál de los cuatro números es el mayor y muéstralo. 

let a = 5;
let b = 10;
let c = 3;
let d = 8;

if (a > b && a > c && a > d) {
    console.log("El número más grande es: " + a);
} else if (b > a && b > c && b > d) {
    console.log("El número más grande es: " + b);
} else if (c > a && c > b && c > d) {
    console.log("El número más grande es: " + c);
} else {
    console.log("El número más grande es: " + d);
}