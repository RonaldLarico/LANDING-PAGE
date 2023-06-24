import React from "react";
import style from "./Style.module.css";

const MyMarker = ({ text, tooltip, $hover }) => {
  const handleClick = () => {
    console.log(`You clicked on ${tooltip}`);
  };

  return (
    <div className={$hover ? "circle hover" : `${style.circle}`} onClick={handleClick}>
      <span className={`${style.circleText}`} title={tooltip}>
        {text}
      </span>
    </div>
  );
};

export default MyMarker;