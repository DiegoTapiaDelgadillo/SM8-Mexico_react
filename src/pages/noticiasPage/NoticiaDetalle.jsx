import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { noticias } from "../../data/noticias";
import Contacto from "../../components/contacto";
import CardNoticia from "../../components/cardNoticia/CardNoticia";
import Rose1 from "./img/1.png";
import Rose2 from "./img/2.png";
import Rose3 from "./img/3.png";
import AOS from "aos";
import "aos/dist/aos.css";

function NoticiaDetalle() {
  const { id } = useParams();
  const noticia = noticias.find((noticia) => noticia.id === parseInt(id));

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init();
      AOS.refresh();
    }, 100); 
    return () => clearTimeout(timer); 
  }, [id]);

  const otrasNoticias = noticias
    .filter((n) => n.id !== parseInt(id))
    .slice(0, 3);

  return (
    <div>
      <div className="bg-neutral-900 text-white min-h-screen md:pt-20 pt-10 relative">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 relative">
            <div
              className="hidden lg:flex lg:col-span-2 lg:justify-center lg:items-start relative"
              data-aos="fade-right"
            >
            </div>
            <div className="lg:col-span-8" data-aos="zoom-in">
              <h1 className="text-left text-4xl text-yellow-300 mb-4">
                {noticia.title}
              </h1>
              <p className="text-sm text-gray-500 mb-2">
                Publicado el {noticia.date}
              </p>
              <hr className="border-t-2 border-gray-400 mb-8" />
              <p className="text-lg text-justify text-white mb-4">
                {noticia.summary}
              </p>
              <img
                src={noticia.image}
                alt={noticia.title}
                className="w-full mb-8 rounded-lg shadow-lg"
              />
              <p className="text-lg text-justify text-white mb-4">
                {noticia.content}
              </p>
              <p className="text-lg text-justify font-bold text-white mb-4">
                {noticia.content2}
              </p>
              <p className="text-lg text-justify text-white mb-4">
                {noticia.content3}
              </p>
              <p className="text-lg text-justify text-white mb-4">
                {noticia.content4}
              </p>
            </div>
            <div
              className="hidden lg:flex lg:col-span-2 lg:justify-center lg:items-start relative"
              data-aos="fade-left"
            >
            </div>
          </div>
          <h2 className="text-3xl pt-20 text-yellow-300 mb-4">
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

      <div className="bg-neutral-800 flex justify-center items-center w-full xl:p-10">
        <Contacto
          titulo={"¿Te interesa saber más?"}
          cuerpo={
            "En andamios SM8, estamos para servirte y ser tu Socio de confianza para Soluciones Inigualables"
          }
          rosetin={Rose1}
        />
      </div>
    </div>
  );
}

export default NoticiaDetalle;
