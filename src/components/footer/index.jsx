import SM8Logo from "../navbar/img/Logo Horizontal.png";
import Facebook from "../navbar/img/facebook.png";
import Linkedin from "../navbar/img/linkedin.png";
import Instagram from "../navbar/img/instagram.png";
import Whastapp from "../navbar/img/whatsapp.png";
export default function Footer() {
  return (
    <footer className="w-full bg-neutral-800 h-auto p-8 xl:p-20">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-36 w-full pb-8">
        <div>
          <img src={SM8Logo} alt="" className="w-24" />
          <h2 className="text-white pt-6 pb-6 text-xs">
            "Construye tus sueños como si estuvieras construyendo un andamio
            sólido: con paciencia, precisión y la confianza de que cada paso te
            acerca más a la cima."
          </h2>
          <ul className="list-none flex flex-wrap nowrap">
            <li className="px-2 py-4 cursor-pointer hover:brightness-50 ease-in-out duration-300">
              <img src={Facebook} alt="" className="w-6" />
            </li>
            <li className="px-2 py-4 cursor-pointer hover:brightness-50 ease-in-out duration-300">
              <img src={Instagram} alt="" className="w-6" />
            </li>
            <li className="px-2 py-4 cursor-pointer hover:brightness-50 ease-in-out duration-300">
              <img src={Linkedin} alt="" className="w-6" />
            </li>
            <li className="px-2 py-4 cursor-pointer hover:brightness-50 ease-in-out duration-300">
              <img src={Whastapp} alt="" className="w-6" />
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl text-yellow-300">Menu</h1>
          <ul className="list-none">
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1 pt-1">
              Inicio
            </li>
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1">
              Servicios
            </li>
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1">
              Sucursales
            </li>
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1">
              Vacantes
            </li>
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1">
              Contacto
            </li>
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1">
              Nosotros
            </li>
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1">
              Catálogo
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl text-yellow-300">Más de grupo SM8</h1>
          <ul className="list-none">
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1 pt-1">
              SM8 España
            </li>
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1 pt-1">
              SM8 Desarrollos
            </li>
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1 pt-1">
              SM8 España
            </li>
          </ul>
        </div>
      </div>
      <div class="border border-transparent border-t-neutral-700">
        <p className="text-sm text-neutral-500 pt-2">
          © 2023 Grupo SM8, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
