import React, { useState } from 'react';
import '../styles/DesignPath.css';
import flinto from '../assets/Images/fl.png';
import adobe from '../assets/Images/ps.png';
import sketch from '../assets/Images/sk.png';
import figma from '../assets/Images/fg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faClock, faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import Rating from './Rating';

const designCourse = [
  {
    image: sketch,
    caption: 'learn sketch',
    author: 'Hisaac Brown',
    time: '3hours',
    lesson: '12 lessons',
    id: 1
  },
  {
    image: flinto,
    caption: 'learn flinto',
    author: 'Hisaac Brown',
    time: '5hours',
    lesson: '18 lessons',
    id: 2
  },
  {
    image: adobe,
    caption: 'learn adobe',
    author: 'Hisaac Brown',
    time: '8hours',
    lesson: '21 lessons',
    id: 3
  },  
  {
    image: figma,
    caption: 'learn figma',
    author: 'Hisaac Brown',
    time: '3.5hours',
    lesson: '15 lessons',
    id: 4
  }
]

const DesignPath = () => {

  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  return (
    <div className='designpath'>
      <div className="designpath_head">
        <h2>Design Courses</h2>
      </div>
      <div className="designpath_content">
        {designCourse.map((designs)=>(
          <div key={designs.id} className='design_cont'>
            <a href="#">
              <div className="design_img_con">
                <img src={designs.image} alt="img" />
              </div>
            </a>
            <div className="design_cor_det">
              <div className="design_cor_txt">
                <h2>{designs.caption}</h2>
                <button 
                 className={`design_fav_btn ${favorites[designs.id] ? 'favorited' : ''}`}
                 onClick={() => toggleFavorite(designs.id)}
                >
                  <FontAwesomeIcon 
                   icon={faHeart} 
                   className='desig_icon'
                   style={{ color: favorites[designs.id] ? '#5567ff' : 'gray' }}
                  />
                </button>
              </div>
              <p className='desig_author'>{designs.author}</p>
              <p className='rating_wrap'>
                <Rating></Rating>
              </p>
              <div className="duratio_con">
                <p>
                  <span><FontAwesomeIcon icon={faClock} /></span>
                  {designs.time}
                </p>
                <p>
                  <span><FontAwesomeIcon icon={faCirclePlay}/></span>
                  {designs.lesson}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DesignPath
