import { Link, useSearchParams } from "react-router-dom";
import BotonPrincipal from "../../components/botonPrincipal";
import InputPassword from "../../components/inputPassword";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Modal from "../../components/modal";
import { se } from "date-fns/locale";

export default function ChangePassword() {
  
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [samePassword, setSamePassword] = useState(false);
  const [searchParams] = useSearchParams();
  const modalRef = useRef();
  const [errorMessage, setErrorMessage] = useState("neutral");

  const handleOpenModal = () => {
    modalRef.current.openModal();
  }

  useEffect(() => {
    setToken(searchParams.get("token"));
  }, [searchParams, setToken]);

  const handleSubmmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setSamePassword(true);
    } else {
      setErrorMessage("loading");
      setSamePassword(false);      
      try {
         const response = await axios.post(
           "https://apis.sm8.com.mx:3000/api/auth/change-password",
           { token: token , newPassword: password }
         );
          setErrorMessage("success");
        console.log("Respuesta del servidor:", response);
      } catch (error) {
        setErrorMessage("error");
        console.error("Error en el cambio de contraseña:", error);
      }
    }
  };

  return (
  <>
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
          <BotonPrincipal type={"submit"} onClick={handleOpenModal}  text={"Cambiar contraseña"} className={"xl:w-full"} />
        </form>
      </div>
    </div>
    <Modal ref={modalRef} >
      {errorMessage === "loading" && (<p className="text-center text-yellow-500 text-xl">Cambiando contraseña</p>)}
      {errorMessage === "success" && (<><p className="text-center text-yellow-500 text-xl">Contraseña cambiada con exito</p>
      <div className="grid items-center justify-center pt-5">
        <Link to={"/login"}><BotonPrincipal  text={"Ir al login"}/></Link>
      </div>
      </>)}
      {errorMessage === "error" && (<p className="text-center text-yellow-500 text-xl">Ocurrio un error al cambiar la contraseña. Intente de nuevo</p>)}
    </Modal>
    </>
  );
  
}
