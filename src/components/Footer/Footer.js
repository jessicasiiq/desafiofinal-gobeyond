import "./Footer.css";
import logoBlack from "../../assets/icons/logoBlackCorebizIcon.svg";
import facebook from "../../assets/icons/facebookIcon.svg";
import instagram from "../../assets/icons/instagramIcon.svg";
import linkedin from "../../assets/icons/linkedinIcon.svg";

function Footer() {
    return (
        <footer className="footer">
            <section className="column" id="columnv2">
                <div className="container-column">
                    <img src={logoBlack} id="logoBlack"/>
                    <p className="description">direitos reservados, corebiz 2021</p>
                    <div className="socialMedia">
                        <a href="https://pt-br.facebook.com/corebiz.ag/"><img src={facebook} className="icon"/></a>
                        <a href="https://www.instagram.com/corebizag/"><img src={instagram} className="icon"/></a>
                        <a href="https://www.linkedin.com/company/corebiz-brasil/"><img src={linkedin} className="icon"/></a>
                    </div>
                </div>
            </section>
            <section className="column" id="columnv2">
                <div className="container-column">
                    <div className="menuFooter">
                        <a href="" className="footerItem">Corebiz</a>
                        <a href="" className="footerItem">Serviços</a>
                        <a href="" className="footerItem">Cases</a>
                        <a href="" className="footerItem">Contato</a>
                    </div>
                </div>
            </section>
            <section className="column">
                <div className="container-column">
                    <h2>.Brasil</h2>
                    <p className="description">Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
                    <p className="description">R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
                </div>
            </section>
            <section className="column">
                <div className="container-column">
                    <h2>.Argentina</h2>
                    <p className="description">Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
                </div>
            </section>
            <section className="column">
                <div className="container-column">
                    <h2>.México</h2>
                    <p className="description">Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
                </div>
            </section>
            <section className="column">
                <div className="container-column">
                    <h2>.Chile</h2>
                    <p className="description">Roberto del Río 1137, Providencia.</p>
                </div>
            </section>
        </footer>
    );
}

export default Footer;