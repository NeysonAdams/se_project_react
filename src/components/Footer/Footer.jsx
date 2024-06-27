import React from 'react';
import "./Footer.css"

const Footer = ()=>{

    return (
        <footer className="footer">
            <p>Developed by Nias Adamov</p>
            <p>{new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;