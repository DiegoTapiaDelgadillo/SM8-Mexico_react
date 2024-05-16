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
import Tubo from "./img/tubojunta.jpg";
import Viga from "./img/viga.jpg";
import Graderia from "./img/graderias.jpg";
import Silleta from "./img/silleta.jpg";
import Tirantes from "./img/tirantes.jpg";
import Arco from "./img/arcotecho.jpg";
import CatalogoPDF from "./pdf/Catаlogo SM8 2023.pdf";
import ScrollTop from "../../hooks/scrollTop";
export default function ServiciosPage() {
  ScrollTop();
  return (
    <div>
      <Mural
        title={"Nuestros servicios"}
        body={"SM8 cuenta con diferentes servicios a tu disposición."}
        rutaFondo={Fondo}
        buttonText={"Conocer más"}
      ></Mural>
      <div className="bg-neutral-800  w-full py-24 px-4 md:px-24">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 justify-items-center">
          <CardServicios
            rutaImagen={Multi}
            titulo={"MULTIDIRECCIONAL SM8"}
            cuerpo={
              "Andamio certificado para la industria, gracias a su versatilidad, garantiza la reducción de tiempo en montaje y facilita el mantenimiento en instalaciones industriales."
            }
            ruta={"/Servicios/Multidireccional"}
          ></CardServicios>
          <CardServicios
            rutaImagen={Torres}
            titulo={"TORRES DE SERVICIO"}
            cuerpo={
              "Torres de Andamio Multidireccional SM8 y/o andamio convencional de marco y cruceta que permite alcanzar la altura deseada con la mayor seguridad y confianza para trabajar en ellas."
            }
            ruta={"/Servicios/Torres"}
          ></CardServicios>
          <CardServicios
            rutaImagen={Apuntalamiento}
            titulo={"CIMBRA Y APUNTALAMIENTO"}
            cuerpo={
              "Cimbra realizada con Puntal Metálico o Andamio Estructural que cuenta con capacidad de carga optimizada en obras de edificación, así como flexibilidad en alturas y áreas requeridas."
            }
            ruta={"/Servicios/Cimbra"}
          ></CardServicios>
          <CardServicios
            rutaImagen={Tubo}
            titulo={"SISTEMA TUBO - JUNTA"}
            cuerpo={
              "Sistema conformado por tubos de acero sin costura, unidos por juntas de acero permitiendo una gran versatilidad en el armado de estructuras."
            }
            ruta={"/Servicios/TuboJunta"}
          ></CardServicios>
          <CardServicios
            rutaImagen={Viga}
            titulo={"VIGA H20"}
            cuerpo={
              "Construida con madera de pino a los extremos y al centro madera de pino multicapa armado transversalmente, siendo las más ligeras del mercado."
            }
            ruta={"/Servicios/Viga"}
          ></CardServicios>
          <CardServicios
            rutaImagen={Graderia}
            titulo={"GRADERIAS Y VALLAS METÁLICAS"}
            cuerpo={
              "Instalación de gradas temporales con capacidad desde 25 personas hasta 10 mil. Además de renta e instalación de vallas metálicas que otorgaran la mayor comodidad y seguridad a tus eventos."
            }
            ruta={"/Servicios/Graderias"}
          ></CardServicios>
          <CardServicios
            rutaImagen={Silleta}
            titulo={"SILLETAS PlÁSTICAS"}
            cuerpo={
              "Proporcionar el espacio necesario para lograr el recubrimiento especificado al acero de refuerzo."
            }
            ruta={"/Servicios/Silletas"}
          ></CardServicios>
          <CardServicios
            rutaImagen={Tirantes}
            titulo={"TIRANTES Y CUÑAS PARA CONCRETO"}
            cuerpo={
              "Son elementos de acero de alto carbón que sirven para retener las paredes a la cimbra, antes, durante y después del vaciado de concreto."
            }
            ruta={"/Servicios/Tirantes"}
          ></CardServicios>
          <CardServicios
            rutaImagen={Arco}
            titulo={"ARCOTECHOS"}
            cuerpo={
              "Es un sistema constructivo autoportante a base de arcos de acero galvanizado y pintado, fabricados a pie de obra. "
            }
            ruta={"/Servicios/Arcotechos"}
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
              <a href={CatalogoPDF} target="_blank">
                <BotonPrincipal text={"Conocer"}></BotonPrincipal>
              </a>
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
