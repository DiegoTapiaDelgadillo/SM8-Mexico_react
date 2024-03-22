import Mural from "../../components/mural";
import Fondo from "../../components/mural/img/home.jpg";
import Contenedor from "../../components/contenedor";
import Clientes from "../../components/clientes";
import CardText from "../../components/cardText";
import Contacto from "../../components/contacto";
import Rosetin from "./img/Character_Render_17.png";
import ScrollTop from "../../hooks/scrollTop";
import CardCategorias from "../../components/cardCategorias";
import Modal from "../../components/modal";

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
      <Contenedor></Contenedor>
      <div className="w-full flex justify-center items-center bg-neutral-900 py-24 px-8 md:py-0 md:px-0 md:h-screen">
        <Clientes></Clientes>
      </div>
      {/*<div className="h-auto w-full flex justify-center items-center bg-neutral-800">
        <Proyectos></Proyectos>
      </div>*/}
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
      <div className="h-auo xl:h-screen w-full bg-neutral-800">
        <Modal />
      </div>
    </div>
  );
}
