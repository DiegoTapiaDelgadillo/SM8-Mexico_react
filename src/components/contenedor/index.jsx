import BotonPrincipal from "../botonPrincipal";
import imagen from "./img/8445c776-e17b-4f3c-8c51-ac7b53c411a9.jpg";
import imagen1 from "./img/eventos 2.jpg";
import imagen2 from "./img/torres de servicio 2.jpg";
import imagen3 from "./img/WhatsApp Image 2023-03-15 at 12.44.35 PM.jpeg";
export default function Contenedor() {
  return (
    <div className="flex justify-center items-center p-12 md:p-20 xl:h-screen bg-neutral-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-ful">
        <div className="flex items-center w-full h-full xl:pr-20 xl:pl-20 p-1">
          <div>
            <h1 className="text-2xl xl:text-5xl pb-8 text-yellow-300">
              Conoce todos nuestros servicios
            </h1>
            <h2 className=" text-white pb-8 text-justify">
              With Opus, you can borrow against your portfolio, including
              carefully curated yield-bearing collateral. Interest rates are set
              autonomously and other risk parameters are determined dynamically.
            </h2>
            <BotonPrincipal text={"visitar"}></BotonPrincipal>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full xl:p-12 ">
          <div>
            <img src={imagen} alt="" className="rounded-3xl w-full h-full" />
          </div>
          <div>
            <img src={imagen1} alt="" className="rounded-3xl w-full h-full" />
          </div>
          <div>
            <img src={imagen2} alt="" className="rounded-3xl w-full h-full" />
          </div>
          <div>
            <img src={imagen3} alt="" className="rounded-3xl w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
