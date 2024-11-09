/* eslint-disable jsx-a11y/anchor-is-valid */
import './home.css';
import "../components/navbar.css";
import Sale from '../components/Sale';
import About from "../components/about"
import Search from '../components/search';
import Price from '../components/price';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Components from '../components/3components';
function home() {

  return (
    <>

      <div className="home-background"    >
        <div className='container' >
          <div className='container-lg'>
            <div className='home-Heading text-lg-start text-center ' >
              <h1> <span style={{ color: '#3554d1' }} > Modern </span> <br />  <span style={{ color: '#0f2480' }}>  House <br /> Appartments</span> </h1>
              <p className='home-Para'> The ultimate destination for finding your dream apartment. Our  website offers a vast range of apartments for sale, to suit every lifestyle and budget. Thank you for choosing <b style={{ color: '#3554d1' }} >Teaser</b>, and happy apartment hunting!</p>
              <div className="d-flex my-3 m-auto ">
                <a href="" style={{ padding: '7px 50px' }} className="nav-link button  m-lg-0 m-auto  "  >Read More</a>
              </div>
            </div>
            {/* <div className="Search" >
              <Search />
            </div> */}
          </div>
        </div>
      </div>
      <div className='pt-5'  >
        <About />
      </div>
      <div className='pt-5'>
        <Sale />
      </div>
      <div className='pt-5'>
        <Price />
      </div>
      <div className='pt-5'>
        <Components />
      </div>
      <div className='pt-5'>
        <Contact />
      </div>
      <div className='pt-5' style={{ backgroundColor: '#0f2480' }}>
        <Footer />
      </div>













    </>

  );
};

{/* <div className='home-inputs d-flex align-items-center  mt-5'>
            <div className='d-flex ' style={{ width: '85%' }} >
              <input type="text" placeholder="Select your Categories" style={{ padding: '10px 10px' }} class="form-control1" />
              <input type="text" placeholder="Select your Categories" style={{ padding: '10px 10px' }} class="form-control1" />
            </div>

            <div className=' mx-4' style={{ width: '15%' }}>
              <a href="" className="nav-link button text-center" style={{ padding: '8px 20px' }} >Read More</a>

            </div>
          </div> */}

export default home;
