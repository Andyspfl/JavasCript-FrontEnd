import React from 'react';
import styles from './ComicItem.module.css'; // Importamos los estilos
import Button from '../Button/Button'; // Importamos el componente Button
import Comic from './Comic/Comic';
const ComicItem = ({ comic }) => {
  return (
    <div className={styles.comicItem}>
      <Comic>https://images.cdn2.buscalibre.com/fit-in/360x360/2e/9e/2e9ef3597f6c36fb4369fded8f3ddfd5.jpg</Comic>
      <h3>{comic.title}</h3>
      <p>{comic.description}</p>
      <span className={styles.price}>${comic.price}</span>
      <Button>Aniadir al carrito</Button>
    </div>
  );
};

export default ComicItem;
