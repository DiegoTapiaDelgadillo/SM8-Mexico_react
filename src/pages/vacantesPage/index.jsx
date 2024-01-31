import Mural from "../../components/mural";
import Fondo from "./img/vacantes.jpg";
import CardVacantes from "../../components/cardVacantes";
import Contacto from "../../components/contacto";
import Rosetin from "./img/3.png";
import ScrollTop from "../../hooks/scrollTop";

export default function VacantesPage() {
  ScrollTop();
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
            titulo={"Analista de ventas"}
            ubicacion={"CORPORATIVO, CDMX"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Ayudante general"}
            ubicacion={"AGUASCALIENTES"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Chofer (Licencia tipo B)"}
            ubicacion={"AGUASCALIENTES"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Auxiliar de Asesor Técnico"}
            ubicacion={"CANCÚN"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Ayudante general"}
            ubicacion={"CANCÚN"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Asesor Técnico"}
            ubicacion={"CANCÚN"}
          ></CardVacantes>
          <CardVacantes titulo={"Chofer"} ubicacion={"CANCÚN"}></CardVacantes>
          <CardVacantes
            titulo={"Asesor Técnico"}
            ubicacion={"CUERNVACA"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Ayudante General"}
            ubicacion={"CUERNVACA"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Ayudante General"}
            ubicacion={"COATZACOALCOS"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Auxiliar Administrativo"}
            ubicacion={"GUADALAJARA"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Becario"}
            ubicacion={"GUADALAJARA"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Soldador"}
            ubicacion={"GUADALAJARA"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Auxiliar Administrativo de Almacén"}
            ubicacion={"LOS CABOS"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Chofer"}
            ubicacion={"LOS CABOS"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Ayudante General"}
            ubicacion={"LOS CABOS"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Ayudante General"}
            ubicacion={"MAZATLAN"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Ayudante General"}
            ubicacion={"MÉRIDA"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Auxiliar de Asesor Técnico"}
            ubicacion={"MONTERREY"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Ayudante General"}
            ubicacion={"MONTERREY"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Ayudante General"}
            ubicacion={"PUERTO VALLARTA"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Chofer"}
            ubicacion={"PUERTO VALLARTA"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Auxiliar Administrativo"}
            ubicacion={"PUERTO VALLARTA"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Auxiliar de Asesor Técnico"}
            ubicacion={"QUERETARO"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Ayudante General"}
            ubicacion={"QUERETARO"}
          ></CardVacantes>
          <CardVacantes
            titulo={"Ayudante General"}
            ubicacion={"ZAPOPAN"}
          ></CardVacantes>
          <CardVacantes titulo={"Becario"} ubicacion={"TIJUANA"}></CardVacantes>
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
