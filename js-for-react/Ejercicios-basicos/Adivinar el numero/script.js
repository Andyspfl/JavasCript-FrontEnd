const inputNumero = document.getElementById('numero')

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const btnAdivinar = document.getElementById('btnNumero');

const mensaje = document.querySelector('.containerResultado');
mensaje.textContent = `El numero aleatoria esta entre ${numeroAleatorio-10} y ${numeroAleatorio+10}`

btnAdivinar.addEventListener('click', () => {
    const valorInput = parseInt(inputNumero.value)

    // Seleccionar la clase donde se va a mostrar el mensaje
    const mensaje = document.querySelector('.containerResultado')

    if (valorInput === numeroAleatorio) {
        mensaje.textContent = '¡Felicidades! Has adivinado el número'
    }
    else {
        mensaje.textContent = `Lo siento, el número era ${numeroAleatorio}`
    }
})