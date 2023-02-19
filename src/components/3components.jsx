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
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col">
                            <h2> <b> <span style={{ color: '#3554d1' }}>Very Good</span>  <span style={{ color: '#0f2480' }}> Deal For House</span></b> </h2>
                            <p className="my-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <a href="" className="nav-link button my-3" style={{ width: '30%', }} >Get A Quote</a>
                        </div>
                        <div className="col text-start">
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
                <div className="container pb-4">
                    <div className="container ">
                        <div className="w-100 text-center">
                            <h2 className="text-white"> <b> Why Choose Us  </b> </h2>
                        </div>
                        <div className="row align-items-center m-auto text-white my-5">
                            <div className="col text-center ">
                                <div className="py-2">
                                    <img src={logo1} width="20%" />
                                </div>
                                <h2 className="mt-2" > <b> 1000+ </b> </h2>
                                <p>Years of House</p>
                            </div>
                            <div className="col text-center ">
                                <div className="py-2">
                                    <img src={logo2} width="20%" />
                                </div>
                                <h2 className="mt-2" > <b> 20000+ </b> </h2>
                                <p>Projects Delivered</p>
                            </div>
                            <div className="col text-center ">
                                <div className="py-2">
                                    <img src={logo3} width="18%" />
                                </div>
                                <h2 > <b> 10000+ </b> </h2>
                                <p>Satisfied Customers</p>
                            </div>
                            <div className="col text-center ">
                                <div className="py-2">
                                    <img src={logo4} width="20%" />
                                </div>
                                <h2 className="mt-2" > <b> 1500+ </b> </h2>
                                <p>Cheap Rates</p>
                            </div>
                        </div>
                        <a href="" className="nav-link button my-3 m-auto" style={{ width: '20%', color: 'black', backgroundColor: 'white' }} >Get A Quote</a>

                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <div className="container">

                    <div className="w-100 text-center">
                        <h2> <b> <span style={{ color: '#3554d1' }}>What Our </span>  <span style={{ color: '#0f2480' }}>Customer Says</span></b> </h2>
                    </div>
                    <div className="row pt-5">
                        <div className="col" style={{ borderRadius: '10px' }} >
                            <div className="row  d-flex">
                                <div className="col">
                                    <img src={client} width="100%" />
                                </div>
                                <div className="col">
                                    <h4> <b> Majority </b> </h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ borderRadius: '10px' }} >
                            <div className="row  d-flex">
                                <div className="col">
                                    <img src={client} width="100%" />
                                </div>
                                <div className="col">
                                    <h4> <b> Majority </b> </h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div> <div className="col" style={{ borderRadius: '10px' }} >
                            <div className="row  d-flex">
                                <div className="col">
                                    <img src={client} width="100%" />
                                </div>
                                <div className="col">
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