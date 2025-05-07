import { apiClient } from "../../../shared/services/apiClient";

export const fetchAllProducts = async() => {
    try {
        const { data } = await apiClient.get("/zapatillas");
        return data;
    } catch (error) {
        console.error("Error al obtener los productos", error);
        throw new Error(error);
    }
};


export const fetchAllProductsById = async(id) => {
    try {
        const { data } = await apiClient.get(`/zapatillas/${id}`);
        return data;
    } catch (error) {
        console.error(`Error al obtener el producto con el id: ${id}`, error);
        throw new Error(error);
    }
};