// Declaracion de variables 
var nombre = "Juan";
let edad = 25;
const activo = true;

console.log(nombre, edad, activo)

// Operadores aritmeticos

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));

// Operaciones aritmeticas
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

// Mostrar resultados
console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicacion: ${multiplicacion}`);
console.log(`Division: ${division}`);


// Operadores de Comparacion

num1 = 5;
num2 = 10;

// Comparar los numeros
if(num1 > num2){
    console.log("El primer numero es mayor.")
}
else if (num1 < num2) {
    console.log("el segundo numero es mayor.")
}
else {
    console.log("Ambos numeros son iguales")
}

// Condicionales: if, else if, else

let numero = -5;

if(numero > 0){
    console.log("El numero es positivo.")
}
else if(numero < 0 ){
    console.log("El numero es negativo.")
}
else{
    console.log("El numero es cero.");
    
}

// Condicional: switch

let bebida = 2;
switch (bebida) {
    case 1:
        console.log("Cafe");
        break;
    case 2:
        console.log("Te");
        break;
    case 3:
        console.log("Agua");
        break;
    default:
        console.log("Opcion no valida");
}

// Bucles for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Bucles while
numero = 0;
while (numero <= 10) {
    numero = parseInt(prompt("Ingrese un numero"))
}

// Bucles do while
let i = 1
do {
    console.log(i);
    i++;
} while (i <= 5);

// Arreglos o Arrays
let numeros = [1, 2, 3, 4, 5];
suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log(`La suma de los numeros es: ${suma}`);

// Metodos de los Arreglos
numeros = [2, 3, 5, 7, 8];

// Multiplicar cada numero por 2
let multiplicados = numeros.map(num => num * 2);
console.log(`Multiplicados por dos${multiplicados}`);

// Filtrar los numeros mayores que 10
let mayoresQue10 = multiplicados.filter(num => num > 10);
console.log(`Mayores que 10: ${mayoresQue10}`)