import React from "react";
import { useNavigate } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import { List } from "../../components/List";
import { Vector } from "../../components/Vector";
import { VectorWrapper } from "../../components/VectorWrapper";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Featrues } from "./sections/Featrues";
import { FeatruesWrapper } from "./sections/FeatruesWrapper";
import { Frame } from "./sections/Frame";
import { Frame1 } from "./sections/Frame1";
import { Group } from "./sections/Group";
import { Group1 } from "./sections/Group1";
import { GroupWrapper } from "./sections/GroupWrapper";
import { SectionComponentNode } from "./sections/SectionComponentNode";

export const LandingPageMobile = () => {
  const navigate = useNavigate();
  const screenWidth = useWindowWidth();


  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      style={{
        minHeight: "100vh",
      }}
    >
      <div
        className={`overflow-hidden bg-white ${screenWidth < 1024 ? "w-full max-w-[390px]" : (screenWidth >= 1024) ? "w-[1920px]" : ""} ${screenWidth < 1024 ? "transition-all duration-[0.2s] ease-[ease]" : ""} ${screenWidth < 1024 ? "min-h-[5787px]" : (screenWidth >= 1024) ? "h-[8465px]" : ""} ${screenWidth < 1024 ? "relative" : ""}`}
      >
        {screenWidth < 1024 && (
          <>
            <div className="absolute w-full h-[723px] top-0 left-0 bg-[#2f478a]">
              <img
                className="absolute w-[105px] h-[37px] top-[103px] left-[261px]"
                alt="Kobek full white"
                src="https://c.animaapp.com/z9aFHItQ/img/kobek-full---white-1-2@2x.png"
              />

              <Frame />
              <button 
                className="flex w-[143px] h-[42px] items-center justify-center px-[16.72px] py-[10.75px] absolute top-[641px] left-[124px] aspect-[3.4] cursor-pointer hover:opacity-90 transition-opacity bg-transparent border-none outline-none"
                onClick={() => {}}
              >
                <div className="absolute w-[143px] h-[42px] top-0 left-0 bg-[#e3b505] rounded-[35.09px]" />

                <div className="relative w-fit [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-[#2f478a] text-base text-left tracking-[0] leading-[14.0px] whitespace-nowrap [direction:rtl]">
                  ابدأ الآن
                </div>
              </button>

              <Group />
              <List
                className="!h-6 !aspect-[1] !left-6 !w-6 !top-[103px]"
                format="outline"
                formatOutline="https://c.animaapp.com/z9aFHItQ/img/list@2x.png"
                weight="regular"
              />
            </div>

            <button 
              className="flex w-[143px] h-[42px] items-center justify-center px-[16.72px] py-[10.75px] absolute top-[3459px] left-[124px] aspect-[3.4] cursor-pointer hover:opacity-90 transition-opacity bg-transparent border-none outline-none"
              onClick={() => {}}
            >
              <div className="bg-[#2f478a] absolute w-[143px] h-[42px] top-0 left-0 rounded-[35.09px]" />

              <div className="relative w-fit [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-white text-base text-left leading-[14.0px] whitespace-nowrap tracking-[0] [direction:rtl]">
                ابدأ الآن
              </div>
            </button>

            <img
              className="absolute w-full h-[37px] top-[747px] left-0"
              alt="Frame"
              src="https://c.animaapp.com/z9aFHItQ/img/frame-1618872999.png"
            />

            <Featrues />
            <FeatruesWrapper />
            <DivWrapper />
            <div className="top-[4268px] left-6 flex flex-col w-[342px] items-center justify-center gap-[18px] absolute">
              <div className="relative w-[210px] mt-[-1.00px] [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-black text-2xl text-center tracking-[-0.48px] leading-[normal] [direction:rtl]">
                أسئلة شائعة
              </div>
            </div>

            <Div />
            <SectionComponentNode />
            <GroupWrapper />
            <div className="absolute w-[185px] h-[333px] top-[2620px] left-[104px]">
              <div className="absolute w-[185px] h-[303px] top-[30px] left-0">
                <div className="relative w-[185px] h-[303px]">
                  <div className="absolute w-[185px] h-[303px] top-0 left-0 bg-white rounded-3xl shadow-[0px_4px_40px_#0000000d]" />

                  <button 
                    className="absolute w-[143px] h-[42px] top-[261px] left-[21px] cursor-pointer hover:opacity-90 transition-opacity bg-transparent border-none outline-none"
                    onClick={() => {}}
                  >
                    <div className="relative w-[143px] h-[42px] bg-[#2f478a] rounded-[35.09px]">
                      <div className="absolute top-[14px] left-[54px] [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-white text-sm text-left tracking-[0] leading-[14.0px] whitespace-nowrap [direction:rtl]">
                        اشترك الآن
                      </div>
                    </div>
                  </button>

                  <button 
                    className="absolute w-[143px] h-[42px] top-[203px] left-[21px] cursor-pointer hover:opacity-90 transition-opacity bg-transparent border-none outline-none"
                    onClick={() => {}}
                  >
                    <div className="relative w-[143px] h-[42px] bg-white rounded-[35.09px] border border-solid border-[#2f478a]">
                      <div className="absolute top-[14px] left-[54px] [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-[#2f478a] text-sm text-left tracking-[0] leading-[14.0px] whitespace-nowrap [direction:rtl]">
                        اشترك الآن
                      </div>
                    </div>
                  </button>

                  <button 
                    className="absolute w-[143px] h-[42px] top-[145px] left-[21px] cursor-pointer hover:opacity-90 transition-opacity bg-transparent border-none outline-none"
                    onClick={() => {}}
                  >
                    <div className="relative w-[143px] h-[42px] bg-white rounded-[35.09px] border border-solid border-[#2f478a]">
                      <div className="absolute top-[14px] left-[54px] [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-[#2f478a] text-sm text-left tracking-[0] leading-[14.0px] whitespace-nowrap [direction:rtl]">
                        اشترك الآن
                      </div>
                    </div>
                  </button>

                  <button 
                    className="absolute w-[143px] h-[42px] top-[87px] left-[21px] cursor-pointer hover:opacity-90 transition-opacity bg-transparent border-none outline-none"
                    onClick={() => {}}
                  >
                    <div className="relative w-[143px] h-[42px] bg-white rounded-[35.09px] border border-solid border-[#2f478a]">
                      <div className="absolute top-[14px] left-[54px] [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-[#2f478a] text-sm text-left tracking-[0] leading-[14.0px] whitespace-nowrap [direction:rtl]">
                        اشترك الآن
                      </div>
                    </div>
                  </button>

                  <button 
                    className="absolute w-[143px] h-[42px] top-[29px] left-[21px] cursor-pointer hover:opacity-90 transition-opacity bg-transparent border-none outline-none"
                    onClick={() => {}}
                  >
                    <div className="relative w-[143px] h-[42px] bg-white rounded-[35.09px] border border-solid border-[#2f478a]">
                      <div className="absolute top-[14px] left-[54px] [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-[#2f478a] text-sm text-left tracking-[0] leading-[14.0px] whitespace-nowrap [direction:rtl]">
                        اشترك الآن
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <button 
                className="flex w-[143px] h-[42px] items-center justify-center px-[16.72px] py-[10.75px] absolute top-[469px] left-[161px] aspect-[3.4] cursor-pointer hover:opacity-90 transition-opacity bg-transparent border-none outline-none"
                onClick={() => {}}
              >
                <div className="absolute w-[143px] h-[42px] top-0 left-0 bg-[#e3b505] rounded-[35.09px]" />

                <div className="relative w-fit [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-[#2f478a] text-base text-left tracking-[0] leading-[14.0px] whitespace-nowrap [direction:rtl]">
                  اشترك الآن
                </div>
              </button>
            </div>

            <Frame1 />
          </>
        )}

        {screenWidth >= 1024 && (
          <div className="relative w-[1921px] h-[8465px]">
            <div className="absolute w-[1921px] h-[8465px] top-0 left-0">
              <div className="absolute w-[1700px] h-[1321px] top-[4542px] left-[110px] bg-[url(https://c.animaapp.com/z9aFHItQ/img/rectangle-400.png)] bg-[100%_100%]">
                <button 
                  className="absolute w-[212px] h-[72px] top-[1128px] left-[745px] bg-[#e3b505] rounded-[50px] cursor-pointer hover:opacity-90 transition-opacity border-none outline-none"
                  onClick={() => {}}
                >
                  <div className="absolute top-[25px] left-[54px] [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-[#2f478a] text-2xl text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                    اشترك الآن
                  </div>
                </button>

                <div className="flex flex-col w-[789px] items-start gap-16 absolute top-[121px] left-[456px]">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-white text-[56px] text-center tracking-[-1.12px] leading-[72px] [direction:rtl]">
                    قهوة مخفضة يوميا بثلاث خطوات سهلة
                  </p>

                  <p className="relative self-stretch [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-[22px] text-center tracking-[0] leading-9 [direction:rtl]">
                    الموضوع مو محتاج تعقيد! اتبع هالخطوات واحصل على خصم ثابت
                    بقيمة ٤٠٪ على كوبك اليومي.
                  </p>
                </div>
              </div>

              <div className="absolute w-[1921px] h-[1080px] top-0 left-0 rotate-180">
                <div className="relative w-[1920px] h-[1080px] left-px">
                  <div className="absolute w-[1920px] h-[1080px] top-0 left-0 bg-[linear-gradient(156deg,rgba(47,71,138,1)_0%,rgba(25,50,119,1)_100%)]">
                    <div className="absolute w-[1920px] h-[52px] top-0 left-0 rotate-180">
                      <div className="flex flex-col w-[1920px] h-[52px] items-center justify-center gap-2.5 px-[622px] py-[11px] relative bg-[#bedcee]">
                        <div className="inline-flex items-center justify-center gap-5 relative flex-[0_0_auto]">
                          <button 
                            className="all-[unset] box-border relative w-[77px] h-[30px] cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => {}}
                          >
                            <div className="flex w-[77px] h-[30px] items-center justify-center gap-2.5 px-[19px] py-1.5 relative bg-[#2f478a] rounded-2xl">
                              <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Arabic-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] [direction:rtl]">
                                اشترك
                              </div>
                            </div>
                          </button>

                          <div className="relative w-fit [font-family:'SF_Arabic-Medium',Helvetica] font-medium text-[#2f478a] text-sm tracking-[0] leading-[normal] [direction:rtl]">
                            احصل على خصم شهري ثابت يصل إلى ٤٠٪ على قهوتك اليومية
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute w-[1570px] h-[60px] top-[79px] left-[180px]">
                      <div className="absolute w-[164px] h-[60px] top-0 left-[1396px]">
                        <button 
                          className="top-0 left-1 rotate-180 flex w-40 h-[60px] items-center justify-center gap-2.5 px-8 py-4 absolute cursor-pointer hover:opacity-90 transition-opacity bg-transparent border-none outline-none"
                          onClick={() => {}}
                        >
                          <div className="bg-white absolute w-40 h-[60px] top-0 left-0 rounded-[50px]" />

                          <div className="relative w-fit [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-[#2f478a] text-2xl text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                            ابدأ الآن
                          </div>
                        </button>

                        <img
                          className="absolute w-[164px] h-[58px] top-px left-0"
                          alt="Kobek full white"
                          src="https://c.animaapp.com/z9aFHItQ/img/kobek-full---white-1-2-2@2x.png"
                        />
                      </div>

                      <div className="absolute top-4 left-[395px] rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] [direction:rtl]">
                        المزايا
                      </div>

                      <div className="absolute top-4 left-[264px] rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] [direction:rtl]">
                        الرئيسية
                      </div>

                      <div className="absolute top-4 left-[508px] rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] [direction:rtl]">
                        الاشتراك
                      </div>

                      <div className="absolute top-4 left-[642px] rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] [direction:rtl]">
                        الانضمام كمقهى
                      </div>

                      <div className="absolute top-4 left-[842px] rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] [direction:rtl]">
                        أسئلة شائعة
                      </div>
                    </div>

                    <div className="flex flex-col w-[838px] items-start gap-[37px] absolute top-[372px] left-[180px]">
                      <p className="relative self-stretch mt-[-1.00px] rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-[80px] tracking-[-1.60px] leading-[96px] [direction:rtl]">
                        تشتري قهوة كل يوم؟ كوبك يخلي السعر على مزاجك ومزاج
                        محفظتك!
                      </p>

                      <p className="relative w-[699px] rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[34px] [direction:rtl]">
                        خلي القهوة اللي تحبها أقرب، أرخص، وأبسط. مع خدمتنا، تدفع
                        مبلغ شهري ثابت وتستمتع بكوبك المفضل يوميا من أي مقهى
                        مشارك، بسعر أذكى وراحة أكبر.
                      </p>
                    </div>

                    <div className="absolute w-[472px] h-[518px] top-[371px] left-[1265px] shadow-[0px_4px_40px_#00000073]">
                      <div className="relative h-[518px]">
                        <div className="absolute w-[472px] h-[468px] top-0 left-0">
                          <div className="absolute w-[472px] h-[468px] top-0 left-0 bg-white rounded-[20px]" />

                          <div className="absolute w-[415px] h-[88px] top-[430px] left-[23px] bg-white rounded-[10px] rotate-180 shadow-[12px_12px_40px_#0000000f]">
                            <div className="absolute w-[79px] h-12 top-5 left-[171px]">
                              <div className="absolute w-[54px] top-0 left-2.5 [font-family:'SF_Arabic-Medium',Helvetica] font-medium text-black text-[10px] text-center tracking-[0] leading-4 [direction:rtl]">
                                ريال تم توفيره
                              </div>

                              <div className="absolute w-[75px] top-[18px] left-0 [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-black text-center leading-[30px] text-2xl tracking-[0] [direction:rtl]">
                                ٦٠٣ ألف
                              </div>
                            </div>

                            <div className="absolute w-[47px] h-12 top-5 left-[338px]">
                              <div className="absolute top-0 left-0 [font-family:'SF_Arabic-Medium',Helvetica] font-medium text-black text-[10px] text-center tracking-[0] leading-4 whitespace-nowrap [direction:rtl]">
                                خصم ثابت
                              </div>

                              <div className="absolute w-[35px] top-[18px] left-1 [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-black text-2xl text-center tracking-[0] leading-[30px] [direction:rtl]">
                                ٤٠٪
                              </div>
                            </div>

                            <div className="absolute w-[66px] h-12 top-5 left-[33px]">
                              <div className="absolute w-[57px] top-0 left-[5px] [font-family:'SF_Arabic-Medium',Helvetica] font-medium text-black text-[10px] text-center tracking-[0] leading-4 [direction:rtl]">
                                مستخدم يومي
                              </div>

                              <div className="absolute top-[18px] left-0 [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-black text-center leading-[30px] whitespace-nowrap text-2xl tracking-[0] [direction:rtl]">
                                ٨ آلاف
                              </div>
                            </div>
                          </div>
                        </div>

                        <img
                          className="absolute w-[50px] h-[50px] top-[468px] left-[211px]"
                          alt="Ellipse"
                          src="https://c.animaapp.com/z9aFHItQ/img/ellipse-1.png"
                        />
                      </div>
                    </div>
                  </div>

                  <img
                    className="absolute w-[318px] h-[456px] top-[279px] left-[1342px] -rotate-180 aspect-[0.5] object-cover"
                    alt="Image"
                    src="https://c.animaapp.com/z9aFHItQ/img/image-6.png"
                  />
                </div>
              </div>

              <div className="top-[1426px] inline-flex flex-col items-start gap-[150px] absolute left-[403px]">
                <div className="relative w-[1119px] h-[205px] mr-[-4.00px]">
                  <p className="absolute top-0 left-[375px] [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-transparent text-[56px] text-center tracking-[-1.12px] leading-[72px] whitespace-nowrap [direction:rtl]">
                    <span className="text-black">لماذا </span>
                    <span className="text-[#e3b505]">كوبك</span>
                    <span className="text-black">؟</span>
                  </p>

                  <p className="absolute w-[1115px] top-[97px] left-0 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-black text-[22px] text-center tracking-[0] leading-9 [direction:rtl]">
                    كوبك يعيد تعريف تجربة القهوة اليومية — باشتراك واحد بسيط،
                    تحصل على خصم دائم في شبكة من المقاهي المختارة بعناية،
                    وتوفر على نفسك المال والوقت كل يوم.
                  </p>
                </div>
              </div>

              <div className="top-[2240px] inline-flex flex-col items-start gap-[150px] absolute left-[403px]">
                <div className="relative w-[1119px] h-[133px] mr-[-4.00px]">
                  <p className="absolute top-0 left-36 [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-black text-[56px] text-center tracking-[-1.12px] leading-[72px] whitespace-nowrap [direction:rtl]">
                    اشترك بخطتك المفضلة
                  </p>

                  <p className="absolute w-[1115px] top-[61px] left-0 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-black text-[22px] text-center tracking-[0] leading-9 [direction:rtl]">
                    نوفر باقات شهرية متنوعة تناسب احتياجاتك، من الباقة الأساسية إلى الباقة المميزة.
                  </p>
                </div>
              </div>

              <div className="top-[3457px] inline-flex flex-col items-start gap-[150px] absolute left-[403px]">
                <div className="relative w-[1119px] h-[133px] mr-[-4.00px]">
                  <div className="absolute top-0 left-[400px] [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-black text-[56px] text-center tracking-[-1.12px] leading-[72px] whitespace-nowrap [direction:rtl]">
                    انضم كمقهى
                  </div>

                  <p className="absolute w-[1115px] top-[61px] left-0 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-black text-[22px] text-center tracking-[0] leading-9 [direction:rtl]">
                    كن جزءاً من شبكة كوبك واستفد من زيادة العملاء والمبيعات مع نظام دفع مبسط وموثوق.
                  </p>
                </div>
              </div>

              <div className="absolute w-[1557px] h-[1135px] top-[6083px] left-[182px] rotate-180">
                <div className="absolute w-[265px] h-[72px] top-[1063px] left-[655px]">
                  <div className="absolute top-0 left-0 -rotate-180 [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-black text-[56px] text-center tracking-[-1.12px] leading-[72px] whitespace-nowrap [direction:rtl]">
                    أسئلة شائعة
                  </div>
                </div>

                <div className="absolute w-[1559px] h-[149px] top-[858px] left-0">
                  <div className="absolute w-[396px] top-[53px] left-[22px] -rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-black text-4xl tracking-[0] leading-[46px] [direction:rtl]">
                    ما هو كوبك؟
                  </div>

                  <img
                    className="absolute w-[1557px] h-0.5 top-[149px] left-0 -rotate-180"
                    alt="Line"
                    src="https://c.animaapp.com/z9aFHItQ/img/line-27-11.png"
                  />

                  <img
                    className="absolute w-[1557px] h-0.5 top-0 left-0 -rotate-180"
                    alt="Line"
                    src="https://c.animaapp.com/z9aFHItQ/img/line-27-11.png"
                  />
                </div>

                <div className="absolute w-[1559px] h-[99px] top-[708px] left-0">
                  <div className="absolute top-[53px] left-[22px] -rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-black text-4xl tracking-[0] leading-[46px] whitespace-nowrap [direction:rtl]">
                    كيف أشترك في كوبك؟
                  </div>

                  <img
                    className="absolute w-[1557px] h-0.5 top-0 left-0 -rotate-180"
                    alt="Line"
                    src="https://c.animaapp.com/z9aFHItQ/img/line-27-11.png"
                  />
                </div>

                <div className="absolute w-[1559px] h-[99px] top-[558px] left-0">
                  <div className="absolute top-[53px] left-[22px] -rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-black text-4xl tracking-[0] leading-[46px] whitespace-nowrap [direction:rtl]">
                    كم تخفيض كوبك؟
                  </div>

                  <img
                    className="absolute w-[1557px] h-0.5 top-0 left-0 -rotate-180"
                    alt="Line"
                    src="https://c.animaapp.com/z9aFHItQ/img/line-27-11.png"
                  />
                </div>

                <div className="absolute w-[1559px] h-[99px] top-[408px] left-0">
                  <div className="absolute top-[53px] left-[22px] -rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-black text-4xl tracking-[0] leading-[46px] whitespace-nowrap [direction:rtl]">
                    ما هي باقات كوبك؟
                  </div>

                  <img
                    className="absolute w-[1557px] h-0.5 top-0 left-0 -rotate-180"
                    alt="Line"
                    src="https://c.animaapp.com/z9aFHItQ/img/line-27-11.png"
                  />
                </div>

                <div className="absolute w-[1559px] h-[97px] top-0 left-0">
                  <p className="absolute top-[51px] left-[22px] -rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-black text-4xl tracking-[0] leading-[46px] whitespace-nowrap [direction:rtl]">
                    كيف يمكن إلغاء الاشتراك في كوبك؟
                  </p>

                  <img
                    className="absolute w-[1557px] h-0.5 top-0 left-0 -rotate-180"
                    alt="Line"
                    src="https://c.animaapp.com/z9aFHItQ/img/line-27-11.png"
                  />
                </div>

                <div className="absolute w-[1561px] h-[205px] top-[150px] left-0">
                  <p className="absolute top-[159px] left-[22px] -rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-black text-4xl tracking-[0] leading-[46px] whitespace-nowrap [direction:rtl]">
                    ما هي المقاهي المشاركة في كوبك؟
                  </p>

                  <p className="absolute w-[1050px] top-[53px] left-[22px] -rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-[#786f77] text-[22px] tracking-[0] leading-9 [direction:rtl]">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                    الحروف التى يولدها التطبيق.
                  </p>

                  <img
                    className="absolute w-[1557px] h-0.5 top-0 left-0 -rotate-180"
                    alt="Line"
                    src="https://c.animaapp.com/z9aFHItQ/img/line-27-11.png"
                  />
                </div>
              </div>

              <div className="absolute w-[1922px] h-[665px] top-[7800px] left-0">
                <footer className="absolute w-[1922px] h-[665px] top-0 left-0 bg-transparent">
                  <div className="relative w-[1920px] h-[665px] bg-[#2f478a]">
                    <p className="absolute top-[601px] left-[822px] rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal] [direction:rtl]">
                      © 2025 كوبك - جميع الحقوق محفوظة
                    </p>

                    <div className="inline-flex items-start justify-center gap-[180px] absolute top-[234px] left-[250px] rotate-180">
                      <div className="inline-flex items-start justify-center gap-32 relative flex-[0_0_auto]">
                        <div className="flex flex-col w-[148px] items-end gap-8 relative rotate-180">
                          <div className="relative self-stretch rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white leading-9 text-2xl tracking-[0] [direction:rtl]">
                            الرقم الضريبي
                          </div>

                          <div className="gap-6 flex flex-col items-end relative self-stretch w-full flex-[0_0_auto] rotate-180">
                            <div className="w-fit mt-[-1.00px] ml-[-7.00px] text-right relative [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                              301353063900003
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col w-[148px] items-end gap-8 relative rotate-180">
                          <div className="relative self-stretch rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white leading-9 text-2xl tracking-[0] [direction:rtl]">
                            تواصل معنا
                          </div>

                          <div className="gap-6 flex flex-col items-end relative self-stretch w-full flex-[0_0_auto] rotate-180">
                            <div className="relative self-stretch mt-[-1.00px] rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-[#e8e8e8] text-lg text-right tracking-[0] leading-[25px]">
                              +966 5555 5555
                              <br />
                              kobek@kobek.sa
                            </div>
                          </div>

                          <img
                            className="relative flex-[0_0_auto] -rotate-180"
                            alt="Frame"
                            src="https://c.animaapp.com/z9aFHItQ/img/frame-1618873020-1@2x.png"
                          />
                        </div>

                        <div className="flex flex-col w-[148px] items-end gap-8 relative rotate-180">
                          <div className="relative self-stretch rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white leading-9 text-2xl tracking-[0] [direction:rtl]">
                            روابط مهمة
                          </div>

                          <div className="gap-6 flex flex-col items-end relative self-stretch w-full flex-[0_0_auto] rotate-180">
                            <div className="self-stretch [direction:rtl] relative [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                              شروط الاستخدام
                            </div>

                            <div className="self-stretch mt-[-1.00px] [direction:rtl] relative [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                              سياسة الخصوصية
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col w-[148px] items-end gap-8 relative rotate-180">
                          <div className="relative self-stretch rotate-180 [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white leading-9 text-2xl tracking-[0] [direction:rtl]">
                            كوبك
                          </div>

                          <div className="gap-6 flex flex-col items-end relative self-stretch w-full flex-[0_0_auto] rotate-180">
                            <div className="self-stretch [direction:rtl] relative [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                              المزايا
                            </div>

                            <div className="self-stretch [direction:rtl] relative [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                              الاشتراك
                            </div>

                            <div className="self-stretch [direction:rtl] relative [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                              الانضمام كمقهى
                            </div>

                            <div className="self-stretch mt-[-1.00px] [direction:rtl] relative [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                              أسئلة شائعة
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col w-[290px] items-end gap-14 relative">
                        <div className="flex flex-col items-end gap-[25px] relative self-stretch w-full flex-[0_0_auto]">
                          <img
                            className="relative w-[164px] h-[58px]"
                            alt="Kobek full white"
                            src="https://c.animaapp.com/z9aFHItQ/img/kobek-full---white-1-2-3@2x.png"
                          />

                          <p className="relative self-stretch [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-[#e4e4e4] text-lg tracking-[0.45px] leading-[30px] [direction:rtl]">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.
                          </p>
                        </div>

                        <div className="relative w-[214px] h-[72px] mr-[-2.00px]">
                          <button 
                            className="relative w-[212px] h-[72px] bg-white rounded-[50px] cursor-pointer hover:opacity-90 transition-opacity border-none outline-none"
                            onClick={() => {}}
                          >
                            <div className="absolute top-[26px] left-[54px] [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-[#2f478a] text-2xl text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                              اشترك الآن
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>

              <img
                className="absolute w-[1150px] h-[71px] top-[1135px] left-[369px]"
                alt="Frame"
                src="https://c.animaapp.com/z9aFHItQ/img/frame-1618872999-1.png"
              />

              <div className="flex flex-col w-[490px] h-[333px] items-center justify-center gap-3.5 p-7 absolute top-[1687px] left-[1233px] bg-white rounded-3xl shadow-[0px_4px_40px_#0000000d]">
                <div className="flex flex-col w-[446px] items-center gap-3.5 relative flex-[0_0_auto]">
                  <div className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-[#e3b505] rounded-[50px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-[#2f478a] text-2xl text-center tracking-[0] leading-[normal] [direction:rtl]">
                      1
                    </div>
                  </div>

                  <p className="relative w-fit [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-[#222222] text-[22px] text-center tracking-[0] leading-[normal] [direction:rtl]">
                    استفد من خصم ثابت مع كل كوب قهوة
                  </p>
                </div>
              </div>

              <div className="flex flex-col w-[490px] h-[333px] items-center justify-center gap-3.5 p-7 absolute top-[2070px] left-[1233px] bg-white rounded-3xl shadow-[0px_4px_40px_#0000000d]">
                <div className="flex flex-col w-[446px] items-center gap-3.5 relative flex-[0_0_auto]">
                  <div className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-[#e3b505] rounded-[50px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-[#2f478a] text-2xl text-center tracking-[0] leading-[normal] [direction:rtl]">
                      2
                    </div>
                  </div>

                  <p className="relative w-fit [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-[#222222] text-[22px] text-center tracking-[0] leading-[normal] [direction:rtl]">
                    بطاقة رقمية تضاف لمحفظتك الإلكترونية
                  </p>
                </div>
              </div>

              <div className="flex flex-col w-[490px] h-[333px] items-center justify-center gap-3.5 p-7 absolute top-[2453px] left-[1233px] bg-white rounded-3xl shadow-[0px_4px_40px_#0000000d]">
                <div className="flex flex-col w-[446px] items-center gap-3.5 relative flex-[0_0_auto]">
                  <div className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-[#e3b505] rounded-[50px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-[#2f478a] text-2xl text-center tracking-[0] leading-[normal] [direction:rtl]">
                      3
                    </div>
                  </div>

                  <p className="relative w-fit [font-family:'SF_Arabic-Semibold',Helvetica] font-normal text-[#222222] text-[22px] text-center tracking-[0] leading-[normal] [direction:rtl]">
                    شبكة مقاهي مميزة في مدينتك
                  </p>
                </div>
              </div>
            </div>

            <button 
              className="top-[802px] left-[1580px] flex w-40 h-[60px] items-center justify-center gap-2.5 px-8 py-4 absolute cursor-pointer hover:opacity-90 transition-opacity bg-transparent border-none outline-none"
              onClick={() => {}}
            >
              <div className="bg-[#e3b505] absolute w-40 h-[60px] top-0 left-0 rounded-[50px]" />

              <div className="relative w-fit [font-family:'SF_Arabic-Bold',Helvetica] font-bold text-[#2f478a] text-2xl text-left tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                ابدأ الآن
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};