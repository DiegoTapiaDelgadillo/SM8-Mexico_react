import AtrasBoton from "../../components/atrasButton";
import PlusSvg from "../../components/plusSvg";
import EditSvg from "../../components/editSvg";
import TrashSvg from "../../components/trashSvg";
import { useState, useMemo, useRef } from "react";
import Modal from "../../components/modal";
import EyeSvg from "../../components/eyeSvg";
import PhotoSvg from "../../components/photoSvg";
import BotonPrincipal from "../../components/botonPrincipal";
import CreateNews from "../../components/createNews";
export default function GestionNoticias() {
  const [search, setSearch] = useState("");
  const [previewSrc, setPreviewSrc] = useState(null);
  const head = ["Titulo", "Categoria", "Fecha", "Leer", "Editar", "Eliminar"];
  const body = [
    {
      title:
        "Replica de pirámide de Kukulkán en el centro histórico de la Ciudad de México",
      categoria: "Proyectos",
      fecha: "18 de julio de 2024",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      subtitulo: "Lorem ipsum dolor sit amet.",
      img: "https://www.eluniversal.com.mx/sites/default/files/2021/07/19/kukulkan.jpg",
    },
  ];
  const filtredData = useMemo(() => {
    return body.filter((item) => item.title.toLowerCase().includes(search));
  }, [search, body]);

  const modalRefRead = useRef();

  const modalRefEdit = useRef();

  const handleOpenModalRead = () => {
    modalRefRead.current.openModal();
  };

  const handleOpenModalEdit = () => {
    modalRefEdit.current.openModal();
  };

  const fileInput = useRef();

  const handleFileInput = (e) => {
    fileInput.current.click();
  };

  const modalRefCreate = useRef();

  const handleOpenModalCreate = () => {
    modalRefCreate.current.openModal();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Por favor, selecciona un archivo JPG o PNG.");
    }
  };
  return (
    <>
      <div className=" bg-neutral-800 h-screen py-20 sm:py-36 px-10 lg:px-20">
        <div className=" pb-4">
          <AtrasBoton to={"/gestion-deo"} />
        </div>
        <p className=" text-yellow-300 text-xl 2xl:text-6xl">
          Gestión Noticias
        </p>
        <p className=" text-white text-xs 2xl:text-2xl">
          Aquí podras gestionar tus noticias
        </p>
        <div className=" py-4 flex">
          <input
            className=" w-full border rounded-xl p-2 text-xs xl:text-base"
            placeholder="Buscar nombre de noticia"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            value={search}
          />
          <div className=" pl-4">
            <PlusSvg onClick={handleOpenModalCreate} />
          </div>
        </div>
        <div className="overflow-y-auto h-3/4">
          <table className=" w-full table-auto">
            <thead>
              <tr>
                {head.map((item, index) => (
                  <th
                    key={index}
                    className=" text-yellow-300 text-xs text-start pr-16 md:pr-0 2xl:text-base"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className=" divide-y divide-neutral-500">
              {filtredData.map((item, index) => (
                <tr key={index} className=" hover:bg-neutral-900">
                  <td className=" text-white text-xs py-4 2xl:text-base ">
                    {item.title}
                  </td>
                  <td className=" text-white text-xs py-4 2xl:text-base">
                    {item.categoria}
                  </td>
                  <td className=" text-white text-xs py-4 2xl:text-base">
                    {item.fecha}
                  </td>
                  <td className=" text-white text-xs py-4 2xl:text-base">
                    <EyeSvg
                      className={
                        "stroke-white hover:stroke-white/50 ease-in-out duration-300 cursor-pointer"
                      }
                      onClick={handleOpenModalRead}
                    />
                  </td>
                  <td className="py-4">
                    <EditSvg onClick={handleOpenModalEdit} />
                  </td>
                  <td className="py-4">
                    <TrashSvg />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal ref={modalRefRead}>
        <div className=" overflow-y-auto h-96">
          <p className=" text-yellow-300 text-xl">
            Replica de pirámide de Kukulkán en el centro histórico de la Ciudad
            de México{" "}
          </p>
          <p className=" text-xs text-neutral-500 py-1">
            Publicado el 18 de julio de 2024
          </p>
          <p className=" text-white">
            Nos complace ser participes de este proyecto, con una estrurctura
            con sistema multidireccional de 15 metros de altura para replicar la
            pirámide de Kukulkán.
          </p>
          <figure className=" flex justify-center py-4">
            <img
              src="https://www.eluniversal.com.mx/sites/default/files/2021/07/19/kukulkan.jpg"
              className="w-full"
            />
          </figure>
          <p className=" text-white">
            Una de las sorpresas mas agradables que podemo encontrar al
            comprometernos totalmente con algun proyecto especifico es que
            surgen fuerzas y oportunidades. Nos complace ser participes de este
            proyecto, con una estructura con sistema multidereccional de 15
            metros de altura para replica de la piramide de Kukulkán. SM8,
            siempre comprometidos con la calidad y seguridadque nuestros
            clientes necesitan.
          </p>
        </div>
      </Modal>
      <Modal ref={modalRefEdit}>
        <p className=" text-yellow-300 text-xl">Editar Noticia</p>
        <p className=" text-white">Aquí podras editar la noticia</p>
        <form action="">
          <div className=" pt-2">
            <input
              type="text"
              placeholder="Titulo de la noticia"
              className=" border p-1 rounded-xl w-full"
            />
          </div>
          <div className=" pt-4">
            <input
              type="text"
              placeholder="Subtitulo de la noticia"
              className=" border p-1 rounded-xl w-full"
            />
          </div>
          <div className=" pt-4">
            <textarea
              type="text"
              placeholder="Contnido de la noticia"
              className=" border p-1 rounded-xl w-full"
            />
          </div>
          <div className=" pt-4 flex flex-row items-center">
            <input
              type="file"
              ref={fileInput}
              className=" hidden "
              onChange={handleFileChange}
            />
            <button
              className=" border w-full p-4 rounded-xl border-yellow-300 text-white hover:bg-yellow-300 hover:text-black hover:border-black ease-in-out duration-300"
              onClick={handleFileInput}
            >
              Seleccionar archivo
            </button>
          </div>
          <div className=" py-2"></div>
          {previewSrc ? (
            <figure className=" flex w-full justify-center">
              <img src={previewSrc} alt="Vista previa" className="w-full" />
            </figure>
          ) : (
            <div className=" w-full border border-neutral-500 p-4 rounded-xl flex justify-center items-center">
              <div>
                <PhotoSvg />
                <p className=" text-center text-neutral-500">Vista previa</p>
              </div>
            </div>
          )}
          <div className=" pt-4">
            <BotonPrincipal
              text={"Subir noticia"}
              className={"xl:w-full"}
              type={"submit"}
            />
          </div>
        </form>
      </Modal>
      <Modal ref={modalRefCreate}>
        <CreateNews />
      </Modal>
    </>
  );
}
