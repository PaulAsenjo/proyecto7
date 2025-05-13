import { useState } from "react"
import useCartContext from "../context/CartContext";
import cartSvg from "../../../assets/cart.svg";
import { CartSideBar } from "./CartSideBar";

import "./CartIcon.css"

export const CartIcon = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const totalItems = useCartContext((state) => state.totalItems);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    return (
        <div className="contenedor-boton-carrito">
            <button
                onClick={handleIsOpen}
                className="button-carrito"
            >
                <img src={cartSvg} alt="Imagen carrito" className="imagen-carrito"/>
                {
                   totalItems > 0 && (
                    <span className="items-carrito">
                        {totalItems}
                    </span>
                   )
                }
            </button>

            {isOpen && <CartSideBar onClose={handleIsOpen} />}
        </div>

    )
}