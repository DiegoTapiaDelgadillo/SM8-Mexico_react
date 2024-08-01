import { useRef } from "react";
import Modal from "../modal";
export default function SecondaryNews({
  img,
  title,
  date,
  sumary,
  category,
  description,
}) {
  const modalRef = useRef();

  const handleOpenModal = () => {
    modalRef.current.openModal();
  };
  return (
    <>
      <div className=" grid grid-cols-2 xl:grid-cols-1 gap-4 p-4 border rounded-xl border-neutral-950">
        <figure className=" w-full flex justify-center">
          <img
            src={img}
            alt=""
            className=" rounded-xl w-full sm:h-96 object-cover"
          />
        </figure>
        <div>
          <p className=" text-white text-xs py-4">{category}</p>
          <p className=" text-yellow-300 text-2xl xl::text-3xl">{title}</p>
          <p className=" text-white pb-4 text-sm sm:text-base pt-4">{sumary}</p>
          <p className=" py-4 w-full border-t text-neutral-500 text-xs border-neutral-500">
            {date}
          </p>
          <div className=" pt-4 flex justify-end">
            <p
              className=" text-white hover:text-yellow-300 cursor-pointer text-xs underline"
              onClick={handleOpenModal}
            >
              Leer noticia completa
            </p>
          </div>
        </div>
      </div>
      <Modal ref={modalRef}>
        <div className=" h-96 overflow-y-auto">
          <p className=" text-yellow-300 text-2xl xl::text-3xl">{title}</p>
          <p className=" text-neutral-500 text-xs">{category}</p>
          <p className=" text-white py-4">{sumary}</p>
          <figure>
            <img src={img} alt="" className=" rounded-xl" />
          </figure>
          <p className=" pt-4 text-white">{description}</p>
        </div>
      </Modal>
    </>
  );
}
