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




















