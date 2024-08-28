import React from 'react';
import '../styles/Footer.css';
import Logo from '../assets/Images/graduate.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_logo">
        <img src={Logo} alt="logo" />
        <h1><span>Hi</span>Bootcamp</h1>
      </div>
      <div className="footer_para">
        <p>
          HiiBootcamp is a beautifully crafted user interface for 
          modern Education Platforms, including Courses & Tutorials, 
          Video Lessons, Student and Teacher Dashboard, Curriculum 
          Management, Earnings and Reporting, ERP, HR, CMS, Tasks, 
          Projects, eCommerce and more.
        </p>
      </div>
      <div className="footer_link">
        <a href="#">Terms</a>
        <a href="#">Privacy Policy</a>
      </div>
      <p className='copyright'>Created by HiiDev 2024 © All rights reserved.</p>
    </div>
  )
}

export default Footer
