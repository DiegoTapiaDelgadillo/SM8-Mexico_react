import Uno from "./img/uno.png";
import Dos from "./img/dos.png";
import Tres from "./img/tres.png";
import Cinco from "./img/cinco.png";
import Seis from "./img/seis.png";
import Siete from "./img/siete.png";
import Ocho from "./img/ocho.png";
import Nueve from "./img/nueve.png";
export default function ImgClients() {
  return (
    <div className="grid">
      <div className="flex">
        <div className="px-1">
          <img
            src={Uno}
            alt=""
            className="w-16 h-16 md:w-32 md:h-32 md:hover:w-36 md:hover:h-36 ease-in-out duration-300"
          />
        </div>
        <div className="px-1">
          <img
            src={Dos}
            alt=""
            className="w-16 h-16 md:w-32 md:h-32 md:hover:w-36 md:hover:h-36 ease-in-out duration-300"
          />
        </div>
        <div className="px-1">
          <img
            src={Tres}
            alt=""
            className="w-16 h-16 md:w-32 md:h-32 md:hover:w-36 md:hover:h-36 ease-in-out duration-300"
          />
        </div>
        <div className="px-1">
          <img
            src={Cinco}
            alt=""
            className="w-16 h-16 md:w-32 md:h-32 md:hover:w-36 md:hover:h-36 ease-in-out duration-300"
          />
        </div>
      </div>
      <div className="flex">
        <div className="px-1">
          <img
            src={Seis}
            alt=""
            className="w-16 h-16 md:w-32 md:h-32 md:hover:w-36 md:hover:h-36 ease-in-out duration-300"
          />
        </div>
        <div className="px-1">
          <img
            src={Siete}
            alt=""
            className="w-16 h-16 md:w-32 md:h-32 md:hover:w-36 md:hover:h-36 ease-in-out duration-300"
          />
        </div>
        <div className="px-1">
          <img
            src={Ocho}
            alt=""
            className="w-16 h-16 md:w-32 md:h-32 md:hover:w-36 md:hover:h-36 ease-in-out duration-300"
          />
        </div>
        <div className="px-1">
          <img
            src={Nueve}
            alt=""
            className="w-16 h-16 md:w-32 md:h-32 md:hover:w-36 md:hover:h-36 ease-in-out duration-300"
          />
        </div>
      </div>
    </div>
  );
}
