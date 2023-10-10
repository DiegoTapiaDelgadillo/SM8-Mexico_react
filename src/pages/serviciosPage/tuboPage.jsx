import Mural from "../../components/mural";
import Fondo from "./img/tubo_junta.jpg";
import Foto from "./img/tuboJunta2.jpg";
import CardCatalogo from "../../components/cardCatalogo";
import Contacto from "../../components/contacto";
import Rosetin from "./img/1.png";
export default function TuboPage() {
  return (
    <div>
      <Mural
        rutaFondo={Fondo}
        title={"Sistema tubo junta"}
        body={
          "Andamio modular que se compone de tubos de acero conectados mediante juntas de unión en ángulo recto."
        }
      ></Mural>
      <div className="flex justify-center items-center w-full bg-neutral-800 h-auto  p-12 xl:p-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full">
          <div className="flex items-center h-full w-full">
            <div className="">
              <h1 className="text-yellow-300 text-3xl xl:text-5xl pb-2">
                Generalidades
              </h1>
              <h2 className="text-white text-md xl:text-xl text-justify">
                Nuestro sistema de Tubo – Junta está desarrollado con tubos de
                acero sin costura, estirados en frío con un diámetro de 48.25
                mm, que es complementado con juntas elaboradas de acero.
                Nuestras Juntas sirven para la unión ortogonal, paralela,
                angular y longitudinal de 2 tubos. Poseen una gran capacidad de
                carga al deslizamiento, garantizando la sujeción por tornillos
                especiales con cabeza en forma de T.
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
      <div className="flex justify-center items-center w-full bg-neutral-800 h-auto  p-12 xl:p-24">
        <div className="grid grid-cols-1 w-full">
          <CardCatalogo
            titulo={"Catálogo"}
            cuerpo={
              "Explora nuestro universo de posibilidades, descubre el catálogo completo"
            }
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
