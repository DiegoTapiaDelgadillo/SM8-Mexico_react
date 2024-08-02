import { useRef, useState } from "react";
import PhotoSvg from "../photoSvg";
import BotonPrincipal from "../botonPrincipal";
import Steps from "../steps";
export default function CreateNews() {
  const [previewSrc, setPreviewSrc] = useState(null);

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

  const handleFileInput = (e) => {
    fileInput.current.click();
  };

  const fileInput = useRef();
  return (
    <>
      <p className=" text-yellow-300 text-xl">Crear Noticia</p>
      <p className=" text-white">Aquí podras crear una noticia</p>
      <form action="">
        <div className=" pt-2">
          <input
            type="text"
            placeholder="Titulo de la noticia"
            className=" border p-2 rounded-xl w-full"
          />
        </div>
        <div className=" pt-4">
          <input
            type="text"
            placeholder="Subtitulo de la noticia"
            className=" border p-2 rounded-xl w-full"
          />
        </div>
        <div className=" pt-4">
          <textarea
            type="text"
            placeholder="Contnido de la noticia"
            className=" border p-1 rounded-xl w-full"
          />
        </div>
        <div className=" pt-4">
          <BotonPrincipal
            text={"Siguiente"}
            className={"xl:w-full"}
            type={"submit"}
          />
        </div>
      </form>
      <div className=" w-full flex justify-start sm:justify-center py-4">
        <Steps />
      </div>
    </>
  );
}
