import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";
import Carrusel from "../../components/carrusel";
import { noticias } from "../../data/noticias";
import CardNoticia from "../../components/cardNoticia/CardNoticia";
import CardNoticiaGrande from "../../components/cardNoticia/CardNoticiaPrincipal";
import CardNoticiaPequena from "../../components/cardNoticia/CardNoticiaPequeña";

export default function Noticias() {
  useScrollTop();
  const { id } = useParams();
  const noticia = noticias.find((noticia) => noticia.id === parseInt(id));

  const imagenes = noticias.map((noticia) => ({
    id: noticia.id,
    src: noticia.image,
    title: noticia.title,
    text: noticia.summary,
    buttonUrl: `/noticia/${noticia.id}`,
  }));

  const [noticiaGrande, ...otrasNoticias] = noticias;

  return (
    <div>
      <Carrusel images={imagenes} />
      <div className="bg-neutral-800 text-white min-h-screen md:pt-20 pt-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-rows-2 gap-4 mx-4 sm:mx-20">
          <div className="md:col-span-2 sm:row-span-2 sm:col-span-2">
            <CardNoticiaGrande
              title={noticiaGrande.title}
              section={noticiaGrande.section}
              date={noticiaGrande.date}
              image={noticiaGrande.image}
              summary={noticiaGrande.summary}
              link={`/noticia/${noticiaGrande.id}`}
              delay={100}
            />
          </div>
          
            {otrasNoticias.slice(0, 2).map((noticia, index) => (
              <div key={index}>
              <CardNoticiaPequena
                title={noticia.title}
                section={noticia.section}
                date={noticia.date}
                image={noticia.image}
                link={`/noticia/${noticia.id}`}
                delay={(index + 1) * 100}
              />
              </div>
            ))}
          
        </div>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl py-5 text-yellow-300 mb-0">
            Otras Noticias
          </h2>
          <hr className="border-t-2 border-gray-400 mb-10"/>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {otrasNoticias.map((noticia, index) => (
              <CardNoticia
                key={noticia.id}
                title={noticia.title}
                section={noticia.section}
                date={noticia.date}
                image={noticia.image}
                link={`/noticia/${noticia.id}`}
                delay={(index + 1) * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
