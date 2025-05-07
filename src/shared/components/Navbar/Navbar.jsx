import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../modules/auth/context/authContext"
import { CartIcon } from "../../../modules/cart/components/CartIcon";
import isotiposvg from "../../../assets/isotipo.svg";

import "./Navbar.css"


export const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return (
        <nav className="navbar">
            
            <ul className="navbar_links">
                
                <li className="li-home"><Link to="/">Home</Link></li>
                <li className="li-sneakers"><Link to="/sneakers">Sneakers</Link></li>
               
            </ul>
            <div className="navbar-logo">
            <img src={isotiposvg} alt="Imagen isotipo" className="isotipo"/>
            </div>
           
            <div className="border-l border-black px-4">
                {
                    !user ? (
                        <>
                        
                        <Link to="/login" className="texto-login">Login</Link>
                        <Link to="/register" className="texto-register">Register</Link>
                        
                        </>
                    ) : (
                        <div className="navbar-user-info">
                            <span>{user.nombre} {user.apellido}</span>
                            <Link to={"/"} onClick={ handleLogout }>Logout</Link>
                        </div>
                    )
                }
                
            </div>
            <div>
                <CartIcon />
            </div>
        </nav>
    )
}