import { Footer } from "../../../../shared/components/Footer/Footer";
import { ZapatillaCard } from "../../components/ZapatillasCard";
import { useFetchProducts } from "../../hooks/useFetchProducts"

import "./ZapatillasPage.css"


export const ZapatillasPage = () => {
    const { zapatillas, loading, error } = useFetchProducts();

    return (
        <>
        <div>
            <h1 className="titulo">
                Nuestros Productos
            </h1>
            
            {loading && (
                <div>
                    <div className="spinner"></div>
                </div>
            )}

            {error && (
                <div>
                    <p>Error: {error.message}</p>
                </div>
            )}

            {zapatillas.length === 0 && !loading && !error && (
                <div>
                    <p>No hay productos disponibles</p>
                </div>
            )}

            <div className="contenedor-zapatillas">  
                {zapatillas.map(zapatilla => (
                    <ZapatillaCard key={zapatilla._id} zapatilla={zapatilla} />
                ))}
            </div>
            
            </div>
            <Footer />
        </>


    )
}


