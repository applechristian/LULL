import clsx from "clsx";
import svgPaths from "./svg-mpulvj5hjk";
import imgProfile from "../assets/8e73ef03f06c6bd9c6d45daa5425dcb089c27f74.png";

function ContainerBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">{children}</div>
    </div>
  );
}
type OverlayBackgroundImageProps = {
  additionalClassNames?: string;
};

function OverlayBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<OverlayBackgroundImageProps>) {
  return (
    <div className={clsx("relative rounded-[12px] shrink-0 size-[48px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

function BackgroundBorderBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#0f1420] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function ContainerBackgroundImage() {
  return (
    <div className="h-[11.156px] relative shrink-0 w-[6.598px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.59766 11.1562">
        <g id="Container">
          <path d={svgPaths.p1fe2da80} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}
type ContainerBackgroundImageAndText1Props = {
  text: string;
};

function ContainerBackgroundImageAndText1({ text }: ContainerBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px] whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({ text }: ContainerBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0">
      <div className="flex flex-col font-['Liberation_Serif:Regular',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[24px] text-center w-[8.77px]">
        <p className="leading-[32px] whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}

export default function SleepDashboard() {
  return (
    <div className="bg-[#05070a] content-stretch flex items-start justify-center relative size-full" data-name="Sleep Dashboard">
      <div className="bg-[#05070a] content-stretch flex flex-[1_0_0] flex-col isolate items-start max-w-[430px] min-h-[884px] min-w-px overflow-clip relative self-stretch" data-name="Background">
        <div className="h-[48px] relative shrink-0 w-full z-[4]" data-name="Container">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pt-[16px] px-[32px] relative size-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-[27.64px]">
                  <p className="leading-[20px] whitespace-pre-wrap">9:41</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
                <div className="h-[8.016px] relative shrink-0 w-[7.5px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 8.01562">
                    <g id="Container">
                      <path d={svgPaths.p3eb59a00} fill="var(--fill-0, #F1F5F9)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="h-[7.57px] relative shrink-0 w-[10.367px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3667 7.57031">
                    <g id="Container">
                      <path d={svgPaths.p3ff75100} fill="var(--fill-0, #F1F5F9)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="h-[9.984px] relative shrink-0 w-[5.016px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.01562 9.98438">
                    <g id="Container">
                      <path d={svgPaths.p10357e00} fill="var(--fill-0, #F1F5F9)" id="Icon" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full z-[3]" data-name="Main">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start pb-[128px] pt-[16px] px-[24px] relative size-full">
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
                    <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[30px] tracking-[-0.75px] w-[268.36px]">
                      <p className="leading-[36px] whitespace-pre-wrap">Good Morning, Alex</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[rgba(56,189,248,0.1)] content-stretch flex items-center px-[9px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
                      <div aria-hidden="true" className="absolute border border-[rgba(56,189,248,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                      <div className="h-[13.333px] relative shrink-0 w-[17.333px]" data-name="Margin">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3333 13.3333">
                          <g id="Margin">
                            <path d={svgPaths.pbb12980} fill="var(--fill-0, #38BDF8)" id="Icon" />
                          </g>
                        </svg>
                      </div>
                      <div className="relative shrink-0" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
                          <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#38bdf8] text-[12px] w-[116.7px]">
                            <p className="leading-[16px] whitespace-pre-wrap">Sleep Score: 88/100</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Container">
                  <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_0px_2px_rgba(129,140,248,0.3)] size-[48px] top-0" data-name="Overlay+Shadow" />
                  <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px] w-full" data-name="Profile">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfile} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#818cf8] relative rounded-[16px] shrink-0 to-[#6366f1] w-full" data-name="Button">
                <div className="flex flex-row justify-center size-full">
                  <div className="content-stretch flex items-start justify-center p-[2px] relative w-full">
                    <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_0px_20px_-5px_rgba(99,102,241,0.2)]" data-name="Button:shadow" />
                    <div className="bg-[#0f1420] flex-[1_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Background">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center justify-between px-[24px] py-[20px] relative w-full">
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-white w-[191.05px]">
                              <p className="leading-[28px] whitespace-pre-wrap">{`Log Last Night's Sleep`}</p>
                            </div>
                            <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
                              <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] w-[153.48px]">
                                <p className="leading-[16px] whitespace-pre-wrap">How did you feel waking up?</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[7.99px] items-start relative shrink-0" data-name="Container">
                            <ContainerBackgroundImageAndText text="😴" />
                            <ContainerBackgroundImageAndText text="😊" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
                    <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] w-[151.17px]">
                      <p className="leading-[28px] whitespace-pre-wrap">{`Today's Schedule`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#38bdf8] text-[12px] w-[43.53px]">
                      <p className="leading-[16px] whitespace-pre-wrap">View All</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
                  <div className="bg-[#0f1420] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] self-stretch" data-name="Background+Border">
                    <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <div className="absolute bg-[rgba(99,102,241,0.1)] content-stretch flex items-center justify-center left-[17px] rounded-[8px] size-[32px] top-[17px]" data-name="Overlay">
                      <div className="h-[11.623px] relative shrink-0 w-[10.418px]" data-name="Container">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4179 11.6226">
                          <g id="Container">
                            <path d={svgPaths.p29e59cc0} fill="var(--fill-0, #818CF8)" id="Icon" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex flex-col items-start left-[17px] right-[17px] top-[61px]" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] tracking-[0.5px] uppercase w-[76.91px]">
                        <p className="leading-[15px] whitespace-pre-wrap">Bedtime Goal</p>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex flex-col items-start left-[17px] right-[17px] top-[80px]" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white w-[87.44px]">
                        <p className="leading-[28px] whitespace-pre-wrap">10:30 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#0f1420] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] self-stretch" data-name="Background+Border">
                    <div className="overflow-clip relative rounded-[inherit] size-full">
                      <div className="absolute bg-[rgba(245,158,11,0.1)] content-stretch flex items-center justify-center left-[17px] rounded-[8px] size-[32px] top-[17px]" data-name="Overlay">
                        <div className="h-[11.375px] relative shrink-0 w-[11.498px]" data-name="Container">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4983 11.375">
                            <g id="Container">
                              <path d={svgPaths.p19efb600} fill="var(--fill-0, #FBBF24)" id="Icon" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col items-start left-[17px] right-[17px] top-[61px]" data-name="Container">
                        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] tracking-[0.5px] uppercase w-[67.31px]">
                          <p className="leading-[15px] whitespace-pre-wrap">Next Nudge</p>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col items-start left-[17px] right-[17px] top-[80px]" data-name="Container">
                        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white w-[77.05px]">
                          <p className="leading-[28px] whitespace-pre-wrap">9:45 PM</p>
                        </div>
                      </div>
                      <div className="absolute bg-[rgba(245,158,11,0.05)] blur-[8px] bottom-[-7px] right-[-7px] size-[32px]" data-name="Overlay+Blur" />
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] w-full">
                    <p className="leading-[28px] whitespace-pre-wrap">Quick Shortcuts</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
                  <BackgroundBorderBackgroundImage>
                    <OverlayBackgroundImage additionalClassNames="bg-[rgba(129,140,248,0.1)]">
                      <div className="h-[20px] relative shrink-0 w-[21.2px]" data-name="Container">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2 20">
                          <g id="Container">
                            <path d={svgPaths.p21277580} fill="var(--fill-0, #818CF8)" id="Icon" />
                          </g>
                        </svg>
                      </div>
                    </OverlayBackgroundImage>
                    <ContainerBackgroundImage1>
                      <HeadingBackgroundImageAndText text="Nudge Settings" />
                      <ContainerBackgroundImageAndText1 text="Customize your nightly alerts" />
                    </ContainerBackgroundImage1>
                    <ContainerBackgroundImage />
                  </BackgroundBorderBackgroundImage>
                  <BackgroundBorderBackgroundImage>
                    <OverlayBackgroundImage additionalClassNames="bg-[rgba(56,189,248,0.1)]">
                      <div className="h-[21px] relative shrink-0 w-[20px]" data-name="Container">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
                          <g id="Container">
                            <path d={svgPaths.p15e38e00} fill="var(--fill-0, #38BDF8)" id="Icon" />
                          </g>
                        </svg>
                      </div>
                    </OverlayBackgroundImage>
                    <ContainerBackgroundImage1>
                      <HeadingBackgroundImageAndText text="Sleep Insights" />
                      <ContainerBackgroundImageAndText1 text="Analyze your weekly patterns" />
                    </ContainerBackgroundImage1>
                    <ContainerBackgroundImage />
                  </BackgroundBorderBackgroundImage>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[rgba(129,140,248,0.1)] blur-[50px] right-[-50px] rounded-[9999px] size-[256px] top-[-100px] z-[2]" data-name="Overlay+Blur" />
        <div className="absolute h-[400px] left-0 right-0 top-0 z-[1]" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 400\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(27.933 0 0 27.933 195 200)\\'><stop stop-color=\\'rgba(99,102,241,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(99,102,241,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      </div>
      <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 max-w-[430px] right-0" data-name="Container">
        <div className="backdrop-blur-[12px] bg-[rgba(15,20,32,0.9)] relative shrink-0 w-full" data-name="Nav">
          <div aria-hidden="true" className="absolute border-[#1e293b] border-solid border-t inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pb-[32px] pl-[24px] pr-[24.02px] pt-[13px] relative w-full">
              <ContainerBackgroundImage2>
                <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                    <g id="Container">
                      <path d={svgPaths.p1820480} fill="var(--fill-0, #38BDF8)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#38bdf8] text-[10px] w-[28.33px]">
                    <p className="leading-[15px] whitespace-pre-wrap">Home</p>
                  </div>
                </div>
                <div className="absolute bg-[#38bdf8] bottom-[-4px] left-[12.16px] rounded-[9999px] size-[4px]" data-name="Background" />
              </ContainerBackgroundImage2>
              <ContainerBackgroundImage2>
                <div className="relative shrink-0 size-[20px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="Container">
                      <path d={svgPaths.p256e1340} fill="var(--fill-0, #64748B)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] w-[38.37px]">
                    <p className="leading-[15px] whitespace-pre-wrap">Routine</p>
                  </div>
                </div>
              </ContainerBackgroundImage2>
              <ContainerBackgroundImage2>
                <div className="h-[16px] relative shrink-0 w-[18px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
                    <g id="Container">
                      <path d={svgPaths.p1b961100} fill="var(--fill-0, #64748B)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] w-[17.68px]">
                    <p className="leading-[15px] whitespace-pre-wrap">Log</p>
                  </div>
                </div>
              </ContainerBackgroundImage2>
              <ContainerBackgroundImage2>
                <div className="relative shrink-0 size-[18px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g id="Container">
                      <path d={svgPaths.p22876fc0} fill="var(--fill-0, #64748B)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] w-[35.09px]">
                    <p className="leading-[15px] whitespace-pre-wrap">History</p>
                  </div>
                </div>
              </ContainerBackgroundImage2>
              <ContainerBackgroundImage2>
                <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
                    <g id="Container">
                      <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #64748B)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] w-[41.29px]">
                    <p className="leading-[15px] whitespace-pre-wrap">Settings</p>
                  </div>
                </div>
              </ContainerBackgroundImage2>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bg-[#1e293b] bottom-[8px] h-[6px] left-1/2 rounded-[9999px] w-[128px]" data-name="Background" />
      </div>
    </div>
  );
}