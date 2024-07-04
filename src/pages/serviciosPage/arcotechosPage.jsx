import Mural from "../../components/mural";
import Fondo from "./img/arcotechobn.jpg";
import Foto from "./img/arcotecho 2.jpg";
import CardCatalogo from "../../components/cardCatalogo";
import CatalogoSm8 from "./pdf/CATALOGO_SM8_ligero.pdf";
import Contacto from "../../components/contacto";
import Rosetin from "./img/1.png";
import useScrollTop from "../../hooks/useScrollTop";
export default function ArcotechosPage() {
  useScrollTop();
  return (
    <div>
      <Mural
        rutaFondo={Fondo}
        title={"Arcotechos"}
        body={
          "Es un sistema constructivo autoportante a base de arcos de acero galvanizado y pintado, fabricados a pie de obra."
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
                Es un sistema constructivo autoportante a base de arcos de acero
                galvanizado y pintado, fabricados a pie de obra, unidos entre sí
                (tercetas). Una vez instaladas se unen mediante una
                engargoladora eléctrica, lo que hace un sistema hermético.
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
                Ventajas
              </h1>
              <ul className="text-white text-md xl:text-xl text-justify pb-4 list-disc">
                <li className="pb-4">
                  Es un sistema que se fabrica totalmente en la obra lo que
                  permite reducir tiempos en comparación con el sistema
                  tradicional de estructura metálica.
                </li>
                <li className="pb-4">
                  Se utilizan arcos completos sin traslapes transversales y las
                  uniones laterales entre los arcos son engargoladas,
                  característica que lo hace impermeable.
                </li>
                <li className="pb-4">
                  Es un sistema autosoportante por lo que elimina la estructura
                  interna de soporte proporcionando espacios interiores libre de
                  obstáculos.
                </li>
                <li className="pb-4">
                  La geometría de la sección transversal proporciona una gran
                  capacidad de carga soportando velocidades de viento de hasta
                  200 km/h.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-neutral-800 h-auto p-12 xl:p-24">
        <div className="grid grid-cols-1 justify-items-center w-full">
          <div className="flex items-center h-full w-full">
            <div className="">
              <h1 className="text-yellow-300 text-3xl xl:text-5xl pb-4 xl:pb-4">
                Fabricación
              </h1>
              <h1 className="text-white text-md xl:text-xl text-justify pb-4 list-disc">
                Los paneles se fabrican en la obra con un equipo portátil que
                produce un perfil acanalado denominado superspan K-02. Este
                equipo, acanala la lámina lis alimentada a la longitud de arco
                necesaria y le da la curvatura de acuerdo al radio requerido,
                evitando así la presencia de traslapes.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-neutral-800 h-auto px-12 xl:px-24">
        <div className="grid grid-cols-1 gap-8 w-full">
          <CardCatalogo
            titulo={"Catálogo SM8"}
            cuerpo={"Explora Nuestro Catálogo SM8 para Proyectos Inigualables."}
            catalogo={"https://publuu.com/flip-book/177837/438154"}
          ></CardCatalogo>
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
