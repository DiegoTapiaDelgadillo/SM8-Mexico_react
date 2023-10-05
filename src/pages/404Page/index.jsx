import BotonPrincipal from "../../components/botonPrincipal";
import { Link } from "react-router-dom";
import Rosetin from "./img/4.png";
export default function Page404() {
  return (
    <div className="h-auto xl:h-screen bg-neutral-800 w-full flex justify-center items-center px-12 py-48 xl:px-64 xl:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="flex h-full w-full items-center">
          <div>
            <h1 className="text-yellow-300 text-6xl md:text-9xl">Uuuups!</h1>
            <h2 className="text-white py-8 text-xl md:text-2xl">
              No pudimos encontrar la pagina que buscas :(
            </h2>
            <Link to="/">
              <BotonPrincipal text={"Regresar a inicio"}></BotonPrincipal>
            </Link>
          </div>
        </div>
        <div className="grid w-full justify-items-center">
          <img src={Rosetin} alt="" className="w-5/6" />
        </div>
      </div>
    </div>
  );
}
