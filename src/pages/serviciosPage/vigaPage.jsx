import Fondo from "./img/viga_h20.jpg";
import Foto from "./img/viga_h20_2.jpg";
import Mural from "../../components/mural";
import CardCatalogo from "../../components/cardCatalogo";
import CatalogoViga from "./pdf/SM8 -Viga H20.pdf";
import Contacto from "../../components/contacto";
import Rosetin from "./img/1.png";
import useScrollTop from "../../hooks/useScrollTop";

export default function VigaPage() {
  useScrollTop();
  return (
    <div>
      <Mural
        rutaFondo={Fondo}
        title={"Viga H20"}
        body={
          "Viga de madera utilizada en la construcción de estructuras, tales como edificios, puentes, y otras construcciones."
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
                Construido con madera de pino en los extremos y al centro madera
                pino multicapa armado travelsalmente, lo que las hace de las más
                ligeras en el mercado.
              </h2>
              <h2 className="text-white text-md xl:text-xl text-justify">
                Tratada con un tinte de color resistente al agua
                (HIDROFUGA).Debido a su construcción se puede cortar a cualquier
                longitud y posición deseada. Son fabricadas en medidas
                estándares de longitud por su construcción se alinea en medidas
                gradualmente.
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
                Características
              </h1>
              <h2 className="text-white text-md xl:text-xl text-justify pb-4">
                Para una losa de 20cm con distancia entre vigas secundarias es
                de 75m. la distancia permisible entre vigas secundarias es de
                0.75m. La distancia entre vigas primarias de acuerdo a la tabla
                1 es de 2.60 m.
              </h2>
              <h2 className="text-white text-md xl:text-xl text-justify pb-4">
                La distancia entre las vigas principales en la tabla 2 es igual
                a 2.5m. Se cruza la fila y la columna para encontrar el
                resultado. En este caso el resultado es 1.28m.
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
                Precauciones
              </h1>
              <h2 className="text-white text-md xl:text-xl text-justify pb-4">
                Revise los soportes para garantizar la fuerza de carga
                correspondiente.
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
              titulo={"Catálogo Viga"}
              cuerpo={
                "Conoce nuestro catálogo de Viga y explora todas las posibilidades."
              }
              catalogo={CatalogoViga}
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
