import axios from "axios";

export const fetchAllZapatillas = async() => {
    try {
        const { data } = await axios.get("http://localhost:3000/api/v1/zapatillas");
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching zapatillas", error);
        throw new Error(error);
    }
}