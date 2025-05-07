import "./CardHome.css"

export const CardZapatilla = () => {
    return (
        <>
        <div className="contenedor-titulo">
            <h3 className="titulo-seccion">Trending</h3>
        </div>
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
        </div>
        </>
    )
}