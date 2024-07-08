import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import BotonPrincipal from '../../components/botonPrincipal';

export default function Carrusel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializar AOS con la duración deseada
    const interval = setInterval(nextImage, 3000); // Cambia de imagen cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refrescar AOS después de cada cambio de imagen
  }, [currentImage]);

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <img
        src={images[currentImage].src}
        alt={images[currentImage].text}
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
        data-aos="fade-in"
        data-aos-duration="1000"
      />

      <div className="grid justify-items-center text-white mx-auto mb-20 sm:mb-0 animate-fade-down px-4 sm:px-8 max-w-screen-md md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg">
        <h1 className="pb-4 text-yellow-300 md:mx-1 text-center text-3xl lg:text-7xl">{images[currentImage].title}</h1>
        <p className="text-sm text-justify mx-9 md:mx-auto sm:text-lg mt-2">{images[currentImage].text}</p>
        <a href={images[currentImage].buttonUrl} className="inline-block mt-4">
          <BotonPrincipal text="Leer más" className="text-black px-5 py-1.5 text-sm md:text-base md:px-16 md:py-4" />
        </a>
      </div>



      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 sm:w-12 sm:h-12 stroke-white/50 hover:stroke-white cursor-pointer ease-in-out duration-300 absolute top-1/2 left-3 transform -translate-y-1/2 p-2 rounded-full focus:outline-none bg-white/30 hover:bg-white/50"
        onClick={prevImage}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 sm:w-12 sm:h-12 stroke-white/50 hover:stroke-white cursor-pointer ease-in-out duration-300 absolute top-1/2 right-3 transform -translate-y-1/2 p-2 rounded-full focus:outline-none bg-white/30 hover:bg-white/50"
        onClick={nextImage}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 pb-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 cursor-pointer border-2 ${currentImage === index ? "bg-white" : "bg-transparent"} border-white`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
}
