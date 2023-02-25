import img1 from "../assets/imgs/s-1.jpg";
import Sale2 from './Sale2';
function price() {
    return (
        <div className="container pt-5">
            <div className="container-lg container-fluid">
                <div className="w-100 m-auto text-center">
                    <h2> <b> <span style={{ color: '#3554d1' }} >Our </span>  <span style={{ color: '#0f2480' }} >Pricing</span>  </b> </h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the</p>
                </div>
               
                <div className="row ">
                    <div  className="col-lg-4 col-sm-6 col-12 my-3 "  >
                        <div className="py-3 text-center text-white" style={{ backgroundColor: '#0f2480' }}>
                            <h3> <b> 01 </b> </h3>
                            <h5> <b>Basic </b> </h5>
                        </div>
                        <div className="text-center text-white" style={{ backgroundColor: '#3554d1', padding: '60px 0px' }}>
                            <h2> <b> $1000.00 </b> </h2>
                            <h4 style={{ width: '20%', margin: '3% auto', backgroundColor: 'white', height: '6px', borderRadius: '50px', }}> <b> <hr className="" /></b> </h4>
                            <p style={{ width: '38%', margin: 'auto', lineHeight: '2' }}>variations of passages of Lorem Ipsum available, but the majority have suffered alteration in</p>
                        </div>
                        
                        <div className="d-flex justify-content-center my-3">
                            <a href="" style={{ padding: '7px 50px' }} className="nav-link button text-center "  >Buy Now</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 my-3">
                    <div className="py-3 text-center text-white" style={{ backgroundColor: '#0f2480' }}>
                            <h3> <b> 02 </b> </h3>
                            <h5> <b>Standard </b> </h5>
                        </div>
                        <div className="text-center text-white" style={{ backgroundColor: '#3554d1', padding: '60px 0px' }}>
                            <h2> <b> $2000.00 </b> </h2>
                            <h4 style={{ width: '20%', margin: '3% auto', backgroundColor: 'white', height: '6px', borderRadius: '50px', }}> <b> <hr className="" /></b> </h4>
                            <p style={{ width: '38%', margin: 'auto', lineHeight: '2' }}>variations of passages of Lorem Ipsum available, but the majority have suffered alteration in</p>
                        </div>
                        <div className="d-flex justify-content-center my-3">
                            <a href="" style={{ padding: '7px 50px' }} className="nav-link button text-center "  >Buy Now</a>
                        </div>

                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 my-3">
                    <div className="py-3 text-center text-white" style={{ backgroundColor: '#0f2480' }}>
                            <h3> <b> 03 </b> </h3>
                            <h5> <b>Premium </b> </h5>
                        </div>
                        <div className="text-center text-white" style={{ backgroundColor: '#3554d1', padding: '60px 0px' }}>
                            <h2> <b> $3000.00 </b> </h2>
                            <h4 style={{ width: '20%', margin: '3% auto', backgroundColor: 'white', height: '6px', borderRadius: '50px', }}> <b> <hr className="" /></b> </h4>
                            <p style={{ width: '38%', margin: 'auto', lineHeight: '2' }}>variations of passages of Lorem Ipsum available, but the majority have suffered alteration in</p>
                        </div>
                        <div className="d-flex justify-content-center my-3">
                            <a href="" style={{ padding: '7px 50px' }} className="nav-link button text-center "  >Buy Now</a>
                        </div>

                    </div>
                </div>
            </div>


        </div>

    )
}

export default price