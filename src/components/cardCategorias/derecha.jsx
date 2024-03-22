import Modal from "../modal";
import foto1 from "./img/1.jpg";
import foto2 from "./img/2.png";
import foto3 from "./img/4.png";

export default function CardDerecha({ img, title, body }) {
  const fotos = [foto1, foto2, foto3];
  return (
    <div className="py-12 sm:py-24 xl:h-screen bg-neutral-800 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full px-8 md:p-0">
        <div className="flex sm:justify-start justify-center ">
          <img
            src={img}
            className="w-full md:w-5/6 rounded-3xl md:rounded-r-full shadow-2xl"
          ></img>
        </div>
        <div className="md:pr-12 xl:pr-48">
          <h1 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl text-yellow-300 py-8">
            {title}
          </h1>
          <h2 className="text-white text-justify pb-8">{body}</h2>
          <Modal imagenes={fotos} />
        </div>
      </div>
    </div>
  );
}
