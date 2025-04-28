import { apiClient } from "../../../shared/services/apiClient";

export const loginService = async ( { correo, password }) => {
    try {
        const { data } = await apiClient.post("/auth/login", { correo, password })
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error login in:", error);
        throw error;
    }
}