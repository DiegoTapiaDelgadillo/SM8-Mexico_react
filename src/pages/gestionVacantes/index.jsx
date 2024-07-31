import EditSvg from "../../components/editSvg";
import TrashSvg from "../../components/trashSvg";
import { useState, useMemo, useRef } from "react";
import Modal from "../../components/modal";
import BotonPrincipal from "../../components/botonPrincipal";
import PlusSvg from "../../components/plusSvg";
import AtrasBoton from "../../components/atrasButton";

export default function GestionVacantes() {
  const [search, setSearch] = useState("");
  const [dataEdit, setDataEdit] = useState({
    title: "",
    location: "",
    descripcion: "",
  });
  const [dataCreate, setDataCreate] = useState({
    title: "",
    location: "",
    descripcion: "",
  });

  const handleSumitCreate = (e) => {
    e.preventDefault();
    console.log(dataCreate);
    setDataCreate({
      title: "",
      location: "",
      descripcion: "",
    });
  };

  const handleSumitEdit = (e) => {
    e.preventDefault();
    console.log(dataEdit);
    setDataEdit({
      title: "",
      location: "",
      descripcion: "",
    });
  };

  const head = ["Titulo", "Ubicación", "Descripción", "Editar", "Eliminar"];
  const body = [
    {
      title: "Analista de ventas",
      location: "CORPORATIVO, CDMX",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Chofer",
      location: "CORPORATIVO, CDMX",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const filtredData = useMemo(() => {
    return body.filter((item) => item.title.toLowerCase().includes(search));
  }, [search, body]);

  const modalRefEdit = useRef();
  const modalRefCreate = useRef();

  const handleOpenModal = () => {
    modalRefEdit.current.openModal();
  };

  const handleOpenModalCreate = () => {
    modalRefCreate.current.openModal();
  };

  const option = [
    {
      text: "Selecciona una ubicación",
      value: "seleccion",
    },
    {
      text: "Aguascalientes",
      value: "Aguascalientes",
    },
    {
      text: "Cancún, Qroo",
      value: "Cancún, Qroo",
    },
    {
      text: "Coatzacoalcos, Ver",
      value: "Coatzacoalcos, Ver",
    },
    {
      text: "Corporativo, CDMX",
      value: "Corporativo, CDMX",
    },
    {
      text: "Cuernavaca, Mor",
      value: "Cuernavaca, Mor",
    },
    {
      text: "Culiacán, Sin",
      value: "Culiacán, Sin",
    },
    {
      text: "Ciudad de México",
      value: "Ciudad de México",
    },
    {
      text: "Guadalajara, Jal",
      value: "Guadalajara, Jal",
    },
    {
      text: "La paz, B.C.S",
      value: "La paz, B.C.S",
    },
    {
      text: "León, Gto",
      value: "León, Gto",
    },
    {
      text: "Los Cabos, B.C.S",
      value: "Los Cabos, B.C.S",
    },
    {
      text: "Mazatlán, Sin",
      value: "Mazatlán, Sin",
    },
    {
      text: "Mérida, Yuc",
      value: "Mérida, Yuc",
    },
    {
      text: "Monterrey, N.L",
      value: "Monterrey, N.L",
    },
    {
      text: "Puebla, Pue",
      value: "Puebla, Pue",
    },
    {
      text: "Puerto Vallarta, Jal",
      value: "Puerto Vallarta, Jal",
    },
    {
      text: "Querétaro, Qro",
      value: "Querétaro, Qro",
    },
    {
      text: "Tijuana, B.C",
      value: "Tijuana, B.C",
    },
    {
      text: "Toluca, Edo de Méx",
      value: "Toluca, Edo de Méx",
    },
    {
      text: "Tuxtla Gutiérrez, Chis",
      value: "Tuxtla Gutiérrez, Chis",
    },
    {
      text: "Zapopan, Jal",
      value: "Zapopan, Jal",
    },
  ];

  return (
    <>
      <div className=" bg-neutral-800 h-screen py-20 sm:py-36 px-10 lg:px-20">
        <div className=" pb-4">
          <AtrasBoton to={"/gestion-deo"} />
        </div>

        <p className=" text-yellow-300 text-xl 2xl:text-6xl">
          Gestión Vacantes
        </p>
        <p className=" text-white text-xs 2xl:text-2xl">
          Aquí podras gestionar tus vacantes
        </p>
        <div className=" py-4 flex">
          <input
            className=" w-full border rounded-xl p-2 text-xs xl:text-base"
            placeholder="Buscar nombre de la vacante"
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
                    {item.location}
                  </td>
                  <td className=" text-white text-xs py-4 2xl:text-base">
                    {item.descripcion}
                  </td>
                  <td className="py-4">
                    <EditSvg onClick={handleOpenModal} />
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
      <Modal ref={modalRefEdit}>
        <p className=" text-yellow-300 md:text-3xl">Editar Vacante</p>
        <p className=" text-white text-xs md:text-xl">
          Ingresa los siguinetes datos para editar la vacante
        </p>
        <form onSubmit={handleSumitEdit}>
          <div className=" pt-2">
            <input
              className=" w-full border rounded-xl p-2"
              placeholder="Titulo de la vacante"
              type="text"
              value={dataEdit.title}
              name="title"
              onChange={(e) =>
                setDataEdit({ ...dataEdit, title: e.target.value })
              }
            />
          </div>
          <div className=" pt-4">
            <select
              name="location"
              id="location"
              className="w-full border rounded-xl p-2 cursor-pointer"
              onChange={(e) =>
                setDataEdit({ ...dataEdit, location: e.target.value })
              }
              value={dataEdit.location}
            >
              {option.map((item, index) => (
                <option value={item.value} key={index}>
                  {item.text}
                </option>
              ))}
            </select>
          </div>
          <div className=" pt-4">
            <textarea
              className=" w-full border rounded-xl p-2"
              placeholder="Descripción de la vacante"
              value={dataEdit.descripcion}
              name="descripcion"
              onChange={(e) =>
                setDataEdit({ ...dataEdit, descripcion: e.target.value })
              }
            ></textarea>
          </div>
          <div className=" pt-4">
            <BotonPrincipal
              type={"submit"}
              text={"Actualizar"}
              className={"xl:w-full"}
            />
          </div>
        </form>
      </Modal>
      <Modal ref={modalRefCreate}>
        <p className=" text-yellow-300 md:text-3xl">Crear Vacante</p>
        <p className=" text-white text-xs md:text-xl">
          Ingresa los siguinetes datos para crear la vacante
        </p>
        <form onSubmit={handleSumitCreate}>
          <div className=" pt-2">
            <input
              className=" w-full border rounded-xl p-2"
              placeholder="Titulo de la vacante"
              type="text"
              value={dataCreate.title}
              name="title"
              onChange={(e) =>
                setDataCreate({ ...dataCreate, title: e.target.value })
              }
            />
          </div>
          <div className=" pt-4">
            <select
              name="location"
              id="location"
              className="w-full border rounded-xl p-2 cursor-pointer"
              onChange={(e) =>
                setDataCreate({ ...dataCreate, location: e.target.value })
              }
              value={dataCreate.location}
            >
              {option.map((item, index) => (
                <option value={item.value} key={index}>
                  {item.text}
                </option>
              ))}
            </select>
          </div>
          <div className=" pt-4">
            <textarea
              className=" w-full border rounded-xl p-2"
              placeholder="Descripción de la vacante"
              value={dataCreate.descripcion}
              name="descripcion"
              onChange={(e) =>
                setDataCreate({ ...dataCreate, descripcion: e.target.value })
              }
            ></textarea>
          </div>
          <div className=" pt-4">
            <BotonPrincipal
              type={"submit"}
              text={"Crear"}
              className={"xl:w-full"}
            />
          </div>
        </form>
      </Modal>
    </>
  );
}
