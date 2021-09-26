import "../css/Footer.css";
import logoBlack from "../../../assets/icons/logoBlackCorebizIcon.svg";
import facebook from "../../../assets/icons/facebookIcon.svg";
import instagram from "../../../assets/icons/instagramIcon.svg";
import linkedin from "../../../assets/icons/linkedinIcon.svg";

function Footer() {
    return (
        <footer role="footer" className="footer">
            <section role="contentinfo" className="column" id="columnv2">
                <div role="contentinfo" className="container-column">
                    <img src={logoBlack} role="img" id="logoBlack" alt="Logo preto da Corebiz"/>
                    <p role="comment" className="description">direitos reservados, corebiz 2021</p>
                    <div role="contentinfo" className="socialMedia">
                        <a href="https://pt-br.facebook.com/corebiz.ag/"  target="_blank" title="Rede social • Facebook"><img src={facebook} className="icon" alt="Ícone Facebook"/></a>
                        <a href="https://www.instagram.com/corebizag/" target="_blank"  title="Rede social • Instagram"><img src={instagram} className="icon" alt="Ícone Instagram"/></a>
                        <a href="https://www.linkedin.com/company/corebiz-brasil/" target="_blank"  title="Rede social • Linkedin"><img src={linkedin} className="icon" alt="Ícone Linkedin"/></a>
                    </div>
                </div>
            </section>
            <section role="contentinfo" className="column" id="columnv2">
                <div role="contentinfo" className="container-column">
                    <div role="navigation" className="menuFooter">
                        <a href="https://www.corebiz.ag/pt/about/" className="footerItem" target="_blank" title="A Corebiz">a Corebiz</a>
                        <a href="https://www.corebiz.ag/pt/#framework-title" className="footerItem" target="_blank" title="Serviços">Serviços</a>
                        <a href="https://www.corebiz.ag/pt/cases/" className="footerItem" target="_blank" title="Cases">Cases</a>
                        <a href="https://www.corebiz.ag/pt/contato/" className="footerItem" target="_blank"  title="Contato">Contato</a>
                    </div>
                </div>
            </section>
            <section  role="contentinfo" className="column">
                <div  role="contentinfo" className="container-column">
                    <h2>.Brasil</h2>
                    <p className="description">Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
                    <p className="description">R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
                </div>
            </section>
            <section  role="contentinfo" className="column">
                <div  role="contentinfo" className="container-column">
                    <h2>.Argentina</h2>
                    <p className="description">Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
                </div>
            </section>
            <section role="contentinfo" className="column">
                <div role="contentinfo" className="container-column">
                    <h2>.México</h2>
                    <p className="description">Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
                </div>
            </section>
            <section role="contentinfo" className="column">
                <div role="contentinfo" className="container-column">
                    <h2>.Chile</h2>
                    <p className="description">Roberto del Río 1137, Providencia.</p>
                </div>
            </section>
        </footer>
    );
}

export default Footer;