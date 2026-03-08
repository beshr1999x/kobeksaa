/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const List = ({
  format,
  weight,
  className,
  formatOutline = "https://c.animaapp.com/z9aFHItQ/img/format-outline--weight-regular@2x.png",
}) => {
  return (
    <img
      className={`absolute w-8 h-8 top-0 left-0 ${className}`}
      alt="Format outline"
      src={formatOutline}
    />
  );
};
