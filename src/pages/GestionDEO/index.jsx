import BotonPrincipal from "../../components/botonPrincipal";
import PlusSvg from "../../components/plusSvg";
import TrashSvg from "../../components/trashSvg";
import UpdateSvg from "../../components/updateSvg";
import ViewSvg from "../../components/viewSvg";
import Modal from "../../components/modal";
import { useRef } from "react";

export default function GestionDeo() {
  const modalRef = useRef();

  const handleOpenModalCreateNews = () => {
    modalRef.current.openModal();
  };

  const crudVacantes = [
    {
      svg: <PlusSvg />,
      title: "Crear",
      description: "Crea una nueva vacante para SM8",
      button: "Crear Vacante",
      modal: handleOpenModalCreateNews,
    },
    {
      svg: <ViewSvg />,
      title: "Consultar",
      description: "Consulta todas las vacantes de SM8",
      button: "Consultar Vacantes",
      modal: handleOpenModalCreateNews,
    },
    {
      svg: <UpdateSvg />,
      title: "Actualizar",
      description: "Actualiza una vacante de SM8",
      button: "Actualizar Vacante",
      modal: handleOpenModalCreateNews,
    },
    {
      svg: <TrashSvg />,
      title: "Borrar",
      description: "Borra una vacante de SM8",
      button: "Borrar Vacante",
      modal: handleOpenModalCreateNews,
    },
  ];

  const crudNoticias = [
    {
      svg: <PlusSvg />,
      title: "Crear",
      description: "Crea una nueva noticia para SM8",
      button: "Crear Noticia",
      modal: handleOpenModalCreateNews,
    },
    {
      svg: <ViewSvg />,
      title: "Consultar",
      description: "Consulta todas las noticia de SM8",
      button: "Consultar Noticia",
      modal: handleOpenModalCreateNews,
    },
    {
      svg: <UpdateSvg />,
      title: "Actualizar",
      description: "Actualiza una noticia de SM8",
      button: "Actualizar Noticia",
      modal: handleOpenModalCreateNews,
    },
    {
      svg: <TrashSvg />,
      title: "Borrar",
      description: "Borra una noticia de SM8",
      button: "Borrar Noticia",
      modal: handleOpenModalCreateNews,
    },
  ];

  return (
    <>
      <div className=" py-48 px-8 sm:px-24 bg-neutral-900">
        <p className=" text-3xl sm:text-4xl text-yellow-300">
          Hola, Bienvenido nuevamente a tu sección equipo DEO
        </p>
        <p className=" pb-24 text-white sm:text-xl pt-2">
          Aquí podras gestionar las vacantes y noticas de la pagina de SM8
          México
        </p>
        <div className=" grid grid-cols-1 2xl:grid-cols-2 gap-4 items-center">
          <div>
            <p className=" text-yellow-300 text-3xl">Gestión de noticias</p>
            <p className=" text-white">
              En esta sección podras consultar, borrar, actualizar y crear una
              noticia
            </p>
          </div>
          <div className=" grid sm:grid-cols-2 gap-4">
            {crudNoticias.map((item, index) => (
              <div
                className=" border-2 border-black rounded-xl p-8"
                key={index}
              >
                <div className=" w-full flex justify-center pb-4">
                  {item.svg}
                </div>
                <p className=" text-xl text-yellow-300 text-center">
                  {item.title}
                </p>
                <p className=" text-white text-center">{item.description}</p>
                <div className=" flex w-full justify-center pt-4">
                  <BotonPrincipal text={item.button} onClick={item.modal} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" py-48 px-8 sm:px-24 bg-neutral-800">
        <div className=" grid grid-cols-1 2xl:grid-cols-2 gap-4 items-center">
          <div>
            <p className=" text-yellow-300 text-3xl">Gestión de vacantes</p>
            <p className=" text-white">
              En esta sección podras consultar, borrar, actualizar y crear una
              vacantes
            </p>
          </div>
          <div className=" grid sm:grid-cols-2 gap-4">
            {crudVacantes.map((item, index) => (
              <div
                className=" border-2 border-black rounded-xl p-8"
                key={index}
              >
                <div className=" w-full flex justify-center pb-4">
                  {item.svg}
                </div>
                <p className=" text-xl text-yellow-300 text-center">
                  {item.title}
                </p>
                <p className=" text-white text-center">{item.description}</p>
                <div className=" flex w-full justify-center pt-4">
                  <BotonPrincipal text={item.button} onClick={item.modal} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal ref={modalRef}></Modal>
    </>
  );
}
