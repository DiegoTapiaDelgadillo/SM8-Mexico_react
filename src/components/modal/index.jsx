import React from "react";
import Carrusel from "../carrusel";
import CloseSvg from "../closeSvg";

export default function Modal({ imagenes }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="px-16 py-4 w-auto md:py-4 bg-yellow-300 rounded-3xl shadow-md border-4 border-black hover:bg-black hover:border-yellow-300 hover:text-yellow-300 hover:shadow-2xl ease-in-out duration-300 md:text-xl text-sm"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ver imagenes
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex   fixed inset-0 z-50 outline-none focus:outline-none bg-my-blur animate-fade">
            <div className="relative w-full px-8 xl:px-64 py-48">
              <div className="w-auto rounded-md bg-black overscroll-y-contain">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <Carrusel images={imagenes} />
                  </div>
                  <div className="py-4 p-8 border-y border-r border-black rounded-r-md">
                    <div className="flex items-start justify-end w-full">
                      <CloseSvg onClick={() => setShowModal(false)} />
                    </div>
                    <div>
                      <h1 className="text-2xl md:text-4xl lg:text-6xl text-yellow-300 py-8 uppercase">
                        Tecate pa'l norte 2021
                      </h1>
                      <p className="text-white text-justify text-sm md:text-md">
                        Nuestro sistema es el ideal para restauraciones tanto en
                        exteriores como en interiores, además gracias a su
                        estabilidad, se pueden cubrir grandes extensiones de
                        obra sin importar la altura.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
