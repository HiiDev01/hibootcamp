import React from 'react';
import '../styles/Navbar.css';
import Logo from '../assets/Images/graduate.png';
import Menu from '../assets/Images/list.png';
import '../styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav_min">
        <div className="hamburger">
          <img src={Menu} alt="" />
        </div>
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h1><span>Hi</span>Bootcamp</h1>
        </div>
        <div className="nav_menu">
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
          <li className='nav_acct_li'><a href="#" className='nav_acct_li_a acct_li_two'>get started</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
