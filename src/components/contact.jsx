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
                            <div className="col my-sm-2">
                                <input type="text" width={100} style={{ padding: '10px', backgroundColor: 'white', margin: '20px 0px',border:'none'  }} placeholder="Name" class="form-control1" />
                                <input type="email" width={100} style={{ padding: '10px', backgroundColor: 'white', margin: '20px 0px',border:'none'  }} placeholder="Email" class="form-control1" />
                                <input type="text" width={100} style={{ padding: '10px', backgroundColor: 'white', margin: '20px 0px',border:'none'  }} placeholder="Phone Number" class="form-control1" />
                                <textarea rows={10} style={{ padding: '10px', width: '100%', backgroundColor: 'white', margin: '20px 0px',border:'none'  }} placeholder="Messege" class="form-control1" />
                                <a href="" style={{ padding: '9px', width: '10%',backgroundColor: '#3554d1' }} className="nav-link button text-center"  >Send</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default contact