import Price from "../components/price";
import { useEffect, useRef } from 'react';
import Footer from "../components/footer";
const price = ({ paddingtop }) => {
  

  return (
    <div >
      <Price paddingtop={paddingtop} />
      <div className="mt-5">
        <Footer />
      </div>

    </div>
  )
}

export default price;

