import { useState, useEffect, useCallback } from "react";
import api from "../services/api"; // Importa la configuración de Axios

const useGestionVacantes = () => {
  const [vacantes, setVacantes] = useState([]);

  const fetchVacantes = useCallback(async () => {
    try {
      const response = await api.get('/vacantes');
      setVacantes(response.data);
    } catch (error) {
      console.error('Error al obtener las vacantes:', error);
    }
  }, []);

  const createVacante = async (vacanteData) => {
    try {
      await api.post('/vacantes', vacanteData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchVacantes(); // Recargar las vacantes
    } catch (error) {
      console.error('Error al crear la vacante:', error);
    }
  };

  const updateVacante = async (id, vacanteData) => {
    try {
      await api.put(`/vacantes/${id}`, vacanteData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchVacantes(); // Recargar las vacantes
    } catch (error) {
      console.error('Error al actualizar la vacante:', error);
    }
  };

  const deleteVacante = async (id) => {
    try {
      await api.delete(`/vacantes/${id}`);
      fetchVacantes();
    } catch (error) {
      console.error('Error al eliminar la vacante:', error);
    }
  };

  useEffect(() => {
    fetchVacantes();
  }, [fetchVacantes]);

  return {
    vacantes,
    createVacante,
    updateVacante,
    deleteVacante
  };
};

export default useGestionVacantes;
