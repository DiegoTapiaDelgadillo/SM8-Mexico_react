import { Link } from "react-router-dom";
import BotonPrincipal from "../botonPrincipal";
export default function Contacto({ titulo, cuerpo, rosetin }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full md:px-20 p-12">
      <div className="md:flex md:justify-center md:items-center">
        <div className="w-full">
          <h1 className="text-yellow-300 text-3xl md:text-5xl">{titulo}</h1>
          <h1 className="text-white text-md xl:text-xl pt-8 pb-8">{cuerpo}</h1>
          <Link to={"/Contacto"}>
            <BotonPrincipal text={"Contactanos"}></BotonPrincipal>
          </Link>
        </div>
      </div>
      <div className="grid justify-items-center xl:justify-items-end">
        <img
          src={rosetin}
          alt=""
          className="w-4/6 md:w-3/6 lg:w-2/6 xl:w-5/6"
        />
      </div>
    </div>
  );
}
