import BotonPrincipal from "../botonPrincipal";
import { Link } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";

export default function CardNoticia({ title, date, image, summary, link, delay }) {
  useScrollTop();
  return (
    <div className="border-2 border-neutral-950 rounded-2xl p-4 flex flex-col justify-between h-full" data-aos="zoom-in" data-aos-delay={delay}>
      <div>
        <figure>
          <img src={image} alt={title} className="rounded-2xl shadow" />
        </figure>
        <p className="text-yellow-300 text-justify py-2">{title}</p>
        <p className="text-s text-gray-500 text-justify">{date}</p>
        <p className="text-s text-white text-justify py-2">{summary}</p>
      </div>
      <div className="flex justify-center mt-4">
        <Link to={link}>
          <BotonPrincipal
            text="Leer más"
            className="text-black px-8 py-2 text-sm md:text-base md:px-16 md:py-4"
          />
        </Link>
      </div>
    </div>
  );
}
