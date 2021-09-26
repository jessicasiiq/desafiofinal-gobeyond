import "../css/Slider.css";
import {useState, useContext} from "react";
import {ItensContext} from "../../../Context";

function Slider() {
    const {photos, selectedPhotos, setSelectedPhoto} = useContext(ItensContext);
    return (
        <>
            <article className="container">
            {
                photos.map((thumbnails, index) => (
                    <div className="thumbnailContainer">
                        <img
                         style={{border: selectedPhotos === thumbnails ? "4px solid white" : ""}}
                         key= {index}
                         src={thumbnails.thumbnailUrl}
                         className="thumbnail"
                         alt="Thumbnail"
                         onClick={() => setSelectedPhoto(thumbnails)}
                        />
                    </div>
                ))
            }
            </article> 

            <article className="titleContainer">
                    {selectedPhotos && <h2 className="title">{selectedPhotos.title}</h2>}
            </article>

            <article>
                <div className="imageContainer">
                    {selectedPhotos && <img src={selectedPhotos.url} className="image"/>}
                </div>
            </article>

        </>
    )
}

export default Slider;