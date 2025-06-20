import { useState, useEffect } from "react";
import axios from "axios";
import Mural from "../../components/mural";
import Fondo from "./img/vacantes.jpg";
import CardVacantes from "../../components/cardVacantes";
import Contacto from "../../components/contacto";
import Rosetin from "./img/3.png";
import useScrollTop from "../../hooks/useScrollTop";

export default function VacantesPage() {
  useScrollTop();
  
  const [vacantes, setVacantes] = useState([]);

  useEffect(() => {
    axios.get("https://api.timbrela.com:13003/api/vacantes")
      .then(response => {
        setVacantes(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener las vacantes:", error);
      });
  }, []);

  return (
    <div>
      <Mural
        title={"Vacantes"}
        body={
          "SM8 esta listo para ti, conoce todas nuestras vacantes y encuentra el trabajo de tus sueños."
        }
        buttonText={"Conocer  más"}
        rutaFondo={Fondo}
      />

      <div className="bg-neutral-800 w-full py-24 px-4 md:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {vacantes.map((vacante, index) => (
            <CardVacantes
              key={vacante.id}
              titulo={vacante.nombre}
              ubicacion={vacante.sucursal}
              descripcion={vacante.descripcion}
              delay={index * 50}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center bg-neutral-800 h-screen px-6">
        <Contacto
          titulo={"Únete hoy a nuestro increíble grupo de trabajo"}
          cuerpo={
            "Nuestro grupo de expertos estan listos para brindarte la mejor solución."
          }
          rosetin={Rosetin}
        />
      </div>
    </div>
  );
}
