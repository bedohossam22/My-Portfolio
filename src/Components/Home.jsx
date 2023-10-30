import React, { useEffect, useRef  } from 'react';
import Typed from 'typed.js';
import img from "../Assets/31311.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub ,  faLinkedin , faDiscord} from '@fortawesome/free-brands-svg-icons';
export default function Home() {
 
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Full-stack Developer", "Graphic Designer",  "Passionate Gamer"],
      typeSpeed: 50,
      backSpeed: 90,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="center">
      <div className="left-side">
        <h2>
          Hello, My name is Necro Hossam & I am a  <span ref={typedRef}></span>
        </h2>
        <p>
        Hello & Welcome to my Portfolio ...Keep in mind i can always do better as I am currently studying more CSS libraries to enhance my Ful-stack development skills
        </p>
        <span className='icons'>
       <a href='https://github.com/bedohossam22' target="_blank" rel="noreferrer"><FontAwesomeIcon className='item' icon={faGithub} /></a> 
       <a href='https://www.linkedin.com/in/abdelrahman-hossam-5a9286247/' target="_blank" rel="noreferrer"><FontAwesomeIcon className='item' icon={faLinkedin} /></a> 
       <a href='https://discord.gg/BXKDH9pQdQ' target="_blank" rel="noreferrer"><FontAwesomeIcon className='item' icon={faDiscord} /></a> 
        </span>
      </div>
      <img src={img} alt="ok" />
    </div>
  );
}