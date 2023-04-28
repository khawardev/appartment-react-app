import Navbar from "../components/navbar";
import About from "../components/about";
import Footer from "../components/footer";

 const about = ({paddingtop}) => {

  return (
    <div>
      <About paddingtop={paddingtop}  />
      <div className="mt-5 ">
        <Footer />
      </div>
    </div>
  );
}

export default about;

