
import Home from "./Home";
import { useState } from "react";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function Nav(){
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
      setIsNavOpen(!isNavOpen);
    };
    const handleNavElementClick = () => {
        setIsNavOpen(false);
      };
    return (
        <div className="Home" id="home">
            <div className="sides">
            <div className="logo">
            <h1>Sicko Elensan</h1>
        </div>
        <FontAwesomeIcon  className="sickoz" icon={faBars} id="show"
        onClick={handleNavToggle}/> 
        <div className={`nav ${isNavOpen ? 'open' : ''}`}>
       
           <nav id="nav-links">
           <FontAwesomeIcon onClick={handleNavElementClick}  icon={faTimes}  className="sicko"/>

            <ul>
           

                <li><a href="#home" onClick={handleNavElementClick}>Home</a></li>
                <li><a onClick={handleNavElementClick} href="#about">About me</a></li>
                <li><a onClick={handleNavElementClick} href="#projects">Projects</a></li>
                <li><a onClick={handleNavElementClick} href="#contact">Contact me</a></li>
                
            </ul>
            
           </nav>
        </div>
        <Home/>
        </div>
        </div>
        
    )
}