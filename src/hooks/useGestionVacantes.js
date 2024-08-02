//PENDIENTE POR CONECTAR AL COMPONENTE gestionVacantes

import { useState, useEffect, useCallback } from "react";
import api from "../services/api"; 

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

  const createVacante = async (formData) => {
    try {
      await api.post('/vacantes', formData);
      fetchVacantes(); 
    } catch (error) {
      console.error('Error al crear la vacante:', error);
    }
  };

  const updateVacante = async (id, formData) => {
    try {
      await api.put(`/vacantes/${id}`, formData);
      fetchVacantes(); 
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
