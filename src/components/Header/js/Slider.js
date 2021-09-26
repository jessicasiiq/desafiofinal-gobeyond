import "../css/Slider.css";
import {useState} from "react";

const Slider = ({photos}) => {
    const [selectedImg, setSelectedImg] = useState(photos[0]);
    return (
        <>
            <article className="container">
            {
                photos.map((thumbnails, index) => (
                    <div className="thumbnailContainer">
                        <img
                         style={{border: selectedImg === thumbnails.thumbnailUrl ? "4px solid white" : ""}}
                         key= {index}
                         src={thumbnails.thumbnailUrl}
                         className="thumbnail"
                         alt="Thumbnail"
                         onClick={() => setSelectedImg(thumbnails.thumbnailUrl)}
                        />
                    </div>
                ))
            }
            </article> 

            <article className="titleContainer">
                    <h2 className="title">{selectedImg.title}</h2>
            </article>

            <article>
            {
                <div className="imageContainer">
                    <img src={selectedImg.url} className="image"/>
                </div>
            }
            </article>

        </>
    )
}

export default Slider;