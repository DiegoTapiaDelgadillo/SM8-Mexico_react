import { Link } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";

export default function CardNoticia({ title, date, image, section, link, delay }) {
  useScrollTop();
  return (
    <Link to={link} className="block border-2 bg-neutral-800 border-neutral-950 shadow-2xl rounded-2xl p-4 mb-6 hover:border-yellow-300 ease-in-out duration-500" data-aos="zoom-in" data-aos-delay={delay}>
      <div className="flex items-center flex-col md:flex-row ">
        <figure className="flex-shrink-0 w-full md:w-1/3">
          <img src={image} alt={title} className="rounded-xl shadow-md w-full" />
        </figure>
        <div className="flex flex-col justify-between p-4 w-full md:w-2/3">
          <div>
            <h2 className="text-neutral-100 text-sm mb-2">{section}</h2>
            <h1 className="text-yellow-300 text-xl mb-2">{title}</h1>
            <p className="text-sm text-gray-500 mb-2">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
