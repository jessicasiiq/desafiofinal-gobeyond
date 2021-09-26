import "../css/Header.css";
import {useState, useEffect} from "react";
import axios from "axios";
import logo from "../../../assets/icons/logoCorebizIcon.svg"
import Slider from "./Slider";
import Navbar from "./Navbar";
import VejaMais from "./VejaMais";

export default function Header(){
    const [photos, setPhotos] = useState(null);
    useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/photos/?_limit=4").then((result) => {setPhotos(result.data)})}, [])
    return(
        <>
            <h1><img src={logo} id="logo"/></h1>
            <div >{photos ? <Slider photos={photos}/> : <div> Carregando...</div>}</div>
            <Navbar/>
            <VejaMais/>
        </>
    )
}