import React from 'react';
import FooterComponent from '../components/footer';
import HeaderDesktopComponent from '../components/header-dekstop';
import HeaderMobileComponent from '../components/header-mobile';

const Layout = ({ children }) => {
    return (
        <>
            <HeaderMobileComponent />
            <HeaderDesktopComponent />
            {children}
            <FooterComponent />
        </>
    )
}

export default Layout;

