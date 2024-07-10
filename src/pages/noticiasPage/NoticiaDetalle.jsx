// pages/NoticiaDetalle.js
import { useParams } from "react-router-dom";
import { noticias } from "../../data/noticias";
import Contacto from "../../components/contacto";
import useScrollTop from "../../hooks/useScrollTop";
import Rose from "./img/Character_Render_02.png";

function NoticiaDetalle() {
  const { id } = useParams();
  const noticia = noticias.find((noticia) => noticia.id === parseInt(id));

  return (
    <div>
      <div className="bg-neutral-900 text-white min-h-screen md:pt-20 pt-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center text-justify">
            <h1 className="text-left text-4xl font-bold text-yellow-300 mb-4">
              {noticia.title}
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              Publicado el {noticia.date}
            </p>
            <p className="text-lg text-white mb-4 max-w-3xl">
              {noticia.summary}
            </p>
            <div className="flex flex-wrap justify-center items-center my-8">
              <img
                src={noticia.image}
                alt={noticia.title}
                className="w-full max-w-3xl mb-8 rounded-lg shadow-lg"
              />
            </div>
            <p className="text-lg text-justify text-white mb-4 max-w-3xl">
              {noticia.content}
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-neutral-800 flex justify-center items-center w-full xl:p-10">
        <Contacto
          titulo={"¿Te interesa saber más?"}
          cuerpo={
            "En andamios SM8, estamos para servirte y ser tu Socio de confianza para Soluciones Inigualables"
          }
          rosetin={Rose}
        ></Contacto>
      </div>
    </div>
  );
}

export default NoticiaDetalle;
