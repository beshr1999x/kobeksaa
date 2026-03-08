import React from "react";

export const FrameWrapper = () => {
  return (
    <div className="flex flex-col w-[261px] h-[177px] items-center justify-center gap-[7.46px] p-[14.92px] absolute top-[1108px] left-[65px] bg-white rounded-xl shadow-[0px_2.13px_21.31px_#0000000d] aspect-[1.47]">
      <div className="inline-flex flex-col items-center gap-[14.94px] relative flex-[0_0_auto]">
        <img
          className="relative w-[34.14px] h-[48.01px]"
          alt="Asset"
          src="https://c.animaapp.com/z9aFHItQ/img/asset-31-1@2x.png"
        />

        <div className="inline-flex flex-col items-center gap-[7.47px] relative flex-[0_0_auto]">
          <div className="mt-[-0.53px] [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-[#2f478a] text-[17.1px] relative w-fit text-center tracking-[0] leading-[normal] [direction:rtl]">
            قهوة أكثر، صرف أقل
          </div>

          <p className="[font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-[#222222] text-[11.7px] relative w-fit text-center tracking-[0] leading-[normal] [direction:rtl]">
            استفد من خصم ثابت مع كل كوب قهوة
          </p>
        </div>
      </div>
    </div>
  );
};
