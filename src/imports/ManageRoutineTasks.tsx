import svgPaths from "./svg-w4wra5b711";

function Container4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">{children}</g>
      </svg>
    </div>
  );
}

function Container3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">{children}</g>
      </svg>
    </div>
  );
}

function Container2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="min-h-[72px] relative shrink-0 w-full">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[16px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Container1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[16px] relative shrink-0 w-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
        <g id="Container">{children}</g>
      </svg>
    </div>
  );
}

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="min-h-[72px] relative shrink-0 w-full">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[16px] py-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="bg-[#256af4] content-stretch flex h-[32px] items-center justify-center min-w-[72px] pb-[6.5px] pl-[22.86px] pr-[22.87px] pt-[5.5px] relative rounded-[9999px] shrink-0">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[26.27px]">
        <p className="leading-[20px] whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}

export default function ManageRoutineTasks() {
  return (
    <div className="bg-[#101622] content-stretch flex flex-col items-start relative size-full" data-name="Manage Routine Tasks">
      <div className="h-[884px] max-w-[430px] relative shrink-0 w-full" data-name="Border">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute content-stretch flex flex-col gap-[8px] inset-[144px_1px_0_1px] items-center pb-[124.5px] pt-[16px]" data-name="Scrollable Content">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[356px]" data-name="Hygiene Category → Heading 3">
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] tracking-[-0.27px] w-[69.5px]">
                <p className="leading-[22.5px] whitespace-pre-wrap">Hygiene</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
              <Container>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
                  <div className="bg-[rgba(37,106,244,0.1)] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Overlay">
                    <div className="h-[18px] relative shrink-0 w-[14px]" data-name="Container">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
                        <g id="Container">
                          <path d={svgPaths.p1c327580} fill="var(--fill-0, #256AF4)" id="Icon" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[16px] w-[103.09px]">
                        <p className="leading-[24px] whitespace-pre-wrap">Warm Shower</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-[165.02px]">
                        <p className="leading-[20px] whitespace-pre-wrap">Relax muscles before bed</p>
                      </div>
                    </div>
                  </div>
                </div>
                <ButtonText text="Add" />
              </Container>
              <Container>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
                  <div className="bg-[rgba(37,106,244,0.1)] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Overlay">
                    <div className="h-[22px] relative shrink-0 w-[18px]" data-name="Container">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
                        <g id="Container">
                          <path d={svgPaths.p14f6a6c0} fill="var(--fill-0, #256AF4)" id="Icon" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[16px] w-[99.23px]">
                        <p className="leading-[24px] whitespace-pre-wrap">{`Floss & Brush`}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-[191.86px]">
                        <p className="leading-[20px] whitespace-pre-wrap">Complete your nightly routine</p>
                      </div>
                    </div>
                  </div>
                </div>
                <ButtonText text="Add" />
              </Container>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-[356px]" data-name="Mindfulness Category → Heading 3">
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] tracking-[-0.27px] w-[104.25px]">
                <p className="leading-[22.5px] whitespace-pre-wrap">Mindfulness</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
              <Container>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
                  <div className="bg-[rgba(37,106,244,0.1)] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Overlay">
                    <Container1>
                      <path d={svgPaths.p9ab9180} fill="var(--fill-0, #256AF4)" id="Icon" />
                    </Container1>
                  </div>
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[16px] w-[82px]">
                        <p className="leading-[24px] whitespace-pre-wrap">Meditation</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-[194.28px]">
                        <p className="leading-[20px] whitespace-pre-wrap">5-10 mins of mindful breathing</p>
                      </div>
                    </div>
                  </div>
                </div>
                <ButtonText text="Add" />
              </Container>
              <Container2>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
                  <div className="bg-[rgba(37,106,244,0.1)] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Overlay">
                    <Container1>
                      <path d={svgPaths.p1b961100} fill="var(--fill-0, #256AF4)" id="Icon" />
                    </Container1>
                  </div>
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[16px] w-[78.8px]">
                        <p className="leading-[24px] whitespace-pre-wrap">Journaling</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px] w-[176.39px] whitespace-pre-wrap">
                        <p className="mb-0">Write down three wins from</p>
                        <p>today</p>
                      </div>
                    </div>
                  </div>
                </div>
                <ButtonText text="Add" />
              </Container2>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-[356px]" data-name="Environment Category → Heading 3">
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] tracking-[-0.27px] w-[108.86px]">
                <p className="leading-[22.5px] whitespace-pre-wrap">Environment</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
              <Container2>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
                  <div className="bg-[rgba(37,106,244,0.1)] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Overlay">
                    <div className="h-[20px] relative shrink-0 w-[15px]" data-name="Container">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20">
                        <g id="Container">
                          <path d={svgPaths.pb720300} fill="var(--fill-0, #256AF4)" id="Icon" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[16px] w-[107.45px]">
                        <p className="leading-[24px] whitespace-pre-wrap">Dim the Lights</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px] w-[179.17px] whitespace-pre-wrap">
                        <p className="mb-0">Signal your body to produce</p>
                        <p>melatonin</p>
                      </div>
                    </div>
                  </div>
                </div>
                <ButtonText text="Add" />
              </Container2>
              <Container>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
                  <div className="bg-[rgba(37,106,244,0.1)] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" data-name="Overlay">
                    <div className="h-[19.65px] relative shrink-0 w-[21.3px]" data-name="Container">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3 19.65">
                        <g id="Container">
                          <path d={svgPaths.p35eb4600} fill="var(--fill-0, #256AF4)" id="Icon" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[16px] w-[137.69px]">
                        <p className="leading-[24px] whitespace-pre-wrap">Set Morning Alarm</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-[146.34px]">
                        <p className="leading-[20px] whitespace-pre-wrap">Plan your wake up time</p>
                      </div>
                    </div>
                  </div>
                </div>
                <ButtonText text="Add" />
              </Container>
            </div>
          </div>
          <div className="absolute backdrop-blur-[12px] bg-[rgba(15,23,42,0.8)] bottom-0 content-stretch flex flex-col gap-[8px] items-center left-px pt-[17px] right-px" data-name="Bottom UI - Create Custom & Nav">
            <div aria-hidden="true" className="absolute border-[#1e293b] border-solid border-t inset-0 pointer-events-none" />
            <div className="relative shrink-0 w-[356px]" data-name="Custom Task Input">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
                <div className="bg-[#1e293b] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Background+Shadow">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Input">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col items-start pb-[9px] pt-[8px] px-[12px] relative w-full">
                            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                              <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full">
                                <p className="leading-[normal] whitespace-pre-wrap">Create custom task...</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#256af4] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Button">
                  <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(37,106,244,0.2),0px_4px_6px_-4px_rgba(37,106,244,0.2)] size-[48px] top-1/2" data-name="Button:shadow" />
                  <div className="relative shrink-0 size-[14px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <g id="Container">
                        <path d={svgPaths.p2bb32400} fill="var(--fill-0, white)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Navbar">
              <div className="flex flex-row justify-center size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-center pb-[24px] pt-[8px] px-[16px] relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-end min-h-px min-w-px relative self-stretch" data-name="Link">
                    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0" data-name="Container">
                      <Container3>
                        <path d={svgPaths.p3a711400} fill="var(--fill-0, #94A3B8)" id="Icon" />
                      </Container3>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.18px] w-[32.64px]">
                        <p className="leading-[18px] whitespace-pre-wrap">Sleep</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-end min-h-px min-w-px relative self-stretch" data-name="Link">
                    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0" data-name="Container">
                      <Container3>
                        <path d={svgPaths.p39ac9700} fill="var(--fill-0, #256AF4)" id="Icon" />
                      </Container3>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] relative shrink-0 text-[#256af4] text-[12px] tracking-[0.18px] w-[45.63px]">
                        <p className="leading-[18px] whitespace-pre-wrap">Routine</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-end min-h-px min-w-px relative self-stretch" data-name="Link">
                    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0" data-name="Container">
                      <Container4>
                        <path d={svgPaths.p19344b40} fill="var(--fill-0, #94A3B8)" id="Icon" />
                      </Container4>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.18px] w-[31.45px]">
                        <p className="leading-[18px] whitespace-pre-wrap">Stats</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-end min-h-px min-w-px relative self-stretch" data-name="Link">
                    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0" data-name="Container">
                      <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
                          <g id="Container">
                            <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #94A3B8)" id="Icon" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.18px] w-[49.78px]">
                        <p className="leading-[18px] whitespace-pre-wrap">Settings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#101622] content-stretch flex items-center justify-between left-px pb-[8px] pt-[16px] px-[16px] right-px top-0" data-name="Header">
            <div className="content-stretch flex items-center relative shrink-0 size-[48px]" data-name="Container">
              <Container4>
                <path d={svgPaths.p300a1100} fill="var(--fill-0, #F1F5F9)" id="Icon" />
              </Container4>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Heading 2">
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] text-center tracking-[-0.27px] w-[175.69px]">
                <p className="leading-[22.5px] whitespace-pre-wrap">Add Wind-down Task</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-end relative shrink-0 w-[48px]" data-name="Container">
              <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Button">
                <Container3>
                  <path d={svgPaths.p2816f2c0} fill="var(--fill-0, #F1F5F9)" id="Icon" />
                </Container3>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#101622] content-stretch flex flex-col items-start left-px px-[16px] py-[12px] right-px top-[72px]" data-name="Search Bar">
            <div className="content-stretch flex flex-col h-[48px] items-start justify-center min-w-[160px] relative shrink-0 w-full" data-name="Label">
              <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative rounded-[48px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full" data-name="Overlay+Shadow">
                <div className="bg-[rgba(30,41,59,0.5)] content-stretch flex h-full items-center justify-center pl-[16px] relative shrink-0" data-name="Overlay">
                  <div className="relative shrink-0 size-[15px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <g id="Container">
                        <path d={svgPaths.p2dbaedc0} fill="var(--fill-0, #94A3B8)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="bg-[rgba(30,41,59,0.5)] flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="Input">
                  <div className="absolute bottom-[13px] content-stretch flex flex-col items-start left-[8px] overflow-clip pr-[54.55px] top-[13px]" data-name="Container">
                    <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[16px] w-[241.45px]">
                      <p className="leading-[normal] whitespace-pre-wrap">Search tasks (e.g. Read, Stretch)</p>
                    </div>
                  </div>
                  <div className="absolute bottom-[12px] left-[8px] top-[12px] w-[296px]" data-name="Container" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#1e293b] border-l border-r border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}