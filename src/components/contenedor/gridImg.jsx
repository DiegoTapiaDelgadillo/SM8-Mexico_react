import imagen from "./img/8445c776-e17b-4f3c-8c51-ac7b53c411a9.jpg";
import imagen1 from "./img/eventos 2.jpg";
import imagen2 from "./img/torres de servicio 2.jpg";
import imagen3 from "./img/WhatsApp Image 2023-03-15 at 12.44.35 PM.jpeg";
export default function GridImg() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full p-4 xl:p-12 rounded-3xl">
      <div>
        <img src={imagen} alt="" className="rounded-3xl w-full h-full" />
      </div>
      <div>
        <img src={imagen1} alt="" className="rounded-3xl w-full h-full" />
      </div>
      <div>
        <img src={imagen2} alt="" className="rounded-3xl w-full h-full" />
      </div>
      <div>
        <img src={imagen3} alt="" className="rounded-3xl w-full h-full" />
      </div>
    </div>
  );
}
