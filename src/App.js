import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Globalheading from "./Globalheading";
import SecondPage from "./secondpage";
import TestimonialPage from "./page3";
import About from "./page4";
import EndoWork from "./page5";

import IngredientPage from "./page6";

import Faqlist from "./faqlist";
import GuranteePage from "./GuranteePage";
import Benefits from "./Benefits";
import Dontwaitpage from "./dontwaitpage";
import Happen from "./Happen";
import Price from "./Price";
import { NavbarToggle } from "react-bootstrap"
import NavBar from './components/NavBar'
import Fda from "./fda";
import Limittimeprice from "./limittimeprice";
function App() {
  return (
    <div className="main">
      <NavBar/>
      <Home />
      <Globalheading title="Why Choose Joint Genesis?" />
      <SecondPage />
      <Globalheading title="Proven By Thousands?" />
      <TestimonialPage />
      <Globalheading    title="What is Joint Genesis Supplement?" />
      <About />
<span className="actnow">
    <Limittimeprice/>
      </span>
      <Price/>
      <Globalheading title="How does Joint Genesis Works?" />
      <EndoWork />
      <Globalheading title="Joint Genesis Ingredients" />
      <IngredientPage/>
    
   <GuranteePage/>

<br></br>
<Globalheading title="Benefits of Joint Genesis" id='benefits' className="benefits"/>
   <Benefits/>
    <Dontwaitpage/>
    <Happen/>
 <Globalheading title="Joint Genesis (FAQ's)"/>
 <Faqlist/>
 <Fda/>
    </div>
  );
}

export default App;
