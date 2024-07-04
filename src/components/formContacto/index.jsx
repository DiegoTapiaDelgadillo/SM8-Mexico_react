import { useState } from "react";
import CloseSvg from "../closeSvg";
import useFormValidation from "../../hooks/useValidationForm";


export default function FormContacto() {
  const { errors, validateForm } = useFormValidation();
  const [messageStatus, setMessageStatus] = useState("neutral");
  const [modalStatus, setModalStatus] = useState(false);
  const [formData, setFormData] = useState({
    correoDestino: "",
    asunto: "",
    nombre: "",
    telefono: "",
    ciudad: "",
    empresa: "",
    mensaje: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const closeModal = () => {
    setModalStatus(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validateForm(formData);
      setMessageStatus("londing");
      setModalStatus(true);
      const response = await fetch(
        "https://vercel-backend-tau.vercel.app/enviar-correo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setMessageStatus("enviado");
      } else {
        setMessageStatus("error");
      }
    } catch (formErrors) {
      setMessageStatus("error");
    }
  };

  return (
    <>
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
                required={true}
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
              {errors.nombre && <p className="text-red-500">{errors.nombre}</p>}
              <div className="py-2"></div>
              <input
                type="text"
                name="correoDestino"
                id="correoDestino"
                className="w-full p-4 rounded-xl border-black border-2"
                required={true}
                placeholder="Email"
                value={formData.correoDestino}
                onChange={handleInputChange}
              />
              {errors.correoDestino && <p className="text-red-500">{errors.correoDestino}</p>}
              <div className="py-2"></div>
              <input
                type="text"
                name="telefono"
                id="telefono"
                className="w-full p-4 rounded-xl border-black border-2"
                placeholder="Teléfono"
                required={true}
                value={formData.telefono}
                onChange={handleInputChange}
              />
              {errors.telefono && <p className="text-red-500">{errors.telefono}</p>}
              <div className="py-2"></div>
              <input
                type="text"
                name="asunto"
                id="asunto"
                className="w-full p-4 rounded-xl border-black border-2"
                required={true}
                placeholder="Asunto"
                value={formData.asunto}
                onChange={handleInputChange}
              />
              <div className="py-2"></div>
              <select
                className="w-full p-4 rounded-xl border-black border-2 bg-white"
                required={true}
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
                required={false}
                placeholder="Empresa (opcional)"
                value={formData.empresa}
                onChange={handleInputChange}
              />
              <div className="py-2"></div>
              <textarea
                className="w-full p-4 rounded-xl border-black border-2"
                required={true}
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
      {modalStatus ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none bg-transparent animate-fade">
            <div className="relative w-full">
              <div className="w-auto p-2 sm:px-24 md:px-48 lg:px-56 xl:px-72 2xl:px-96">
                <div className="bg-black rounded-xl p-2 border-4 border-yellow-500">
                  <div className="flex items-start justify-end w-full ">
                    <CloseSvg onClick={closeModal} />
                  </div>
                  <div className=" flex items-center justify-center py-24">
                    {messageStatus === "londing" && (
                      <>
                        <p className=" text-white pr-2">Enviando mensaje...</p>
                      </>
                    )}
                    {messageStatus === "enviado" && (
                      <>
                        <p className=" text-white pr-2">
                          Mensaje enviado correctamente
                        </p>
                      </>
                    )}
                    {messageStatus === "error" && (
                      <>
                        <p className=" text-white">
                          Error al enviar el mensaje
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
