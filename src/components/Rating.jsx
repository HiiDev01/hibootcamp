import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar} from '@fortawesome/free-solid-svg-icons';

const Rating = () => {
  const stars = Array(5).fill(0);

  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(undefined);

  const handleRatingClick = value=>{
    setCurrentRating(value);
  }
  const handleRatingMouseOver= value=>{
    setHoverRating(value);
  }
  const handleRatingMouseLeave= ()=>{
    setHoverRating(undefined);
  }

  const colors ={
    orange: "#FFA500",
    grey: "#808080"
  }
  return (
    <div >
      {stars.map((_, index)=>{
        return(
          <FontAwesomeIcon 
            key={index}
            icon={faStar} 
            color={(currentRating || hoverRating)> index ? colors.orange : colors.grey}
            onClick={()=>handleRatingClick(index + 1)}
            onMouseOver={()=>handleRatingMouseOver(index + 1)}
            onMouseLeave={handleRatingMouseLeave}
            style={{cursor: "pointer", fontSize: "0.9rem"}}
          />
        )
      })}
    </div>
  )
}

export default Rating
