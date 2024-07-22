import Modal from "../../components/modal";
import BotonPrincipal from "../../components/botonPrincipal";
import CloseEyeSvg from "../../components/closeEyeSvg";
import EyeSvg from "../../components/eyeSvg";
import { useState, useRef } from "react";
import RecoveryPassword from "../../components/recoveryPassword";
import InputPassword from "../../components/inputPassword";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  const modalRef = useRef();

  const handleOpenModal = () => {
    modalRef.current.openModal();
  };

  return (
    <>
      <div className=" h-screen bg-neutral-800 flex items-center justify-center px-4">
        <div className=" md:w-3/4 xl:w-2/4 2xl:w-2/5 border border-black p-8 sm:p-12 rounded-2xl bg-neutral-900">
          <p className=" text-xl sm:text-3xl text-yellow-300 text-center">
            Bienvenido Nuevamente
          </p>
          <p className=" text-white text-center py-2 text-xs sm:text-xl">
            Ingrese su correo electrónico y contraseña para iniciar sesión en su
            cuenta.
          </p>
          <form onSubmit={handleSubmmit} className=" pt-4">
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
            <p className=" text-white text-sm pb-1">Contraseña:</p>
            <InputPassword
              name={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className=" py-2"></div>
            <BotonPrincipal
              text={"Iniciar sesión"}
              className={"xl:w-full"}
              type={"submit"}
            />
          </form>
          <p className=" text-center text-yellow-300 pt-8">
            ¿Olvidaste tu contraseña?
          </p>
          <p
            className=" text-center hover:underline text-white hover:text-white/50 cursor-pointer ease-in-out duration-300"
            onClick={handleOpenModal}
          >
            Da click aquí para recuperarla
          </p>
        </div>
      </div>
      <Modal ref={modalRef}>
        <RecoveryPassword />
      </Modal>
    </>
  );
}
