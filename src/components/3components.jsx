/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import image1 from "../assets/imgs/d-1.jpg";
import image2 from "../assets/imgs/d-2.jpg";
import logo1 from "../assets/imgs/u-1.png";
import logo2 from "../assets/imgs/u-2.png";
import logo3 from "../assets/imgs/u-3.png";
import logo4 from "../assets/imgs/u-4.png";
import client from "../assets/imgs/client.jpg";

function components() {
    return (

        <div>

            <div className="container py-5">
                <div className="container-lg container-fluid ">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12 my-3 text-lg-start text-center">
                            <h2> <b> <span style={{ color: '#3554d1' }}>Very Good</span>  <span style={{ color: '#0f2480' }}> Deal For House</span></b> </h2>
                            <p className="my-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            {/* <a href="" className="nav-link button my-3" style={{ width: '30%', }} >Get A aaaaaQuote</a> */}
                            <div className="d-flex">
                                <a href="" style={{ padding: '7px 40px', backgroundColor: '#3554d1' }} className="nav-link button text-center m-lg-0 m-auto"  >Get A Quote</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 text-lg-start text-center my-3">
                            <div className="row align-items-center">
                                <div className="col text-end">
                                    <img src={image1} width="80%" />
                                </div>
                                <div className="col">
                                    <img src={image2} width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5 pt-5 " style={{ backgroundColor: '#0f2480' }}>
                <div className="container-lg container-fluid pb-4">
                    <div className="container ">
                        <div className="w-100 text-center">
                            <h2 className="text-white"> <b> Why Choose Us  </b> </h2>
                        </div>
                        <div className="row align-items-center m-auto text-white my-5">
                            <div className="col-md-3 col-sm-6  col-12 text-center ">
                                <div className="py-2">
                                    <img src={logo1} width="20%" />
                                </div>
                                <h2 className="mt-2" > <b> 1000+ </b> </h2>
                                <p>Years of House</p>
                            </div>
                            <div className="col-md-3 col-sm-6  col-12 text-center ">
                                <div className="py-2">
                                    <img src={logo2} width="20%" />
                                </div>
                                <h2 className="mt-2" > <b> 20000+ </b> </h2>
                                <p>Projects Delivered</p>
                            </div>
                            <div className="col-md-3 col-sm-6  col-12 text-center ">
                                <div className="py-2">
                                    <img src={logo3} width="18%" />
                                </div>
                                <h2 > <b> 10000+ </b> </h2>
                                <p>Satisfied Customers</p>
                            </div>
                            <div className="col-md-3 col-sm-6  col-12 text-center ">
                                <div className="py-2">
                                    <img src={logo4} width="20%" />
                                </div>
                                <h2 className="mt-2" > <b> 1500+ </b> </h2>
                                <p>Cheap Rates</p>
                            </div>
                        </div>
                        <div className="d-flex my-3 m-auto ">
                            <a href="" style={{ padding: '7px 50px', color: 'black', backgroundColor: 'white' }} className="nav-link button m-auto  "  >Get A Quote</a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <div className="container-lg container-fluid">

                    <div className="w-100 text-center">
                        <h2> <b> <span style={{ color: '#3554d1' }}>What Our </span>  <span style={{ color: '#0f2480' }}>Customer Says</span></b> </h2>
                    </div>
                    <div className="row pt-5">
                        <div className="col-lg col-12 my-2 "   >
                            <div className="row  d-flex">
                                <div className="col-lg col-12 ">
                                    <img  src={client}  width="100%" />
                                </div>
                                <div className="col-lg col-12 mt-lg-0 mt-3">
                                    <h4> <b> Majority </b> </h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg  col-12 my-2"   >
                            <div className="row  d-flex">
                                <div className="col-lg col-12">
                                <img  src={client}  width="100%" />
                                </div>
                                <div className="col-lg col-12 mt-lg-0 mt-3">
                                    <h4> <b> Majority </b> </h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div> <div className="col-lg col-12 my-2"   >
                            <div className="row  d-flex">
                                <div className="col-lg col-12">
                                <img  src={client}  width="100%" />
                                </div>
                                <div className="col-lg col-12 mt-lg-0 mt-3">
                                    <h4> <b> Majority </b> </h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>


    )
}

export default components