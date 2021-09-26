import "./HeaderComponents.css";
import {useState} from "react";
import arrow from "../../assets/icons/arrowIcon.svg"

const ImageList = ({photos}) => {
    return (
        <>
            <article className="titleContainer">
            {
                photos.map((titles) => (<div className="title">{titles.title}</div>))
            }
            </article>
            <article>
            {
                photos.map((urls) => (<div className="imageContainer"><img src={urls.url} className="image"/></div>))
            }
            </article>
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
            <article className="container">
                <a href="https://www.corebiz.ag/pt/" className="menuVejaMais" target="_blank">Veja mais <img src={arrow} className="arrowVejaMais"/></a><br></br>
            {
                photos.map((thumbnails) => (
                    <div className="thumbnailContainer">
                        <img src={thumbnails.thumbnailUrl} className="thumbnail"/>
                    </div>
                ))
            }
            </article> 
        </>
    )
}

export default ImageList;