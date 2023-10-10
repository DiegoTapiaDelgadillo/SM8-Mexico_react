import BotonPrincipal from "../botonPrincipal";
import { Link } from "react-router-dom";
export default function CardCatalogo({ titulo, cuerpo, ruta }) {
  return (
    <Link to={ruta}>
      <div className="xl:py-24 xl:px-0 py-8 px-8 bg-neutral-900 rounded-3xl flex justify-center items-center border-4 border-black hover:border-yellow-300 ease-in-out duration-300 ">
        <div>
          <h1 className="text-yellow-300 text-3xl xl:text-5xl pb-4 xl:pb-2">
            {titulo}
          </h1>
          <h2 className="text-white text-md xl:text-xl text-justify pb-4">
            {cuerpo}
          </h2>
        </div>
      </div>
    </Link>
  );
}
