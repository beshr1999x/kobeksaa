/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const VectorWrapper = ({
  className,
  vector = "https://c.animaapp.com/z9aFHItQ/img/vector-41@2x.png",
}) => {
  return (
    <img
      className={`absolute w-6 h-6 top-0 left-0 ${className}`}
      alt="Vector"
      src={vector}
    />
  );
};
