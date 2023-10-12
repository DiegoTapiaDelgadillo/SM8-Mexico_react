import Mural from "../../components/mural";
import Fondo from "./img/cimbra_1.jpg";
import Foto from "./img/cimbra_2.jpg";
import CardCatalogo from "../../components/cardCatalogo";
import Contacto from "../../components/contacto";
import Rosetin from "./img/1.png";
import CatalogoSm8 from "./pdf/CATALOGO_SM8_ligero.pdf";
import Apuntalamiento from "./pdf/Catalogo apuntalamiento_compressed.pdf";
export default function CimbraPage() {
  return (
    <div>
      <Mural
        title={"Cimbra y apuntalamiento"}
        body={
          "Proceso en el que se utilizan estructuras temporales de madera o acero para soportar el peso del concreto durante su fraguado y endurecimiento."
        }
        rutaFondo={Fondo}
      ></Mural>
      <div className="flex justify-center items-center w-full bg-neutral-800 h-auto  p-12 xl:p-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full">
          <div className="flex items-center h-full w-full">
            <div className="">
              <h1 className="text-yellow-300 text-3xl xl:text-5xl pb-2">
                Generalidades
              </h1>
              <h2 className="text-white text-md xl:text-xl text-justify">
                Contamos con elementos para la realización de cimbra y
                apuntalamiento realizada con puntal metálico o andamio
                estructural que cuenta con capacidad de carga optimizada en
                obras de edificación. Nuestros sistemas cuentan con una serie de
                accesorios para poder adaptarse a cualquier trabajo brindando
                flexibilidad en alturas y áreas requeridas.
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
              <h1 className="text-yellow-300 text-3xl xl:text-5xl pb-4 xl:pb-2">
                Marcos para apuntalamiento
              </h1>
              <h2 className="text-white text-md xl:text-xl text-justify pb-4">
                Nuestros marcos tipo M-3, M-4, M-5, M-6 y M7 están elaborados
                con tubo de acero S235JR, S355JR Y S355MC, cedula 40 estirados
                en frío brindando la resistencia óptima para el apuntalamiento
                unidas entre ellos mediante crucetas que brindan estabilidad.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-neutral-800 h-auto p-12 xl:p-24">
        <div>
          <h1 className="text-yellow-300 text-3xl xl:text-5xl pb-4 xl:pb-2">
            Puntal PR-30
          </h1>
          <h2 className="text-white text-md xl:text-xl text-justify">
            El puntal PR-30 está construido por un elemento base de tubo de
            acero de 60 mm de diámetro, con largo de 1.60 mts. con perforaciones
            para la introducción del pasador destinado al tope de tubo
            telescopiable, cuenta con una base con husillo roscado y su tuerca
            fijada a la base del puntal, permite la regulación micrométrica.
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-neutral-800 h-auto px-12 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <CardCatalogo
            titulo={"Catálogo SM8"}
            cuerpo={"Explora Nuestro Catálogo SM8 para Proyectos Inigualables."}
            catalogo={CatalogoSm8}
          ></CardCatalogo>
          <div>
            <CardCatalogo
              titulo={"Catálogo Apuntalamiento"}
              cuerpo={
                "Explora nuestro universo de posibilidades: descubre el catálogo completo."
              }
              catalogo={Apuntalamiento}
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
