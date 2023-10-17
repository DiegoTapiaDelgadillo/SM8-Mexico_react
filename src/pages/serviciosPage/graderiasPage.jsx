import Mural from "../../components/mural";
import Fondo from "./img/eventos.jpg";
import Foto from "./img/eventos 2.jpg";
import CardCatalogo from "../../components/cardCatalogo";
import CatalogoSm8 from "./pdf/CATALOGO_SM8_ligero.pdf";
import CatalogoEventos from "./pdf/Catalogo Eventos digital.pdf";
import Contacto from "../../components/contacto";
import Rosetin from "./img/1.png";
export default function GraderiasPage() {
  return (
    <div>
      <Mural
        rutaFondo={Fondo}
        title={"Sistema para eventos"}
        body={
          "Estructura temporal que se construye para proporcionar asientos elevados en eventos al aire libre o en interiores."
        }
      ></Mural>
      <div className="flex justify-center items-center w-full bg-neutral-800 h-auto  p-12 xl:p-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full">
          <div className="flex items-center h-full w-full">
            <div className="">
              <h1 className="text-yellow-300 text-3xl xl:text-5xl pb-4">
                Generalidades
              </h1>
              <h2 className="text-white text-md xl:text-xl text-justify pb-4">
                Gracias a la versatilidad de nuestros sistemas podemos lograr
                cualquier forma geométrica para sus eventos. Instalación de
                gradas temporales con capacidad desde 25 personas hasta 10 mil.
                Además de renta e instalación de vallas metálicas que otorgaran
                la mayor comodidad y seguridad a tus eventos.
              </h2>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center">
            <img
              src={Foto}
              alt=""
              className="w-full md:w-3/6 lg:w-2/6 xl:w-4/6 rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-neutral-900 h-auto p-12 xl:p-24">
        <div className="grid grid-cols-1 justify-items-center w-full">
          <div className="flex items-center h-full w-full">
            <div className="">
              <h1 className="text-yellow-300 text-3xl xl:text-5xl pb-4 xl:pb-4">
                Escenarios y templetes
              </h1>
              <h2 className="text-white text-md xl:text-xl text-justify pb-4">
                Nuestros templetes para eventos están construidos con el nuestro
                Sistema SM8, dándole una estabilidad y diseño superior a
                cualquier otro.Los elementos que dan soporte están elaborados
                con tubo de acero cedula 40 y los elementos que brindan la
                estabilidad con acero cedula 30.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-neutral-800 h-auto p-12 xl:p-24">
        <div className="grid grid-cols-1 justify-items-center w-full">
          <div className="flex items-center h-full w-full">
            <div className="">
              <h1 className="text-yellow-300 text-3xl xl:text-5xl pb-4 xl:pb-4">
                Marco Gradería
              </h1>
              <h2 className="text-white text-md xl:text-xl text-justify pb-4">
                Contamos con gradas para eventos las cuales están construidas
                con nuestros Sistema Marco Gradería. Están elaborados con tubo
                de acero cedula 40 y cuentan con crucetas para la unión estos,
                creando la estabilidad y seguridad necesaria para su evento.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-neutral-800 h-auto px-12 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <CardCatalogo
            titulo={"Catálogo SM8"}
            cuerpo={"Explora Nuestro Catálogo SM8 para Proyectos Inigualables."}
            catalogo={"https://publuu.com/flip-book/177837/438154"}
          ></CardCatalogo>
          <div>
            <CardCatalogo
              titulo={"Catálogo de eventos"}
              cuerpo={"Conoce nuestro catálogo de eventos"}
              catalogo={"https://publuu.com/flip-book/177837/604508"}
            ></CardCatalogo>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-neutral-800 h-auto px-4">
        <Contacto
          titulo={"¿Encontraste lo que buscabas?"}
          cuerpo={
            "Nuestro grupo de expertos estan listos para brindarte la mejor solución."
          }
          rosetin={Rosetin}
        ></Contacto>
      </div>
    </div>
  );
}
