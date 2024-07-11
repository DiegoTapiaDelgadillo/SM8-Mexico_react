import { Link } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";

export default function CardNoticiaGrande({ title, date, image, section, summary, link, delay }) {
  useScrollTop();
  return (
    <Link to={link} className="h-full block border-2 bg-neutral-800 border-neutral-950 shadow-2xl rounded-2xl row-span-2 col-span-2 p-4 mb-6 hover:border-yellow-300 ease-in-out duration-500" data-aos="zoom-in" data-aos-delay={delay}>
      <div className="flex flex-col">
        <figure className="flex-shrink-0 w-full mb-4">
          <img src={image} alt={title} className="rounded-2xl shadow-md w-full" />
        </figure>
        <div className="flex flex-col justify-between w-full">
          <div>
            <h2 className="text-neutral-100 text-base mb-2">{section}</h2>
            <h1 className="text-yellow-300 text-2xl mb-2">{title}</h1>
            <p className="text-base text-gray-500 mb-2">{date}</p>
            <p className="text-xl text-white">{summary}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
