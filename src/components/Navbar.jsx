import React, { useState } from 'react';
import '../styles/Navbar.css';
import Logo from '../assets/Images/graduate.png';
import Menu from '../assets/Images/list.png';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const toggleNav =()=>{
    setNavActive(!navActive);
  }
  return (
    <div className='nav'>
      <div className="nav_min">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h1><span>Hi</span>Bootcamp</h1>
        </div>

          <div className={`nav_menu ${navActive ? 'active' : ''}`}>
            <ul className='nav_ul'>
              <li className='nav_li'><a href="#" className='nav_li_a'>Home</a></li>
              <li className='nav_li'><a href="#" className='nav_li_a'>Courses</a></li>
              <li className='nav_li'><a href="#" className='nav_li_a'>Path</a></li>
              <li className='nav_li'><a href="#" className='nav_li_a'>Pricing</a></li>
              <li className='nav_li'><a href="#" className='nav_li_a'>About</a></li>
              <li className='nav_li'><a href="#" className='nav_li_a'>community</a></li>
            </ul>
          </div>

      </div>
      <div className="nav_acct">
        <ul className='nav_acct_ul'>
          <li className='nav_acct_li'><a href="#" className='nav_acct_li_a acct_li_one'>
              <FontAwesomeIcon icon={faUnlockKeyhole} />
            </a></li>
          <li className='nav_acct_li'><Link to="/Login" className='nav_acct_li_a acct_li_two'>get started</Link></li>
        </ul>
        <div className="hamburger" onClick={toggleNav}>
          <img src={Menu} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
