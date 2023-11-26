import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const scrollToSection = (id) => {

   const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-container ">
          <a exact href="/" className="nav-logo">
          <strong>  <h3 className="brandname">Joint Genesis</h3></strong>
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <ScrollLink
              style={{textDecoration:"none" ,color:"white",cursor:"pointer"}}
                exact
                
                id="home"
                scrolling="smooth"
                activeClassName="active"
                className="nav-links"
              >
                Home
              </ScrollLink>
            </li>
            <li className="nav-item ml-3">
              <ScrollLink style={{textDecoration:"none" ,color:"white" ,cursor:"pointer"}}
                exact
                to="ingredients"
                scrolling="smooth"
              
                className="nav-links"
             
              >
                Ingredients
              </ScrollLink>
            </li>
            <li className="nav-item m-4">
              <ScrollLink style={{textDecoration:"none" ,color:"white" ,cursor:"pointer"}}
                exact
                scrolling="smooth"
                to="benefits"
              
                className="nav-links"
             >
                Benefits
              </ScrollLink>
            </li>
            <li className="nav-item ml-3">
             <button className="btn btn-secondary">
                Order Now 
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="m-2 bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
             </button>
            </li>
          </ul>
          <div className="nav-icon ml-3" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
             <HamburgetMenuClose />     {" "}
              </span>
            ) : (
              <span className="icon">
             
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
