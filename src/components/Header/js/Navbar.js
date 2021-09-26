import "../css/Navbar.css";

export default function Navbar() {
    return (
        <>
            <nav className="navbarMenu">
                <ul className="itemMenu">
                    <li>
                        <a href="/" className="itemMenu">A Corebiz</a>
                    </li>
                    <li>
                        <a href="/" className="itemMenu">Serviços</a>
                    </li>
                    <li>
                        <a href="/" className="itemMenu">Cases</a>
                    </li>
                    <li>
                        <a href="/" className="itemMenu">Contato</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}