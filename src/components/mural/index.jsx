import BotonPrincipal from "../botonPrincipal";
export default function Mural({ title, body, rutaFondo, buttonText }) {
  return (
    <div
      className="flex bg-cover bg-center h-screen px-12 pt-24 justify-center items-center"
      style={{ backgroundImage: `url(${rutaFondo})` }}
    >
      <div className="grid justify-items-center">
        <h1 className="pb-4 text-yellow-300 text-center text-3xl lg:text-7xl">
          {title}
        </h1>
        <h1 className="text-white pb-4 text-center">{body}</h1>
      </div>
    </div>
  );
}
