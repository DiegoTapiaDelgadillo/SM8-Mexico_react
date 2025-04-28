import EditSvg from "../../components/editSvg";
import TrashSvg from "../../components/trashSvg";
import { useState, useMemo, useRef } from "react";
import Modal from "../../components/modal";
import BotonPrincipal from "../../components/botonPrincipal";
import PlusSvg from "../../components/plusSvg";
import AtrasBoton from "../../components/atrasButton";
import EyeSvg from "../../components/eyeSvg";
import useGestionNoticias from "../../hooks/useGestionNoticias";
import useGestionImagenes from "../../hooks/useGestionImagenes";
import CloseSvg from "../../components/closeSvg"; 

export default function GestionNoticias() {
  const [statusPetitionCreate, setStatusPetitionCreate] = useState("neutral");
  const [statusPetitionUpdate, setStatusPetitionUpdate] = useState("neutral");
  const [search, setSearch] = useState("");
  const [dataEdit, setDataEdit] = useState({
    titulo: "",
    resumen: "",
    contenido: "",
    fecha: "",
    categoria: "",
  });
  const [dataCreate, setDataCreate] = useState({
    titulo: "",
    resumen: "",
    contenido: "",
    fecha: "",
    categoria: "",
  });
  const [previewSrc, setPreviewSrc] = useState([]);
  const [imagen, setImagen] = useState(null);
  const [existingImages, setExistingImages] = useState([]);
  const { noticias, createNoticia, updateNoticia, deleteNoticia } =
    useGestionNoticias();
  const { createImagen, deleteImagen } = useGestionImagenes();

  const modalRefEdit = useRef();
  const modalRefCreate = useRef();
  const modalRefRead = useRef();
  const fileInput = useRef();
  const [selectedNoticia, setSelectedNoticia] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg" || file.type === "image/webp")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc([...previewSrc, reader.result]);
        setImagen(file);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Por favor, selecciona un archivo JPG o PNG.");
    }
  };

  const handleSumitCreate = async (e) => {
    e.preventDefault();
    const noticiaData = {
      titulo: dataCreate.titulo,
      resumen: dataCreate.resumen,
      contenido: dataCreate.contenido,
      fecha: dataCreate.fecha,
      categoria: dataCreate.categoria,
    };
    setStatusPetitionCreate("loading");
    try {
      const noticia = await createNoticia(noticiaData);
      if (previewSrc.length > 0 && noticia && noticia.id) {
        await Promise.all(
          previewSrc.map(async (src) => {
            const formData = {
              imagen: src,
              id_noticia: noticia.id,
            };
            await createImagen(formData);
          })
        );
      }
      setDataCreate({
        titulo: "",
        resumen: "",
        contenido: "",
        fecha: "",
        categoria: "",
      });
      setPreviewSrc([]);
      setImagen(null);
      setStatusPetitionCreate("success");
      modalRefCreate.current.closeModal();
      window.location.reload();
    } catch (error) {
      setStatusPetitionCreate("error");
    }
  };

  const handleSumitEdit = async (e) => {
    e.preventDefault();
    const noticiaData = {
      titulo: dataEdit.titulo,
      resumen: dataEdit.resumen,
      contenido: dataEdit.contenido,
      fecha: dataEdit.fecha,
      categoria: dataEdit.categoria,
    };
    setStatusPetitionUpdate("loading");
    try {
      const noticia = await updateNoticia(selectedNoticia.id, noticiaData);
      if (previewSrc.length > 0 && noticia && noticia.id) {
        await Promise.all(
          previewSrc.map(async (src) => {
            const formData = {
              imagen: src,
              id_noticia: noticia.id,
            };
            await createImagen(formData);
          })
        );
      }
      setDataEdit({
        titulo: "",
        resumen: "",
        contenido: "",
        fecha: "",
        categoria: "",
      });
      setPreviewSrc([]);
      setImagen(null);
      setStatusPetitionUpdate("success");
      modalRefEdit.current.closeModal();
      window.location.reload();
    } catch (error) {
      setStatusPetitionUpdate("error");
    }
  };

  const handleDeleteNoticia = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta noticia?")) {
      await deleteNoticia(id);
    }
  };

  const handleRemoveImage = (index, isExisting) => {
    if (isExisting) {
      const imageId = existingImages[index].id;
      deleteImagen(imageId);
      setExistingImages(existingImages.filter((_, i) => i !== index));
    } else {
      setPreviewSrc(previewSrc.filter((_, i) => i !== index));
    }
  };

  const filtredData = useMemo(() => {
    return noticias.filter((item) =>
      item.titulo.toLowerCase().includes(search)
    );
  }, [search, noticias]);

  const handleOpenModalEdit = (noticia) => {
    setSelectedNoticia(noticia);
    setDataEdit({
      titulo: noticia.titulo,
      resumen: noticia.resumen,
      contenido: noticia.contenido,
      fecha: noticia.fecha,
      categoria: noticia.categoria,
    });
    setExistingImages(noticia.imagenes || []);
    setPreviewSrc([]);
    modalRefEdit.current.openModal();
  };

  const handleOpenModalCreate = () => {
    setDataCreate({
      titulo: "",
      resumen: "",
      contenido: "",
      fecha: "",
      categoria: "",
    });
    setPreviewSrc([]);
    setImagen(null);
    modalRefCreate.current.openModal();
  };

  return (
    <>
      <div className="bg-neutral-800 h-screen py-20 sm:py-36 px-10 lg:px-20">
        <div className="pb-4">
          <AtrasBoton to={"/gestion-do"} />
        </div>

        <p className="text-yellow-300 text-xl 2xl:text-6xl">Gestión Noticias</p>
        <p className="text-white text-xs 2xl:text-2xl">
          Aquí podras gestionar tus noticias
        </p>
        <div className="py-4 flex">
          <input
            className="w-full border rounded-xl p-2 text-xs xl:text-base"
            placeholder="Buscar nombre de la noticia"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            value={search}
          />
          <div className="pl-4">
            <PlusSvg onClick={handleOpenModalCreate} />
          </div>
        </div>
        <div className="overflow-y-auto h-3/4">
          <table className="w-full table-auto">
            <thead>
              <tr>
                {[
                  "Titulo",
                  "Categoria",
                  "Fecha",
                  "Leer",
                  "Editar",
                  "Eliminar",
                ].map((item, index) => (
                  <th
                    key={index}
                    className="text-yellow-300 text-xs text-start pr-16 md:pr-0 2xl:text-base"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-500">
              {filtredData.map((item, index) => (
                <tr key={index} className="hover:bg-neutral-900">
                  <td className="text-white text-xs py-4 2xl:text-base">
                    {item.titulo}
                  </td>
                  <td className="text-white text-xs py-4 2xl:text-base">
                    {item.categoria}
                  </td>
                  <td className="text-white text-xs py-4 2xl:text-base">
                    {new Date(item.fecha).toLocaleDateString("es-ES")}
                  </td>
                  <td className="text-white text-xs py-4 2xl:text-base">
                    <EyeSvg
                      className="stroke-white hover:stroke-white/50 ease-in-out duration-300 cursor-pointer"
                      onClick={() => {
                        setSelectedNoticia(item);
                        modalRefRead.current.openModal();
                      }}
                    />
                  </td>
                  <td className="py-4">
                    <EditSvg onClick={() => handleOpenModalEdit(item)} />
                  </td>
                  <td className="py-4">
                    <TrashSvg onClick={() => handleDeleteNoticia(item.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal ref={modalRefRead}>
        {selectedNoticia && (
          <div className="overflow-y-auto h-96">
            <p className="text-yellow-300 text-xl">{selectedNoticia.titulo}</p>
            <p className="text-xs text-neutral-500 py-1">
              Publicado el{" "}
              {new Date(selectedNoticia.fecha).toLocaleDateString("es-ES")}
            </p>
            <p className="text-white">{selectedNoticia.resumen}</p>
            <p className="text-white">{selectedNoticia.contenido}</p>
            {selectedNoticia.imagenes &&
              selectedNoticia.imagenes.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {selectedNoticia.imagenes.map((imagen, index) => (
                    <figure
                      key={index}
                      className="relative flex justify-center py-4"
                    >
                      <img
                        src={imagen.imagen}
                        className="w-full h-auto max-w-xs max-h-40 object-cover rounded-xl"
                      />
                    </figure>
                  ))}
                </div>
              )}
          </div>
        )}
      </Modal>
      <Modal ref={modalRefEdit}>
        <>
          {statusPetitionUpdate === "error" && (
            <p className=" text-center text-white">
              Error al editar la Noticia
            </p>
          )}
          {statusPetitionUpdate === "success" && (
            <p className=" text-center text-white">Noticia editada con éxito</p>
          )}
          {statusPetitionUpdate === "loading" && (
            <p className=" text-center text-white">Editando Noticia...</p>
          )}
          {statusPetitionUpdate === "neutral" && <></>}
          <p className="text-yellow-300 md:text-3xl">Editar Noticia</p>
          <p className="text-white text-xs md:text-xl">
            Ingresa los siguientes datos para editar la noticia
          </p>
          <form onSubmit={handleSumitEdit}>
            <div className="pt-2">
              <input
                className="w-full border rounded-xl p-2"
                placeholder="Titulo de la noticia"
                type="text"
                value={dataEdit.titulo}
                name="titulo"
                onChange={(e) =>
                  setDataEdit({ ...dataEdit, titulo: e.target.value })
                }
              />
            </div>
            <div className="pt-4">
              <input
                className="w-full border rounded-xl p-2"
                placeholder="Resumen de la noticia"
                type="text"
                value={dataEdit.resumen}
                name="resumen"
                onChange={(e) =>
                  setDataEdit({ ...dataEdit, resumen: e.target.value })
                }
              />
            </div>
            <div className="pt-4">
              <textarea
                className="w-full border rounded-xl p-2"
                placeholder="Contenido de la noticia"
                value={dataEdit.contenido}
                name="contenido"
                onChange={(e) =>
                  setDataEdit({ ...dataEdit, contenido: e.target.value })
                }
              ></textarea>
            </div>
            <div className="pt-4 flex flex-row items-center">
              <input
                type="file"
                ref={fileInput}
                className="hidden"
                onChange={handleFileChange}
              />
              <button
                type="button"
                className="border w-full p-4 rounded-xl border-yellow-300 text-white hover:bg-yellow-300 hover:text-black hover:border-black ease-in-out duration-300"
                onClick={() => fileInput.current.click()}
              >
                Seleccionar archivo
              </button>
            </div>
            <div className="py-2"></div>
            <div className="grid grid-cols-2 gap-2">
              {existingImages.map((imagen, index) => (
                <figure
                  key={index}
                  className="relative flex justify-center py-4"
                >
                  <img
                    src={imagen.imagen}
                    className="w-full h-auto max-w-xs max-h-40 object-cover rounded-xl"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index, true)}
                    className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 rounded-full p-1"
                  >
                    <CloseSvg />
                  </button>
                </figure>
              ))}
              {previewSrc.map((src, index) => (
                <figure
                  key={index}
                  className="relative flex justify-center py-4"
                >
                  <img
                    src={src}
                    className="w-full h-auto max-w-xs max-h-40 object-cover rounded-xl"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index, false)}
                    className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 rounded-full p-1"
                  >
                    <CloseSvg />
                  </button>
                </figure>
              ))}
            </div>
            <div className="pt-4">
              <BotonPrincipal
                type={"submit"}
                text={"Actualizar"}
                className={"xl:w-full"}
              />
            </div>
          </form>
        </>
      </Modal>
      <Modal ref={modalRefCreate}>
        <>
          {statusPetitionCreate === "error" && (
            <p className=" text-center text-white">Error al crear la Noticia</p>
          )}
          {statusPetitionCreate === "success" && (
            <p className=" text-center text-white">Noticia creada con éxito</p>
          )}
          {statusPetitionCreate === "loading" && (
            <p className=" text-center text-white">Creando Noticia...</p>
          )}
          {statusPetitionCreate === "neutral" && (
            <>
              <p className="text-yellow-300 md:text-3xl">Crear Noticia</p>
              <p className="text-white text-xs md:text-xl">
                Ingresa los siguientes datos para crear la noticia
              </p>
              <form onSubmit={handleSumitCreate}>
                <div className="pt-2">
                  <input
                    className="w-full border rounded-xl p-2"
                    placeholder="Titulo de la noticia"
                    type="text"
                    value={dataCreate.titulo}
                    name="titulo"
                    onChange={(e) =>
                      setDataCreate({ ...dataCreate, titulo: e.target.value })
                    }
                  />
                </div>
                <div className="pt-4">
                  <input
                    className="w-full border rounded-xl p-2"
                    placeholder="Resumen de la noticia"
                    type="text"
                    value={dataCreate.resumen}
                    name="resumen"
                    onChange={(e) =>
                      setDataCreate({ ...dataCreate, resumen: e.target.value })
                    }
                  />
                </div>
                <div className="pt-4">
                  <textarea
                    className="w-full border rounded-xl p-2"
                    placeholder="Contenido de la noticia"
                    value={dataCreate.contenido}
                    name="contenido"
                    onChange={(e) =>
                      setDataCreate({
                        ...dataCreate,
                        contenido: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div className="pt-4">
                  <input
                    className="w-full border rounded-xl p-2"
                    placeholder="Fecha de la noticia"
                    type="date"
                    value={dataCreate.fecha}
                    name="fecha"
                    onChange={(e) =>
                      setDataCreate({ ...dataCreate, fecha: e.target.value })
                    }
                  />
                </div>
                <div className="pt-4">
                  <select
                    className="w-full border rounded-xl p-2"
                    value={dataCreate.categoria}
                    name="categoria"
                    onChange={(e) =>
                      setDataCreate({
                        ...dataCreate,
                        categoria: e.target.value,
                      })
                    }
                  >
                    <option value="">Selecciona una categoría</option>
                    <option value="Empresa Socialmente Responsable">
                      Empresa Socialmente Responsable
                    </option>
                    <option value="Proyectos">Proyectos</option>
                    <option value="Empresa">Empresa</option>
                  </select>
                </div>
                <div className="pt-4 flex flex-row items-center">
                  <input
                    type="file"
                    ref={fileInput}
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    className="border w-full p-4 rounded-xl border-yellow-300 text-white hover:bg-yellow-300 hover:text-black hover:border-black ease-in-out duration-300"
                    onClick={() => fileInput.current.click()}
                  >
                    Seleccionar archivo
                  </button>
                </div>
                <div className="py-2"></div>
                <div className="grid grid-cols-2 gap-2">
                  {previewSrc.map((src, index) => (
                    <figure
                      key={index}
                      className="relative flex justify-center py-4"
                    >
                      <img
                        src={src}
                        className="w-full h-auto max-w-xs max-h-40 object-cover rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index, false)}
                        className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 rounded-full p-1"
                      >
                        <CloseSvg />
                      </button>
                    </figure>
                  ))}
                </div>
                <div className="pt-4">
                  <BotonPrincipal
                    type={"submit"}
                    text={"Crear"}
                    className={"xl:w-full"}
                  />
                </div>
              </form>
            </>
          )}
        </>
      </Modal>
    </>
  );
}
