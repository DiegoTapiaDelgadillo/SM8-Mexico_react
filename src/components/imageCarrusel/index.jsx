import { useState } from "react";

export default function ImageCarousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.ima - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="rounded-xl max-w-full h-auto"
      />
      {images.length > 1 && (
        <>
          <button onClick={goToPrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700/50 hover:bg-gray-700/70 rounded-full">
            &#10094;
          </button>
          <button onClick={goToNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700/50 hover:bg-gray-700/70 rounded-full">
            &#10095;
          </button>
        </>
      )}
    </div>
  );
}
