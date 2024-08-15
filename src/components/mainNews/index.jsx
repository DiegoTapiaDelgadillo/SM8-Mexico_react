import Modal from "./../modal";
import { useRef, useState } from "react";

export default function MainNews({
  images = [],
  title,
  date,
  sumary,
  description,
  category,
}) {
  const modalRef = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenModal = () => {
    modalRef.current.openModal();
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
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

  const firstImage = images.length > 0 ? images[0].imagen : '';

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-12 items-center">
        <figure>
          <img src={firstImage} alt="" className="rounded-xl" />
        </figure>
        <div className="lg:px-4 xl:px-24">
          <p className="text-white text-xs">{category}</p>
          <p className="text-yellow-300 text-2xl xl::text-3xl py-4">{title}</p>
          <p className="text-white pb-4 text-sm sm:text-base">{sumary}</p>
          <p className="py-4 w-full border-t text-neutral-500 text-xs border-neutral-500">
            {date}
          </p>
          <div className="pt-4 flex justify-end">
            <p
              className="text-white hover:text-yellow-300 cursor-pointer text-xs underline"
              onClick={handleOpenModal}
            >
              Leer noticia completa
            </p>
          </div>
        </div>
      </div>
      <Modal ref={modalRef}>
        <div className="max-w-screen-md max-h-[80vh] h-auto overflow-y-auto p-6 pt-1 mx-auto bg-neutral-800 rounded-lg">
          <p className="text-neutral-500 text-xs pb-1">{category}</p>
          <p className="text-yellow-300 text-2xl xl:text-3xl">{title}</p>
          <p className="pt-4 my-2 w-full border-t text-neutral-500 text-xs border-neutral-500">
            {date}
          </p>
          <p className="text-white py-4">{sumary}</p>
          <figure className="relative">
            <img
              src={images[currentImageIndex].imagen }
              alt=""
              className="rounded-xl max-w-full h-auto"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-300 ease-in-out"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-300 ease-in-out"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </figure>
          <p className="pt-4 text-white">{formatDescription(description)}</p>
        </div>
      </Modal>
    </>
  );
}
