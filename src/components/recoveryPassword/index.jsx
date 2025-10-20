import BotonPrincipal from "../botonPrincipal";
import { useState } from "react";
import axios from "axios";

export default function RecoveryPassword() {
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("neutral");
  const handleSubmmit = async (event) => {
    event.preventDefault();
    setEmailStatus("loading");
    try {
      const response = await axios.post(
        "https://api.timbrela.com:13003/api/auth/recovery",
        { email }
      );
      setEmailStatus("success");
      console.log("Respuesta del servidor:", response);
    } catch (error) {
      setEmailStatus("error");
      console.error("Error en la recuperación de contraseña:", error);
    }
  };

  return (
    <>
      {emailStatus === "loading" && (
        <p className="text-center text-yellow-500 text-xl">
          Enviando correo electrónico
        </p>
      )}
      {emailStatus === "neutral" && (
        <>
          <p className=" text-xl sm:text-3xl text-yellow-300 text-center">
            Recuperación de contraseña
          </p>
          <p className=" text-white text-center py-2 text-xs sm:text-xl">
            Ingrese su correo electrónico para recuperar su contraseña.
          </p>
          <form onSubmit={handleSubmmit} className=" py-4">
            <p className=" text-white text-sm pb-1">Email:</p>
            <input
              className=" w-full p-2 rounded-xl focus:outline-none"
              type="email"
              placeholder="Correo electrónico"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className=" py-2"></div>
            <BotonPrincipal
              text={"Recuperar contraseña"}
              className={"xl:w-full"}
              type={"submit"}
            />
          </form>{" "}
        </>
      )}
      {emailStatus === "success" && (
        <>
          {" "}
          <p className="text-center text-yellow-500 text-xl">
            Correo enviado correctamente
          </p>
          <p className="text-center text-white">
            Se ha enviado un correo a la siguiente dirección: {email} con las
            instrucciones de recuperación
          </p>
        </>
      )}
      {emailStatus === "error" && (
        <>
          <p className="text-center text-red-500 text-xl ">
            Error al enviar el correo electrónico
          </p>
          <p className="text-center text-white">
            Intente de nuevo con una direccion de correo valida.
          </p>
        </>
      )}
    </>
  );
}
