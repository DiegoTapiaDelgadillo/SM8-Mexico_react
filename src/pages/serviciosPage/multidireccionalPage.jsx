import Mural from "../../components/mural";
import Multi from "./img/multidireccional-blanco-negro.jpg";
import Foto from "./img/18.jpg";
import Foto2 from "./img/multidireccional.jpg";
import Contacto from "../../components/contacto";
import Rosetin from "./img/1.png";
import CardCatalogo from "../../components/cardCatalogo";
export default function MultidireccionalPage() {
  return (
    <div className="">
      <Mural
        title={"Multidireccional SM8"}
        body={
          "Andamio certificado que, gracias a su versatilidad, garantiza la reducción de tiempo en montaje y facilita el mantenimiento en instalaciones industriales."
        }
        rutaFondo={Multi}
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
      <div className="flex justify-center items-center w-full bg-neutral-900 h-auto p-12 xl:p-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center w-full">
          <div className="flex items-center h-full w-full">
            <div className="">
              <h1 className="text-yellow-300 text-3xl xl:text-5xl pb-4 xl:pb-2">
                Versatilidad
              </h1>
              <h2 className="text-white text-md xl:text-xl text-justify pb-4">
                Este sistema permite el montaje de cualquier tipo de
                configuración de andamio. La posibilidad de obtener un margen
                amplio de ángulos debido a la innovadora geometría de la roseta,
                y los elevados valores estructurales del conjunto de encaje, son
                algunas de las razones que llevan este andamio a un gran nivel
                de rentabilidad. Con el Sistema Multidireccional SM8® es posible
                el montaje de configuraciones ligeras, con elevada capacidad de
                carga y con ahorro en los componentes necesarios.
              </h2>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end items-center">
            <img
              src={Foto2}
              alt=""
              className="w-full md:w-3/6 lg:w-2/6 xl:w-4/6 rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-neutral-800 h-auto p-12 xl:p-24">
        <div>
          <h1 className="text-yellow-300 text-3xl xl:text-5xl pb-4 xl:pb-2">
            Rentabilidad
          </h1>
          <h2 className="text-white text-md xl:text-xl text-justify">
            Nuestro sistema SM8, constituido por elementos de pequeñas
            dimensiones, evita el gasto en equipos pesados para el montaje. El
            sistema, por concepto, se monta con la ayuda de un martillo, este
            sistema reduce los tiempos de armado y montaje, dándole así altos
            niveles de rentabilidad, se convirtiendo en la primera opción
            técnico/económica.
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-neutral-800 h-auto px-12 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <CardCatalogo
            titulo={"Catálogo SM8"}
            cuerpo={"Explora Nuestro Catálogo SM8 para Proyectos Inigualables."}
          ></CardCatalogo>
          <div>
            <CardCatalogo
              titulo={"Catálogo Eventos"}
              cuerpo={"Inspírate, Celebra y Crea Momentos Inolvidables."}
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
