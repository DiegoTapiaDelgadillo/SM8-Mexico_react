import FormContacto from "../../components/formContacto";
import Mural from "../../components/mural";
import Fondo from "./img/DJI_0341.jpg";
import CardContacto from "../../components/cardContacto";
export default function ContactoPage() {
  return (
    <div>
      <Mural
        title={"Contacto"}
        body={
          "En SM8 estamos listos para trabajar contigo, escríbenos un mensaje y nosotros nos pondremos en contacto."
        }
        buttonText={"Conocer más"}
        rutaFondo={Fondo}
      ></Mural>
      <div className="grid justify-items-center bg-neutral-800  w-full py-24 px-12 md:px-24">
        <FormContacto></FormContacto>
      </div>
    </div>
  );
}
