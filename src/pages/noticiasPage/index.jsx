// pages/Noticias.js
import { useState } from "react";
import useScrollTop from "../../hooks/useScrollTop";
import Carrusel from "../../components/carrusel";
import { noticias } from "../../data/noticias";
import n4 from "../../components/carrusel/img/c3.jpg";
import MainNews from "../../components/mainNews";
import SecondaryNews from "../../components/secndaryNews";

export default function Noticias() {
  const [showAllNews, setShowAllNews] = useState(false);
  //useScrollTop();

  const imagenes = noticias.map((noticia) => ({
    id: noticia.id,
    src: noticia.image,
    title: noticia.title,
    text: noticia.summary,
    buttonUrl: `/noticia/${noticia.id}`,
  }));

  const mainNews = {
    img: n4,
    category: "Categoria",
    title: "Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    sumary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repudiandae placeat libero ad impedit, soluta itaque rem hic labore iusto quasi optio sint, error vero consectetur recusandae voluptas. Molestiae, saepe.",
    date: "Fecha de publicación: 18 de Octubre del 2024",
    description:
      "Donec efficitur sagittis ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec consectetur nec ligula a tristique. Suspendisse mi ligula, aliquet sit amet sagittis eu, tincidunt non tortor. Donec laoreet auctor est ac sagittis. Sed placerat, est at finibus faucibus, elit erat commodo erat, ac elementum diam lectus sed purus. In hac habitasse platea dictumst. Proin non ante in urna interdum gravida. Suspendisse potenti. Vivamus dignissim interdum dolor, quis dictum risus hendrerit in. Duis molestie, lorem fringilla venenatis interdum, quam lacus tincidunt purus, quis tempor libero justo vitae ipsum. Nullam finibus auctor arcu, eu sollicitudin tellus rutrum et.",
  };

  const secondaryNews = [
    {
      img: n4,
      category: "Categoria",
      title: "Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      sumary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repudiandae placeat libero ad impedit, soluta itaque rem hic labore iusto quasi optio sint, error vero consectetur recusandae voluptas. Molestiae, saepe.",
      date: "Fecha de publicación: 18 de Octubre del 2024",
      description:
        "Donec efficitur sagittis ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec consectetur nec ligula a tristique. Suspendisse mi ligula, aliquet sit amet sagittis eu, tincidunt non tortor. Donec laoreet auctor est ac sagittis. Sed placerat, est at finibus faucibus, elit erat commodo erat, ac elementum diam lectus sed purus. In hac habitasse platea dictumst. Proin non ante in urna interdum gravida. Suspendisse potenti. Vivamus dignissim interdum dolor, quis dictum risus hendrerit in. Duis molestie, lorem fringilla venenatis interdum, quam lacus tincidunt purus, quis tempor libero justo vitae ipsum. Nullam finibus auctor arcu, eu sollicitudin tell",
    },
    {
      img: n4,
      category: "Categoria",
      title: "Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      sumary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repudiandae placeat libero ad impedit, soluta itaque rem hic labore iusto quasi optio sint, error vero consectetur recusandae voluptas. Molestiae, saepe.",
      date: "Fecha de publicación: 18 de Octubre del 2024",
      description:
        "Donec efficitur sagittis ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec consectetur nec ligula a tristique. Suspendisse mi ligula, aliquet sit amet sagittis eu, tincidunt non tortor. Donec laoreet auctor est ac sagittis. Sed placerat, est at finibus faucibus, elit erat commodo erat, ac elementum diam lectus sed purus. In hac habitasse platea dictumst. Proin non ante in urna interdum gravida. Suspendisse potenti. Vivamus dignissim interdum dolor, quis dictum risus hendrerit in. Duis molestie, lorem fringilla venenatis interdum, quam lacus tincidunt purus, quis tempor libero justo vitae ipsum. Nullam finibus auctor arcu, eu sollicitudin tell",
    },
    {
      img: n4,
      category: "Categoria",
      title: "Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      sumary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repudiandae placeat libero ad impedit, soluta itaque rem hic labore iusto quasi optio sint, error vero consectetur recusandae voluptas. Molestiae, saepe.",
      date: "Fecha de publicación: 18 de Octubre del 2024",
      description:
        "Donec efficitur sagittis ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec consectetur nec ligula a tristique. Suspendisse mi ligula, aliquet sit amet sagittis eu, tincidunt non tortor. Donec laoreet auctor est ac sagittis. Sed placerat, est at finibus faucibus, elit erat commodo erat, ac elementum diam lectus sed purus. In hac habitasse platea dictumst. Proin non ante in urna interdum gravida. Suspendisse potenti. Vivamus dignissim interdum dolor, quis dictum risus hendrerit in. Duis molestie, lorem fringilla venenatis interdum, quam lacus tincidunt purus, quis tempor libero justo vitae ipsum. Nullam finibus auctor arcu, eu sollicitudin tell",
    },
  ];

  const handleShowAllNews = () => {
    setShowAllNews(!showAllNews);
  };

  return (
    <>
      <Carrusel images={imagenes} />
      <div className=" bg-neutral-900">
        <div className=" p-10 sm:p-20">
          <div className=" bg-neutral-800 w-full p-4 rounded-xl">
            <p className=" text-center text-neutral-400 text-xs sm:text-base">
              Bienvenido a SM8 Noticias
            </p>
            <p className=" text-center text-yellow-300 pt-2 sm:text-2xl">
              !Mantente al día con nosotros!
            </p>
            <p className=" text-center text-white sm:text-xl">
              Explora las noticias más recientes y relevantes de SM8
            </p>
          </div>
          <MainNews
            img={n4}
            category={mainNews.category}
            title={mainNews.title}
            sumary={mainNews.sumary}
            date={mainNews.date}
            description={mainNews.description}
          />
          <p className=" pt-8 text-yellow-300 text-4xl">Ultimas Noticias</p>
          <div className=" grid grid-cols-1 xl:grid-cols-3 gap-8 pt-8">
            {secondaryNews.map((news, index) => (
              <SecondaryNews
                key={index}
                img={news.img}
                category={news.category}
                title={news.title}
                sumary={news.sumary}
                date={news.date}
                description={news.description}
              />
            ))}
          </div>
          <div className=" flex justify-end w-full py-8">
            <p
              className=" text-yellow-300 cursor-pointer hover:text-yellow-300/50 hidden sm:block"
              onClick={handleShowAllNews}
            >
              {showAllNews ? "Menos noticias" : "Todas las noticias"}
            </p>
          </div>
          {showAllNews ? (
            <>
              <div className=" animate-fade">
                <p className=" py-8 text-yellow-300 text-4xl">
                  Todas las Noticias
                </p>
                <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {secondaryNews.map((news, index) => (
                    <SecondaryNews
                      key={index}
                      img={news.img}
                      category={news.category}
                      title={news.title}
                      sumary={news.sumary}
                      date={news.date}
                      description={news.description}
                    />
                  ))}
                </div>
                <div className=" flex justify-center pt-8">
                  <div className=" flex justify-between items-center">
                    <p className=" text-white pr-4 hover:text-white/50 cursor-pointer">
                      {" "}
                      Atras
                    </p>
                    <p className=" px-3 py-1 border text-white rounded-md">1</p>
                    <p className=" text-white pl-4 hover:text-white/50 cursor-pointer">
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
