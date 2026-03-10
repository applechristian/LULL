import { useNavigate } from 'react-router';
import { NavBar } from '../components/NavBar';
import svgPaths from '../../imports/svg-uoaa7zn38a';

export function NudgePage() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col min-h-screen relative overflow-hidden"
      style={{ background: '#161121', fontFamily: "'Manrope', sans-serif" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 390 884\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(64.88 0 0 64.88 195 265.2)\"><stop stop-color=\"rgba(46,27,91,1)\" offset=\"0\"/><stop stop-color=\"rgba(34,22,62,1)\" offset=\"0.35\"/><stop stop-color=\"rgba(22,17,33,1)\" offset=\"0.7\"/></radialGradient></defs></svg>')",
        }}
      />

      {/* Floating stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full bg-white opacity-40" style={{ width: 4, height: 4, left: '25%', top: '25%' }} />
        <div className="absolute rounded-full opacity-30" style={{ width: 6, height: 6, right: '25%', top: '33%', background: 'rgba(110,48,232,0.4)' }} />
        <div className="absolute rounded-full bg-white opacity-20" style={{ width: 4, height: 4, right: '33%', bottom: '25%' }} />
        <div className="absolute rounded-full opacity-20" style={{ width: 8, height: 8, left: '10%', top: '50%', background: 'rgba(110,48,232,0.2)', filter: 'blur(2px)' }} />
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-8 pt-4 pb-2 opacity-80 relative z-10">
        <span className="text-[14px] text-[#f1f5f9] tracking-[-0.35px]" style={{ fontWeight: 600 }}>9:41</span>
        <div className="flex gap-[6px] items-center">
          <svg fill="none" height="10.7" viewBox="0 0 10 10.7" width="10">
            <path d={svgPaths.p337a600} fill="#f1f5f9" />
          </svg>
          <svg fill="none" height="10.4" viewBox="0 0 14.7 10.4" width="14.7">
            <path d={svgPaths.p2521d800} fill="#f1f5f9" />
          </svg>
          <svg fill="none" height="13.3" viewBox="0 0 6.7 13.3" width="6.7">
            <path d={svgPaths.p3fe576a0} fill="#f1f5f9" />
          </svg>
        </div>
      </div>

      {/* Beautiful crescent moon illustration */}
      <div className="flex justify-center pt-6 relative z-10">
        <div className="relative" style={{ width: 164, height: 164 }}>
          {/* Outer radial glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              inset: -24,
              background: 'radial-gradient(circle, rgba(110,48,232,0.28) 0%, rgba(110,48,232,0.08) 50%, transparent 75%)',
              filter: 'blur(12px)',
            }}
          />
          <svg width="164" height="164" viewBox="0 0 164 164" fill="none">
            <defs>
              <radialGradient id="moonBodyGrad" cx="32%" cy="26%" r="78%" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="164" y2="164">
                <stop offset="0%" stopColor="#ede9fe" />
                <stop offset="38%" stopColor="#a78bfa" />
                <stop offset="75%" stopColor="#6d28d9" />
                <stop offset="100%" stopColor="#3b0764" />
              </radialGradient>
              <radialGradient id="moonInnerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(196,181,253,0.25)" />
                <stop offset="100%" stopColor="rgba(196,181,253,0)" />
              </radialGradient>
            </defs>

            {/* Soft background halo */}
            <circle cx="82" cy="82" r="72" fill="rgba(88,40,200,0.08)" />

            {/* Moon body */}
            <circle cx="80" cy="80" r="46" fill="url(#moonBodyGrad)" />
            {/* Crescent bite — matches background colour */}
            <circle cx="100" cy="72" r="41" fill="#161121" />
            {/* Inner highlight on moon edge */}
            <circle cx="80" cy="80" r="46" fill="url(#moonInnerGlow)" />

            {/* Crater details */}
            <circle cx="58" cy="72" r="4.5" fill="rgba(255,255,255,0.06)" />
            <circle cx="63" cy="88" r="3" fill="rgba(255,255,255,0.05)" />
            <circle cx="52" cy="82" r="6" fill="rgba(255,255,255,0.04)" />

            {/* Stars scattered around */}
            <circle cx="26" cy="44" r="2.5" fill="rgba(255,255,255,0.9)" />
            <circle cx="130" cy="28" r="1.8" fill="rgba(255,255,255,0.75)" />
            <circle cx="148" cy="90" r="1.2" fill="rgba(255,255,255,0.55)" />
            <circle cx="12" cy="108" r="1.8" fill="rgba(255,255,255,0.65)" />
            <circle cx="40" cy="148" r="1.1" fill="rgba(255,255,255,0.45)" />
            <circle cx="138" cy="140" r="1.4" fill="rgba(255,255,255,0.5)" />
            <circle cx="155" cy="55" r="1" fill="rgba(255,255,255,0.4)" />

            {/* 4-point sparkle */}
            <path
              d="M118 36 L120.5 29 L123 36 L130 38.5 L123 41 L120.5 48 L118 41 L111 38.5 Z"
              fill="rgba(255,255,255,0.92)"
            />
            {/* Small 4-point sparkle */}
            <path
              d="M34 115 L35.2 111.5 L36.4 115 L40 116.2 L36.4 117.4 L35.2 121 L34 117.4 L30.4 116.2 Z"
              fill="rgba(255,255,255,0.7)"
            />
          </svg>
        </div>
      </div>

      {/* Page dots */}
      <div className="flex justify-center gap-2 mt-6 relative z-10">
        <div className="rounded-full" style={{ width: 6, height: 6, background: '#6e30e8' }} />
        <div className="rounded-full" style={{ width: 6, height: 6, background: 'rgba(255,255,255,0.1)' }} />
        <div className="rounded-full" style={{ width: 6, height: 6, background: 'rgba(255,255,255,0.1)' }} />
      </div>

      {/* Nudge card */}
      <div className="flex-1 flex items-center px-8 py-6 relative z-10">
        <div
          className="w-full rounded-[16px] relative overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}
        >
          <div className="flex flex-col items-center p-[33px] gap-4">
            {/* Sleep nudge label */}
            <div className="flex items-center gap-2">
              <svg fill="none" height="16.5" viewBox="0 0 16.5 16.5" width="16.5">
                <path d={svgPaths.p1f7ec100} fill="rgba(110,48,232,0.8)" />
              </svg>
              <span
                className="text-[10px] tracking-[2px] uppercase"
                style={{ fontWeight: 700, color: 'rgba(110,48,232,0.7)' }}
              >
                Sleep Nudge
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[24px] text-[#f1f5f9] text-center leading-[30px]" style={{ fontWeight: 600 }}>
              Time to start winding<br />down
            </h2>

            {/* Description */}
            <p className="text-[14px] text-[#94a3b8] text-center leading-[22.75px] max-w-[240px]" style={{ fontWeight: 400 }}>
              It's time to start winding down for a restful night. Your body will thank you.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-3 w-full mt-2">
              <button
                className="flex items-center justify-center gap-2 py-4 rounded-[24px] cursor-pointer border-0 relative w-full"
                onClick={() => navigate('/routine')}
                style={{ background: '#6e30e8', boxShadow: '0px 10px 15px -3px rgba(110,48,232,0.3), 0px 4px 6px -4px rgba(110,48,232,0.3)' }}
              >
                <svg fill="none" height="16.7" viewBox="0 0 16.7 16.7" width="16.7">
                  <path d={svgPaths.p76f6d80} fill="white" />
                </svg>
                <span className="text-[16px] text-white" style={{ fontWeight: 600 }}>Start Routine</span>
              </button>
              <button
                className="flex items-center justify-center py-[17px] rounded-[24px] cursor-pointer w-full"
                onClick={() => navigate('/home')}
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <span className="text-[16px] text-[#cbd5e1]" style={{ fontWeight: 500 }}>Snooze 10m</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-20">
        <NavBar activeTab="routine" variant="purple" />
      </div>
    </div>
  );
}
