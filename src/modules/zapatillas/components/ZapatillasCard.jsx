import { Link } from "react-router-dom";
import { formatCurrency } from "../../../shared/utils/formatCurrency";
import { envLoader } from "../../../config/envLoader";
import { CartAddButton } from "../../cart/components/CardAddButton";

import "./ZapatillasCard.css"

const { optionsCurrency } = envLoader

export const ZapatillaCard = ({ zapatilla }) => {

    
    return (
        <div className="card">
            <div>
                <Link to={`/zapatillas/${zapatilla._id}`}></Link>
            </div>
            <div className="card-body">
            <div className="titulos-card">
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
                <div className="contenedor-boton">              
                <CartAddButton product={zapatilla} />
                </div> 
                {/**<div>
                    <span>
                        {producto.stock > 0
                            ? `${producto.stock} disponible(s)`
                            : "Agotado"}
                    </span>
                </div>*/}
            </div>
            </div>
        </div>
    );
}