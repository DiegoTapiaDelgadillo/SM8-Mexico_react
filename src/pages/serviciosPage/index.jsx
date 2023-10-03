import Mural from "../../components/mural";
import Fondo from "./img/nuestrosServicios.jpg";
import CardServicios from "../../components/cardServicios";
import Torres from "./img/torres.jpg";
import Multi from "./img/multidireccional.jpg";
import Apuntalamiento from "./img/apuntalamiento.jpg";
import BotonPrincipal from "../../components/botonPrincipal";
import Catalogo from "./img/catalogo.png";
import Contacto from "../../components/contacto";
import Rosetin from "./img/1.png";
export default function ServiciosPage() {
  return (
    <div>
      <Mural
        title={"Nuestros servicios"}
        body={"SM8 cuenta con diferentes servicios a tu disposición."}
        rutaFondo={Fondo}
        buttonText={"Conocer más"}
      ></Mural>
      <div className="bg-neutral-800  w-full py-24 px-12 md:px-24">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 justify-items-center">
          <CardServicios
            rutaImagen={Multi}
            titulo={"MULTIDIRECCIONAL SM8"}
            cuerpo={
              "Andamio certificado para la industria, gracias a su versatilidad, garantiza la reducción de tiempo en montaje y facilita el mantenimiento en instalaciones industriales."
            }
          ></CardServicios>
          <CardServicios
            rutaImagen={Torres}
            titulo={"TORRES DE SERVICIO"}
            cuerpo={
              "Torres de Andamio Multidireccional SM8 y/o andamio convencional de marco y cruceta que permite alcanzar la altura deseada con la mayor seguridad y confianza para trabajar en ellas."
            }
          ></CardServicios>
          <CardServicios
            rutaImagen={Apuntalamiento}
            titulo={"CIMBRA Y APUNTALAMIENTO"}
            cuerpo={
              "Cimbra realizada con Puntal Metálico o Andamio Estructural que cuenta con capacidad de carga optimizada en obras de edificación, así como flexibilidad en alturas y áreas requeridas."
            }
          ></CardServicios>
        </div>
      </div>
      <div className="flex justify-center items-center p-12 md:p-20 xl:h-screen bg-neutral-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-ful">
          <div className="flex items-center w-full h-full xl:pr-20 xl:pl-20 p-1">
            <div>
              <h1 className="text-2xl xl:text-5xl pb-8 text-yellow-300">
                Conoce el catálogo de todos nuestros servicios
              </h1>
              <h2 className=" text-white pb-8 text-justify">
                En el siguiente catálogo, encontrarás todas las especificaciones
                técnicas detalladas de nuestros materiales y servicios.
              </h2>
              <BotonPrincipal text={"Conocer"}></BotonPrincipal>
            </div>
          </div>
          <div className="h-full flex justify-center items-center">
            <img src={Catalogo} alt="" className="h-4/6" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-12 md:p-20 xl:h-screen bg-neutral-800">
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
