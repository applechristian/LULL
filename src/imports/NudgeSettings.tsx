import clsx from "clsx";
import svgPaths from "./svg-ifeixpmlqa";

function Container2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[64px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative w-full">{children}</div>
    </div>
  );
}
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center p-[18px] relative w-full">{children}</div>
    </div>
  );
}
type ButtonProps = {
  additionalClassNames?: string;
};

function Button({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonProps>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]", additionalClassNames)}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Label({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#0f172a] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Wrapper>{children}</Wrapper>
    </div>
  );
}

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">{children}</g>
      </svg>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}

export default function NudgeSettings() {
  return (
    <div className="bg-[#101622] content-stretch flex flex-col gap-[32px] items-start pt-[48px] relative size-full" data-name="Nudge Settings">
      <div className="backdrop-blur-[10px] bg-[rgba(16,22,34,0.8)] relative shrink-0 w-full" data-name="Header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Button">
              <div className="h-[12px] relative shrink-0 w-[7.406px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.40625 12">
                  <g id="Container">
                    <path d={svgPaths.p1c24c780} fill="var(--fill-0, #135BEC)" id="Icon" />
                  </g>
                </svg>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
                <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#135bec] text-[16px] text-center w-[63.48px]">
                  <p className="leading-[24px] whitespace-pre-wrap">Settings</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
              <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#135bec] text-[16px] text-center w-[39.55px]">
                <p className="leading-[24px] whitespace-pre-wrap">Done</p>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] left-[166.39px] text-[#f1f5f9] text-[18px] top-[28px] w-[57.22px]">
              <p className="leading-[28px] whitespace-pre-wrap">Nudge</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1262px] max-w-[448px] relative shrink-0 w-full" data-name="Main">
        <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] right-[24px] top-0" data-name="Section">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[30px] text-white tracking-[-0.75px] w-full">
              <p className="leading-[36px] whitespace-pre-wrap">Nudge Settings</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#94a3b8] text-[16px] w-full whitespace-pre-wrap">
              <p className="mb-0">Customize how you want to be reminded to</p>
              <p>start your wind-down routine.</p>
            </div>
          </div>
        </div>
        <div className="absolute bg-[rgba(19,91,236,0.05)] left-[24px] right-[24px] rounded-[16px] top-[132px]" data-name="Section">
          <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[21px] relative rounded-[inherit] w-full">
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
                <div className="bg-[#135bec] content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Background">
                  <div className="h-[15.038px] relative shrink-0 w-[15px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15.0375">
                      <g id="Container">
                        <path d={svgPaths.p2b228980} fill="var(--fill-0, white)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(19,91,236,0.8)] tracking-[1px] uppercase w-[133.88px]">
                      <p className="leading-[15px] whitespace-pre-wrap">Notification Preview</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-[124.48px]">
                      <p className="leading-[20px] whitespace-pre-wrap">Tonight at 9:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(30,41,59,0.5)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border">
              <div aria-hidden="true" className="absolute border border-[#334155] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative w-full">
                <Container1 additionalClassNames="shrink-0 w-full">
                  <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#cbd5e1] text-[14px] w-full whitespace-pre-wrap">
                    <p className="mb-0">{`"Hey there, the stars are out. Time to put`}</p>
                    <p>{`the phone away and start your routine."`}</p>
                  </div>
                </Container1>
              </div>
            </div>
            <div className="absolute bottom-[-15px] right-[-15px] size-[80px]" data-name="Container">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
                <g id="Container" opacity="0.1">
                  <path d={svgPaths.p1b031998} fill="var(--fill-0, #135BEC)" id="Icon" />
                </g>
              </svg>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(19,91,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[24px] right-[24px] top-[335px]" data-name="Section">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] w-[103.38px]">
                <p className="leading-[28px] whitespace-pre-wrap">Nudge Tone</p>
              </div>
            </div>
            <div className="bg-[rgba(19,91,236,0.1)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#135bec] text-[12px] w-[42.03px]">
                <p className="leading-[16px] whitespace-pre-wrap">ACTIVE</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="bg-[#0f172a] relative rounded-[16px] shrink-0 w-full" data-name="Label">
              <div aria-hidden="true" className="absolute border-2 border-[#135bec] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <Wrapper>
                <Container1 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[16px] w-[52.17px]">
                        <p className="leading-[24px] whitespace-pre-wrap">Gentle</p>
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[15px]" data-name="Container">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                        <g id="Container">
                          <path d={svgPaths.p3e48b80} fill="var(--fill-0, #135BEC)" id="Icon" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <ContainerText text="Soft reminders to start winding down." />
                </Container1>
                <Container>
                  <path d={svgPaths.p21106180} fill="var(--fill-0, #334155)" id="Icon" />
                </Container>
              </Wrapper>
            </div>
            <Label>
              <Container1 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[16px] w-[97.59px]">
                  <p className="leading-[24px] whitespace-pre-wrap">Motivational</p>
                </div>
                <ContainerText text="Encouragement to stay on track with goals." />
              </Container1>
              <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                  <g id="Container">
                    <path d={svgPaths.p12df5c00} fill="var(--fill-0, #334155)" id="Icon" />
                  </g>
                </svg>
              </div>
            </Label>
            <Label>
              <Container1 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[16px] w-[33.64px]">
                  <p className="leading-[24px] whitespace-pre-wrap">Firm</p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px] w-full whitespace-pre-wrap">
                    <p className="mb-0">{`Direct alerts to ensure you don't miss your`}</p>
                    <p>window.</p>
                  </div>
                </div>
              </Container1>
              <div className="h-[18px] relative shrink-0 w-[4px]" data-name="Container">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 18">
                  <g id="Container">
                    <path d={svgPaths.p233ed800} fill="var(--fill-0, #334155)" id="Icon" />
                  </g>
                </svg>
              </div>
            </Label>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[24px] right-[24px] top-[707px]" data-name="Section">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[18px] w-full">
              <p className="leading-[28px] whitespace-pre-wrap">Timing</p>
            </div>
          </div>
          <ContainerText text="How long before bed should we nudge you?" />
          <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
            <Button additionalClassNames="bg-[#1e293b]">
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[16px] text-center w-[30.78px]">
                <p className="leading-[24px] whitespace-pre-wrap">15m</p>
              </div>
            </Button>
            <Button additionalClassNames="bg-[#135bec]">
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[34.22px]">
                <p className="leading-[24px] whitespace-pre-wrap">30m</p>
              </div>
            </Button>
            <Button additionalClassNames="bg-[#1e293b]">
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[16px] text-center w-[17.03px]">
                <p className="leading-[24px] whitespace-pre-wrap">1h</p>
              </div>
            </Button>
          </div>
        </div>
        <div className="absolute bg-[#0f172a] left-[24px] right-[24px] rounded-[16px] top-[875px]" data-name="Section">
          <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-row items-center size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative w-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
                    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
                        <g id="Container">
                          <path d={svgPaths.pdbf5c00} fill="var(--fill-0, #94A3B8)" id="Icon" />
                        </g>
                      </svg>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[14px] w-[114.34px]">
                        <p className="leading-[20px] whitespace-pre-wrap">Weekend Nudges</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#135bec] h-[24px] relative rounded-[9999px] shrink-0 w-[44px]" data-name="Background">
                    <div className="absolute bg-white right-[4px] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[4px]" data-name="Background+Shadow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
              <div aria-hidden="true" className="absolute border-[#1e293b] border-solid border-t inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[16px] relative w-full">
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
                      <Container>
                        <path d={svgPaths.p28b89db4} fill="var(--fill-0, #94A3B8)" id="Icon" />
                      </Container>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[14px] w-[78.03px]">
                          <p className="leading-[20px] whitespace-pre-wrap">Quiet Hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#334155] h-[24px] relative rounded-[9999px] shrink-0 w-[44px]" data-name="Background">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <div className="absolute bg-white left-[4px] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[4px]" data-name="Background+Shadow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <div className="absolute bg-[#135bec] content-stretch flex items-center justify-center left-[24px] py-[16px] right-[24px] rounded-[16px] top-[1030px]" data-name="Button">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(19,91,236,0.2),0px_4px_6px_-4px_rgba(19,91,236,0.2)]" data-name="Button:shadow" />
          <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[149.84px]">
            <p className="leading-[24px] whitespace-pre-wrap">Save Configuration</p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-center left-[24px] right-[24px] top-[1118px]" data-name="Container">
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] text-center w-[307.14px]">
            <p className="leading-[16px] whitespace-pre-wrap">Consistent nudge timing improves sleep quality by 24%.</p>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[10px] bg-[rgba(16,22,34,0.95)] bottom-0 content-stretch flex h-[84px] items-start justify-between left-0 pt-[13px] px-[24px] right-0" data-name="Nav">
        <div aria-hidden="true" className="absolute border-[#1e293b] border-solid border-t inset-0 pointer-events-none" />
        <Container2>
          <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
              <g id="Container">
                <path d={svgPaths.p12a32500} fill="var(--fill-0, #94A3B8)" id="Icon" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[28.33px]">
              <p className="leading-[15px] whitespace-pre-wrap">Home</p>
            </div>
          </div>
        </Container2>
        <Container2>
          <Container>
            <path d={svgPaths.p256e1340} fill="var(--fill-0, #94A3B8)" id="Icon" />
          </Container>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[38.38px]">
              <p className="leading-[15px] whitespace-pre-wrap">Routine</p>
            </div>
          </div>
        </Container2>
        <Container2>
          <div className="h-[16px] relative shrink-0 w-[18px]" data-name="Container">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
              <g id="Container">
                <path d={svgPaths.p1b961100} fill="var(--fill-0, #94A3B8)" id="Icon" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[17.69px]">
              <p className="leading-[15px] whitespace-pre-wrap">Log</p>
            </div>
          </div>
        </Container2>
        <Container2>
          <div className="relative shrink-0 size-[18px]" data-name="Container">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g id="Container">
                <path d={svgPaths.p22876fc0} fill="var(--fill-0, #94A3B8)" id="Icon" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] w-[35.09px]">
              <p className="leading-[15px] whitespace-pre-wrap">History</p>
            </div>
          </div>
        </Container2>
        <Container2>
          <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
              <g id="Container">
                <path d={svgPaths.p1589e300} fill="var(--fill-0, #135BEC)" id="Icon" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
            <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#135bec] text-[10px] w-[41.3px]">
              <p className="leading-[15px] whitespace-pre-wrap">Settings</p>
            </div>
          </div>
        </Container2>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#334155] bottom-[8px] h-[4px] left-1/2 rounded-[9999px] w-[128px]" data-name="Background" />
    </div>
  );
}