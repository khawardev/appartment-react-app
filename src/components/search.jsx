import React from 'react'
import './search.css';

function search() {
  return (
    <div>
           <div className='home-inputs'>
            <div className="row align-items-center">
              <div className="col-sm-5  my-sm-2">
                <input type="text" width={100} style={{ padding: '10px' }} placeholder="Select your Categories" class="form-control1" />
              </div>
              <div className="col-sm-5 my-sm-2">
                <input type="text" width={100} style={{ padding: '10px' }}  placeholder="Select your Categories"  class="form-control1" />
              </div>
              <div className="col-sm-2  my-sm-2">
                <a href="" width={100} style={{ padding: '9px' }}     className="nav-link button text-center"  >Read More</a>
              </div>
            </div>
          </div>

    </div>
  )
}

export default search;