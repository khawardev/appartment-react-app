import './search.css';

function contact() {
    return (
        <div>
            <div className="w-100 text-center py-5 ">
                <h2> <b> <span style={{ color: '#3554d1' }}>Get </span>  <span style={{ color: '#0f2480' }}>In Touch</span></b> </h2>
            </div>
            <div style={{ backgroundColor: '#0f2480' }}>
                <div className='container'>
                    <div className='container'>
                        <div className="row align-items-center py-5">
                            <div className="col text-white">
                                <h2> <b> Contact us </b> </h2>
                                <br />
                                <br />
                                <p>If you have any questions or would like to inquire about availability at Modern Apartment House, please get in touch with us using one of the methods below:</p>
                                <p> <b>Phone:</b>  +1 (555) 123-4567 </p>
                                <p> <b>  Email: </b>info@modernapartmenthouse.com</p>
                                <p>
                                    Our office hours are Monday to Friday, 9am to 5pm Eastern Time.We aim to respond to all inquiries within 24 hours. Thank you for considering Modern Apartment House for your next home.
                                </p>
                            </div>

                            <div className="col my-sm-2">
                                <input type="text" width={100} style={{ padding: '10px', backgroundColor: 'white', margin: '20px 0px', border: 'none' }} placeholder="Name" class="form-control1" />
                                <input type="email" width={100} style={{ padding: '10px', backgroundColor: 'white', margin: '20px 0px', border: 'none' }} placeholder="Email" class="form-control1" />
                                <input type="text" width={100} style={{ padding: '10px', backgroundColor: 'white', margin: '20px 0px', border: 'none' }} placeholder="Phone Number" class="form-control1" />
                                <textarea rows={10} style={{ padding: '10px', width: '100%', backgroundColor: 'white', margin: '20px 0px', border: 'none' }} placeholder="Messege" class="form-control1" />
                                <div className="d-flex">
                                    <a href="" style={{ padding: '7px 80px', backgroundColor: '#3554d1' }} className="nav-link button text-center "  >Send</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default contact