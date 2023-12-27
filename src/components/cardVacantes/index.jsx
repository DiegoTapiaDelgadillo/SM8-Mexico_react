import BotonPrincipal from "../botonPrincipal";
import { Link } from "react-router-dom";
export default function CardVacantes({ titulo, ubicacion }) {
  return (
    <div className="border-4 border-neutral-900/80 w-full rounded-3xl shadow-2xl hover:border-yellow-300 ease-in-out duration-300 flex">
      <div className="hidden w-1/6 border-r-4 border-neutral-900/30 h-full lg:block">
        <div className="flex justify-center items-cente py-8 h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-2/6 stroke-yellow-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
      </div>

      <div className="py-8 px-8 w-full">
        <h1 className="text-yellow-300 text-2xl md:text-4xl pb-2">{titulo}</h1>
        <div className="flex pt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-yellow-300"
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
          <h2 className="pl-2 text-white">{ubicacion}</h2>
        </div>

        <div className="flex w-full pt-4 justify-end">
          <a
            href="https://api.whatsapp.com/send/?phone=525510021327&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <BotonPrincipal text={"Aplicar"}></BotonPrincipal>
          </a>
        </div>
      </div>
    </div>
  );
}
