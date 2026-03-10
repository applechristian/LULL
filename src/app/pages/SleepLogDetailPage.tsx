import { useNavigate } from 'react-router';
import { NavBar } from '../components/NavBar';
import svgPaths from '../../imports/svg-00jsdi7vlu';

const SLEEP_FACTORS = [
  { label: 'No Caffeine', icon: svgPaths.p28a75aa0, w: 14.85, h: 14.87 },
  { label: 'Cold Room',   icon: svgPaths.p468a380,  w: 15,     h: 15 },
  { label: 'Reading',     icon: svgPaths.p29a327e0,  w: 16.5,   h: 14.625 },
  { label: 'No Screen',   icon: svgPaths.p824dd00,   w: 15.975, h: 15.9 },
];

export function SleepLogDetailPage() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col min-h-screen relative"
      style={{ background: '#0a0f1d', fontFamily: "'Manrope', sans-serif" }}
    >
      {/* Subtle radial glow at top */}
      <div
        className="absolute left-0 right-0 top-0 h-[300px] pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 390 300\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(96.05 0 0 95.678 195 0)\"><stop stop-color=\"rgba(59,130,246,0.12)\" offset=\"0\"/><stop stop-color=\"rgba(59,130,246,0)\" offset=\"0.75\"/></radialGradient></defs></svg>')",
        }}
      />

      {/* ── Header ── */}
      <div
        className="flex items-center justify-between px-4 pt-14 pb-4 relative z-10"
        style={{ backdropFilter: 'blur(12px)', background: 'rgba(10,15,29,0.8)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        {/* Back button */}
        <button
          className="flex items-center justify-center rounded-full border-0 cursor-pointer"
          onClick={() => navigate('/history')}
          style={{ width: 40, height: 40, background: 'rgba(22,30,49,0.5)' }}
        >
          <svg fill="none" height="20" viewBox="0 0 11.775 20" width="11.775">
            <path d={svgPaths.p225a8cc0} fill="#F1F5F9" />
          </svg>
        </button>

        <h1 className="text-[16px] text-[#f1f5f9] tracking-[-0.4px]" style={{ fontWeight: 700 }}>
          Sleep Log Details
        </h1>

        {/* Share button */}
        <button
          className="flex items-center justify-center rounded-full border-0 cursor-pointer"
          style={{ width: 40, height: 40, background: 'rgba(22,30,49,0.5)' }}
        >
          <svg fill="none" height="21" viewBox="0 0 16 21" width="16">
            <path d={svgPaths.p394dd500} fill="#F1F5F9" />
          </svg>
        </button>
      </div>

      {/* ── Scrollable content ── */}
      <div className="flex-1 overflow-y-auto pb-[100px] relative z-10">

        {/* ── Hero / Mood section ── */}
        <div className="flex flex-col items-center pt-10 pb-6 relative">
          {/* Glow blob */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
            style={{ width: 220, height: 220, background: 'rgba(59,130,246,0.15)', filter: 'blur(48px)' }}
          />

          {/* Glassmorphism emoji card */}
          <div className="relative">
            <div
              className="flex items-center justify-center rounded-[40px] relative"
              style={{
                width: 116,
                height: 116,
                backdropFilter: 'blur(6px)',
                background: 'rgba(22,30,49,0.6)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
              }}
            >
              <span style={{ fontSize: 60, lineHeight: 1 }}>✨</span>
            </div>
          </div>

          {/* Feeling label */}
          <h2
            className="text-[30px] text-[#f1f5f9] text-center tracking-[-0.75px] mt-5"
            style={{ fontWeight: 700 }}
          >
            Feeling Great
          </h2>
          <p
            className="text-[14px] text-center tracking-[1.4px] uppercase mt-1"
            style={{ fontWeight: 600, color: 'rgba(147,197,253,0.8)' }}
          >
            Monday, Oct 24 • Consistent
          </p>
        </div>

        {/* ── Stats row ── */}
        <div className="flex gap-4 px-5 pb-6">
          {/* Duration card */}
          <div
            className="flex-1 rounded-[16px] p-5 relative overflow-hidden"
            style={{ background: '#161e31', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <svg fill="none" height="16.667" viewBox="0 0 16.667 16.667" width="16.667">
                <path d={svgPaths.p39919e0} fill="#93C5FD" />
              </svg>
              <span className="text-[10px] text-[#93c5fd] tracking-[0.5px] uppercase" style={{ fontWeight: 700, opacity: 0.8 }}>Duration</span>
            </div>
            <p className="text-[24px] text-[#f1f5f9] tracking-[-0.6px]" style={{ fontWeight: 700 }}>7h 45m</p>
          </div>

          {/* Window card */}
          <div
            className="flex-1 rounded-[16px] p-5 relative overflow-hidden"
            style={{ background: '#161e31', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <svg fill="none" height="16.667" viewBox="0 0 16.667 16.667" width="16.667">
                <path d={svgPaths.p76f6d80} fill="#93C5FD" />
              </svg>
              <span className="text-[10px] text-[#93c5fd] tracking-[0.5px] uppercase" style={{ fontWeight: 700, opacity: 0.8 }}>Window</span>
            </div>
            <div>
              <span className="text-[18px] text-[#f1f5f9] tracking-[-0.45px]" style={{ fontWeight: 700 }}>11:00 PM </span>
              <span className="text-[18px] text-[#64748b]" style={{ fontWeight: 500 }}>to</span>
              <br />
              <span className="text-[18px] text-[#f1f5f9] tracking-[-0.45px]" style={{ fontWeight: 700 }}>6:45 AM</span>
            </div>
          </div>
        </div>

        {/* ── Sleep Factors ── */}
        <div className="px-5 pb-6">
          <p className="text-[10px] text-[#94a3b8] tracking-[2px] uppercase mb-4 pl-1" style={{ fontWeight: 700 }}>Sleep Factors</p>
          <div className="flex flex-wrap gap-3">
            {SLEEP_FACTORS.map(factor => (
              <div
                key={factor.label}
                className="flex items-center gap-2 px-4 py-[11px] rounded-full relative"
                style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)' }}
              >
                <svg fill="none" height={factor.h} viewBox={`0 0 ${factor.w} ${factor.h}`} width={factor.w}>
                  <path d={factor.icon} fill="#3B82F6" />
                </svg>
                <span className="text-[12px] text-[#dbeafe]" style={{ fontWeight: 600 }}>{factor.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Daily Note ── */}
        <div className="px-5 pb-6">
          <p className="text-[10px] text-[#94a3b8] tracking-[2px] uppercase mb-4 pl-1" style={{ fontWeight: 700 }}>Daily Note</p>
          <div
            className="rounded-[16px] relative overflow-hidden"
            style={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'inset 0px 2px 4px 1px rgba(0,0,0,0.05)' }}
          >
            {/* Watermark quote icon */}
            <div className="absolute top-[-15px] right-[-15px] opacity-[0.03]" style={{ width: 68, height: 48 }}>
              <svg fill="none" height="48" viewBox="0 0 68 48" width="68">
                <path d={svgPaths.p3e7bd200} fill="#F1F5F9" />
              </svg>
            </div>
            <p
              className="text-[15px] text-[#cbd5e1] leading-[24px] px-6 py-6"
              style={{ fontWeight: 400 }}
            >
              "I felt very refreshed this morning. The room temperature was perfect at 68°F. Avoiding caffeine after 2 PM definitely helped me fall asleep faster within 10 minutes of lying down. Looking forward to keeping this streak!"
            </p>
          </div>
        </div>

      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-20">
        <NavBar activeTab="history" />
      </div>
    </div>
  );
}