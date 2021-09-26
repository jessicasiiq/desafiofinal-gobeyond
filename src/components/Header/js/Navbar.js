import React, {useState, useEffect} from "react";
import "../css/Navbar.css";

export default function Navbar() {
    const [fechaMenu, setFechaMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const fechaNav = () => {
        setFechaMenu(!fechaMenu);
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener("resize", changeWidth);
        return () => {
           window.removeEventListener("resize", changeWidth);
        }
    }, []);

    return (
        <>
            <nav role="navigation" className="navbarMenu">
                {(fechaMenu || screenWidth > 500) && (
                    <ul className="itemMenu">
                    <li>
                        <a href="https://www.corebiz.ag/pt/about/" className="itemMenu" target="_blank" rel="noopener" title="A Corebiz">A Corebiz</a>
                    </li>
                    <li>
                        <a href="https://www.corebiz.ag/pt/#framework-title" className="itemMenu" target="_blank" rel="noopener" title="Serviços">Serviços</a>
                    </li>
                    <li>
                        <a href="https://www.corebiz.ag/pt/cases/" className="itemMenu" target="_blank" rel="noopener" title="Cases">Cases</a>
                    </li>
                    <li>
                        <a href="https://www.corebiz.ag/pt/contato/" className="itemMenu" target="_blank" rel="noopener" title="Contato">Contato</a>
                    </li>
                </ul>
                )}
                <button className="btn" onClick={fechaNav}>
                    <div className="mobileMenu">
                        <div id="line1"></div>
                        <div id="line1"></div>
                        <div id="line1"></div>
                    </div>
                </button>
            </nav>
        </>
    )
}