const numeros = document.querySelectorAll('.numero');

const operaciones = document.querySelectorAll('.operador');

const display = document.querySelector('.vistaPrevia input');

// Variable que mantiene el valor actual de la operacion
let operacion = "";

// Agregar numeros a la operacion
numeros.forEach((numero) => {
    numero.addEventListener("click", () => {
        operacion += numero.textContent;
        display.value = operacion;
    })
})

// Agregar operadores a la operacion
operaciones.forEach((operador) => {
    operador.addEventListener("click", () => {
        if( operador.textContent === "=") {
            // Si presionan el igual, evaluamos la operacion
            try {
                // Remplazamos el igual, evaluamos la operacion
                operacion = operacion.replace(/x/g, "*");
                display.value = eval(operacion); // Evaluamos la operacion y mostramos el resultado
                operacion = display.value; // Guardamos el resultado para nuevas operaciones
            } catch (error) {
                display.value = "Error"; // Si hay un error en la operacion
            }
        }
        else if( operador.textContent === "+" || operador.textContent === "-" || operador.textContent === "x" || operador.textContent === "/") {
            operacion += operador.textContent;
            display.value = operacion;
        }
        else {
            // Si no es el igual, agregamos el operador a la operacion
            operacion += boton.textContent;
            display.value = operacion; // Mostramos la operacion en la pantalla
        }
    })
})