import Veno from "../Assets/Veno.Finale.png"
import { Fade } from "react-reveal";
import Projectsprops from "./Projectsprops";
import Libraries from "./Libraries";
import Data2 from "./Data2";


import Data3 from "./Data3";
export default function Myprojects(){
    
    const cardo = Data3.map(item=>{
        return <Projectsprops 
        key={item.image}
        item={item}
        />
    })
    const cardz = Data2.map(item=>{
        return  (
        <Libraries
        key={item.Name}
        item={item}
        />
    )})
    return (
        <div className="project-container" id="projects">
        <div className="projects" >
            <Fade left distance="30%" >
                    <div>
            <h1>My Projects</h1>
            <p>Please note that this section is regularly updated every month or two, showcasing my most recent and skillfully representative top two projects. While I have created numerous projects, I have carefully selected the ones that align with my preferences and expedite my development process. Currently, I am honing my expertise in working with databases such as SQL and MongoDB, with the aim of venturing into freelance full-stack development. Here is an overview of the CSS libraries I prefer to work with.</p>
            </div>
            </Fade>
            <div>
            <Fade right distance="30%">
            <img src={Veno} alt="Veno"/>
            </Fade>
            </div>
       
        </div>
        <Fade top distance="30%">
        {cardz}
        </Fade>
        <div className="projects-props">
        {cardo}
        </div>
       
        </div>
    )
}