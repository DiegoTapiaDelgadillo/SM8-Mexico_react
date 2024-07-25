import { Link } from "react-router-dom";
import ArrowLeftSvg from "../arrowLeftSvg";

export default function AtrasBoton({ to }) {
  return (
    <Link to={to}>
      <div className=" flex w-24 cursor-pointer items-center text-yellow-300 hover:text-yellow-300/50 ease-in-out duration-300">
        <ArrowLeftSvg />
        <p className=" pl-2">Atras</p>
      </div>
    </Link>
  );
}
