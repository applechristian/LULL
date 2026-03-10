import svgPaths from "./svg-00jsdi7vlu";

function ButtonBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(22,30,49,0.5)] relative rounded-[9999px] shrink-0 size-[40px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

function SectionBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[32px] px-[20px] relative w-full">{children}</div>
    </div>
  );
}

function BackgroundBorderBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#161e31] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] self-stretch">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative size-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16.667px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">{children}</g>
      </svg>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[2px] uppercase w-full">
          <p className="leading-[15px] whitespace-pre-wrap">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#0a0f1d] relative size-full" data-name="Body">
      <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[96.25px] right-0 top-[73px]" data-name="Main" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 936.86\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(96.05 0 0 95.678 195 0)\\'><stop stop-color=\\'rgba(59,130,246,0.12)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(59,130,246,0)\\' offset=\\'0.75\\'/></radialGradient></defs></svg>')" }}>
        <div className="h-[282px] relative shrink-0 w-full" data-name="Section">
          <div className="absolute content-stretch flex flex-col items-start left-[101.59px] pb-[4px] top-[182px]" data-name="Heading 2:margin">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 2">
              <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[30px] text-center tracking-[-0.75px] w-[186.8px]">
                <p className="leading-[36px] whitespace-pre-wrap">Feeling Great</p>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] left-1/2 not-italic text-[14px] text-[rgba(147,197,253,0.8)] text-center top-[232px] tracking-[1.4px] uppercase w-[251.06px]">
            <p className="leading-[20px] whitespace-pre-wrap">Monday, Oct 24 • Consistent</p>
          </div>
          <div className="absolute content-stretch flex flex-col items-start left-[137.3px] pb-[24px] top-[32px]" data-name="Margin">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
              <div className="absolute flex inset-[-31.5px_-28.85px] items-center justify-center">
                <div className="flex-none h-[189px] w-[173.09px]">
                  <div className="bg-[rgba(59,130,246,0.2)] blur-[32px] rounded-[9999px] size-full" data-name="Overlay+Blur" />
                </div>
              </div>
              <div className="backdrop-blur-[6px] bg-[rgba(22,30,49,0.6)] content-stretch flex flex-col items-center p-[33px] relative rounded-[40px] shrink-0" data-name="Overlay+Border+OverlayBlur">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
                <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
                <div className="flex flex-col font-['FreeSerif:Regular',sans-serif] h-[60px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[60px] text-center w-[49.39px]">
                  <p className="leading-[60px] whitespace-pre-wrap">✨</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Section">
          <div className="flex flex-row justify-center size-full">
            <div className="content-stretch flex gap-[16px] items-start justify-center px-[20px] relative w-full">
              <BackgroundBorderBackgroundImage>
                <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.33px_0] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
                <ContainerBackgroundImage1>
                  <ContainerBackgroundImage>
                    <path d={svgPaths.p39919e0} fill="var(--fill-0, #93C5FD)" id="Icon" />
                  </ContainerBackgroundImage>
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Container">
                    <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#93c5fd] text-[10px] tracking-[0.5px] uppercase w-[54.47px]">
                      <p className="leading-[15px] whitespace-pre-wrap">Duration</p>
                    </div>
                  </div>
                </ContainerBackgroundImage1>
                <ContainerBackgroundImage2>
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[24px] tracking-[-0.6px] w-full">
                    <p className="leading-[32px] whitespace-pre-wrap">7h 45m</p>
                  </div>
                </ContainerBackgroundImage2>
              </BackgroundBorderBackgroundImage>
              <BackgroundBorderBackgroundImage>
                <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.33px_0] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
                <ContainerBackgroundImage1>
                  <ContainerBackgroundImage>
                    <path d={svgPaths.p76f6d80} fill="var(--fill-0, #93C5FD)" id="Icon" />
                  </ContainerBackgroundImage>
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Container">
                    <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#93c5fd] text-[10px] tracking-[0.5px] uppercase w-[46.7px]">
                      <p className="leading-[15px] whitespace-pre-wrap">Window</p>
                    </div>
                  </div>
                </ContainerBackgroundImage1>
                <ContainerBackgroundImage2>
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] tracking-[-0.45px] w-full whitespace-pre-wrap">
                    <p className="mb-0">
                      <span className="leading-[28px]">{`11:00 PM `}</span>
                      <span className="font-['Manrope:Medium',sans-serif] font-medium leading-[28px] text-[#64748b]">to</span>
                    </p>
                    <p className="leading-[28px]">6:45 AM</p>
                  </div>
                </ContainerBackgroundImage2>
              </BackgroundBorderBackgroundImage>
            </div>
          </div>
        </div>
        <SectionBackgroundImage>
          <HeadingBackgroundImageAndText text="Sleep Factors" />
          <div className="h-[110px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute bg-[rgba(59,130,246,0.1)] bottom-[60px] content-stretch flex gap-[8px] items-center left-0 px-[17px] py-[11px] rounded-[9999px] top-0" data-name="Overlay+Border">
              <div aria-hidden="true" className="absolute border border-[rgba(59,130,246,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
              <div className="h-[14.869px] relative shrink-0 w-[14.85px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.85 14.8687">
                  <g id="Container">
                    <path d={svgPaths.p28a75aa0} fill="var(--fill-0, #3B82F6)" id="Icon" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#dbeafe] text-[12px] w-[66.72px]">
                <p className="leading-[16px] whitespace-pre-wrap">No Caffeine</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(59,130,246,0.1)] bottom-[60px] content-stretch flex gap-[8px] items-center left-[136.72px] px-[17px] py-[11px] rounded-[9999px] top-0" data-name="Overlay+Border">
              <div aria-hidden="true" className="absolute border border-[rgba(59,130,246,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
              <div className="relative shrink-0 size-[15px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <g id="Container">
                    <path d={svgPaths.p468a380} fill="var(--fill-0, #3B82F6)" id="Icon" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#dbeafe] text-[12px] w-[61.98px]">
                <p className="leading-[16px] whitespace-pre-wrap">Cold Room</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(59,130,246,0.1)] bottom-0 content-stretch flex gap-[8px] items-center left-0 px-[17px] py-[11px] rounded-[9999px] top-[60px]" data-name="Overlay+Border">
              <div aria-hidden="true" className="absolute border border-[rgba(59,130,246,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
              <div className="h-[14.625px] relative shrink-0 w-[16.5px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 14.625">
                  <g id="Container">
                    <path d={svgPaths.p29a327e0} fill="var(--fill-0, #3B82F6)" id="Icon" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#dbeafe] text-[12px] w-[46.84px]">
                <p className="leading-[16px] whitespace-pre-wrap">Reading</p>
              </div>
            </div>
            <div className="absolute bg-[rgba(59,130,246,0.1)] bottom-0 content-stretch flex gap-[8px] items-center left-[116.84px] px-[17px] py-[11px] rounded-[9999px] top-[60px]" data-name="Overlay+Border">
              <div aria-hidden="true" className="absolute border border-[rgba(59,130,246,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
              <div className="h-[15.9px] relative shrink-0 w-[15.975px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.975 15.9">
                  <g id="Container">
                    <path d={svgPaths.p824dd00} fill="var(--fill-0, #3B82F6)" id="Icon" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#dbeafe] text-[12px] w-[58.78px]">
                <p className="leading-[16px] whitespace-pre-wrap">No Screen</p>
              </div>
            </div>
          </div>
        </SectionBackgroundImage>
        <SectionBackgroundImage>
          <HeadingBackgroundImageAndText text="Daily Note" />
          <div className="bg-[#0f172a] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start pb-[25px] pt-[23.94px] px-[25px] relative w-full">
                <div className="absolute h-[48px] right-[-15px] top-[-15px] w-[68px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 48">
                    <g id="Container" opacity="0.03">
                      <path d={svgPaths.p3e7bd200} fill="var(--fill-0, #F1F5F9)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <ContainerBackgroundImage2>
                  <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[24.38px] relative shrink-0 text-[#cbd5e1] text-[15px] w-full whitespace-pre-wrap">
                    <p className="mb-0">{`"I felt very refreshed this morning. The`}</p>
                    <p className="mb-0">room temperature was perfect at 68°F.</p>
                    <p className="mb-0">Avoiding caffeine after 2 PM definitely</p>
                    <p className="mb-0">helped me fall asleep faster within 10</p>
                    <p className="mb-0">minutes of lying down. Looking forward to</p>
                    <p>{`keeping this streak!"`}</p>
                  </div>
                </ContainerBackgroundImage2>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_1px_rgba(0,0,0,0.05)]" />
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
        </SectionBackgroundImage>
      </div>
      <div className="absolute backdrop-blur-[20px] bg-[rgba(10,15,29,0.95)] border-[rgba(255,255,255,0.05)] border-solid border-t h-[86.5px] left-0 right-0 top-[1013.5px]" data-name="Nav">
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[24px] right-[280.5px] top-[calc(50%-10px)]" data-name="Link">
          <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
              <g id="Container">
                <path d={svgPaths.p2a946800} fill="var(--fill-0, #64748B)" id="Icon" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[9px] tracking-[0.9px] uppercase w-[33.83px]">
              <p className="leading-[13.5px] whitespace-pre-wrap">Today</p>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[195px] right-[109.5px] top-[calc(50%-10px)]" data-name="Link">
          <div className="relative shrink-0 size-[16px]" data-name="Container">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Container">
                <path d={svgPaths.p1b609e00} fill="var(--fill-0, #64748B)" id="Icon" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[9px] tracking-[0.9px] uppercase w-[49.09px]">
              <p className="leading-[13.5px] whitespace-pre-wrap">Insights</p>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[280.5px] right-[24px] top-[calc(50%-10px)]" data-name="Link">
          <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
              <g id="Container">
                <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #64748B)" id="Icon" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[9px] tracking-[0.9px] uppercase w-[51.34px]">
              <p className="leading-[13.5px] whitespace-pre-wrap">Settings</p>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[109.5px] right-[195px] top-[calc(50%-10px)]" data-name="Link">
          <div className="relative shrink-0 size-[18px]" data-name="Container">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g id="Container">
                <path d={svgPaths.p22876fc0} fill="var(--fill-0, #3B82F6)" id="Icon" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[9px] tracking-[0.9px] uppercase w-[44.77px]">
              <p className="leading-[13.5px] whitespace-pre-wrap">History</p>
            </div>
          </div>
          <div className="absolute bg-[#3b82f6] bottom-[-7.5px] left-[39.75px] rounded-[9999px] shadow-[0px_0px_8px_0px_rgba(59,130,246,0.8)] size-[6px]" data-name="Background+Shadow" />
        </div>
      </div>
      <div className="absolute backdrop-blur-[12px] bg-[rgba(10,15,29,0.8)] content-stretch flex items-center justify-between left-0 pb-[17px] pl-[16px] pr-[16.02px] pt-[16px] right-0 top-0" data-name="Header">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
        <ButtonBackgroundImage>
          <div className="h-[20px] relative shrink-0 w-[11.775px]" data-name="Container">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.775 20">
              <g id="Container">
                <path d={svgPaths.p225a8cc0} fill="var(--fill-0, #F1F5F9)" id="Icon" />
              </g>
            </svg>
          </div>
        </ButtonBackgroundImage>
        <div className="relative shrink-0" data-name="Heading 1">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[16px] tracking-[-0.4px] w-[126.39px]">
              <p className="leading-[24px] whitespace-pre-wrap">Sleep Log Details</p>
            </div>
          </div>
        </div>
        <ButtonBackgroundImage>
          <div className="h-[21px] relative shrink-0 w-[16px]" data-name="Container">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21">
              <g id="Container">
                <path d={svgPaths.p394dd500} fill="var(--fill-0, #F1F5F9)" id="Icon" />
              </g>
            </svg>
          </div>
        </ButtonBackgroundImage>
      </div>
    </div>
  );
}