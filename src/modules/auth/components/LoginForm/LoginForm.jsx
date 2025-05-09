import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

import "./LoginForm.css"

export const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const [ correo, setCorreo ] = useState("");
    const [ password, setPassword ] = useState("");
    const navigate = useNavigate();

    const handleLogin = async(event) => {
        event.preventDefault();

        const formaData = {
            correo,
            password
        }

        try {
            await login(formaData);
            navigate("/");

        } catch (error) {
            console.error(error);
            alert("Error al iniciar sesión")
        }

    }
    return (
        <form class="formulario" onSubmit={handleLogin}>
            <div class="contenedor-etiqueta-email">
                <label class="etiquetas">Correo</label>
                <input class="inputs"
                    type="email"
                    value={correo}
                    onChange={event => setCorreo(event.target.value)}
                    required
                />
            </div>
            <div class="contenedor-etiqueta-password">
                <label class="etiquetas">Password</label>
                <input class="inputs"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                />
            </div>
            
            <button class="button" type="submit">Iniciar Sesión</button>
            
        </form>
    )
}