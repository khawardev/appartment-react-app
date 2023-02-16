import './home.css';
import "../components/navbar.css";
import Search from '../components/search';
function home() {

  return (
    <div className="home-background"  >
      <div className='container'>
        <div className='container'>

          <div className='home-Heading' style={{ width: '40%' }}>
            <h1> <span style={{ color: '#3554d1' }} > Modern </span> <br />  <span style={{ color: '#0f2480' }}>  Appartment <br /> House</span> </h1>
            <p style={{ margin: '30px 0px' }}> The ultimate destination for finding your dream apartment. Our website offers a vast range of apartments for sale, to suit every lifestyle and budget. Thank you for choosing <b style={{ color: '#3554d1' }} >Teaser</b>, and happy apartment hunting!</p>
            <a href="" className="nav-link button" style={{ width: '30%' }} >Read More</a>

          </div>
       <Search />






          {/* <div className='home-inputs d-flex align-items-center  mt-5'>
            <div className='d-flex ' style={{ width: '85%' }} >
              <input type="text" placeholder="Select your Categories" style={{ padding: '10px 10px' }} class="form-control1" />
              <input type="text" placeholder="Select your Categories" style={{ padding: '10px 10px' }} class="form-control1" />
            </div>

            <div className=' mx-4' style={{ width: '15%' }}>
              <a href="" className="nav-link button text-center" style={{ padding: '8px 20px' }} >Read More</a>

            </div>
          </div> */}





        </div>
      </div>
    </div>




  );
};

export default home;
