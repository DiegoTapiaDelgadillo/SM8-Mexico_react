import { useSearchParams } from "react-router-dom";
import BotonPrincipal from "../../components/botonPrincipal";
import InputPassword from "../../components/inputPassword";
import { useEffect, useState } from "react";

export default function ChangePassword() {
  
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [samePassword, setSamePassword] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setToken(searchParams.get("token"));
  }, [searchParams, setToken]);

  const handleSubmmit = (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      setSamePassword(true);
    } else {
      setSamePassword(false);
      
      const changePassword = async () => {
        try {
          const response = await axios.post(
            "http://localhost:3000/api/usuarios/change-password",
            { token: token , newPassword: password }
          );
          console.log("Respuesta del servidor:", response);
        } catch (error) {
          console.error("Error en el cambio de contraseña:", error);
        }
      }
    }
  };
  return (
    <div className=" h-screen bg-neutral-800 flex items-center justify-center px-4">
      <div className=" md:w-3/4 xl:w-2/4 2xl:w-2/5 border border-black p-8 sm:p-12 rounded-2xl bg-neutral-900">
        <p className=" text-xl sm:text-3xl text-yellow-300 text-center">
          Cambiar contraseña
        </p>
        <p className=" text-white text-center py-2 text-xs sm:text-xl">
          Ingrese una nueva contraseña para su cuenta.
        </p>
        <form className=" py-4" onSubmit={handleSubmmit}>
          <p className=" text-white text-sm pb-1">Nueva contraseña:</p>
          <InputPassword
            placeholder={"Ingresa una nueva contraseña..."}
            value={password}
            name={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className=" py-2"></div>
          <p className=" text-white text-sm pb-1">Confirmar contraseña:</p>
          <InputPassword
            placeholder={"Confirma tu contraseña..."}
            value={confirmPassword}
            name={"confirmPassword"}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {samePassword ? (
            <p className=" text-red-500 text-center pt-2 animate-fade-down">
              Las contraseñas deben de ser iguales
            </p>
          ) : null}
          <div className=" py-2"></div>
          <BotonPrincipal text={"Cambiar contraseña"} className={"xl:w-full"} />
        </form>
      </div>
    </div>
  );
}
