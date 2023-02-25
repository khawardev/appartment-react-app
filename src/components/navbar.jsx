import logo from "../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";
import Hero from "../assets/imgs/logo.png";
function navbar() {
  return (

      <div  >
        <nav class="navbar navbar-expand-lg navbar-light  px-lg-5  px-4 py-lg-0 py-3 ">
          <a class="navbar-brand" href="#">
            <img className="Logo" src={logo} width="90px" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse  " id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto  py-4 ">
                <li className="mx-2 my-3 "> <Link className="nav-link button px-4 " to="/">  Home</Link> </li>
              <li className="mx-2 my-3 "> <Link className="nav-link button px-4" to="about">About us</Link> </li>
              <li className="mx-2 my-3 "> <Link className="nav-link button px-4" to="house">House</Link> </li>
              <li className="mx-2 my-3 "> <Link className="nav-link button px-4" to="price">Price</Link> </li>
              <li className="mx-2 my-3 "><Link className="nav-link button px-4" to="contact"> Contact us </Link></li>
               

              </ul>


          </div>
        </nav>
        
      </div>



  );
}

export default navbar;
