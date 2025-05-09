import useCartContext from "../context/CartContext";

import "./CardAddButton.css"



export const CartAddButton = ({ product }) => {
    const addItem = useCartContext((state) => state.addItem);

    const handleAddToCart = () => {
        addItem(product);
        console.log("Estamos agregando un producto", product)
    }

    return(
        <button
            onClick={handleAddToCart}
           className="boton-agregar"
        >
            Agregar +
        </button>
    )
}