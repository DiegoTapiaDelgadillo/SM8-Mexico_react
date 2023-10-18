import BotonPrincipal from "../botonPrincipal";
import axios from "axios";
import { useState } from "react";

export default function FormContacto() {
  const [correoDestino, setCorreoDestino] = useState("");
  const [asunto, setAsunto] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarCorreo = async () => {
    try {
      await axios.post("http://localhost:3001/api/enviar-correo", {
        correoDestino,
        asunto,
        nombre,
        telefono,
        ciudad,
        empresa,
        mensaje,
      });
    } catch (error) {
      console.error(error);
      console.log("Error al enviar el correo");
    }
  };

  return (
    <div className="grid grid-cols-1 w-full bg-transparent p-8 xl:p-16">
      <div className="flex justify-center items-center bg-transparent">
        <div className="w-full">
          <h1 className="text-3xl xl:text-5xl text-yellow-300">
            ¿Tienes algún proyecto?
          </h1>
          <h1 className="text-3xl xl:text-5xl text-yellow-300 pt-2">
            Nos encantaría trabajar contigo.
          </h1>
          <h2 className="text-white py-4">
            Escribe tus datos y nosotros nos pondremos en contacto contigo.
          </h2>
          <form action="" method="post">
            <input
              type="text"
              name=""
              id=""
              className="w-full p-4 rounded-xl border-black border-2"
              required="true"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <div className="py-2"></div>
            <input
              type="text"
              name=""
              id=""
              className="w-full p-4 rounded-xl border-black border-2"
              required="true"
              placeholder="Email"
              value={correoDestino}
              onChange={(e) => setCorreoDestino(e.target.value)}
            />
            <div className="py-2"></div>
            <input
              type="text"
              name=""
              id=""
              className="w-full p-4 rounded-xl border-black border-2"
              placeholder="Teléfono"
              required="true"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <div className="py-2"></div>
            <input
              type="text"
              name=""
              id=""
              className="w-full p-4 rounded-xl border-black border-2"
              required="true"
              placeholder="Asunto"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
            />
            <div className="py-2"></div>
            <select
              className="w-full p-4 rounded-xl border-black border-2 bg-white"
              required="true"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            >
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
              required="true"
              placeholder="Empresa (opcional)"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
            />
            <div className="py-2"></div>
            <textarea
              className="w-full p-4 rounded-xl border-black border-2"
              required="true"
              placeholder="Cuéntanos tus ideas y juntos crearemos algo increíble..."
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
            <div className="flex justify-between w-full">
              <div></div>
              <div onClick={enviarCorreo}>
                <BotonPrincipal text={"Enviar"}></BotonPrincipal>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
