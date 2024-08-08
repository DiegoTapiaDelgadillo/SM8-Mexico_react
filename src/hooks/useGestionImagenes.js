import { useState, useEffect, useCallback } from "react";
import api from "../services/api"; 

export const useGestionImagenes = () => {
  const createImagen = async (formData) => {
    try {
      const response = await api.post('/imagenes', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error al cargar la imagen:', error);
      throw error;
    }
  };
   const deleteImagen = async (id) => {
    try {
      await api.delete(`/imagenes/${id}`);
    } catch (error) {
      console.error('Error al eliminar la imagen:', error);
    }
  };

  return { createImagen, deleteImagen };
}

export default useGestionImagenes;
