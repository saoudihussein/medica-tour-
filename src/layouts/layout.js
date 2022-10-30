import React from 'react';
import FooterComponent from '../components/footer';
import HeaderDesktopComponent from '../components/header-dekstop';
import HeaderMobileComponent from '../components/header-mobile';
import { FaWhatsapp } from "react-icons/fa";
import "./layout.css"

const Layout = ({ children }) => {
    return (
        <>
            <HeaderMobileComponent />
            <HeaderDesktopComponent />
            {children}
            <FooterComponent />
            <a className="whats-app" href="https://api.whatsapp.com/send?phone=+21622543410&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank" rel="noreferrer">
                <FaWhatsapp />
            </a>
        </>
    )
}

export default Layout;

