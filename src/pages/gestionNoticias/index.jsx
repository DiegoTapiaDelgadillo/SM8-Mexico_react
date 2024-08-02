import AtrasBoton from "../../components/atrasButton";
import PlusSvg from "../../components/plusSvg";
import EditSvg from "../../components/editSvg";
import TrashSvg from "../../components/trashSvg";
import { useState, useMemo, useRef, useEffect } from "react";
import Modal from "../../components/modal";
import EyeSvg from "../../components/eyeSvg";
import PhotoSvg from "../../components/photoSvg";
import BotonPrincipal from "../../components/botonPrincipal";
import api from "../../services/api"; // Importa la configuración de Axios

export default function GestionNoticias() {
  const [search, setSearch] = useState("");
  const [noticias, setNoticias] = useState([]);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState(null);
  const [selectedNoticia, setSelectedNoticia] = useState(null);
  const head = ["Titulo", "Categoria", "Fecha", "Leer", "Editar", "Eliminar"];

  useEffect(() => {
    fetchNoticias();
  }, []);

  const fetchNoticias = async () => {
    try {
      const response = await api.get('/noticias');
      setNoticias(response.data);
    } catch (error) {
      console.error('Error al obtener las noticias:', error);
    }
  };

  const handleCreateNoticia = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('titulo', titulo);
      formData.append('subtitulo', subtitulo);
      formData.append('contenido', contenido);
      formData.append('imagen', imagen);

      await api.post('/noticias', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      fetchNoticias(); // Recargar las noticias
      modalRefCreate.current.closeModal();
    } catch (error) {
      console.error('Error al crear la noticia:', error);
    }
  };

  const handleUpdateNoticia = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('titulo', titulo);
      formData.append('subtitulo', subtitulo);
      formData.append('contenido', contenido);
      if (imagen) formData.append('imagen', imagen);

      await api.put(`/noticias/${selectedNoticia.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      fetchNoticias(); // Recargar las noticias
      modalRefEdit.current.closeModal();
    } catch (error) {
      console.error('Error al actualizar la noticia:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setImagen(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Por favor, selecciona un archivo JPG o PNG.");
    }
  };


  const handleDeleteNoticia = async (id) => {
    try {
      await api.delete(`/noticias/${id}`);
      fetchNoticias();
    } catch (error) {
      console.error('Error al eliminar la noticia:', error);
    }
  };

  const handleSelectNoticia = (noticia) => {
    setSelectedNoticia(noticia);
    modalRefRead.current.openModal();
  };

  const handleEditNoticia = (noticia) => {
    setSelectedNoticia(noticia);
    setTitulo(noticia.titulo);
    setSubtitulo(noticia.subtitulo);
    setContenido(noticia.contenido);
    setPreviewSrc(noticia.imagen);
    modalRefEdit.current.openModal();
  };

  const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return new Date(date).toLocaleDateString('es-ES', options);
  };

  const filtredData = useMemo(() => {
    return noticias.filter((item) => item.titulo.toLowerCase().includes(search));
  }, [search, noticias]);

  const modalRefRead = useRef();
  const modalRefEdit = useRef();
  const modalRefCreate = useRef();
  const fileInput = useRef();

  const handleOpenModalCreate = () => {
    modalRefCreate.current.openModal();
  };

  const handleFileInput = (e) => {
    fileInput.current.click();
  };

  const stringToBlob = (str) => {
    const blob = new Blob([str], { type: 'text/plain' });
    return blob;
  }

  const img = stringToBlob(previewSrc);

  console.log(img);
  console.log(typeof(img));

  return (
    <>
      <div className=" bg-neutral-800 h-screen py-20 sm:py-36 px-10 lg:px-20">
        <div className=" pb-4">
          <AtrasBoton to={"/gestion-deo"} />
        </div>
        <p className=" text-yellow-300 text-xl 2xl:text-6xl">Gestión Noticias</p>
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
                    {item.titulo}
                  </td>
                  <td className=" text-white text-xs py-4 2xl:text-base">
                    {item.categoria}
                  </td>
                  <td className=" text-white text-xs py-4 2xl:text-base">
                    {formatDate(item.fecha)}
                  </td>
                  <td className=" text-white text-xs py-4 2xl:text-base">
                    <EyeSvg
                      className={
                        "stroke-white hover:stroke-white/50 ease-in-out duration-300 cursor-pointer"
                      }
                      onClick={() => handleSelectNoticia(item)}
                    />
                  </td>
                  <td className="py-4">
                    <EditSvg onClick={() => handleEditNoticia(item)} />
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
          <div className=" overflow-y-auto h-96">
            <p className=" text-yellow-300 text-xl">{selectedNoticia.titulo}</p>
            <p className=" text-xs text-neutral-500 py-1">
              Publicado el {formatDate(selectedNoticia.fecha)}
            </p>
            <p className=" text-white">{selectedNoticia.contenido}</p>
            <figure className=" flex justify-center py-4">
              <img
                src={selectedNoticia.imagen}
                className="w-full"
              />
            </figure>
            <p className=" text-white">{selectedNoticia.subtitulo}</p>
          </div>
        )}
      </Modal>
      <Modal ref={modalRefEdit}>
        <p className=" text-yellow-300 text-xl">Editar Noticia</p>
        <p className=" text-white">Aquí podras editar la noticia</p>
        <form onSubmit={handleUpdateNoticia}>
          <div className=" pt-2">
            <input
              type="text"
              placeholder="Titulo de la noticia"
              className=" border p-1 rounded-xl w-full"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className=" pt-4">
            <input
              type="text"
              placeholder="Subtitulo de la noticia"
              className=" border p-1 rounded-xl w-full"
              value={subtitulo}
              onChange={(e) => setSubtitulo(e.target.value)}
            />
          </div>
          <div className=" pt-4">
            <textarea
              type="text"
              placeholder="Contenido de la noticia"
              className=" border p-1 rounded-xl w-full"
              value={contenido}
              onChange={(e) => setContenido(e.target.value)}
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
              text={"Guardar cambios"}
              className={"xl:w-full"}
              type={"submit"}
            />
          </div>
        </form>
      </Modal>
      <Modal ref={modalRefCreate}>
        <p className=" text-yellow-300 text-xl">Crear Noticia</p>
        <p className=" text-white">Aquí podras crear una noticia</p>
        <form onSubmit={handleCreateNoticia}>
          <div className=" pt-2">
            <input
              type="text"
              placeholder="Titulo de la noticia"
              className=" border p-1 rounded-xl w-full"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className=" pt-4">
            <input
              type="text"
              placeholder="Subtitulo de la noticia"
              className=" border p-1 rounded-xl w-full"
              value={subtitulo}
              onChange={(e) => setSubtitulo(e.target.value)}
            />
          </div>
          <div className=" pt-4">
            <textarea
              type="text"
              placeholder="Contenido de la noticia"
              className=" border p-1 rounded-xl w-full"
              value={contenido}
              onChange={(e) => setContenido(e.target.value)}
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
    </>
  );
}