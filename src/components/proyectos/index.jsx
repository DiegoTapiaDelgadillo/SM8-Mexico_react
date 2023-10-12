import Evento from "./img/1.jpg";
import Construccion from "./img/2.png";
import Restauracion from "./img/6.png";
import Industria from "./img/4.png";
export default function Proyectos() {
  return (
    <div className="w-full p-12 md:p-40  h-auto">
      <h1 className="text-3xl md:text-5xl text-yellow-300 pb-2">
        Alcanza las Alturas
      </h1>
      <h1 className="text-md md:text-xl text-white pb-8 xl:pb-16">
        Explora el Potencial Infinito de Andamios SM8 en Tus Proyectos.
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="grid bg-neutral-800 rounded-3xl shadow-2xl border-4 border-neutral-900 hover:border-4 hover:border-yellow-300 ease-in-out duration-300">
          <div className="w-full p-8 md:p-16">
            <h1 className="text-yellow-300 text-2xl xl:text-5xl pt-8">
              Eventos
            </h1>
            <h2 className="text-white text-md xl:text-xl text-justify pt-8 pb-8">
              Nuestro sistema es el ideal para restauraciones tanto en
              exteriores como en interiores, además gracias a su estabilidad, se
              pueden cubrir grandes extensiones de obra sin importar la altura.
            </h2>
            <div className="w-full grid justify-items-center">
              <img src={Evento} alt="" className="rounded-3xl" />
            </div>
          </div>
        </div>
        <div className="grid bg-neutral-800 rounded-3xl shadow-2xl border-4 border-neutral-900 hover:border-4 hover:border-yellow-300 ease-in-out duration-300">
          <div className="w-full p-8 md:p-16">
            <h1 className="text-yellow-300 text-2xl xl:text-5xl  pt-8">
              Construcción
            </h1>
            <h2 className="text-white text-md xl:text-xl  text-justify pt-8 pb-8">
              Nuestro sistema ofrece una gran versatilidad para la realización
              de obras provisionales sin importar lo alto o profunda que sea la
              obra, apuntalamiento, escalera de obra y estructura deservicio.
            </h2>
            <div className="w-full grid justify-items-center">
              <img src={Construccion} alt="" className="rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 pt-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 bg-neutral-800 rounded-3xl shadow-2xl border-4 border-neutral-900 hover:border-4 hover:border-yellow-300 ease-in-out duration-300 py-8 xl:py-20">
          <div className="w-full p-8 md:p-16">
            <h1 className="text-yellow-300 text-2xl xl:text-5xl md:pt-8">
              Restauración
            </h1>
            <h2 className="text-white text-md xl:text-xl text-justify pt-8 md:pb-8">
              Nuestro sistema es el ideal para restauraciones tanto en
              exteriores como en interiores, además gracias a su estabilidad, se
              pueden cubrir grandes extensiones de obra sin importar la altura.
            </h2>
          </div>
          <div className="w-full grid justify-items-center pb-8 px-8">
            <img src={Restauracion} alt="" className="rounded-3xl" />
          </div>
        </div>
        <div className="grid xl:grid-cols-2 bg-neutral-800 rounded-3xl shadow-2xl border-4 border-neutral-900/80 hover:border-4 hover:border-yellow-300 ease-in-out duration-300 py-0 xl:py-20">
          <div className="w-full pt-8 px-8 xl:p-16 block xl:hidden">
            <h1 className="text-yellow-300 text-2xl xl:text-5xl pt-8">
              Industria
            </h1>
            <h2 className="text-white text-md xl:text-xl text-justify pt-8 pb-8">
              Nuestro sistema ofrece una gran versatilidad para la realización
              de obras provisionales sin importar lo alto o profunda que sea la
              obra, apuntalamiento, escalera de obra y estructura deservicio.
            </h2>
          </div>
          <div className="w-full grid justify-items-center px-8 pb-8">
            <img src={Industria} alt="" className="rounded-3xl" />
          </div>
          <div className="w-full p-16 hidden xl:block">
            <h1 className="text-yellow-300 text-5xl pt-8">Industria</h1>
            <h2 className="text-white text-xl text-justify pt-8 pb-8">
              Nuestro sistema ofrece una gran versatilidad para la realización
              de obras provisionales sin importar lo alto o profunda que sea la
              obra, apuntalamiento, escalera de obra y estructura deservicio.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
