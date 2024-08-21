import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimony=[
  {
    content: 'This boot camp transformed my career. The practical, project-based learning approach was exactly what I needed to bridge the gap between theory and practice.',
    name: 'Hisaac Brown',
    nameIcon: 'HB',
    track: 'Front-End Developer',
    id: 1
  },
  {
    content: "Joining this boot camp was one of the best decisions I've ever made. The hands-on approach and real-world projects gave me the confidence to transition into a tech career.",
    name: '-Daniel T',
    nameIcon: 'DT',
    track: ' Software Engineer',
    id: 2
  },
  {
    content: 'I came into this boot camp with zero coding experience and left with the ability to build full-scale applications. The instructors were patient and dedicated, making sure every student understood the concepts.',
    name: '-Jasmine L',
    nameIcon: 'JL',
    track: 'Junior Developer',
    id: 3
  }, 
  {
    content: 'This boot camp transformed my career. The practical, project-based learning approach was exactly what I needed to bridge the gap between theory and practice.',
    name: '-Michael K',
    nameIcon: 'MK',
    track: 'Desinger',
    id: 4
  }
]
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3
  };

  return (
    <div className='testimonial'>
      <Slider {...settings}>
      {testimony.map((tester)=>(
        <div className='tester_con' key={tester.id}>
          <div className="tester_hd">
            <p>{tester.content}</p>
          </div>
          <div className="tester_bd">
            <div className="tester_icon">
              <h2>{tester.nameIcon}</h2>
            </div>
            <div className="tester_pf">
              <h3>{tester.name}</h3>
              <p>{tester.track}</p>
            </div>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  )
}

export default Testimonial
