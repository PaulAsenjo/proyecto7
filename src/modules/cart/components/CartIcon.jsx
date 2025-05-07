import { useState } from "react"
import useCartContext from "../context/CartContext";
import cartSvg from "../../../assets/cart.svg";
import { CartSideBar } from "./CartSideBar";



export const CartIcon = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const totalItems = useCartContext((state) => state.totalItems);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    return (
        <div className="relative inline-block">
            <button
                onClick={handleIsOpen}
                className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none border-l border-black px-4 py-2"
            >
                <img src={cartSvg} alt="Imagen carrito" className="w-7 h-7"/>
                {
                   totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-stone-950 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {totalItems}
                    </span>
                   )
                }
            </button>

            {isOpen && <CartSideBar onClose={handleIsOpen} />}
        </div>

    )
}