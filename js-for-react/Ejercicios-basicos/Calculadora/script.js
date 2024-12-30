const numeros = document.querySelectorAll('.numero')


const operadores = document.querySelectorAll('.operador')



const pantalla = document.querySelector('.vistaPrevia')

// Manejo de los numeros
numeros.forEach((numero) => {
    
    numero.addEventListener('click', (e) => {
        pantalla.textContent += e.target.textContent
    })
})
