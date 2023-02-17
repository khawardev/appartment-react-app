import logo from "../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";


function navbar() {
  return (

    <div className="container ">
      <div className="container d-flex  justify-content-between  d-flex align-items-center "  >
      <Link to="/"><img className="Logo" src={logo} width="90px" /> </Link>
        <div className="d-flex align-items-center">
          <ul className="d-flex list-unstyled align-items-center">

            {/* <li className="mx-2 li mt-3"> <Link className="nav-link button" to="/">  Home</Link> </li> */}
            <li className="mx-2 li mt-3"> <Link className="nav-link button" to="about">About us</Link> </li>
            <li className="mx-2 li mt-3"> <Link className="nav-link button" to="house">House</Link> </li>
            <li className="mx-2 li mt-3"> <Link className="nav-link button" to="price">Price</Link> </li>
            <li className="mx-2 li mt-3"><Link className="nav-link button" to="contact"> Contact us </Link></li>

          
          </ul>
        </div>
      </div>



    </div>






  );
}

export default navbar;
