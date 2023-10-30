import Nav from "./Components/Nav.jsx"
import Aboutme from "./Components/Aboutme.jsx";
import "./style.css";
import Myprojects from "./Components/Myprojects.jsx";
import Contact from "./Components/Contact.jsx";


 export default function App() {

  return (
  <div className="elmama">
  <Nav/>
  <Aboutme/>
    <Myprojects/>
    <Contact/>
  </div>
  )
}