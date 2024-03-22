import Title from "../titles";
import ImgClients from "./imgClients";
export default function Clientes() {
  return (
    <div className="flex justify-center items-center">
      <div className="absolute pb-96 hidden md:block">
        <ImgClients />
      </div>
      <div className="w-full md:w-4/6 h-auto bg-neutral-800 rounded-3xl shadow-2xl p-6 md:px-16 md:pt-48 md:pb-16">
        <div className="flex justify-center items-center pb-8 md:hidden z-0">
          <ImgClients />
        </div>
        <Title
          text={"Nuestros principales clientes"}
          className={" text-center"}
        />
        <h2 className="text-white md:text-center text-justify">
          Nuestros materiales cumplen con los más altos estándares de calidad y
          están certificados. Contamos con un equipo de especialistas capaces de
          llevar tu proyecto de principio a fin.
        </h2>
      </div>
    </div>
  );
}
