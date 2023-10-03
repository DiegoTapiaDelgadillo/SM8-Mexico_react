import Andamio from "./img/hayley-murray-We8KjFpFNR4-unsplash.jpg";
import BotonPrincipal from "../botonPrincipal";
export default function FormContacto() {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 w-full 2xl:px-60">
      <div className="hidden relative h-full 2xl:block">
        <img
          src={Andamio}
          alt=""
          className="w-full h-auto rounded-3xl shadow-2xl brightness-50"
        />
        <div class="absolute bottom-0 left-0 p-4">
          <h2 className="text-white text-4xl shadow-2xl">
            "Con andamios firmes, alcanzamos nuevas alturas en la construcción
            de sueños."
          </h2>
          <h3 className="text-white pt-1">Grupo SM8</h3>
        </div>
      </div>
      <div className="flex justify-center items-center bg-neutral-900 rounded-3xl shadow-2xl p-8">
        <div>
          <h1 className="text-5xl text-yellow-300">
            ¿Tienes algún proyecto? Nos encantaría trabajar contigo.
          </h1>
          <h2 className="text-white py-4">
            Escribe tus datos y nosotros nos pondremos en contacto contigo.
          </h2>
          <form action="">
            <input
              type="text"
              name=""
              id=""
              className="w-full p-4 rounded-xl border-black border-2"
              placeholder="Nombre"
            />
            <div className="py-2"></div>
            <input
              type="text"
              name=""
              id=""
              className="w-full p-4 rounded-xl border-black border-2"
              placeholder="Email"
            />
            <div className="py-2"></div>
            <input
              type="text"
              name=""
              id=""
              className="w-full p-4 rounded-xl border-black border-2"
              placeholder="Teléfono"
            />
            <div className="py-2"></div>
            <input
              type="text"
              name=""
              id=""
              className="w-full p-4 rounded-xl border-black border-2"
              placeholder="Asunto"
            />
            <div className="py-2"></div>
            <select className="w-full p-4 rounded-xl border-black border-2 bg-white">
              <option value="Selecciona">Selecciona una ciudad</option>
              <option value="Aguascalientes">Aguascalientes</option>
              <option value="Cancún">Cancún</option>
              <option value="Chihuahua">Chihuahua</option>
              <option value="Culiacán">Culiacán</option>
              <option value="Guadalajara">Guadalajara</option>
              <option value="Hermosillo">Hermosillo</option>
              <option value="Mérida">Mérida</option>
              <option value="Mexicali">Mexicali</option>
              <option value="Monterrey">Monterrey</option>
              <option value="Morelia">Morelia</option>
              <option value="Oaxaca">Oaxaca</option>
              <option value="Puebla">Puebla</option>
              <option value="Querétaro">Querétaro</option>
              <option value="Saltillo">Saltillo</option>
              <option value="San Luis Potosí">San Luis Potosí</option>
              <option value="Tijuana">Tijuana</option>
              <option value="Toluca">Toluca</option>
              <option value="Torreón">Torreón</option>
              <option value="Tuxtla Gutiérrez">Tuxtla Gutiérrez</option>
              <option value="Villahermosa">Villahermosa</option>
              <option value="Zacatecas">Zacatecas</option>
            </select>
            <div className="py-2"></div>
            <input
              type="text"
              name=""
              id=""
              className="w-full p-4 rounded-xl border-black border-2"
              placeholder="Empresa (opcional)"
            />
            <div className="py-2"></div>
            <textarea
              className="w-full p-4 rounded-xl border-black border-2"
              placeholder="Cuéntanos tus ideas y juntos crearemos algo increíble..."
            ></textarea>
            <div className="flex justify-between w-full">
              <div></div>
              <div>
                <BotonPrincipal text={"Enviar"}></BotonPrincipal>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
