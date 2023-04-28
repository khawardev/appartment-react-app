import House from "../components/Sale";
import Footer from "../components/footer";

const house = ({paddingtop}) => {
  return (
    <div>
    <House paddingtop={paddingtop} />
    <div className="mt-5">
        <Footer />
      </div>

  </div>
  )
}

export default house;