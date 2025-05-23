import { initMercadoPago } from "@mercadopago/sdk-react";
import { envLoader } from "../../../config/envLoader";

const { mp_publicKey, optionsCurrency: { locale } } = envLoader

if(!window.mercadoPagoInitialized) {
    initMercadoPago(mp_publicKey, { locale });
    window.mercadoPagoInitialized = true;
}