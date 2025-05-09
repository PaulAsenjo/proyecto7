import { Route, Routes } from "react-router-dom"
import { Navbar } from "../shared/components/Navbar/Navbar"
import { HomePage } from "../shared/pages/home/HomePage"
import { AboutPage } from "../shared/pages/AboutPage"
import { LoginPage } from "../modules/auth/pages/LoginPage/login"
import { RegisterPage } from "../modules/auth/pages/Register/Register"
import { ZapatillasPage } from "../modules/zapatillas/pages/ZapatillasPage/ZapatillasPage"
import { MercadoPagoStatus } from "../modules/payments/components/MercadoPagoStatus"





export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />  
                <Route path="/sneakers" element={<ZapatillasPage />} />
                <Route path="/mercadopago/status" element={<MercadoPagoStatus />} />  
            </Routes>
        </>
    )
}