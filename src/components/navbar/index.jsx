import SM8Logo from "./img/Logo Horizontal.png";
import SM8Icono from "./img/fav.ico";
import Facebook from "./img/facebook.png";
import Instagram from "./img/instagram.png";
import Linkedin from "./img/linkedin.png";
import Whastapp from "./img/whatsapp.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { token, logout } = useAuth();

  const NavbarOpen = () => {
    setNavbarOpen(!isNavbarOpen);
    console.log(isNavbarOpen);
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
        className={`w-full h-auto fixed z-50 animate-fade-down ${
          scrolling
            ? "bg-neutral-950 ease-in-out duration-300"
            : "bg-transparent ease-in-out duration-300"
        }`}
      >
        <div className="hidden xl:block">
          <div className="flex justify-between items-center pt-4 pb-4 pr-20 pl-20">
            <div>
              <Link to="/">
                <img src={SM8Logo} alt="" className="w-24 cursor-pointer" />
              </Link>
            </div>
            <div className="flex items-center">
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
                  <Link to="/Noticias">Noticias</Link>
                </li>
                <li className="px-4 py-4 text-yellow-300 cursor-pointer hover:text-yellow-300/75 ease-in-out duration-300">
                  <a
                    href="https://publuu.com/flip-book/177837/438154"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Catálogo
                  </a>
                </li>
                <li className="px-4 py-4 text-yellow-300/50">|</li>
                <li className="px-2 py-4 cursor-pointer hover:brightness-50 ease-in-out duration-300">
                  <a
                    href="https://www.facebook.com/sm8demexico"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Facebook} alt="Facebook" className="w-6" />
                  </a>
                </li>
                <li className="px-2 py-4 cursor-pointer hover:brightness-50 ease-in-out duration-300">
                  <a
                    href="https://www.instagram.com/sm8demexico/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Instagram} alt="Instagram" className="w-6" />
                  </a>
                </li>
                <li className="px-2 py-4 cursor-pointer hover:brightness-50 ease-in-out duration-300">
                  <a
                    href="https://www.linkedin.com/company/sm8/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Linkedin} alt="LinkedIn" className="w-6" />
                  </a>
                </li>
                <li className="px-2 py-4 cursor-pointer hover:brightness-50 ease-in-out duration-300">
                  <a
                    href=" https://wa.me/5215514231881"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Whastapp} alt="WhatsApp" className="w-6" />
                  </a>
                </li>
              </ul>
              {token && (
                <div className="flex items-center">
                  <Link
                    to="/gestion-do"
                    className="ml-4 text-yellow-300 hover:text-yellow-500 font-bold py-2 px-4 rounded"
                  >
                    DO
                  </Link>
                  <button
                    onClick={logout}
                    className="ml-4 text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="block xl:hidden">
          <div className="flex justify-between pt-4 pb-4 pr-10 pl-10">
            <div>
              <img src={SM8Icono} alt="SM8 Icono" className="w-6" />
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
      <div
        className={`xl:hidden fixed top-0 right-0 w-full h-screen z-40 transition-transform duration-300 transform ${
          isNavbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="grid pt-16 w-full h-screen bg-neutral-900 text-yellow-300 justify-center items-center">
          <ul className="w-full text-center divide-y-2 divide-yellow-300/10">
            <li className="py-4 hover:text-yellow-300/75 transition-colors duration-300">
              <Link to="/" onClick={NavbarOpen}>
                Inicio
              </Link>
            </li>
            <li className="py-4 hover:text-yellow-300/75 transition-colors duration-300">
              <Link to="/Servicios" onClick={NavbarOpen}>
                Servicios
              </Link>
            </li>
            <li className="py-4 hover:text-yellow-300/75 transition-colors duration-300">
              <Link to="/Sucursales" onClick={NavbarOpen}>
                Sucursales
              </Link>
            </li>
            <li className="py-4 hover:text-yellow-300/75 transition-colors duration-300">
              <Link to="/Vacantes" onClick={NavbarOpen}>
                Vacantes
              </Link>
            </li>
            <li className="py-4 hover:text-yellow-300/75 transition-colors duration-300">
              <Link to="/Contacto" onClick={NavbarOpen}>
                Contacto
              </Link>
            </li>
            <li className="py-4 hover:text-yellow-300/75 transition-colors duration-300">
              <Link to="/Nosotros" onClick={NavbarOpen}>
                Nosotros
              </Link>
            </li>
            <li className="py-4 hover:text-yellow-300/75 transition-colors duration-300">
              <Link to="/Noticias" onClick={NavbarOpen}>
                Noticias
              </Link>
            </li>
            <li className="py-4 hover:text-yellow-300/75 transition-colors duration-300">
              <a
                href="https://publuu.com/flip-book/177837/438154"
                target="_blank"
                rel="noopener noreferrer"
                onClick={NavbarOpen}
              >
                Catálogo
              </a>
            </li>
          </ul>

          <div className="flex justify-center mt-8">
            <div className="px-2">
              <a
                href="https://www.facebook.com/sm8demexico"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="w-8 cursor-pointer hover:brightness-50 transition-all duration-300"
                />
              </a>
            </div>
            <div className="px-2">
              <a
                href="https://www.instagram.com/sm8demexico/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="w-8 cursor-pointer hover:brightness-50 transition-all duration-300"
                />
              </a>
            </div>
            <div className="px-2">
              <a
                href="https://www.linkedin.com/company/sm8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Linkedin}
                  alt="LinkedIn"
                  className="w-8 cursor-pointer hover:brightness-50 transition-all duration-300"
                />
              </a>
            </div>
            <div className="px-2">
              <a
                href="https://wa.me/5215514231881"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Whastapp}
                  alt="WhatsApp"
                  className="w-8 cursor-pointer hover:brightness-50 transition-all duration-300"
                />
              </a>
            </div>
          </div>

          {token && (
            <div className="flex items-center mt-8">
              <Link
                to="/gestion-do"
                className="text-yellow-300 hover:text-yellow-500 font-bold py-2 px-4 rounded"
              >
                DO
              </Link>
              <button
                onClick={logout}
                className="ml-4 text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded"
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
