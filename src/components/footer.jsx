import location from "../assets/imgs/location.png";
import phone from "../assets/imgs/phone.png";
import mail from "../assets/imgs/mail.png";
import { Link } from "react-router-dom";
import fb from "../assets/imgs/fb.png";
import twitter from "../assets/imgs/twitter.png";
import linkedin from "../assets/imgs/linkedin.png";
import youtube from "../assets/imgs/youtube.png";

function footer() {
    return (
        <div>
            <div className="container py-5 text-white pb-1 ">
                <div className="container">
                    <div className="row ">
                        <div className="col">
                            <h3 className="pb-3"> <b>About Apartment</b> </h3>
                            <div className="row">
                                <div className="d-flex">
                                    <div className="a">
                                        <img src={location} width="100%" />
                                    </div>
                                    <div className="a px-3">
                                        <p>Address</p>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="a">
                                        <img src={phone} width="100%" />
                                    </div>
                                    <div className="a px-3">
                                        <p>+01 1234567890</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="a">
                                        <img src={mail} width="100%" />
                                    </div>
                                    <div className="a px-3">
                                        <p>demo@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col">
                            <h3 className="pb-3"> <b>Information</b> </h3>
                            <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        </div>

                        <div className="col">
                            <h3 className="pb-3"> <b>Useful Link</b> </h3>
                            <div className="row">
                                <div className="col-12 d-flex mb-2">
                                    <Link className="text-decoration-none text-white" to="about">About us</Link>
                                </div>
                                <div className="col-12 d-flex mb-2">
                                    <Link className="text-decoration-none text-white" to="house">House</Link>
                                </div>
                                <div className="col-12 d-flex mb-2">
                                    <Link className="text-decoration-none text-white" to="price">Price</Link>
                                </div>
                                <div className="col-12 d-flex">
                                    <Link className="text-decoration-none text-white" to="contact">Contact us</Link>
                                </div>

                            </div>

                        </div>

                        <div className="col">
                            <h3 className="pb-3"> <b>Newsletter</b> </h3>
                            <div className="row">
                                <div className="col-12">
                                    <input type="email" width={100} style={{ padding: '10px', backgroundColor: 'white', margin: '0px 0px 10px 0px', border: 'none' }} placeholder="Email" class="form-control1" />
                                    <div className="d-flex">
                                        <a href="" style={{ padding: '7px 80px',backgroundColor: '#3554d1' }} className="nav-link button text-center "  >SUBSCRIBE</a>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                    <div className="a">
                                        <a href="" style={{ margin: '0px 10px 0px 0px',textDecoration:'none' }} ><img src={fb} alt="" /> </a>
                                        <a href="" style={{ margin: '0px 10px',textDecoration:'none' }} ><img src={twitter} alt="" /> </a>
                                        <a href="" style={{ margin: '0px 10px',textDecoration:'none' }}><img src={linkedin} alt="" /> </a>
                                        <a href="" style={{ margin: '0px 10px',textDecoration:'none' }}><img src={youtube} alt="" /> </a>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>
                <div className="text-center m-auto">
                    <h4 style={{ width: '60%', margin: '4% auto', backgroundColor: 'white', height: '3px', borderRadius: '50px', }}> <b> <hr className="" /></b> </h4>
                    <p>© 2023 All Rights Reserved By Free Html Templates</p>
                </div>
            </div>
        </div>
    )
}

export default footer