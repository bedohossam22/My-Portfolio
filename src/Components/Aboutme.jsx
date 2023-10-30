import sleepy from "../Assets/111.png";


export default function Aboutme(){
 
    return (
        
       <>
        <div className="about-me" id="about">
            <div className="about-conatiner">
        <div className="left-side">
  <h2>AboutMe</h2>
  <p>i'm a graphic designer with extensive freelancing Exprience and a Full-stack developer, passionate about creating visually stunning and user-friendly designs. I love blending creativity with technical skills to bring ideas to life. 
  </p>
  </div>
  <div>
  <img src={sleepy} alt="sleepy"/>
  </div>
  </div>
  <div className="cards-parent">
    <div className="card">
        <div>
        <h1>Basic</h1>
        <h2>$9.99</h2>
        <h3>Standard 2D Desgins</h3>
        <h3>Email support</h3>
        </div>
        <div>
        <button>Get Basic</button>
        </div>
    </div>
    <div className="card">
        <div>
        <h1>Intermediate</h1>
        <h2>$19.99</h2>
        <h3>Piority Email support</h3>
        <h3>Execlusive acess to live Q&A sessions</h3>
        <h3>illustator Backgrounds</h3>
        <h3>Basic Photoshop</h3>
        </div>
        <div>
        <button>Get Intermediate</button>
        </div>
    </div>
    <div className="card">
        <div>
        <h1>Ultimate</h1>
        <h2>$29.99</h2>
        <h3>Blend modes</h3>
        <h3>24/7 Priority support</h3>
        <h3>3D Desgins</h3>
        <h3>Exclusive content and Advanced Photoshop</h3>
        </div>
        <div></div>
        <button>Get Ultimate</button>
    </div>
   
  </div>
       
  </div>
  <div className="skills">
            <div className="Skill-A">
                <div className="items-a">
              <h1>Front-end</h1>
              <span>Html - Advanced</span>
              <span>Css - Advanced</span>
              <span>React - Advanced</span>
              <span>Boostrap - Intermediate</span>
              </div>
            </div>
            <div className="Skill-B">
                <div className="items-a">
                <h1>Back-end</h1>
              <span>JS - Advanced</span>
              <span>PHP - Intermediate</span>
              <span>Node.js - Intermediate</span>
              <span>MongoDB - Basic</span>
              </div>
            </div>
            <div className="Skill-C">
            <div className="items-a">
                <h1>Other</h1>
              <span>Adobe illustator - Advanced</span>
              <span>Adobe Photoshop - Advanced</span>
              <span>Figma - Intermediate</span>
              <span>Github - Advanced</span>
              </div>
            </div>
        </div>
  </>
       
  
       
    )
}