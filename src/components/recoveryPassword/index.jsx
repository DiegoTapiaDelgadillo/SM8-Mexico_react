import BotonPrincipal from "../botonPrincipal";
import { useState } from "react";
import axios from "axios";

export default function RecoveryPassword() {
  const [statusPetittion, setStatusPetition] = useState("neutral");
  const [email, setEmail] = useState("");
  const handleSubmmit = async (event) => {
    event.preventDefault();
    setStatusPetition("loading");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/recovery",
        { email }
      );
      setStatusPetition("success");
    } catch (error) {
      setStatusPetition("error");
    }
  };

  return (
    <>
      {statusPetittion === "neutral" && (
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
          </form>
        </>
      )}
      {statusPetittion === "loading" && (
        <p className=" text-center text-white">
          Enviando correo electrónico...
        </p>
      )}
      {statusPetittion === "success" && (
        <p className=" text-center text-white">
          Se ha enviado un correo electrónico a la siguinete dirección: {email}
        </p>
      )}
      {statusPetittion === "error" && (
        <p className=" text-center text-white">
          Ha ocurrido un error al enviar el correo electrónico. Por favor
          intente de nuevo.
        </p>
      )}
    </>
  );
}
