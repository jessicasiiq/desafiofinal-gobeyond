import "../css/Slider.css";

const Slider = ({photos}) => {
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
            <article className="container">
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

export default Slider;