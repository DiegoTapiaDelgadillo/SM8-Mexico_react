import { Link } from "react-router-dom";
import NewspaperSvg from "../../components/newspaperSvg";
import JobSvg from "../../components/jobSvg";

export default function GestionDeo() {
  const options = [
    {
      title: "Vacantes",
      rute: "/gestion-vacantes",
      icon: <JobSvg />,
    },
    {
      title: "Noticias",
      rute: "/",
      icon: <NewspaperSvg />,
    },
  ];
  return (
    <div className=" h-screen bg-neutral-800 flex items-center justify-center px-10">
      <div>
        <p className=" text-yellow-300 text-2xl 2xl:text-6xl text-center">
          Hola, bienvenido a tu sección equipo DEO
        </p>
        <p className=" text-center text-white 2xl:text-3xl 2xl:py-2">
          Selecciona una opción
        </p>
        <div className=" grid sm:grid-cols-2 gap-4 py-8">
          {options.map((option, index) => (
            <Link
              key={index}
              to={option.rute}
              className=" border border-yellow-300 rounded-xl p-4 text-center text-white hover:bg-yellow-300 hover:border-black hover:text-black ease-in-out duration-300 flex justify-center items-center 2xl:text-xl"
            >
              <div className=" pr-4">{option.icon}</div>
              {option.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
