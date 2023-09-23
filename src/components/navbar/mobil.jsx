import Facebook from "./img/facebook.png";
import Instagram from "./img/instagram.png";
import Linkedin from "./img/linkedin.png";
import Whastapp from "./img/whatsapp.png";
export default function MobilMenu() {
  return (
    <div className="grid pt-16 w-full h-screen bg-neutral-900 text-yellow-300 justify-items-center">
      <div className="grid w-3/6 pt-8 pb-8">
        <div className="grid w-full">
          <ul className="divide-y-2 divide-yellow-300/10">
            <li className="text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300 py-4">
              Inicio
            </li>
            <li className="text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300 py-4">
              Servicios
            </li>
            <li className="text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300 py-4">
              Sucursales
            </li>
            <li className="text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300 py-4">
              Vacantes
            </li>
            <li className="text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300 py-4">
              Contacto
            </li>
            <li className="text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300 py-4">
              Nosotros
            </li>
            <li className="text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300 py-4">
              Catálogo
            </li>
            <li className="py-8">
              <div className="flex w-full justify-center">
                <div className="px-2">
                  <img
                    src={Facebook}
                    alt=""
                    className="w-8 cursor-pointer hover:brightness-50 ease-in-out duration-300"
                  />
                </div>
                <div className="px-2">
                  <img
                    src={Instagram}
                    alt=""
                    className="w-8 cursor-pointer hover:brightness-50 ease-in-out duration-300"
                  />
                </div>
                <div className="px-2">
                  <img
                    src={Linkedin}
                    alt=""
                    className="w-8 cursor-pointer hover:brightness-50 ease-in-out duration-300"
                  />
                </div>
                <div className="px-2">
                  <img
                    src={Whastapp}
                    alt=""
                    className="w-8 cursor-pointer hover:brightness-50 ease-in-out duration-300"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
