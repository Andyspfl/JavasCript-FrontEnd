const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;
const totalImages = images.length;

// Función para actualizar el carrusel
function updateCarousel() {
    // Mover el carrusel a la posición correspondiente
    carouselImages.style.transition = 'transform 0.5s ease-in-out';
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Función para mover al siguiente elemento
function nextImage() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volver al primero
    }
    updateCarousel();
}

// Función para mover al anterior elemento
function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1; // Volver al último
    }
    updateCarousel();
}

// Configurar eventos de los botones
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Inicializar el carrusel
updateCarousel();
