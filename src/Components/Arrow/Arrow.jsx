import React from "react";
import ArrowImg from '../../img/arrow.png';

export const Arrow = ({ turnAngle }) => {
  return (
    <img className="arrowc" src={ArrowImg} alt="arrow" style={{  transform: `rotate(${turnAngle}deg)` }}/>
  )
}