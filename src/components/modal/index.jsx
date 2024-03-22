import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="px-16 py-4 w-auto md:py-4 bg-yellow-300 rounded-3xl shadow-md border-4 border-black hover:bg-black hover:border-yellow-300 hover:text-yellow-300 hover:shadow-2xl ease-in-out duration-300 md:text-xl text-sm"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ver imagenes
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-my-blur">
            <div className="relative w-full px-8 py-48">
              <div className="w-auto rounded-md bg-white">
                <div className="flex justify-end w-full p-4">
                  <button type="button" onClick={() => setShowModal(false)}>
                    X
                  </button>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
