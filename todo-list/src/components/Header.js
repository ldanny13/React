import React from "react"
import Logo from "../images/Logo.png"

function Header(){
    return(
        <header className="navbar" >
            <img src={Logo} alt="Logo"/>
            <nav>
                <ul>
                    <li> <a className="active" href="#home"> Home </a> </li>

                    <li> <a href="#news">News</a> </li>
                     
                    <li><a href="#contact">Contact</a> </li>

                    <li><a href="#about">About</a> </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header