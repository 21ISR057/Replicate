import React from 'react'
import back from "../Assets/back";
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <img src={back}/>
        </div>
        <div className='menu'>
        <Link to="/">Book Events</Link>
        <Link to="/">Book Venues</Link>
        <Link to="/">Book Stadium Seats</Link>
        <Link to="/">Login | SignUp</Link>
        </div>
    </div>
  )
}

export default Navbar