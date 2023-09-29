import SM8Logo from "./img/Logo Horizontal.png";
import SM8Icono from "./img/fav.ico";
import Facebook from "./img/facebook.png";
import Instagram from "./img/instagram.png";
import Linkedin from "./img/linkedin.png";
import Whastapp from "./img/whatsapp.png";
import MobilMenu from "./mobil";
import { useState } from "react";
export default function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [isShow, setShow] = useState(false);

  const NavbarOpen = () => {
    setNavbarOpen(!isNavbarOpen);
    console.log(isNavbarOpen);
  };

  const ShowElement = () => {
    setShow(true);
  };

  const NotShowElement = () => {
    setShow(false);
  };

  return (
    <>
      <nav className="w-full h-auto bg-neutral-900 fixed z-50 shadow-md">
        <div className="hidden xl:block">
          <div className="flex justify-between pt-4 pb-4 pr-20 pl-20">
            <div>
              <img src={SM8Logo} alt="" className="w-24" />
            </div>
            <div>
              <ul className="list-none flex flex-wrap nowrap">
                <li className="px-4 py-4 text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300">
                  Inicio
                </li>
                <li className="px-4 py-4 text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300">
                  Servicios
                </li>
                <li className="px-4 py-4 text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300">
                  Sucursales
                </li>
                <li className="px-4 py-4 text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300">
                  Vacantes
                </li>
                <li className="px-4 py-4 text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300">
                  Contacto
                </li>
                <li className="px-4 py-4 text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300">
                  Nosotros
                </li>
                <li className="px-4 py-4 text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300">
                  Catálogo
                </li>
                <li className="px-4 py-4 text-yellow-300/50">|</li>
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
          </div>
        </div>
        <div className="block xl:hidden">
          <div className="flex justify-between pt-4 pb-4 pr-10 pl-10">
            <div>
              <img src={SM8Icono} alt="" className="w-6" />
            </div>
            <div>
              <div className={isNavbarOpen ? "hidden" : "block"}>
                <div
                  onMouseEnter={ShowElement}
                  className={isShow ? "hidden" : "block"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 stroke-yellow-300 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </div>
              </div>

              <div
                onMouseLeave={NotShowElement}
                className={isShow ? "block" : "hidden"}
              >
                <div
                  onClick={NavbarOpen}
                  className={isNavbarOpen ? "hidden" : "block"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 stroke-yellow-300 cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                    />
                  </svg>
                </div>
              </div>
              <div
                onClick={NavbarOpen}
                className={isNavbarOpen ? "block" : "hidden"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 stroke-yellow-300 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={isNavbarOpen ? "block xl:hidden" : "hidden"}>
        <MobilMenu></MobilMenu>
      </div>
    </>
  );
}
