import React from "react";
import ArrowImg from '../../img/arrow.png';

export const Arrow = ({ turnAngle }) => {
  return (
    <img 
      src={ArrowImg} alt="arrow" 
      style={{
        transform: `rotate(${turnAngle}deg)`, 
        width: '10vw',
      }}
    />
  );
};
