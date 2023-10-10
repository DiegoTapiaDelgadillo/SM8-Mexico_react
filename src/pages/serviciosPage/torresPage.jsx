import Mural from "../../components/mural";
import Fondo from "./img/torres_de_servicio.jpg";
import Foto from "./img/torres_de_servicio_2.jpg";
import Rosetin from "./img/1.png";
import Contacto from "../../components/contacto";
import CardCatalogo from "../../components/cardCatalogo";
export default function TorresPage() {
  return (
    <div>
      <Mural
        title={"Torre de servicio"}
        body={
          "Estructura temporal utilizada en la construcción, mantenimiento o reparación de edificios altos u otras estructuras similares."
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
                Nuestro Sistema Multidireccional SM8, ofrece soluciones de gran
                versatilidad para todo el tipo de obras. Está formado por
                elementos verticales, los montantes, sobre los cuales está
                soldado, a una distancia constante de 50 cm, un nudo realizado
                con una placa octogonal, provista de ocho orificios perfilados
                para recibir los elementos de unión de acoplamiento rápido,
                largueros, travesaños y diagonales. Todos los elementos del
                sistema multidireccional y tarimas son galvanizados por
                inmersión en caliente, además todos los elementos de bases
                regulables tienen un galvanizado electrolito, confiriendo una
                más grande resistencia a la corrosión.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <CardCatalogo
            titulo={"Catálogo SM8"}
            cuerpo={"Explora Nuestro Catálogo SM8 para Proyectos Inigualables."}
          ></CardCatalogo>
          <CardCatalogo
            titulo={"Catálogo Torre"}
            cuerpo={
              "Descubre nuestro catálogo exclusivo para soluciones innovadoras."
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
