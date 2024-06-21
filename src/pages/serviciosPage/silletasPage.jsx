import Mural from "../../components/mural";
import Fondo from "./img/silletas.jpg";
import Foto from "./img/silletas 2.jpg";
import CardCatalogo from "../../components/cardCatalogo";
import CatalogoSm8 from "./pdf/CATALOGO_SM8_ligero.pdf";
import CatalogoSilletas from "./pdf/Catаlogo Silletas.pdf";
import Contacto from "../../components/contacto";
import Rosetin from "./img/1.png";
import useScrollTop from "../../hooks/useScrollTop";
export default function SilletasPage() {
  useScrollTop();
  return (
    <div>
      <Mural
        rutaFondo={Fondo}
        title={"Silletas Plásticas"}
        body={
          "Accesorio utilizado en la construcción de estructuras elevadas como andamios o encofrados."
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
                Silletas para calzar varilla, ya sea para pisos o muros,
                elaboradas de plástico 100% reciclado en diferentes medidas.
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
      <div className="flex justify-center items-center w-full bg-neutral-800 h-auto px-12 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <CardCatalogo
            titulo={"Catálogo SM8"}
            cuerpo={"Explora Nuestro Catálogo SM8 para Proyectos Inigualables."}
            catalogo={"https://publuu.com/flip-book/177837/438154"}
          ></CardCatalogo>
          <div>
            <CardCatalogo
              titulo={"Catálogo Silletas"}
              cuerpo={
                "Conoce nuestro catálogo de Viga y explora todas las posibilidades."
              }
              catalogo={CatalogoSilletas}
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
