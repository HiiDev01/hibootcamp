import React from 'react';
import '../styles/Home.css';
import Hvid from '../assets/videos/hvid.mp4';
import Jsimg from '../assets/Images/js.png';
import Navbar from './Navbar';
import Path from './Path';
import DesignPath from './DesignPath';
import Testimonial from './Testimonial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faClock, faShield, faEye, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className='home'>
      <div className="home_container">
        <div className="home_header">
          <Navbar></Navbar>
          <div className="home_overlay"></div>
          <video src={Hvid} autoPlay loop muted></video>
          <div className="home_content">
            <h1>Learn to Code</h1>
            <div className="home_content_p">
              <p>Business, Technology and Creative Skills taught by industry experts.</p>
              <p>Explore a wide range of skills with our professional tutorials.</p>
            </div>
            <a href="#" className='course_link'>Browse course</a>
            <div className="mentor_con">
              <a href="#" className='mentor_link'>Are you a teacher?</a>
            </div>
          </div>
        </div>
        <div className='home_header_bottom'>
          <div className="header_bottom_item">
            <div className="bottom_item_logo_con">
              <FontAwesomeIcon icon={faYoutube} className='hb_icon'/>
            </div>
            <div className="bottom_item_content">
              <h4>100+ courses</h4>
              <p>explore wide range of frontend skills from basic to advance</p>
            </div>
          </div>
          <div className="header_bottom_item">
            <div className="bottom_item_logo_con">
              <FontAwesomeIcon icon={faShield} className='hb_icon'/>
            </div>
            <div className="bottom_item_content">
              <h4>By Industry Experts</h4>
              <p>Professional development from the best people.</p>
            </div>
          </div>
          <div className="header_bottom_item">
            <div className="bottom_item_logo_con">
              <FontAwesomeIcon icon={faClock} className='hb_icon'/>
            </div>
            <div className="bottom_item_content">
              <h4>Unlimited Access</h4>
              <p>Unlock Library and learn any topic with one subscription.</p>
            </div>
          </div>
        </div>
        <div className="home_blog">
          <div className="home_blog_head">
            <h2>From the blog</h2>
          </div>
          <div className="blog">
            <div className="blog_wrapper">
              <div className="blog_item">
                <div className='blog_Ov_one blog_det'>
                  <div className="blog_det_hd">
                    <div className="blog_det_hd_imgCon">
                      <div className="blog_det_hd_popup">
                        <p>HisaacBrown</p>
                      </div>
                    </div>
                    <p className='blog_veiw'>
                      <span><FontAwesomeIcon icon={faEye} /></span>
                      100+
                    </p>
                  </div>
                  <div className="blog_det_bd">
                    <p>HTML5</p>
                    <h4>html full course with projects for beginners</h4>
                  </div>
                </div>
              </div>
              <div className="blog_item">
                <div className='blog_Ov_two blog_det'>
                  <div className="blog_det_hd">
                      <div className="blog_det_hd_imgCon">
                        <div className="blog_det_hd_popup">
                          <p>HisaacBrown</p>
                        </div>
                      </div>
                      <p className='blog_veiw'>
                        <span><FontAwesomeIcon icon={faEye} /></span>
                        100+
                      </p>
                    </div>
                    <div className="blog_det_bd">
                      <p>CSS3</p>
                      <h4>CSS full course with projects for beginners</h4>
                    </div>
                  </div>
              </div>
              <div className="blog_item">
                <div className='blog_Ov_three blog_det'>
                  <div className="blog_det_hd">
                      <div className="blog_det_hd_imgCon">
                        <div className="blog_det_hd_popup">
                          <p>HisaacBrown</p>
                        </div>
                      </div>
                      <p className='blog_veiw'>
                        <span><FontAwesomeIcon icon={faEye} /></span>
                        100+
                      </p>
                    </div>
                    <div className="blog_det_bd">
                      <p>Javascript</p>
                      <h4>Javascript full course with projects for beginners</h4>
                    </div>
                  </div>
              </div>
            </div>
            <div className="most_veiw_course">
              <div className="mv_con">
                <div className="mv_img_con">
                  <img src={Jsimg} alt="" />
                </div>
                <div className="mv_img_det">
                  <a href="#">Basic of Javascript</a>
                  <p>35 views last week</p>
                </div>
              </div>
              <div className="mv_icon">
                <FontAwesomeIcon icon={faFolder} className='mv_ico'/>
                <p>full course for beginners</p>
              </div>
              <div className="mv_link_con">
                <a href="#" className='mv_link_one'>Free try</a>
                <a href="#"  className='mv_link_two'>veiw trailer <span><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></span></a>
              </div>
            </div>
          </div>
        </div>

        <div className="home_path">
          <div className="path_header">
            <h2>learning path</h2>
          </div>
          <Path></Path>
        </div>
        <div className="design_path_con">
           <DesignPath></DesignPath>
        </div>

        <div className="feedBk_con">
          <div className="feedback_head">
            <h2>Feedback</h2>
            <p>What other students turned professionals have to say about us after learning with us and reaching their goals.</p>
          </div>
          <Testimonial></Testimonial>
        </div>
      </div>
    </div>
  )
}

export default Home
