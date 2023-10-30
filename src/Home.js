import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import myimage from "../45.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import fozo from "../50.docx";

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Web Designer", "Passionate Gamer", "Manga Writer" , "Self-taught Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  function toggleMenu() {
    const menu = document.querySelector('.navo');
    const leftSide = document.querySelector('.left-side');
    menu.classList.toggle('menu--visible');
    leftSide.classList.toggle('shounen');
  }
 
  function handleClick() {
    document.documentElement.style.setProperty('--skin-color', '#1854b4');
  }
  function color1() {
    document.documentElement.style.setProperty('--skin-color', '#ec1839');
  }
  function color2() {
    document.documentElement.style.setProperty('--skin-color', '#37b182');
  }
  function color3() {
    document.documentElement.style.setProperty('--skin-color', '#f021b2');
  }
  function appear() {
    const el = document.querySelector('.mamaelcontainer');
    el.classList.toggle('appear');
  }
  
  return (
    <div className="sides">
      <div className='floxo'>
      <FontAwesomeIcon className='lol' icon={faBars} onClick={toggleMenu}  />
      <FontAwesomeIcon className='lilo' icon={faCog} spin onClick={appear} />
      <div className='mamaelcontainer'>
      <div className="a" onClick={handleClick} ></div>
      <div className='b' onClick={color1}></div>
      <div className='c' onClick={color2}></div>
      <div className='d' onClick={color3}></div>
      </div>
      </div>
      <div className="left-side">
        <h1>Sick<span>o</span></h1>
        <div className="navo">
          <ul>
          <li><Link to="/ProtofileRemake">Home</Link></li>
            <li><Link to="/About">About me</Link></li>
            <li><Link to="/Myprojects">My Projects</Link></li>
            <li><Link to="/Contact">Contacts</Link></li>
            
          </ul>
        </div>
      </div>
     
      <div className="Center-side">
      <h1>Home</h1>
        <div className="intro-flex">
            <div>
          <h2 id='nigga'>Hello, my name is Sicko and I am a<br/> <span ref={typedRef}></span>!</h2>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, hic ipsam Asperiores sapiente ea debitis dolor repellat quasi omnis et ab nemo minima aliquid culpa animi error voluptatum blanditiis accusantium?</p>
        <a href={fozo} download='/50.docx'><button className='btn' >Download MY CV!</button></a> 
          
         </div>

     
            <img src={myimage} alt='ok'></img>
            
        </div>
        </div>
      </div>
  
  );
}

export default Home;