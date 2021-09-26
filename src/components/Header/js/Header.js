import "../css/Header.css";
import logo from "../../../assets/icons/logoCorebizIcon.svg"
import Navbar from "./Navbar";

export default function Header(){
    return(
        <>
            <h1><img src={logo} id="logoCorebiz"/></h1>
            <Navbar/>
        </>
    )
}