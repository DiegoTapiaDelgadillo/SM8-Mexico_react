import { Link } from "react-router-dom";
export default function CardCodigos({ ruta, titulo }) {
  return (
    <div className="grid w-full">
      <a href={ruta} target="_blank">
        <div className="w-full border-2 shadow-2xl p-4 bg-yelloe-300 flex justify-center items-center rounded-3xl border-black hover:border-neutral-900 hover:bg-yellow-300 hover:text-black text-yellow-300 ease-in-out duration-300">
          <div>
            <h1 className="text-xl">{titulo}</h1>
            <h2></h2>
          </div>
        </div>
      </a>
    </div>
  );
}
