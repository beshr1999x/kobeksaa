import React from "react";

export const Frame = () => {
  return (
    <div className="flex flex-col w-[342px] h-[147px] items-start gap-[15.02px] absolute top-[188px] left-6 rotate-180">
      <p className="relative w-[342px] rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-2xl tracking-[-0.48px] leading-[normal] [direction:rtl]">
        تشتري قهوة كل يوم؟ كوبك يخلي السعر على مزاجك ومزاج محفظتك!
      </p>

      <p className="relative w-[342px] rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] [direction:rtl]">
        خلي القهوة اللي تحبها أقرب، أرخص، وأبسط. مع خدمتنا، تدفع مبلغ شهري ثابت
        وتستمتع بكوبك المفضل يوميا من أي مقهى مشارك، بسعر أذكى وراحة أكبر.
      </p>
    </div>
  );
};
