import './navbar.css' ;


function NavBar() {
  return (
  <nav className="navbar navbar-expand-lg bg-dark text-light p-3">
    <div className="container-fluid " >
      <strong><a className="navbar-brand text-light brand" href="#">JOINT GENESIS</a></strong>
      <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
          <li className="nav-item mr-4">
            <a className="nav-link  text-light" aria-current="page" href="#" >What is Joint Genesis</a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link text-light" href="#">Ingredients</a>
          </li>
          
          <li className="nav-item mr-4">
            <a className="nav-link text-light " aria-disabled="true">Benefits</a>
          </li>
        </ul>
        <form className="d-flex ml-2" >
        <button className="navbarbtn" type="submit">Order Now 
        
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-plus m-2" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
        </button>
        </form>
      </div>
    </div>
  
</nav>
  );
}

export default NavBar;
