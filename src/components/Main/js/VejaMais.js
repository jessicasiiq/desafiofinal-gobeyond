import "../css/VejaMais.css";
import arrow from "../../../assets/icons/arrowIcon.svg"

export default function VejaMais() {
    return (
        <>
            <article className="container" role="contentinfo">
                <a href="https://www.corebiz.ag/pt/" className="menuVejaMais" target="_blank" rel="noopener" title="Veja mais">Veja mais <img src={arrow} className="arrowVejaMais" alt="Seta do veja mais"/></a><br></br>
            </article> 
        </>
    )
}