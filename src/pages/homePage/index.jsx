import Mural from "../../components/mural";
import Fondo from "../../components/mural/img/home.jpg";
import Contenedor from "../../components/contenedor";
import Clientes from "../../components/clientes";
import CardText from "../../components/cardText";
import Contacto from "../../components/contacto";
import Rosetin from "./img/Character_Render_17.png";
import ScrollTop from "../../hooks/scrollTop";
import CardCategorias from "../../components/cardCategorias";
import Peluches from "../../assets/PELUSHES WEB.webp";
import GTOpc from "../../assets/leon_web.webp";
import GTOph from "../../assets/GTPcel.webp";
import Title from "../../components/titles";

export default function HomePage() {
  //ScrollTop();
  return (
    <div>
      <Mural
        title={"Versatilidad, Calidad y Seguridad"}
        body={
          "Renta y Venta de Andamio Multidireccional, Marco y Cruceta, Tubo-Junta, Cimbra, Apuntalamiento, Consumibles y más."
        }
        rutaFondo={Fondo}
      ></Mural>
      <div className="flex justify-center items-center bg-neutral-800 sm:px-24 sm:py-12">
        <img
          src={GTOpc}
          alt="Imagen para PC"
          className="hidden lg:block w-full rounded-2xl"
        />
        <img
          src={GTOph}
          alt="Imagen para móviles"
          className="block lg:hidden w-full sm:rounded-2xl"
        />
      </div>
      <div className=" flex justify-center items-center xl:grid xl:grid-cols-1 2xl:grid-cols-2 xl:gap-4 bg-neutral-900 xl:p-36 md:py-12">
        <div className="hidden xl:block">
          <h1 className=" text-yellow-500"></h1>
          <Title text={"Adquiere nuestro adorable Rosetín de peluche"} />
          <h2 className=" text-white pb-8 text-justify">
            En SM8, sabemos que un peluche no es solo un juguete, es un
            compañero de aventuras, un guardián de sueños y un amigo
            inseparable. Nuestra nueva colección de peluches está diseñada para
            derretir corazones de todas las edades con encanto inigualable.
          </h2>
        </div>
        <figure className=" xl:flex xl:justify-center 2xl:justify-end">
          <a
            href="https://api.whatsapp.com/send/?phone=5215514231881&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <img
              src={Peluches}
              alt=""
              className=" md:rounded-xl md:shadow-2xl"
            />
          </a>
        </figure>
      </div>
      <Contenedor></Contenedor>
      <div className="w-full flex justify-center items-center bg-neutral-900 py-24 px-2 md:py-0 md:px-0 md:h-screen">
        <Clientes></Clientes>
      </div>
      <CardCategorias />
      <div className="h-auto xl:h-screen w-full flex justify-center items-center bg-neutral-900 p-12 md:p-48">
        <div className="w-full h-auto">
          <h1 className="text-yellow-300 text-center text-3xl md:text-5xl pb-12 md:pb-24">
            ¿Por qué escogernos?
          </h1>
          <div className="grid grid-cols-1 xl:grid-cols-3 w-full justify-items-center gap-4">
            <CardText
              titulo={"COBERTURA NACIONAL"}
              cuerpo={
                "Contamos con cobertura nacional, 19 sucursales distribuidas en todo el país."
              }
            ></CardText>
            <CardText
              titulo={"LOGÍSTICA"}
              cuerpo={
                "Nuestra logística operativa nos hace un aliado estratégico para el éxito de cada proyecto."
              }
            ></CardText>
            <CardText
              titulo={"COMPROMISO CON LA CALIDAD"}
              cuerpo={
                "Calidad certificada y especialistas expertos. Transformamos tus proyectos de principio a fin con resultados excepcionales."
              }
            ></CardText>
          </div>
        </div>
      </div>
      <div className="h-auo xl:h-screen w-full flex justify-center items-center bg-neutral-800">
        <Contacto
          titulo={"No lo pienses más y Contáctanos"}
          cuerpo={
            "Nuestro grupo de expertos estan listos para brindarte la mejor solución."
          }
          rosetin={Rosetin}
        />
      </div>
    </div>
  );
}
