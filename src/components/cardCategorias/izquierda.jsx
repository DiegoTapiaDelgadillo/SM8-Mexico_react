import BotonPrincipal from "../botonPrincipal";
export default function CardIzquierda({ img, title, body }) {
  return (
    <div className="py-12 sm:py-24 xl:h-screen bg-neutral-900 flex justify-center items-center overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full px-8 md:p-0">
        <div className="block sm:hidden">
          <div className="flex sm:justify-end justify-center ">
            <img
              src={img}
              className="w-full md:w-5/6 rounded-3xl md:rounded-l-full shadow-2xl"
              data-aos="fade-left"
            ></img>
          </div>
        </div>
        <div className="md:pl-12 xl:pl-36 text-start">
          <h1 className="text-4xl md:text-6xl 2xl:text-8xl text-yellow-300 py-8" data-aos="fade-left">
            {title}
          </h1>
          <h2 className="text-white text-justify pb-8" data-aos="fade-left">{body}</h2>
        </div>
        <div className="hidden sm:block">
          <div className="flex sm:justify-end justify-center ">
            <img
              src={img}
              className="w-full md:w-5/6 rounded-3xl md:rounded-l-full shadow-2xl"
              data-aos="fade-left"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
