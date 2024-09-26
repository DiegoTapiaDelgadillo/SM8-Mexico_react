import { useState, useEffect, useRef } from "react";
import Modal from "../modal";

export default function Carrusel({ noticias }) {
  const [currentNew, setCurrentNew] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef();
  const intervalRef = useRef();

  const nextNews = () => {
    setCurrentNew((prev) => (prev === noticias.length - 1 ? 0 : prev + 1));
  };

  const goToNews = (index) => {
    setCurrentNew(index);
    setCurrentImageIndex(0); 
  };

  const prevNews = () => {
    setCurrentNew((prev) => (prev === 0 ? noticias.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === noticias[currentNew].images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? noticias[currentNew].images.length - 1 : prevIndex - 1
    );
  };

  const handleOpenModal = () => {
    setCurrentImageIndex(0); 
    modalRef.current.openModal();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    modalRef.current.closeModal();
    setIsModalOpen(false);
    setCurrentImageIndex(0); 
  };

  const formatDescription = (text) => {
    return text.split('.').map((sentence, index) => (
      <span key={index}>
        {sentence.trim()}{sentence && '.'}
        <br />
        <br />
      </span>
    ));
  };

  useEffect(() => {
    if (!isModalOpen) {
      intervalRef.current = setInterval(nextNews, 10000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isModalOpen, currentNew]);

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <img 
        src={noticias[currentNew].images[0]?.imagen || ""}
        alt={noticias[currentNew].text}
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
        data-aos="fade-in"
        data-aos-duration="1000"
      />

      <div className="grid justify-items-center text-white mx-auto mb-20 sm:mb-0 animate-fade-down px-4 sm:px-8 max-w-screen-md md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg">
        <h1
          className="pb-4 text-yellow-300 md:mx-1 text-center text-2xl lg:text-5xl cursor-pointer"
          onClick={handleOpenModal}
        >
          {noticias[currentNew].title}
        </h1>
        <p className="text-sm text-center mx-9 md:mx-auto sm:text-lg mt-2">
          {noticias[currentNew].text}
        </p>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 sm:w-12 sm:h-12 stroke-white/50 hover:stroke-white cursor-pointer ease-in-out duration-300 absolute top-1/2 left-3 transform -translate-y-1/2 p-2 rounded-full focus:outline-none bg-white/30 hover:bg-white/50"
        onClick={prevNews}
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
        onClick={nextNews}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:pb-0 sm:mt-2">
        {noticias.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 cursor-pointer border-2 rounded-full ${
              currentNew === index ? "bg-white" : "bg-transparent"
            } border-white`}
            onClick={() => goToNews(index)}
          />
        ))}
      </div>

      <Modal ref={modalRef} onClose={handleCloseModal}>
        <div className="max-w-screen-md max-h-[80vh] h-auto overflow-y-auto p-6 pt-1 mx-auto bg-neutral-800 rounded-lg">
          <p className="text-neutral-500 text-xs pb-1">{noticias[currentNew].category}</p>
          <p className="text-yellow-300 text-2xl xl:text-3xl">{noticias[currentNew].title}</p>
          <p className="pt-4 my-2 w-full border-t text-neutral-500 text-xs border-neutral-500">
            {noticias[currentNew].date}
          </p>
          <p className="text-white py-4">{noticias[currentNew].text}</p>
          <figure className="relative">
            <img
              src={noticias[currentNew].images[currentImageIndex]?.imagen || ""}
              alt=""
              className="rounded-xl max-w-full h-auto"
            />
            {noticias[currentNew].images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-300 ease-in-out"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-300 ease-in-out"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </figure>
          <p className="pt-4 text-white">{formatDescription(noticias[currentNew].description)}</p>
        </div>
      </Modal>
    </div>
  );
}
