import BotonPrincipal from "../botonPrincipal";
import { Link } from "react-router-dom";
export default function CardSucursales({
  titulo,
  maps,
  direccion,
  rutaImagen,
  telefono,
}) {
  return (
    <div className="border-4 border-neutral-900/80 w-full rounded-3xl shadow-2xl hover:border-yellow-300 ease-in-out duration-300 grid grid-rows-2">
      <div className="w-full grid justify-items-center pt-8">
        <img src={rutaImagen} alt="" className="w-80 md:w-96 rounded-3xl" />
      </div>
      <div className="xl:py-8 px-8 flex justify-center items-center">
        <div>
          <h1 className="text-yellow-300 text-3xl text-center pb-4">
            {titulo}
          </h1>
          <div className="flex w-full">
            <div className="px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 stroke-yellow-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <h2 className="text-white pb-4">{direccion}</h2>
          </div>
          <div className="flex w-full">
            <div className="px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 stroke-yellow-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <h2 className="text-white pt-1 pb-4">{telefono}</h2>
          </div>

          <div className="grid w-full justify-items-center pb-8 md:p-0">
            <a href={maps} target="_blank">
              <BotonPrincipal text={"Visitar"}></BotonPrincipal>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
