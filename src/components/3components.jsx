import image1 from "../assets/imgs/d-1.jpg";
import image2 from "../assets/imgs/d-2.jpg";

function components() {
    return (
        <div className="container pt-5">
            <div className="container ">
                <div className="row align-items-center">  
                    <div className="col ">
                        <h2> <b> <span style={{ color: '#3554d1' }}>Very Good</span>  <span style={{ color: '#0f2480' }}> Deal For House</span></b> </h2>
                        <p className="my-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <a href="" className="nav-link button my-3" style={{ width: '30%', }} >Get A Quote</a>
                    </div>
                    <div className="col text-start d-flex">
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
                <div className="row align-items-center">   
                    <div className="col ">
                        <h2> <b> <span style={{ color: '#3554d1' }}>Very Good</span>  <span style={{ color: '#0f2480' }}> Deal For House</span></b> </h2>
                        <p className="my-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <a href="" className="nav-link button my-3" style={{ width: '30%', }} >Get A Quote</a>
                    </div>
                    <div className="col text-start d-flex">
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

    )
}

export default components