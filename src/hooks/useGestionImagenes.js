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
    
  return { createImagen };
}

export default useGestionImagenes;
