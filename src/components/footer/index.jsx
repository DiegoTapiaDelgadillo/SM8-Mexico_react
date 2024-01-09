import SM8Logo from "../navbar/img/Logo Horizontal.png";
import Facebook from "../navbar/img/facebook.png";
import Linkedin from "../navbar/img/linkedin.png";
import Instagram from "../navbar/img/instagram.png";
import Whastapp from "../navbar/img/whatsapp.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 h-auto p-8 xl:p-20">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-36 w-full pb-8">
        <div>
          <Link to={"/"}>
            <img src={SM8Logo} alt="" className="w-24" />
          </Link>
          <h2 className="text-white pt-6 pb-6 text-xs text-justify">
            "Construye tus sueños como si estuvieras construyendo un andamio
            sólido: con paciencia, precisión y la confianza de que cada paso te
            acerca más a la cima."
          </h2>
          <ul className="list-none flex flex-wrap nowrap">
            <a href="https://www.facebook.com/sm8demexico" target="_blank">
              <li className="px-2 py-4 cursor-pointer hover:brightness-50 ease-in-out duration-300">
                <img src={Facebook} alt="" className="w-6" />
              </li>
            </a>
            <a href="https://www.instagram.com/sm8demexico/" target="_blank">
              <li className="px-2 py-4 cursor-pointer hover:brightness-50 ease-in-out duration-300">
                <img src={Instagram} alt="" className="w-6" />
              </li>
            </a>
            <a href="https://www.linkedin.com/company/sm8/" target="_blank">
              <li className="px-2 py-4 cursor-pointer hover:brightness-50 ease-in-out duration-300">
                <img src={Linkedin} alt="" className="w-6" />
              </li>
            </a>
            <li className="px-2 py-4 cursor-pointer hover:brightness-50 ease-in-out duration-300">
              <img src={Whastapp} alt="" className="w-6" />
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl text-yellow-300">Menu</h1>
          <ul className="list-none">
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1 pt-1">
              <Link to={"/"}>Inicio</Link>
            </li>
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1">
              <Link to={"/Servicios"}>Servicios</Link>
            </li>
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1">
              <Link to={"/Sucursales"}>Sucursales</Link>
            </li>
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1">
              <Link to={"/Vacantes"}>Vacantes</Link>
            </li>
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1">
              <Link to={"/Contacto"}>Contacto</Link>
            </li>
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1">
              <Link to={"/Nosotros"}>Nosotros</Link>
            </li>
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1">
              <a
                href="https://publuu.com/flip-book/177837/438154"
                target="_blank"
              >
                Catálogo
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl text-yellow-300">Más de grupo SM8</h1>
          <ul className="list-none">
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1 pt-1">
              <a href="https://www.sm8.es" target="_blank">
                SM8 España
              </a>
            </li>
            <li className="text-white text-sm cursor-pointer hover:text-neutral-400 ease-in-out duration-300 pb-1 pt-1">
              <a href="https://sm8desarrollos.com.mx/" target="_blank">
                SM8 Desarrollos
              </a>
            </li>
          </ul>
          <h1 className="text-xl text-yellow-300 pt-4 pb-1">Teléfono</h1>
          <p className="text-white text-sm">55 5514 2372</p>
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
