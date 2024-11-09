import React from 'react';
import styles from './ComicItem.module.css'; // Importamos los estilos

const ComicItem = ({ comic }) => {
  return (
    <div className={styles.comicItem}>
      <img src={comic.imageUrl} alt={comic.title} className={styles.comicImage} />
      <h3>{comic.title}</h3>
      <p>{comic.description}</p>
      <span className={styles.price}>${comic.price}</span>
      <button className={styles.button}>Añadir al carrito</button>
    </div>
  );
};

export default ComicItem;
