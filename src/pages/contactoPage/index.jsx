import FormContacto from "../../components/formContacto";
import Mural from "../../components/mural";
import Fondo from "./img/DJI_0341.jpg";
import Rosetin from "./img/5.png";

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
      <div className="w-full flex justify-center items-center h-auto bg-neutral-800 p-12 xl:p-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 justify-items-center bg-neutral-900 rounded-3xl shadow-2xl w-full xl:p-8">
          <div className="hidden justify-center items-center w-full xl:flex">
            <img src={Rosetin} alt="" className="w-5/6" />
          </div>
          <div className="flex justify-center items-center w-full">
            <FormContacto></FormContacto>
          </div>
          <div className="flex justify-center items-center w-full pb-8 xl:hidden">
            <img src={Rosetin} alt="" className="w-5/6" />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-4">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
