import BotonPrincipal from "../botonPrincipal";
import { useState } from "react";
import axios from "axios";

export default function RecoveryPassword() {
  const [email, setEmail] = useState("");
  const handleSubmmit = async(event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/recovery",
        { email }
      );
      console.log("Respuesta del servidor:", response);
    } catch (error) {
      console.error("Error en la recuperación de contraseña:", error);
    }
  };

  

  return (
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
  );
}
