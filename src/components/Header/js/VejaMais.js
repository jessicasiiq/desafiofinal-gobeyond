import "../css/VejaMais.css";
import arrow from "../../../assets/icons/arrowIcon.svg"

export default function VejaMais() {
    return (
        <>
            <article className="container">
                <a href="https://www.corebiz.ag/pt/" className="menuVejaMais" target="_blank">Veja mais <img src={arrow} className="arrowVejaMais"/></a><br></br>
            </article> 
        </>
    )
}