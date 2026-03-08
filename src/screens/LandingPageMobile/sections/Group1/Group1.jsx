import React from "react";

export const Group1 = ({ isExpanded }) => {
  return (
    <div className="absolute w-[346px] h-[81px] top-0 left-0 bg-white">
      <p className="absolute top-[10px] right-[40px] left-[40px] [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-black text-[14.2px] tracking-[0] leading-[18.2px] text-right [direction:rtl]">
        ما هي المقاهي المشاركة في كوبك؟
      </p>

      {isExpanded && (
        <div className="absolute w-[346px] h-[50px] top-[31px] left-0 bg-[#f8f9fa] px-[40px] py-[5px]">
          <p className="[font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-[#786f77] text-xs tracking-[0] leading-[14.2px] text-right [direction:rtl]">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى.
          </p>
        </div>
      )}

      <img
        className="top-0 absolute w-[342px] h-px left-0"
        alt="Line"
        src="https://c.animaapp.com/z9aFHItQ/img/line-27-5@2x.png"
      />

      <img
        className="bottom-0 absolute w-[342px] h-px left-0"
        alt="Line"
        src="https://c.animaapp.com/z9aFHItQ/img/line-27-5@2x.png"
      />
    </div>
  );
};
