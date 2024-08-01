import axios from "axios";
import { useState } from "react";

export const useImageDataCreate = () => {

    const create = async (data) => {
        try {
        const response = await axios.post("http://localhost:3000/api/imagenes", data);
        return response.data;
        } catch (error) {
        console.error(error);
        }
    };
    
    return { create };
}