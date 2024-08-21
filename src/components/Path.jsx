import React, {useState} from 'react'
import '../styles/Path.css';
import htmlimg from '../assets/Images/html.png';
import cssimg from '../assets/Images/css.png';
import jsimg from '../assets/Images/js.png';
import reactimg from '../assets/Images/react.png';
import vueimg from '../assets/Images/vue.png';
import angularimg from '../assets/Images/angular.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const courses =[
  {
    name:"React for Beginner",
    link: "#",
    img: reactimg,
    number: "23 courses"
  },
  {
    name:"HTML for Beginner",
    link: "#",
    img: htmlimg,
    number: "30 courses"
  },
  {
    name:"Javascript for Beginner",
    link: "#",
    img: jsimg,
    number: "31 courses"
  },
  {
    name:"CSS for Beginner",
    link: "#",
    img: cssimg,
    number: "23 courses"
  },
  {
    name:"Vuejs for Beginner",
    link: "#",
    img: vueimg,
    number: "25 courses"
  },
  {
    name:"Angular for Beginner",
    link: "#",
    img: angularimg,
    number: "38 courses"
  }
]
const Path = () => {
  const [favorites, setIsFavorite] = useState([false,false,false,false,false,false]);

  const handleFavoriteClick = (index)=>{
    const updatedFavorite = [...favorites];
    updatedFavorite[index] = !updatedFavorite[index];
    setIsFavorite(updatedFavorite)
  }
  return (
    <div className='path'>
      {courses.map((course, index)=>(
        <div key={index} className='path_cs'>
          <a href="" className='path_link'>
            <div className='path_cs_imgCon'>
              <img src={course.img} alt="img" />
            </div>
            <div className="path_cs_det">
              <p className='path_p_one'>{course.name}</p>
              <p className='path_p_two'>{course.number}</p>
            </div>
          </a>
          <button onClick={()=>handleFavoriteClick(index)}>
            <FontAwesomeIcon 
            icon={faHeart} 
            className='path_icon'
            style={{color: favorites[index] ? '#5567ff' : '#272c33b3', fontSize: '1.2rem'}}
            />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Path
