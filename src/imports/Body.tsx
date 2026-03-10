import svgPaths from "./svg-3kyjpg2bfc";
import imgCrescentMoon from "../assets/304be2b04f166ef9ab1c2d95e2c95131d8830390.png";

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative">{children}</div>
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#161121] content-stretch flex flex-col items-start relative size-full" data-name="Body">
      <div className="content-stretch flex flex-col h-[884px] items-center overflow-clip relative shrink-0 w-full" data-name="Background" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 390 884\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(64.88 0 0 64.88 195 265.2)\\'><stop stop-color=\\'rgba(46,27,91,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(34,22,62,1)\\' offset=\\'0.35\\'/><stop stop-color=\\'rgba(22,17,33,1)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }}>
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
          <div className="absolute content-stretch flex flex-col items-start left-[178px] pt-[32px] top-[671.13px]" data-name="Margin">
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
              <div className="bg-[#6e30e8] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
              <div className="bg-[rgba(255,255,255,0.1)] rounded-[9999px] shrink-0 size-[6px]" data-name="Overlay" />
              <div className="bg-[rgba(255,255,255,0.1)] rounded-[9999px] shrink-0 size-[6px]" data-name="Overlay" />
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-start left-[131px] pb-[40px] top-[78.88px]" data-name="Margin">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
              <div className="absolute bg-[rgba(110,48,232,0.1)] blur-[30px] left-[-40px] rounded-[9999px] size-[192px] top-[-40px]" data-name="Overlay+Blur" />
              <div className="absolute bg-[rgba(110,48,232,0.1)] blur-[30px] bottom-[-40px] right-[-40px] rounded-[9999px] size-[192px]" data-name="Overlay+Blur" />
              <div className="bg-[#f1f5f9] content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shadow-[0px_0px_60px_10px_rgba(110,48,232,0.2)] shrink-0 size-[128px]" data-name="Background+Shadow">
                <div className="opacity-80 relative shrink-0 size-[80px]" data-name="Crescent moon">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCrescentMoon} />
                  </div>
                </div>
                <div className="absolute inset-0" data-name="Gradient" style={{ backgroundImage: "linear-gradient(45deg, rgba(110, 48, 232, 0.2) 0%, rgba(110, 48, 232, 0) 100%)" }} />
              </div>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[32px] max-w-[384px] right-[32px] top-[calc(50%+17.01px)]" data-name="Container">
            <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col items-center p-[33px] relative w-full">
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.5px_0] rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
                  <BackgroundImage>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
                      <div className="relative shrink-0 size-[16.5px]" data-name="Container">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
                          <g id="Container">
                            <path d={svgPaths.p1f7ec100} fill="var(--fill-0, #6E30E8)" fillOpacity="0.8" id="Icon" />
                          </g>
                        </svg>
                      </div>
                      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(110,48,232,0.7)] text-center tracking-[2px] uppercase w-[88.56px]">
                          <p className="leading-[15px] whitespace-pre-wrap">Sleep Nudge</p>
                        </div>
                      </div>
                    </div>
                  </BackgroundImage>
                  <BackgroundImage>
                    <div className="content-stretch flex flex-col items-center pl-[9.47px] pr-[9.48px] relative shrink-0" data-name="Heading 2">
                      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[60px] justify-center leading-[30px] not-italic relative shrink-0 text-[#f1f5f9] text-[24px] text-center w-[241.05px] whitespace-pre-wrap">
                        <p className="mb-0">Time to start winding</p>
                        <p>down</p>
                      </div>
                    </div>
                  </BackgroundImage>
                  <div className="h-[108.25px] max-w-[240px] relative shrink-0 w-[240px]" data-name="Margin">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="absolute content-stretch flex flex-col items-center left-0 max-w-[240px] pl-[8.34px] pr-[8.36px] top-[-1.25px]" data-name="Container">
                        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[69px] justify-center leading-[22.75px] relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[223.3px] whitespace-pre-wrap">
                          <p className="mb-0">{`It's time to start winding down for a`}</p>
                          <p className="mb-0">restful night. Your body will thank</p>
                          <p>you.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
                      <div className="bg-[#6e30e8] content-stretch flex gap-[8px] items-center justify-center py-[16px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
                        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(110,48,232,0.3),0px_4px_6px_-4px_rgba(110,48,232,0.3)]" data-name="Button:shadow" />
                        <div className="relative shrink-0 size-[16.667px]" data-name="Container">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                            <g id="Container">
                              <path d={svgPaths.p76f6d80} fill="var(--fill-0, white)" id="Icon" />
                            </g>
                          </svg>
                        </div>
                        <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[102.59px]">
                          <p className="leading-[24px] whitespace-pre-wrap">Start Routine</p>
                        </div>
                      </div>
                      <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center px-px py-[17px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
                        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[24px]" />
                        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[16px] text-center w-[89.44px]">
                          <p className="leading-[24px] whitespace-pre-wrap">Snooze 10m</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 overflow-clip" data-name="Container">
          <div className="absolute bg-white left-[97.5px] opacity-40 rounded-[9999px] size-[4px] top-[221px]" data-name="Background" />
          <div className="absolute bg-[rgba(110,48,232,0.4)] opacity-30 right-[97.5px] rounded-[9999px] size-[6px] top-[294.66px]" data-name="Overlay" />
          <div className="absolute bg-white bottom-[221px] opacity-20 right-[129.98px] rounded-[9999px] size-[4px]" data-name="Background" />
          <div className="-translate-y-1/2 absolute bg-[rgba(110,48,232,0.2)] blur-[2px] left-[40px] rounded-[9999px] size-[8px] top-[calc(50%-4px)]" data-name="Overlay+Blur" />
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
        <div className="absolute backdrop-blur-[10px] bg-[rgba(22,17,33,0.85)] bottom-0 content-stretch flex flex-col items-start left-0 pb-[32px] pt-[13px] px-[16px] right-0" data-name="Nav">
          <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
          <div className="max-w-[448px] relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-row items-center max-w-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pr-[0.03px] relative w-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
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
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
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
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
                  <div className="h-[16px] relative shrink-0 w-[18px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
                      <g id="Container">
                        <path d={svgPaths.p1b961100} fill="var(--fill-0, #64748B)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] w-[17.19px]">
                      <p className="leading-[15px] whitespace-pre-wrap">Log</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
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
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
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
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.2)] bottom-[8px] h-[6px] left-1/2 rounded-[9999px] w-[128px]" data-name="Overlay" />
        </div>
      </div>
    </div>
  );
}