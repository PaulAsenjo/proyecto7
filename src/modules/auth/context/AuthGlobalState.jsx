import { useReducer } from "react"
import { authReducer } from "./authReducer"
import { loginService } from "../services/authApiService";
import { AuthContext } from "./authContext";


const initialState = {
    user: null,
    token: null
}

export const AuthProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(authReducer, initialState);

    const login = async({ correo, password }) => {
        try {
            const dataLogin = await loginService({ correo, password });
            const { token } = dataLogin;
            const user = dataLogin.data;

            if(!token || !user) {
                throw new Error("No se pudo iniciar sesión");
            }

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            dispatch({
                type: "LOGIN",
                payload: { user, token }
            });

        } catch (error) {
            console.error("Error login in:", error);
            throw new Error(error);
        }

    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        dispatch({
            type:"LOGOUT"
        })
    }

    return(
        <AuthContext.Provider
            value={{
                user: state.user,
                token: state.token,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};