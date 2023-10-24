import BotonPrincipal from "../botonPrincipal";
//import axios from "axios";
import { useState } from "react";

export default function FormContacto() {
  const [formData, setFormData] = useState({
    correoDestino: "",
    asunto: "",
    nombre: "",
    telefono: "",
    ciudad: "",
    empresa: "",
    mensaje: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/enviar-correo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Solicitud POST exitosa");
        alert("El correo se envio con exito");
      } else {
        console.error("Error en la solicitud POST");
        alert("El correo no se pudo enviar");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              id="nombre"
              className="w-full p-4 rounded-xl border-black border-2"
              required="true"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
            <div className="py-2"></div>
            <input
              type="text"
              name="correoDestino"
              id="correoDestino"
              className="w-full p-4 rounded-xl border-black border-2"
              required="true"
              placeholder="Email"
              value={formData.correoDestino}
              onChange={handleInputChange}
            />
            <div className="py-2"></div>
            <input
              type="text"
              name="telefono"
              id="telefono"
              className="w-full p-4 rounded-xl border-black border-2"
              placeholder="Teléfono"
              required="true"
              value={formData.telefono}
              onChange={handleInputChange}
            />
            <div className="py-2"></div>
            <input
              type="text"
              name="asunto"
              id="asunto"
              className="w-full p-4 rounded-xl border-black border-2"
              required="true"
              placeholder="Asunto"
              value={formData.asunto}
              onChange={handleInputChange}
            />
            <div className="py-2"></div>
            <select
              className="w-full p-4 rounded-xl border-black border-2 bg-white"
              required="true"
              name="ciudad"
              id="ciudad"
              value={formData.ciudad}
              onChange={handleInputChange}
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
              name="empresa"
              id="empresa"
              className="w-full p-4 rounded-xl border-black border-2"
              required="true"
              placeholder="Empresa (opcional)"
              value={formData.empresa}
              onChange={handleInputChange}
            />
            <div className="py-2"></div>
            <textarea
              className="w-full p-4 rounded-xl border-black border-2"
              required="true"
              name="mensaje"
              id="mensaje"
              placeholder="Cuéntanos tus ideas y juntos crearemos algo increíble..."
              value={formData.mensaje}
              onChange={handleInputChange}
            ></textarea>
            <div className="p-1"></div>
            <button
              type="submit"
              className="w-full bg-yellow-300 p-4 rounded-3xl border-4 border-black hover:bg-black hover:text-yellow-300 hover:border-yellow-300 shadow-2xl ease-in-out duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
