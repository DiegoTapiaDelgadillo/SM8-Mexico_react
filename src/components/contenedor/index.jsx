import BotonPrincipal from "../botonPrincipal";
import Title from "../titles";
import GridImg from "./gridImg";
import { Link } from "react-router-dom";
export default function Contenedor() {
  return (
    <div className="flex justify-center items-center px-6 py-12 md:p-20 xl:h-screen bg-neutral-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-ful">
        <div className="block lg:hidden">
          <GridImg />
        </div>
        <div className="flex items-center w-full h-full xl:pr-20 xl:pl-20 p-1">
          <div>
            <Title text={"Conoce todos nuestros servicios"} />
            <h2 className=" text-white pb-8 text-justify">
              Nos enorgullecemos de ofrecer una amplia gama de servicios
              diseñados para satisfacer todas tus necesidades. Estamos dedicados
              a brindarte soluciones integrales y personalizadas que
              transformarán tus ideas en realidades tangibles. Conoce todos
              nuestros servicios y descubre cómo podemos ayudarte a alcanzar tus
              objetivos.
            </h2>
            <Link to={"/Servicios"}>
              <BotonPrincipal text={"Visitar"}></BotonPrincipal>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <GridImg />
        </div>
      </div>
    </div>
  );
}
