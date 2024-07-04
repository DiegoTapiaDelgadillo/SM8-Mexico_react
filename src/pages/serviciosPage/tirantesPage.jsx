import Mural from "../../components/mural";
import Fondo from "./img/tirantesbn.jpg";
import Foto from "./img/tirantes 2.jpg";
import CardCatalogo from "../../components/cardCatalogo";
import CatalogoSm8 from "./pdf/CATALOGO_SM8_ligero.pdf";
import Tirantes from "./pdf/tirantes-digital.pdf";
import Contacto from "../../components/contacto";
import Rosetin from "./img/1.png";
import useScrollTop from "../../hooks/useScrollTop";

export default function TirantesPage() {
  useScrollTop();
  return (
    <div>
      <Mural
        rutaFondo={Fondo}
        title={"Tirantes y cuñas"}
        body={
          "Proporcionan una solución práctica y eficiente para la nivelación y el ajuste de los elementos estructurales en la construcción."
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
                Los moños para cimbra o tirantes separadores para cimbra son
                elementos de sujeción que se emplean en muros, columnas y trabes
                para obtener un acabado ideal, espesores estrictos. Estos
                separadores ayudan a mantener constantes los gruesos de
                cimbrado.
              </h2>
              <h2 className="text-white text-md xl:text-xl text-justify">
                Nuestras cuñas para moños son piezas fabricadas en lamina de
                acero de alta resistencia diseñada para resistir la capacidad
                del separador o “moño” sin sufrir deformación.
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
                Tirantes
              </h1>
              <h2 className="text-white text-md xl:text-xl text-justify pb-4">
                El uso de tirantes rompibles y cuñas de acero de alta
                resistencia facilitan la alineación de la cimbra, evitando que
                se abra o cierre; así como ayuda a la perfección de cimbrado ya
                que siempre les dará las mismas distancias para lograr un ancho
                de muro uniforme. Obtendrás superficies de concreto limpias,
                debido a que el punto de ruptura queda situado dentro del muro
                el hueco de los cono se puede resanar con facilidad y exactitud.
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
                Cuñas
              </h1>
              <h2 className="text-white text-md xl:text-xl text-justify pb-4">
                Son elementos de acero de alto carbón que sirven para retener
                las paredes a la cimbra, antes, durante y después del vaciado de
                concreto. Tienen una capacidad de 1350 kg. a la tracción de cada
                uno (300 lbs). Se fabrican para cualquier ancho de muro al igual
                para cualquier ancho de cimbra.
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
              titulo={"Catálogo Tirantes"}
              cuerpo={
                "Conoce nuestro catálogo de Viga y explora todas las posibilidades."
              }
              catalogo={Tirantes}
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
