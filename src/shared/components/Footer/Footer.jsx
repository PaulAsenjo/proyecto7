import { Link } from "react-router-dom"
import "./Footer.css"

export const Footer = () => {
    return (
        <>
        <div className="contenedor-footer">
        <div className="contenedor-info-footer">
        <div className="contenedor-rrss">
            <h1 className="titulo-rrss">Follow us</h1>
            <img className="imagen-rrss" src="/public/imagenes/rrss.png" alt="imagenes redes sociales" />
           
        </div>
        <div className="contenedor-account">
            <h1 className="titulo-registro">Create Account</h1>
            <p className="texto-registro">It’s super easy. Good things <br></br>will happen to you for sure.</p>
            <Link to="/register" className="botton-register">GO +</Link>

        </div>
        </div>

        </div>
        </>
    )

}