/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Vector = ({
  className,
  vectorClassName,
  vector = "https://c.animaapp.com/z9aFHItQ/img/vector-1@2x.png",
}) => {
  return (
    <div className={`relative w-[5px] h-2.5 ${className}`}>
      <img
        className={`absolute w-[7px] h-3 -top-px -left-px ${vectorClassName}`}
        alt="Vector"
        src={vector}
      />
    </div>
  );
};
