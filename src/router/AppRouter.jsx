import { Route, Routes } from "react-router-dom"
import { Navbar } from "../shared/components/Navbar/Navbar"
import { HomePage } from "../shared/pages/HomePage"
import { AboutPage } from "../shared/pages/AboutPage"
import { LoginPage } from "../modules/auth/pages/LoginPage/login"



export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />      
            </Routes>
        </>
    )
}