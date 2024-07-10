import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import '../App.css'
const StarRating = ({ numStars = 5 }) => {

    const [select,setSelect] = useState(-1);
    const [hover,setHover] = useState(0);
    const handleClick = (index) =>{
        setSelect(index);
   
    }
    const handleMouseEnter = (index) =>{
        setHover(index);
    }
    const handleMouseLeave = () =>{
        setHover(select);
    
    }
  return (
    <div>
      <h1 className="flex justify-center text-3xl my-10">Star Rating</h1>
      <div className="flex justify-center">
        {[...Array(numStars)].map((_, index) => {
          return (
            <FaStar className={index<=(hover || select)?'active' : 'inactive'}
              onClick={() => {
                handleClick(index);
              }}
              onMouseEnter={() => {
                handleMouseEnter(index);
              }}
              onMouseLeave={() => {
                handleMouseLeave();
              }}
              size={40}
              key={index}
            ></FaStar>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
