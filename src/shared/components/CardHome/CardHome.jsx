import "./CardHome.css"


export const CardZapatilla = () => {
    return (
        <>
        <div className="contenedor-titulo">        
             <h3 className="titulo-seccion">Trending</h3>
        </div>

        <div className="contenedor-tarjetas">
        <div className="card1">
            <div className="card-header1">
                <img className="imagen-zapatilla" src="/public/imagenes/home1.png" alt="imagen zapatilla nike" />
            </div>
            <div className="card-body1">
                <div className="contenedor-title-precio1">
                <p className="card-title1">Nike Shox R4</p>
                <p className="card-precio1">$150.980</p>
                </div>
            <div className="contenedor-boton1">
                <button className="boton-card1">+</button>
            </div>
            </div>            
        </div>


        <div className="card2">
            <div className="card-header">
                <img className="imagen-zapatilla" src="/public/imagenes/home2.png" alt="imagen zapatilla adidas"></img>
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


        <div className="card">
            <div className="card-header">
                <img className="imagen-zapatilla" src="/public/imagenes/home3.png" alt="imagen zapatilla adidas"></img>
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


        <div className="card">
            <div className="card-header">
                <img className="imagen-zapatilla" src="/public/imagenes/home4.png" alt="imagen zapatilla adidas"></img>
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
       
        </div>
        </>
    )
};




       
        