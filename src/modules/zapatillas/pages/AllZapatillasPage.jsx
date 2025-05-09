import { useEffect } from "react";
import { useState } from "react"
import { fetchAllZapatillas } from "../services/fetchZapatillas";
import { CardZapatillas } from "../components/CardZapatillas";
import { Footer } from "../../../shared/components/Footer/Footer";


export const AllZapatillasPage = () => {
    const [ zapatillas, setzapatillas ] = useState([]);

    useEffect(() => {
        const fetchZapatillas = async() => {
            const zapatillas = await fetchAllZapatillas();
            setzapatillas(zapatillas.data);
        }
        
        fetchZapatillas();
    }, []);

    return (
        <>
            <div className="zapatillas-container">
                {
                    zapatillas.map(zapatillas => (
                        <CardZapatillas key={ zapatillas._id } zapatillas={ zapatillas }/>
                    ))
                }
            </div>
            
        </>
    )
}