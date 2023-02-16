import React from 'react'
import './search.css';

function search() {
  return (
    <div>
           <div className='home-inputs d-flex align-items-center '>
            <div className="row">
              <div className="col bg-danger">
                <input type="text" placeholder="Select your Categories" style={{ width: '100%' }} class="form-control1" />
              </div>
              <div className="col">
                <input type="text" placeholder="Select your Categories" style={{ width: '100%' }} class="form-control1" />

              </div>
              <div className="col">
                <a href="" className="nav-link button text-center" style={{ width: '100%' }} >Read More</a>
              </div>
            </div>
          </div>

    </div>
  )
}

export default search;