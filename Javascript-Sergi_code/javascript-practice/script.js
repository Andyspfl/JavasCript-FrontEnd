function suma(a,b){
    return a+b;
}

function palindromo(palabra){
    let palabraNormal = '';
    let n = palabra.length;
    for (let i = 0; i < palabra.length; i++) {
        palabraNormal += palabra.charAt(n-i-1);
    }
    if(palabraNormal === palabra){
        console.log("Es palindromo");
    }
    else{
        console.log("No es palindromo");
    }
}

function filtrarPares(Numeros){
    let pares = [];
    for (let i = 0; i < Numeros.length; i++) {
        const element = Numeros[i];
        if(element%2 === 0){
            pares.push(element);
        }
    }
    return pares;
}


palindromo("HOla");
console.log(filtrarPares([1,2,3,4,5,6,7,8,9,10]));
