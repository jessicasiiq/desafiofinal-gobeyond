import "./Header.css";
import {useState, useEffect} from "react";
import axios from "axios";
import ImageList from "./HeaderComponents";
import logo from "../../assets/icons/logoCorebizIcon.svg"

export default function Header(){
    const [photos, setPhotos] = useState(null);
    useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/photos/?_limit=4").then((result) => {setPhotos(result.data)})}, [])
    return(
        <>
            <h1><img src={logo} id="logo"/></h1>
            <div id="imageList">{photos ? <ImageList photos={photos}/> : <div> Carregando...</div>}</div>
        </>
    )
}