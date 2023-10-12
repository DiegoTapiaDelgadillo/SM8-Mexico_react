import SM8Logo from "./img/Logo Horizontal.png";
import SM8Icono from "./img/fav.ico";
import Facebook from "./img/facebook.png";
import Instagram from "./img/instagram.png";
import Linkedin from "./img/linkedin.png";
import Whastapp from "./img/whatsapp.png";
import MobilMenu from "./mobil";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const NavbarOpen = () => {
    setNavbarOpen(!isNavbarOpen);
    console.log(isNavbarOpen);
  };

  const ShowElement = () => {
    setShow(true);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full h-auto fixed z-50 shadow-md ${
          scrolling
            ? "bg-neutral-950 ease-in-out duration-300"
            : "bg-transparent ease-in-out duration-300"
        }`}
      >
        <div className="hidden xl:block">
          <div className="flex justify-between pt-4 pb-4 pr-20 pl-20">
            <div>
              <Link to="/">
                <img src={SM8Logo} alt="" className="w-24 cursor-pointer" />
              </Link>
            </div>
            <div>
              <ul className="list-none flex flex-wrap nowrap">
                <li className="px-4 py-4 text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300">
                  <Link to="/">Inicio</Link>
                </li>
                <li className="px-4 py-4 text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300">
                  <Link to="/Servicios">Servicios</Link>
                </li>
                <li className="px-4 py-4 text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300">
                  <Link to="/Sucursales">Sucursales</Link>
                </li>
                <li className="px-4 py-4 text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300">
                  <Link to="/Vacantes">Vacantes</Link>
                </li>
                <li className="px-4 py-4 text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300">
                  <Link to="/Contacto">Contacto</Link>
                </li>
                <li className="px-4 py-4 text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300">
                  <Link to="/Nosotros">Nosotros</Link>
                </li>
                <li className="px-4 py-4 text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300">
                  Catálogo
                </li>
                <li className="px-4 py-4 text-yellow-300/50">|</li>
                <li className="px-2 py-4 cursor-pointer hover:brightness-50 ease-in-out duration-300">
                  <a
                    href="https://www.facebook.com/sm8demexico"
                    target="_blank"
                  >
                    <img src={Facebook} alt="" className="w-6" />
                  </a>
                </li>
                <li className="px-2 py-4 cursor-pointer hover:brightness-50 ease-in-out duration-300">
                  <a
                    href="https://www.instagram.com/sm8demexico/"
                    target="_blank"
                  >
                    <img src={Instagram} alt="" className="w-6" />
                  </a>
                </li>
                <li className="px-2 py-4 cursor-pointer hover:brightness-50 ease-in-out duration-300">
                  <a
                    href="https://www.linkedin.com/company/sm8/"
                    target="_blank"
                  >
                    <img src={Linkedin} alt="" className="w-6" />
                  </a>
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
              <div
                className={isNavbarOpen ? "hidden" : "block"}
                onClick={NavbarOpen}
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
