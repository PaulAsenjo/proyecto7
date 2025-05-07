import { CardZapatilla } from "../../components/CardHome/CardHome"
import "./Home.css"

export const HomePage = () => {
    return (
        <>
            <div className="banner-container">
              <div className="image-container">
                    <img className="image-banner" src="/public/imagenes/banner.png" alt="imagen adidas niña" />
              </div>
            <div className="video-container">
                <video controls>
                <source src="/public/imagenes/adidas.mp4" type="video/mp4" />
                </video>
            </div>
            </div>
            <div className="huincha">
                <div className="container-texto-huincha">
                <p className="texto-huincha">registrate y vende registrate y vende   registrate y vende registrate y vende</p>
                </div>
            </div>
            <CardZapatilla />
        </>
    )
}