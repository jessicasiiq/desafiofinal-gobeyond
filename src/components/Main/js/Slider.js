import "../css/Slider.css";
import {useState, useContext} from "react";
import {ItensContext} from "../../../Context";

function Slider() {
    const {photos, selectedPhotos, setSelectedPhoto} = useContext(ItensContext);
    return (
        <>
            <article className="container" role="contentinfo">
            {
                photos.map((thumbnails, index) => (
                    <div className="thumbnailContainer">
                        <img
                         style={{border: selectedPhotos === thumbnails ? "4px solid white" : ""}}
                         key= {index}
                         src={thumbnails.thumbnailUrl}
                         className="thumbnail"
                         alt="Thumbnail do slider"
                         onClick={() => setSelectedPhoto(thumbnails)}
                        />
                    </div>
                ))
            }
            </article> 

            <article className="titleContainer" role="contentinfo">
                    {selectedPhotos && <h2 className="title">{selectedPhotos.title}</h2>}
            </article>

            <article>
                <div className="imageContainer" role="contentinfo">
                    {selectedPhotos && <img src={selectedPhotos.url} className="image" alt="Imagem grande do slider"/>}
                </div>
            </article>

        </>
    )
}

export default Slider;