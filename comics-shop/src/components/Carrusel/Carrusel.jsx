import React, { useState } from 'react';

function Carrusel() {
  // Lista de imágenes para el carrusel
  
const images = [
  'https://hips.hearstapps.com/hmg-prod/images/daft-punk-resized-646358077343b.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Daft_Punk_in_2013.jpg/640px-Daft_Punk_in_2013.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7iQqXY2RY6aeIGIrMjjMA0SCOeXPHr9lrNQ&s',
  'https://imagenes.elpais.com/resizer/v2/https%3A%2F%2Fcloudfront-eu-central-1.images.arcpublishing.com%2Fprisa%2FYIU3K3KA5IMK4BNIAILXUST37U.jpg?auth=0b8d54f287bba7cb40449bf0b7ef9bfa81fdbab3c7aeeada64ab751125478fc8&width=1960&height=1103&smart=true'
]

  // Estado para almacenar el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar a la siguiente imagen
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para retroceder a la imagen anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carrusel-container" style={styles.container}>
      <button onClick={prevImage} style={styles.arrowButton}>←</button>
      
      {/* Imagen actual */}
      <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} style={styles.image} />
      
      <button onClick={nextImage} style={styles.arrowButton}>→</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    width: '600px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  arrowButton: {
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: 10,
  }
};

export default Carrusel;
