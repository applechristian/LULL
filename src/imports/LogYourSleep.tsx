import svgPaths from "./svg-9ybsdinr8k";

function Button({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative">{children}</div>
    </div>
  );
}

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[10.5px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">{children}</g>
      </svg>
    </div>
  );
}
type BackgroundTextProps = {
  text: string;
};

function BackgroundText({ text }: BackgroundTextProps) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-saturation pointer-events-none" />
      <div className="flex flex-col font-['Liberation_Sans:Regular',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[30px] text-center w-[10.97px]">
        <p className="leading-[36px] whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}

export default function LogYourSleep() {
  return (
    <div className="bg-[#101622] content-stretch flex flex-col items-start relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Log Your Sleep">
      <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between pt-[16px] px-[32px] relative size-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[12px] w-[24.14px]">
                <p className="leading-[16px] whitespace-pre-wrap">9:41</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
              <div className="h-[9.352px] relative shrink-0 w-[8.75px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 9.35156">
                  <g id="Container">
                    <path d={svgPaths.p1e40b640} fill="var(--fill-0, #F1F5F9)" id="Icon" />
                  </g>
                </svg>
              </div>
              <div className="h-[9.078px] relative shrink-0 w-[12.852px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8516 9.07812">
                  <g id="Container">
                    <path d={svgPaths.p16155f80} fill="var(--fill-0, #F1F5F9)" id="Icon" />
                  </g>
                </svg>
              </div>
              <div className="h-[11.648px] relative shrink-0 w-[5.852px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.85156 11.6484">
                  <g id="Container">
                    <path d={svgPaths.p33e4e300} fill="var(--fill-0, #F1F5F9)" id="Icon" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
              <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#135bec] text-[16px] text-center w-[52.33px]">
                <p className="leading-[24px] whitespace-pre-wrap">Cancel</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] tracking-[-0.45px] w-[80.75px]">
                <p className="leading-[28px] whitespace-pre-wrap">Log Sleep</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#135bec] text-[16px] text-center w-[37.58px]">
                <p className="leading-[24px] whitespace-pre-wrap">Save</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Main">
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-[17px] pt-[16px] px-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-full">
                <p className="leading-[20px] whitespace-pre-wrap">FOR LAST NIGHT</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[24px] w-full">
                <p className="leading-[32px] whitespace-pre-wrap">Thursday, Oct 24</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
            <LabelText text="How do you feel after waking up?" />
            <div className="bg-[rgba(19,91,236,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border">
              <div aria-hidden="true" className="absolute border border-[rgba(19,91,236,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between pl-[17px] pr-[17.02px] py-[17px] relative w-full">
                  <Button>
                    <BackgroundText text="😫" />
                    <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] text-center w-[27.17px]">
                      <p className="leading-[15px] whitespace-pre-wrap">Awful</p>
                    </div>
                  </Button>
                  <Button>
                    <BackgroundText text="😕" />
                    <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] text-center w-[22.66px]">
                      <p className="leading-[15px] whitespace-pre-wrap">Poor</p>
                    </div>
                  </Button>
                  <div className="h-[59px] relative shrink-0 w-[23.94px]" data-name="Button:margin">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="absolute bg-[rgba(19,91,236,0.2)] content-stretch flex flex-col gap-[6.2px] items-center left-[-8px] pb-[8px] pt-[6.2px] px-[8px] rounded-[8px] top-[-8px]" data-name="Button">
                        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_0px_0px_2px_#135bec]" data-name="Button:shadow" />
                        <div className="content-stretch flex flex-col items-center pl-[5.94px] pr-[5.93px] relative shrink-0 w-[23.94px]" data-name="Container:css-transform">
                          <div className="flex h-[39.6px] items-center justify-center relative shrink-0 w-[12.06px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
                            <div className="flex-none scale-x-[110.00000000000001%] scale-y-[110.00000000000001%]">
                              <div className="content-stretch flex flex-col items-center relative" data-name="Container">
                                <div className="flex flex-col font-['Liberation_Sans:Regular',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[30px] text-center w-[10.964px]">
                                  <p className="leading-[36px] whitespace-pre-wrap">😐</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#135bec] text-[10px] text-center w-[23.94px]">
                          <p className="leading-[15px] whitespace-pre-wrap">Okay</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button>
                    <BackgroundText text="🙂" />
                    <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] text-center w-[25.86px]">
                      <p className="leading-[15px] whitespace-pre-wrap">Good</p>
                    </div>
                  </Button>
                  <Button>
                    <BackgroundText text="🤩" />
                    <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] text-center w-[27.23px]">
                      <p className="leading-[15px] whitespace-pre-wrap">Great</p>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start pt-[8px] relative shrink-0 w-full" data-name="Section">
            <LabelText text="What influenced your sleep?" />
            <div className="h-[142px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute bg-[#0f172a] content-stretch flex gap-[8px] items-center left-0 pb-[10px] pt-[9.5px] px-[17px] rounded-[9999px] top-0" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                <div className="h-[10.5px] relative shrink-0 w-[9.359px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.35938 10.5">
                    <g id="Container">
                      <path d={svgPaths.p39f5ec80} fill="var(--fill-0, #F87171)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[14px] text-center w-[42.8px]">
                  <p className="leading-[20px] whitespace-pre-wrap">Stress</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(19,91,236,0.2)] content-stretch flex gap-[8px] items-center left-[110.8px] px-[18px] py-[10px] rounded-[9999px] top-0" data-name="Button">
                <div aria-hidden="true" className="absolute border-2 border-[#135bec] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                <Container>
                  <path d={svgPaths.p6efe200} fill="var(--fill-0, #135BEC)" id="Icon" />
                </Container>
                <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] text-center w-[56.61px]">
                  <p className="leading-[20px] whitespace-pre-wrap">Caffeine</p>
                </div>
              </div>
              <div className="absolute bg-[#0f172a] content-stretch flex gap-[8px] items-center left-0 pb-[10px] pt-[9.5px] px-[17px] rounded-[9999px] top-[52px]" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                <div className="h-[9.352px] relative shrink-0 w-[14px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 9.35156">
                    <g id="Container">
                      <path d={svgPaths.pc363c80} fill="var(--fill-0, #60A5FA)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[14px] text-center w-[81.55px]">
                  <p className="leading-[20px] whitespace-pre-wrap">Screen Time</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(19,91,236,0.2)] content-stretch flex gap-[8px] items-center left-[149.55px] px-[18px] py-[10px] rounded-[9999px] top-[52px]" data-name="Button">
                <div aria-hidden="true" className="absolute border-2 border-[#135bec] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                <Container>
                  <path d={svgPaths.p12c87880} fill="var(--fill-0, #135BEC)" id="Icon" />
                </Container>
                <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] text-center w-[78.28px]">
                  <p className="leading-[20px] whitespace-pre-wrap">Quiet Room</p>
                </div>
              </div>
              <div className="absolute bg-[#0f172a] content-stretch flex gap-[8px] items-center left-0 px-[17px] py-[9px] rounded-[9999px] top-[104px]" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                <div className="h-[11.648px] relative shrink-0 w-[10.5px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6484">
                    <g id="Container">
                      <path d={svgPaths.p14a6d9c0} fill="var(--fill-0, #FB923C)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[14px] text-center w-[62.97px]">
                  <p className="leading-[20px] whitespace-pre-wrap">Late Meal</p>
                </div>
              </div>
              <div className="absolute bg-[#0f172a] content-stretch flex gap-[8px] items-center left-[130.97px] px-[17px] py-[9px] rounded-[9999px] top-[104px]" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                <div className="relative shrink-0 size-[11.648px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6484 11.6484">
                    <g id="Container">
                      <path d={svgPaths.p8ab7c00} fill="var(--fill-0, #4ADE80)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[14px] text-center w-[55.47px]">
                  <p className="leading-[20px] whitespace-pre-wrap">Exercise</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start pt-[8px] relative shrink-0 w-full" data-name="Section">
            <LabelText text="Personal Reflection" />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
              <div className="bg-[#0f172a] relative rounded-[12px] shrink-0 w-full" data-name="Textarea">
                <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-start justify-center pb-[57px] pt-[17px] px-[17px] relative w-full">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-full whitespace-pre-wrap">
                          <p className="mb-0">{`Why did you feel this way? Any specific dreams `}</p>
                          <p>or events?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[12px]" />
              </div>
              <div className="absolute bottom-[12px] h-[11.25px] right-[12px] w-[13.605px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6055 11.25">
                  <g id="Container">
                    <path d={svgPaths.pcb8e900} fill="var(--fill-0, #94A3B8)" id="Icon" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(19,91,236,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border">
            <div aria-hidden="true" className="absolute border border-[rgba(19,91,236,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[16px] items-center pb-[17px] pt-[25px] px-[17px] relative w-full">
                <div className="bg-[#135bec] relative rounded-[8px] shrink-0 size-[48px]" data-name="Background">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                    <div className="relative shrink-0 size-[22.031px]" data-name="Container">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0312 22.0312">
                        <g id="Container">
                          <path d={svgPaths.p26ed17a0} fill="var(--fill-0, white)" id="Icon" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.625px] relative">
                    <div className="content-stretch flex flex-col items-start mb-[-0.625px] relative shrink-0 w-full" data-name="Heading 4">
                      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#135bec] text-[14px] w-[132.28px]">
                        <p className="leading-[20px] whitespace-pre-wrap">Consistency Nudge</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start mb-[-0.625px] relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[28px] justify-center leading-[13.75px] relative shrink-0 text-[#94a3b8] text-[11px] w-[219.41px] whitespace-pre-wrap">
                        <p className="mb-0">{`You've logged 4 days in a row! Keeping track`}</p>
                        <p>helps identify your best sleep patterns.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[8px] bg-[rgba(16,22,34,0.8)] bottom-0 content-stretch flex flex-col items-center left-0 pt-[17px] right-0" data-name="Overlay+HorizontalBorder+OverlayBlur">
        <div aria-hidden="true" className="absolute border-[#1e293b] border-solid border-t inset-0 pointer-events-none" />
        <div className="bg-[#135bec] relative rounded-[12px] shrink-0 w-[342px]" data-name="Button">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center py-[14px] relative w-full">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(19,91,236,0.3),0px_4px_6px_-4px_rgba(19,91,236,0.3)]" data-name="Button:shadow" />
            <div className="relative shrink-0 size-[14.977px]" data-name="Container">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9766 14.9766">
                <g id="Container">
                  <path d={svgPaths.pa8fa780} fill="var(--fill-0, white)" id="Icon" />
                </g>
              </svg>
            </div>
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[122.89px]">
              <p className="leading-[20px] whitespace-pre-wrap">Log Sleep Session</p>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Nav">
          <div className="flex flex-row items-center size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[42.4px] items-center pb-[32px] pl-[29.2px] pr-[29.26px] pt-[12px] relative w-full">
              <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
                <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                    <g id="Container">
                      <path d={svgPaths.p12a32500} fill="var(--fill-0, #94A3B8)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[27.48px]">
                    <p className="leading-[15px] whitespace-pre-wrap">Home</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
                <div className="h-[22.05px] relative shrink-0 w-[22.025px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.025 22.05">
                    <g id="Container">
                      <path d={svgPaths.p2b88e400} fill="var(--fill-0, #94A3B8)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[36.97px]">
                    <p className="leading-[15px] whitespace-pre-wrap">Routine</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
                <div className="relative shrink-0 size-[20px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="Container">
                      <path d={svgPaths.p35b5ef0} fill="var(--fill-0, #135BEC)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#135bec] text-[10px] w-[17.69px]">
                    <p className="leading-[15px] whitespace-pre-wrap">Log</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
                <div className="relative shrink-0 size-[18px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g id="Container">
                      <path d={svgPaths.p22876fc0} fill="var(--fill-0, #94A3B8)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[33.69px]">
                    <p className="leading-[15px] whitespace-pre-wrap">History</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
                <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
                    <g id="Container">
                      <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #94A3B8)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[39.69px]">
                    <p className="leading-[15px] whitespace-pre-wrap">Settings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bg-[#1e293b] bottom-[6.05px] h-[4px] left-1/2 rounded-[9999px] w-[128px]" data-name="Background" />
      </div>
    </div>
  );
}