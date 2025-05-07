import { Link } from "react-router-dom";
import { formatCurrency } from "../../../shared/utils/formatCurrency";
import { envLoader } from "../../../config/envLoader";
import { CartAddButton } from "../../cart/components/CardAddButton";

import "./CardZapatillas.css"


const { optionsCurrency } = envLoader

export const ZapatillaCard = ({ zapatilla }) => {

    
    return (
        <>
        <div className="contenedor-cards">
            <div className="card">
                <Link to={`/zapatillas/${zapatilla._id}`}></Link>
            </div>
            <div className="card-body">
                <h2>
                    {zapatilla.brand}
                </h2>
                <p>
                    {zapatilla.model}
                </p>

               <div>
                    <span>
                        {formatCurrency(zapatilla.price, optionsCurrency)}
                    </span>
                </div>                
                <CartAddButton product={zapatilla} />
            </div>
        </div>
        </>
    );
}


{/**
     <div className="card">
            <div className="card-header">
                <img className="imagen-zapatilla" src="/public/imagenes/home1.png" alt="imagen zapatilla nike"></img>
            </div>
            <div className="card-body">
                <div className="contenedor-title-precio">
                <p className="card-title">Nike Shox R4</p>
                <p className="card-precio">$150.980</p>
                </div>
            <div className="contenedor-boton">
                <button className="boton-card">+</button>
            </div>
            </div>            
        </div> */}













{/**export const CardZapatillas = ({ zapatilla }) => {
    return (
        <div className="card">
            <h2>{zapatilla.brand}</h2>
            <p>Modelo:{zapatilla.model}</p>
            <p>Colorway:{zapatilla.colorway}</p>
            <p>Año lanzamiento:{zapatilla.releaseYear}</p>
        </div>
    );
}**/}



