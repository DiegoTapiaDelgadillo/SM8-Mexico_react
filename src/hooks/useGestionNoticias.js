import { useState, useEffect, useCallback } from "react";
import api from "../services/api"; 

const useGestionNoticias = () => {
  const [noticias, setNoticias] = useState([]);

  const fetchNoticias = useCallback(async () => {
    try {
      const response = await api.get('/noticias');
      setNoticias(response.data);
    } catch (error) {
      console.error('Error al obtener las noticias:', error);
    }
  }, []);

  const createNoticia = async (data) => {
    try {
      const response = await api.post('/noticias', data);
      fetchNoticias();
      return response.data;
    } catch (error) {
      console.error('Error al crear la noticia:', error);
      throw error;  
    }
  };

  const updateNoticia = async (id, data) => {
    try {
      const response = await api.put(`/noticias/${id}`, data);
      fetchNoticias();
      return response.data;
    } catch (error) {
      console.error('Error al actualizar la noticia:', error);
    }
  };

  const deleteNoticia = async (id) => {
    try {
      await api.delete(`/noticias/${id}`);
      fetchNoticias();
    } catch (error) {
      console.error('Error al eliminar la noticia:', error);
    }
  };

  useEffect(() => {
    fetchNoticias();
  }, [fetchNoticias]);

  return {
    noticias,
    fetchNoticias,
    createNoticia,
    updateNoticia,
    deleteNoticia
  };
};

export default useGestionNoticias;
