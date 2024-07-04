export default function CardText({ titulo, cuerpo, delay}) {
  return (
    <div className="border-4 bg-neutral-800 border-black  w-full rounded-3xl shadow-2xl cursor-pointer hover:border-yellow-300 ease-in-out duration-300 p-8 flex justify-center items-center overflow-hidden" 
    data-aos="fade-up" 
    data-aos-delay={delay}>
      <div>
        <h1 className="text-center text-yellow-300 text-xl md:text-3xl">
          {titulo}
        </h1>
        <h2 className="text-white text-md xl:text-xl text-center pt-2">
          {cuerpo}
        </h2>
      </div>
    </div>
  );
}
  