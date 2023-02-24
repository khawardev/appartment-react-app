import Aboutimage from "../assets/imgs/about-img.jpg";


function about() {
    return (
        <div className="container">
            <div className="container pt-5">
                <div className="row align-items-center">
                    <div className="col text-end">
                        <img className="About-img" src={Aboutimage} width="80%" />
                    </div>
                    <div className="col">
                        <h2> <b> <span style={{ color: '#3554d1' }}>About</span>  <span style={{ color: '#0f2480' }}> our Appartment</span></b> </h2>
                        <p className="my-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                        <div className="d-flex  my-3">
                            <a href="" style={{ padding: '7px 50px' }} className="nav-link button text-center "  >Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about;