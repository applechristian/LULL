import svgPaths from "./svg-fzengh6ysi";

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">{children}</g>
      </svg>
    </div>
  );
}

function OverlayBorderBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function BorderBackgroundImage() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[28px]">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function BackgroundBorderBackgroundImage() {
  return (
    <div className="bg-[#6e30e8] h-[32px] relative rounded-[9999px] shrink-0 w-[28px]">
      <div aria-hidden="true" className="absolute border-2 border-[#6e30e8] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <div className="h-[10.238px] relative shrink-0 w-[13.425px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.425 10.2375">
            <g id="Container">
              <path d={svgPaths.p2ef5ab00} fill="var(--fill-0, white)" id="Icon" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ActiveSleepNudge() {
  return (
    <div className="bg-[#161121] content-stretch flex flex-col items-start relative size-full" data-name="Active Sleep Nudge">
      <div className="h-[884px] min-h-[884px] overflow-clip relative shrink-0 w-full" data-name="Background" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 884\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(90.525 0 0 90.525 195 0)\\'><stop stop-color=\\'rgba(46,27,91,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(34,22,62,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(22,17,33,1)\\' offset=\\'0.8\\'/></radialGradient></defs></svg>')" }}>
        <div className="absolute content-stretch flex flex-col items-start left-0 pb-[32px] pt-[16px] right-0 top-[44px]" data-name="Margin">
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] relative w-full">
              <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[24px] w-[226.39px]">
                    <p className="leading-[32px] whitespace-pre-wrap">Wind Down Routine</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#6e30e8] text-[14px] w-[65.97px]">
                    <p className="leading-[20px] whitespace-pre-wrap">2 / 4 Done</p>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[8px] items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Overlay">
                <div className="bg-[#6e30e8] flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px] w-[171px]" data-name="Background">
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_0px_15px_2px_rgba(110,48,232,0.4)]" data-name="Overlay+Shadow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 pb-[318px] px-[24px] right-0 top-[140px]" data-name="Container">
          <OverlayBorderBackgroundImage>
            <ContainerBackgroundImage1>
              <div className="bg-[rgba(110,48,232,0.1)] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[40px]" data-name="Overlay">
                <div className="h-[20.5px] relative shrink-0 w-[21px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20.5">
                    <g id="Container">
                      <path d={svgPaths.p3707ee50} fill="var(--fill-0, #6E30E8)" id="Icon" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
                <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Heading 3">
                  <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[16px] w-[91.7px]">
                    <p className="leading-[24px] whitespace-pre-wrap">Brush Teeth</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] tracking-[0.55px] uppercase w-[47.45px]">
                    <p className="leading-[16.5px] whitespace-pre-wrap">Hygiene</p>
                  </div>
                </div>
              </div>
            </ContainerBackgroundImage1>
            <BackgroundBorderBackgroundImage />
          </OverlayBorderBackgroundImage>
          <OverlayBorderBackgroundImage>
            <ContainerBackgroundImage1>
              <div className="bg-[rgba(110,48,232,0.1)] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[40px]" data-name="Overlay">
                <div className="h-[18px] relative shrink-0 w-[14px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
                    <g id="Container">
                      <path d={svgPaths.p3be98a0} fill="var(--fill-0, #6E30E8)" id="Icon" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
                <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Heading 3">
                  <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[16px] w-[124.42px]">
                    <p className="leading-[24px] whitespace-pre-wrap">Take Medication</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[11px] tracking-[0.55px] uppercase w-[42.69px]">
                    <p className="leading-[16.5px] whitespace-pre-wrap">Health</p>
                  </div>
                </div>
              </div>
            </ContainerBackgroundImage1>
            <BackgroundBorderBackgroundImage />
          </OverlayBorderBackgroundImage>
          <OverlayBorderBackgroundImage>
            <ContainerBackgroundImage1>
              <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[40px]" data-name="Overlay">
                <ContainerBackgroundImage>
                  <path d={svgPaths.p3e58d900} fill="var(--fill-0, #94A3B8)" id="Icon" />
                </ContainerBackgroundImage>
              </div>
              <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
                <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Heading 3">
                  <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[16px] w-[129.8px]">
                    <p className="leading-[24px] whitespace-pre-wrap">Skincare Routine</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[11px] tracking-[0.55px] uppercase w-[59.19px]">
                    <p className="leading-[16.5px] whitespace-pre-wrap">Self Care</p>
                  </div>
                </div>
              </div>
            </ContainerBackgroundImage1>
            <BorderBackgroundImage />
          </OverlayBorderBackgroundImage>
          <OverlayBorderBackgroundImage>
            <ContainerBackgroundImage1>
              <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[40px]" data-name="Overlay">
                <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
                    <g id="Container">
                      <path d={svgPaths.p378800} fill="var(--fill-0, #94A3B8)" id="Icon" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
                <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Heading 3">
                  <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[16px] w-[122.64px]">
                    <p className="leading-[24px] whitespace-pre-wrap">Read for 15 mins</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[11px] tracking-[0.55px] uppercase w-[68.89px]">
                    <p className="leading-[16.5px] whitespace-pre-wrap">Relaxation</p>
                  </div>
                </div>
              </div>
            </ContainerBackgroundImage1>
            <BorderBackgroundImage />
          </OverlayBorderBackgroundImage>
          <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center justify-center px-[2px] py-[18px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
            <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.1)] border-dashed inset-0 pointer-events-none rounded-[16px]" />
            <div className="relative shrink-0 size-[16.667px]" data-name="Container">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <g id="Container">
                  <path d={svgPaths.p2f06d100} fill="var(--fill-0, #94A3B8)" id="Icon" />
                </g>
              </svg>
            </div>
            <div className="relative shrink-0" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
                <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] text-center w-[67.83px]">
                  <p className="leading-[24px] whitespace-pre-wrap">Add Task</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 overflow-clip" data-name="Container">
          <div className="absolute bg-white left-[97.5px] opacity-20 rounded-[9999px] size-[4px] top-[221px]" data-name="Background" />
          <div className="absolute bg-[rgba(110,48,232,0.2)] opacity-30 right-[97.5px] rounded-[9999px] size-[6px] top-[294.66px]" data-name="Overlay" />
          <div className="absolute bg-[rgba(110,48,232,0.1)] blur-[2px] bottom-[294.66px] left-[40px] rounded-[9999px] size-[8px]" data-name="Overlay+Blur" />
        </div>
        <div className="absolute bottom-[96px] content-stretch flex flex-col items-start left-0 px-[24px] right-0" data-name="Container">
          <div className="bg-[#6e30e8] content-stretch flex gap-[8px] items-center justify-center py-[16px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(110,48,232,0.2),0px_8px_10px_-6px_rgba(110,48,232,0.2)]" data-name="Button:shadow" />
            <ContainerBackgroundImage>
              <path d={svgPaths.p3a711400} fill="var(--fill-0, white)" id="Icon" />
            </ContainerBackgroundImage>
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[107.02px]">
              <p className="leading-[24px] whitespace-pre-wrap">{`Finish & Sleep`}</p>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex items-center justify-between left-0 opacity-80 pb-[8px] pt-[16px] px-[32px] right-0 top-0" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
            <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] tracking-[-0.35px] w-[26.25px]">
              <p className="leading-[20px] whitespace-pre-wrap">9:41</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
            <div className="h-[10.688px] relative shrink-0 w-[10px]" data-name="Container">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10.6875">
                <g id="Container">
                  <path d={svgPaths.p337a600} fill="var(--fill-0, #F1F5F9)" id="Icon" />
                </g>
              </svg>
            </div>
            <div className="h-[10.375px] relative shrink-0 w-[14.688px]" data-name="Container">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6875 10.375">
                <g id="Container">
                  <path d={svgPaths.p2521d800} fill="var(--fill-0, #F1F5F9)" id="Icon" />
                </g>
              </svg>
            </div>
            <div className="h-[13.313px] relative shrink-0 w-[6.688px]" data-name="Container">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.6875 13.3125">
                <g id="Container">
                  <path d={svgPaths.p3fe576a0} fill="var(--fill-0, #F1F5F9)" id="Icon" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[10px] bg-[rgba(22,17,33,0.9)] bottom-0 content-stretch flex flex-col items-start left-0 pb-[32px] pt-[13px] px-[16px] right-0" data-name="Nav">
          <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
          <div className="h-[51px] max-w-[448px] relative shrink-0 w-full" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-0 right-[80%] top-1/2" data-name="Link">
                <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                    <g id="Container">
                      <path d={svgPaths.p12a32500} fill="var(--fill-0, #64748B)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] w-[27.48px]">
                    <p className="leading-[15px] whitespace-pre-wrap">Home</p>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[20%] right-[60.01%] top-1/2" data-name="Link">
                <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
                    <g id="Container">
                      <path d={svgPaths.p132c79a} fill="var(--fill-0, #6E30E8)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#6e30e8] text-[10px] w-[38.38px]">
                    <p className="leading-[15px] whitespace-pre-wrap">Routine</p>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[59.99%] right-[20.01%] top-1/2" data-name="Link">
                <div className="relative shrink-0 size-[18px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g id="Container">
                      <path d={svgPaths.p22876fc0} fill="var(--fill-0, #64748B)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] w-[33.69px]">
                    <p className="leading-[15px] whitespace-pre-wrap">History</p>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[79.99%] right-[0.01%] top-1/2" data-name="Link">
                <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
                    <g id="Container">
                      <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #64748B)" id="Icon" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] w-[39.69px]">
                    <p className="leading-[15px] whitespace-pre-wrap">Settings</p>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[42.18%] right-[42.18%] top-[-64px]" data-name="Container">
                <div className="bg-[#6e30e8] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]" data-name="Button">
                  <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(110,48,232,0.3),0px_4px_6px_-4px_rgba(110,48,232,0.3)] size-[56px] top-0" data-name="Button:shadow" />
                  <div className="relative shrink-0 size-[17.5px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                      <g id="Container">
                        <path d={svgPaths.p2f5d9c00} fill="var(--fill-0, white)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.2)] bottom-[8px] h-[6px] left-1/2 rounded-[9999px] w-[128px]" data-name="Overlay" />
        </div>
      </div>
    </div>
  );
}