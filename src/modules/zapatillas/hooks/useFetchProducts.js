import { useEffect, useState } from "react";
import { fetchAllProducts } from "../services/productApiService";

export const useFetchProducts = () => {
    const [ zapatillas, setZapatillas ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const getProducts = async() => {
            try {
                setLoading(true);

                const response = await fetchAllProducts();
                setZapatillas(response.data);
                setError(null);
            } catch (error) {
                setError(err);
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        
        getProducts();
    }, []);

    return { zapatillas, loading, error };
}