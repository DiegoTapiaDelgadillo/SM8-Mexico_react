import EditSvg from "../../components/editSvg";
import TrashSvg from "../../components/trashSvg";
import { useState, useMemo, useRef } from "react";
import Modal from "../../components/modal";
import BotonPrincipal from "../../components/botonPrincipal";
import PlusSvg from "../../components/plusSvg";
import AtrasBoton from "../../components/atrasButton";
import useGestionVacantes from "../../hooks/useGestionVacantes";

export default function GestionVacantes() {
  const [search, setSearch] = useState("");
  const [statusPetittionCreate, setStatusPetitionCreate] = useState("neutral");
  const [statusPetittionUpdate, setStatusPetitionUpdate] = useState("neutral");
  const [dataEdit, setDataEdit] = useState({
    nombre: "",
    sucursal: "",
    descripcion: "",
  });
  const [dataCreate, setDataCreate] = useState({
    nombre: "",
    sucursal: "",
    descripcion: "",
  });
  const { vacantes, createVacante, updateVacante, deleteVacante } =
    useGestionVacantes();

  const modalRefEdit = useRef();
  const modalRefCreate = useRef();
  const [selectedVacante, setSelectedVacante] = useState(null);

  const handleSumitCreate = async (e) => {
    e.preventDefault();
    const vacanteData = {
      nombre: dataCreate.nombre,
      sucursal: dataCreate.sucursal,
      descripcion: dataCreate.descripcion,
    };
    setStatusPetitionCreate("loading");
    try {
      await createVacante(vacanteData);
      setDataCreate({
        nombre: "",
        sucursal: "",
        descripcion: "",
      });
      setStatusPetitionCreate("success");
      modalRefCreate.current.closeModal();
    } catch (error) {
      setStatusPetitionCreate("error");
    }
  };

  const handleSumitEdit = async (e) => {
    e.preventDefault();
    const vacanteData = {
      nombre: dataEdit.nombre,
      sucursal: dataEdit.sucursal,
      descripcion: dataEdit.descripcion,
    };
    setStatusPetitionUpdate("loading");
    try {
      await updateVacante(selectedVacante.id, vacanteData);
      setDataEdit({
        nombre: "",
        sucursal: "",
        descripcion: "",
      });
      setStatusPetitionUpdate("success");
      modalRefEdit.current.closeModal();
    } catch (error) {
      setStatusPetitionUpdate("error");
    }
  };

  const handleDeleteVacante = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta vacante?")) {
      await deleteVacante(id);
    }
  };

  const filtredData = useMemo(() => {
    return vacantes.filter((item) =>
      item.nombre.toLowerCase().includes(search)
    );
  }, [search, vacantes]);

  const handleOpenModalEdit = (vacante) => {
    setSelectedVacante(vacante);
    setDataEdit({
      nombre: vacante.nombre,
      sucursal: vacante.sucursal,
      descripcion: vacante.descripcion,
    });
    modalRefEdit.current.openModal();
  };

  const handleOpenModalCreate = () => {
    setDataCreate({
      nombre: "",
      sucursal: "",
      descripcion: "",
    });
    modalRefCreate.current.openModal();
  };

  const option = [
    { text: "Selecciona una ubicación", value: "seleccion" },
    { text: "Aguascalientes", value: "Aguascalientes" },
    { text: "Cancún, Qroo", value: "Cancún, Qroo" },
    { text: "Coatzacoalcos, Ver", value: "Coatzacoalcos, Ver" },
    { text: "Corporativo, CDMX", value: "Corporativo, CDMX" },
    { text: "Cuernavaca, Mor", value: "Cuernavaca, Mor" },
    { text: "Culiacán, Sin", value: "Culiacán, Sin" },
    { text: "Ciudad de México", value: "Ciudad de México" },
    { text: "Guadalajara, Jal", value: "Guadalajara, Jal" },
    { text: "La paz, B.C.S", value: "La paz, B.C.S" },
    { text: "León, Gto", value: "León, Gto" },
    { text: "Los Cabos, B.C.S", value: "Los Cabos, B.C.S" },
    { text: "Mazatlán, Sin", value: "Mazatlán, Sin" },
    { text: "Mérida, Yuc", value: "Mérida, Yuc" },
    { text: "Monterrey, N.L", value: "Monterrey, N.L" },
    { text: "Puebla, Pue", value: "Puebla, Pue" },
    { text: "Puerto Vallarta, Jal", value: "Puerto Vallarta, Jal" },
    { text: "Querétaro, Qro", value: "Querétaro, Qro" },
    { text: "Tijuana, B.C", value: "Tijuana, B.C" },
    { text: "Toluca, Edo de Méx", value: "Toluca, Edo de Méx" },
    { text: "Tuxtla Gutiérrez, Chis", value: "Tuxtla Gutiérrez, Chis" },
    { text: "Zapopan, Jal", value: "Zapopan, Jal" },
  ];

  return (
    <>
      <div className="bg-neutral-800 h-screen py-20 sm:py-36 px-10 lg:px-20">
        <div className="pb-4">
          <AtrasBoton to={"/gestion-deo"} />
        </div>

        <p className="text-yellow-300 text-xl 2xl:text-6xl">Gestión Vacantes</p>
        <p className="text-white text-xs 2xl:text-2xl">
          Aquí podras gestionar tus vacantes
        </p>
        <div className="py-4 flex">
          <input
            className="w-full border rounded-xl p-2 text-xs xl:text-base"
            placeholder="Buscar nombre de la vacante"
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
                  "Nombre",
                  "Ubicación",
                  "Descripción",
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
                    {item.nombre}
                  </td>
                  <td className="text-white text-xs py-4 2xl:text-base">
                    {item.sucursal}
                  </td>
                  <td className="text-white text-xs py-4 2xl:text-base">
                    {item.descripcion}
                  </td>
                  <td className="py-4">
                    <EditSvg onClick={() => handleOpenModalEdit(item)} />
                  </td>
                  <td className="py-4">
                    <TrashSvg onClick={() => handleDeleteVacante(item.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal ref={modalRefEdit}>
        <>
          {statusPetittionUpdate === "loading" && (
            <p className=" text-white text-center">Actualizando Vacante...</p>
          )}
          {statusPetittionUpdate === "success" && (
            <p className=" text-white text-center">
              Vacante actualizada correctamente
            </p>
          )}
          {statusPetittionUpdate === "error" && (
            <p className=" text-white text-center">
              Error al actualizar la vacante
            </p>
          )}
          {statusPetittionUpdate === "neutral" && (
            <>
              <p className="text-yellow-300 md:text-3xl">Editar Vacante</p>
              <p className="text-white text-xs md:text-xl">
                Ingresa los siguientes datos para editar la vacante
              </p>
              <form onSubmit={handleSumitEdit}>
                <div className="pt-2">
                  <input
                    className="w-full border rounded-xl p-2"
                    placeholder="Nombre de la vacante"
                    type="text"
                    value={dataEdit.nombre}
                    name="nombre"
                    onChange={(e) =>
                      setDataEdit({ ...dataEdit, nombre: e.target.value })
                    }
                  />
                </div>
                <div className="pt-4">
                  <select
                    name="sucursal"
                    id="sucursal"
                    className="w-full border rounded-xl p-2 cursor-pointer"
                    onChange={(e) =>
                      setDataEdit({ ...dataEdit, sucursal: e.target.value })
                    }
                    value={dataEdit.sucursal}
                  >
                    {option.map((item, index) => (
                      <option value={item.value} key={index}>
                        {item.text}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="pt-4">
                  <textarea
                    className="w-full border rounded-xl p-2"
                    placeholder="Descripción de la vacante"
                    value={dataEdit.descripcion}
                    name="descripcion"
                    onChange={(e) =>
                      setDataEdit({ ...dataEdit, descripcion: e.target.value })
                    }
                  ></textarea>
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
          )}
        </>
      </Modal>
      <Modal ref={modalRefCreate}>
        <>
          {statusPetittionCreate === "loading" && (
            <p className=" text-white text-center">Actualizando Vacante...</p>
          )}
          {statusPetittionCreate === "success" && (
            <p className=" text-white text-center">
              Vacante creada correctamente
            </p>
          )}
          {statusPetittionCreate === "error" && (
            <p className=" text-white text-center">Error al crear la vacante</p>
          )}
          {statusPetittionCreate === "neutral" && (
            <>
              <p className="text-yellow-300 md:text-3xl">Crear Vacante</p>
              <p className="text-white text-xs md:text-xl">
                Ingresa los siguientes datos para crear la vacante
              </p>
              <form onSubmit={handleSumitCreate}>
                <div className="pt-2">
                  <input
                    className="w-full border rounded-xl p-2"
                    placeholder="Nombre de la vacante"
                    type="text"
                    value={dataCreate.nombre}
                    name="nombre"
                    onChange={(e) =>
                      setDataCreate({ ...dataCreate, nombre: e.target.value })
                    }
                  />
                </div>
                <div className="pt-4">
                  <select
                    name="sucursal"
                    id="sucursal"
                    className="w-full border rounded-xl p-2 cursor-pointer"
                    onChange={(e) =>
                      setDataCreate({ ...dataCreate, sucursal: e.target.value })
                    }
                    value={dataCreate.sucursal}
                  >
                    {option.map((item, index) => (
                      <option value={item.value} key={index}>
                        {item.text}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="pt-4">
                  <textarea
                    className="w-full border rounded-xl p-2"
                    placeholder="Descripción de la vacante"
                    value={dataCreate.descripcion}
                    name="descripcion"
                    onChange={(e) =>
                      setDataCreate({
                        ...dataCreate,
                        descripcion: e.target.value,
                      })
                    }
                  ></textarea>
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
