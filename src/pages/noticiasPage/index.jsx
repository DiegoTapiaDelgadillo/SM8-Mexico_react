// pages/Noticias.js
import { useState, useEffect } from "react";
import useScrollTop from "../../hooks/useScrollTop";
import Carrusel from "../../components/carrusel";
import { noticias } from '../../data/noticias'; // Importa el archivo de noticias

export default function Noticias() {
  useScrollTop();

  const imagenes = noticias.map(noticia => ({
    id: noticia.id,
    src: noticia.image,
    title: noticia.title,
    text: noticia.summary, 
    buttonUrl: `/noticia/${noticia.id}`
  }));

  return (
    <div>
      <Carrusel images={imagenes} />
    </div>
  );
}
