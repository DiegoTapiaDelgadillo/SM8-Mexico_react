import ImgClients from "./imgClients";
export default function Clientes() {
  return (
    <div className="flex justify-center items-center">
      <div className="absolute pb-96 hidden md:block">
        <ImgClients></ImgClients>
      </div>
      <div className="w-5/6 md:w-4/6 h-auto bg-neutral-800 rounded-3xl shadow-2xl p-16 md:px-16 md:pt-48 md:pb-16">
        <div className="flex justify-center items-center pb-8 md:hidden">
          <ImgClients></ImgClients>
        </div>
        <h1 className="text-yellow-300 text-3xl md:text-5xl text-center">
          Nuestros principales clientes
        </h1>
        <h2 className="text-white pt-8 md:text-center text-justify">
          Nuestros materiales cumplen con los más altos estándares de calidad y
          están certificados. Contamos con un equipo de especialistas capaces de
          llevar tu proyecto de principio a fin.
        </h2>
      </div>
    </div>
  );
}
