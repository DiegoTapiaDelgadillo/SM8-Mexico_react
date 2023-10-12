import Mural from "../../components/mural";
import Fondo from "./img/vacantes.jpg";
import CardVacantes from "../../components/cardVacantes";
import Contacto from "../../components/contacto";
import Rosetin from "./img/3.png";

export default function VacantesPage() {
  return (
    <div>
      <Mural
        title={"Vacantes"}
        body={
          "SM8 esta listo para ti, conoce todas nuestras vacantes y encuentra el trabajo de tus sueños."
        }
        buttonText={"Conocer  más"}
        rutaFondo={Fondo}
      ></Mural>

      <div className="bg-neutral-800  w-full py-24 px-12 md:px-24">
        <div className="grid grid-cols-1 gap-4">
          <CardVacantes
            titulo={"Ayudante general"}
            ubicacion={"Aguascalientes"}
            descripcion={"descripción"}
            requisitos={"requisitos"}
            oferta={"oferta"}
          ></CardVacantes>{" "}
          <CardVacantes
            titulo={"Ayudante general"}
            ubicacion={"Aguascalientes"}
            descripcion={"descripción"}
            requisitos={"requisitos"}
            oferta={"oferta"}
          ></CardVacantes>{" "}
          <CardVacantes
            titulo={"Ayudante general"}
            ubicacion={"Aguascalientes"}
            descripcion={"descripción"}
            requisitos={"requisitos"}
            oferta={"oferta"}
          ></CardVacantes>{" "}
          <CardVacantes
            titulo={"Ayudante general"}
            ubicacion={"Aguascalientes"}
            descripcion={"descripción"}
            requisitos={"requisitos"}
            oferta={"oferta"}
          ></CardVacantes>{" "}
          <CardVacantes
            titulo={"Ayudante general"}
            ubicacion={"Aguascalientes"}
            descripcion={"descripción"}
            requisitos={"requisitos"}
            oferta={"oferta"}
          ></CardVacantes>
        </div>
      </div>
      <div className="flex justify-center items-center bg-neutral-800 h-screen px-6">
        <Contacto
          titulo={"Únete hoy a nuestro increíble grupo de trabajo"}
          cuerpo={
            "Nuestro grupo de expertos estan listos para brindarte la mejor solución."
          }
          rosetin={Rosetin}
        ></Contacto>
      </div>
    </div>
  );
}
