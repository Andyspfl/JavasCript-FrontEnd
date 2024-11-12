import React from 'react'
import style from './Comic.module.css'  // Importamos los estilos

function Comic({children}) {
  return (
    <div className={style.comicContainer}> {/* Usamos el contenedor de los cómics */}
      <img src={children} alt="Comic" className={style.comicImg} /> {/* Aplicamos los estilos a la imagen */}
    </div>
  )
}

export default Comic
