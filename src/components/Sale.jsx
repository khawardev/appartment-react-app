import img1 from "../assets/imgs/s-1.jpg";
import img2 from "../assets/imgs/s-2.jpg";
import img3 from "../assets/imgs/s-3.jpg";
import img4 from "../assets/imgs/s-4.jpg";
import img5 from "../assets/imgs/s-5.jpg";
import img6 from "../assets/imgs/s-6.jpg";
import Sale2 from './Sale2';
function Chome() {
    return (
        <div className="container-fluid px-5 pt-5">
            <div className="w-100 m-auto text-center">
                <h2> <b> <span style={{ color: '#3554d1' }} >House</span>  <span style={{ color: '#0f2480' }} >For Sale</span>  </b> </h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the</p>
            </div>
            <div className="row ">
                <div className="col-4 my-3">
                    <img src={img1} width="100%" />
                    <Sale2 />
                </div>
                <div className="col-4 my-3">
                    <img src={img2} width="100%" />
                    <Sale2 />
                </div>
                <div className="col-4 my-3">
                    <img src={img3} width="100%" />
                    <Sale2 />
                </div>
                <div className="col-4 my-3">
                    <img src={img4} width="100%" />
                    <Sale2 />
                </div>
                <div className="col-4 my-3">
                    <img src={img5} width="100%" />
                    <Sale2 />
                </div>
                <div className="col-4 my-3">
                    <img src={img6} width="100%" />
                    <Sale2 />
                </div>
                <a href="" className="nav-link button my-3 m-auto" style={{ width: '14%', }} >Read More</a>
            </div>
        </div>
    )
}

export default Chome;