import BotonPrincipal from "../botonPrincipal";
export default function Mural({ title, body, rutaFondo }) {
  return (
    <div
      className="flex bg-cover bg-center h-screen pt-24 justify-center items-center"
      style={{ backgroundImage: `url(${rutaFondo})` }}
    >
      <div className="grid justify-items-center">
        <h1 className="pb-4 text-yellow-300 text-center text-5xl lg:text-7xl">
          {title}
        </h1>
        <h1 className="text-white pb-4">{body}</h1>
        <BotonPrincipal text={"Hola"}></BotonPrincipal>
      </div>
    </div>
  );
}
