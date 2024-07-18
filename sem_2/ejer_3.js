// 3. Calculadora simple: 
// Declara tres variables: a (un número), operador (un operador aritmético como 
// cadena), y b (otro número). Utiliza condicionales para realizar la operación 
// correspondiente y muestra el resultado. 

let a = 5;
let b = 3;
let operador = '+';

switch(operador) {
    case '+':
        console.log(`El resultado de ${a} ${operador} ${b} es ${a + b}`);
        break;
    case '-':
        console.log(`El resultado de ${a} ${operador} ${b} es ${a - b}`);
        break;
    case '*':
        console.log(`El resultado de ${a} ${operador} ${b} es ${a * b}`);
        break;
    case '/':
        if (b !== 0) {
            console.log(`El resultado de ${a} ${operador} ${b} es ${a / b}`);
        } else {
            console.log("Error: División por cero.");
        }
        break;
    default:
        console.log("Error: Operador no válido.");
        break;
}