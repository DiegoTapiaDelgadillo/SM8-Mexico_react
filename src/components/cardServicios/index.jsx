import BotonPrincipal from "../botonPrincipal";
import { Link } from "react-router-dom";
export default function CardServicios({ titulo, cuerpo, ruta, rutaImagen, delay}) {
  return (
    <div className="border-4 border-neutral-900/80 w-full rounded-3xl shadow-2xl hover:border-yellow-300 ease-in-out duration-300 grid"
    data-aos="fade-up"
    data-aos-delay={delay}>
      <div className="w-full grid justify-items-center py-8 px-4">
        <img src={rutaImagen} alt="" className="w-80 md:w-96 rounded-3xl" />
      </div>
      <div className="xl:py-8 px-8 flex justify-center items-center">
        <div>
          <h1 className="text-yellow-300 text-xl xl:text-3xl text-center pb-4">
            {titulo}
          </h1>
          <h2 className="text-white text-md xl:text-xl text-justify pb-4">
            {cuerpo}
          </h2>
          <div className="grid w-full justify-items-center pb-8">
            <Link to={ruta}>
              <BotonPrincipal text={"Visitar"}></BotonPrincipal>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
