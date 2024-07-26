import Modal from "./../modal";
import { useRef, useState } from "react";
export default function MainNews({
  img,
  title,
  date,
  sumary,
  description,
  category,
}) {
  const modalRef = useRef();
  const handleOpenModal = () => {
    modalRef.current.openModal();
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-12 items-center">
        <figure>
          <img src={img} alt="" className=" rounded-xl" />
        </figure>
        <div className=" lg:px-4 xl:px-24">
          <p className=" text-white text-xs">{category}</p>
          <p className=" text-yellow-300 text-2xl xl::text-3xl py-4">{title}</p>
          <p className=" text-white pb-4 text-sm sm:text-base">{sumary}</p>
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
