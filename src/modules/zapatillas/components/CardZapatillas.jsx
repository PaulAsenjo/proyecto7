

export const CardZapatillas = ({ zapatillas }) => {
    return (
        <div className="card">
            <h2>{zapatillas.brand}</h2>
            <p>Modelo:{zapatillas.model}</p>
            <p>Colorway:{zapatillas.colorway}</p>
            <p>Año lanzamiento:{zapatillas.releaseYear}</p>
        </div>
    );
}