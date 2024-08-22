import { useState, useEffect } from "react";
import axios from "axios";
import useScrollTop from "../../hooks/useScrollTop";
import Carrusel from "../../components/carrusel";
import MainNews from "../../components/mainNews";
import SecondaryNews from "../../components/secndaryNews";

export default function Noticias() {
  const [showAllNews, setShowAllNews] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  useScrollTop();
  
  useEffect(() => {
    axios
      .get("https://api-deo.sm8.com.mx:3000/api/noticias")
      .then((response) => {
        setNoticias(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener las noticias:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-neutral-800 text-yellow-300 text-4xl">
        <span>Cargando</span>
        <svg
          className="ml-4 animate-spin h-10 w-10 text-yellow-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(new Date(dateString));
  };
  
  const mainNewsIndex = noticias.length > 0 ? noticias.length - 1 : 0;
  const mainNews = noticias[mainNewsIndex] || {};
  const secondaryNews = noticias.slice(0, mainNewsIndex);

  const carrusel = noticias
    .map((noticia) => ({
      id: noticia.id,
      images: noticia.imagenes || [],
      title: noticia.titulo || "",
      text: noticia.resumen || "",
      description: noticia.contenido || "", 
      category: noticia.categoria || "", 
      date: formatDate(noticia.fecha) || "",
    }))
    .reverse();

  const handleShowAllNews = () => {
    setShowAllNews(!showAllNews);
  };

  return (
    <>
      <Carrusel noticias={carrusel} />
      <div className="bg-neutral-900">
        <div className="p-10 sm:p-20">
          <div className="bg-neutral-800 w-full p-4 rounded-xl">
            <p className="text-center text-neutral-400 text-xs sm:text-base">
              Bienvenido a SM8 Noticias
            </p>
            <p className="text-center text-yellow-300 pt-2 sm:text-2xl">
              ¡Mantente al día con nosotros!
            </p>
            <p className="text-center text-white sm:text-xl">
              Explora las noticias más recientes y relevantes de SM8
            </p>
          </div>
          {mainNews && mainNews.imagenes ? (
            <MainNews
              images={mainNews.imagenes || []}
              category={mainNews.categoria || ""}
              title={mainNews.titulo || ""}
              sumary={mainNews.resumen || ""}
              date={formatDate(mainNews.fecha)}
              description={mainNews.contenido || ""}
            />
          ) : (
            <div className="text-white">No hay noticias disponibles.</div>
          )}
          <p className="pt-8 text-yellow-300 text-4xl">Últimas Noticias</p>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pt-8">
            {secondaryNews.map((news, index) => (
              <SecondaryNews
                key={index}
                images={news.imagenes || []}
                category={news.categoria || ""}
                title={news.titulo || ""}
                sumary={news.resumen || ""}
                date={formatDate(news.fecha)}
                description={news.contenido || ""}
              />
            ))}
          </div>
          <div className="flex justify-end w-full py-8">
            <p
              className="text-yellow-300 cursor-pointer hover:text-yellow-300/50 hidden sm:block"
              onClick={handleShowAllNews}
            >
              {showAllNews ? "Menos noticias" : "Todas las noticias"}
            </p>
          </div>
          {showAllNews ? (
            <>
              <div className="animate-fade">
                <p className="py-8 text-yellow-300 text-4xl">
                  Todas las Noticias
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {secondaryNews.map((news, index) => (
                    <SecondaryNews
                      key={index}
                      images={news.imagenes || []}
                      category={news.categoria || ""}
                      title={news.titulo || ""}
                      sumary={news.resumen || ""}
                      date={formatDate(news.fecha)}
                      description={news.contenido || ""}
                    />
                  ))}
                </div>
                <div className="flex justify-center pt-8">
                  <div className="flex justify-between items-center">
                    <p className="text-white pr-4 hover:text-white/50 cursor-pointer">
                      Atras
                    </p>
                    <p className="px-3 py-1 border text-white rounded-md">1</p>
                    <p className="text-white pl-4 hover:text-white/50 cursor-pointer">
                      Adelante
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
