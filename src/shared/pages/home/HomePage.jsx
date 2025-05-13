import { CardZapatilla } from "../../components/CardHome/CardHome"
import { Footer } from "../../components/Footer/Footer"
import { BrandsPage } from "../brands/Brands"
import "./Home.css"

export const HomePage = () => {
    return (
        <>
            <div className="banner-container">
                <div className="image-container">
                    <img className="image-banner" src="/public/imagenes/NikeBanner3.png" alt="imagen nike" />
                </div>
              
            {/**<div className="video-container">
                <video controls>
                <source src="/public/imagenes/adidas.mp4" type="video/mp4"/>
                </video>
            </div>**/}
            </div>
           
            <div className="huincha">
                <div className="container-texto-huincha">
                <p className="texto-huincha">registrate y vende  *  registrate y vende  *  registrate y vende  *  registrate y vende  *  registrate y vende</p>
                </div>
            </div>
            <div className="container-titulo-trending">
                <h1 className="titulo-trending">trending</h1>
            </div>
            <div className="container-trending">
                <img className="imagen-tarjetas" src="/public/imagenes/tarjetas.png" alt="imagen tarjetas home" />
            </div>
            {/**<CardZapatilla />**/}
            <BrandsPage />
            <Footer />
        </>
    )
}