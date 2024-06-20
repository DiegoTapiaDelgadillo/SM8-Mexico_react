import BotonPrincipal from "../botonPrincipal";
import LocationSvg from "../locationSvg";
import PhoneSvg from "../phoneSvg";
export default function CardSucursales({
  titulo,
  maps,
  direccion,
  rutaImagen,
  telefono,
}) {
  return (
    <div className=" border-2 border-neutral-950 rounded-2xl p-4">
      <figure>
        <img src={rutaImagen} alt="" className=" rounded-2xl shadow " />
      </figure>
      <p className=" text-yellow-300 text-center py-2">{titulo}</p>
      <div className=" flex items-center">
        <LocationSvg />
        <p className=" text-xs text-white pl-4">{direccion}</p>
      </div>
      <div className=" flex items-center py-4">
        <PhoneSvg />
        <p className=" pl-4 text-white">{telefono}</p>
      </div>
      <a href={maps} target="_blank" className=" flex justify-center">
        <BotonPrincipal text={"Visitar"} />
      </a>
    </div>
  );
}
