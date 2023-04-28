import Contact from "../components/contact";
import Footer from "../components/footer";
import {useEffect} from 'react';

const contact = ({paddingtop}) => {

  return (
    <div>
       <Contact paddingtop={paddingtop} />

        <Footer />
 
    </div>
  )
}

export default contact;