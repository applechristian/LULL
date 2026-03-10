import { useNavigate } from 'react-router';

export function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col min-h-screen relative overflow-hidden"
      style={{ background: '#150a27', fontFamily: "'Manrope', sans-serif" }}
    >
      {/* ── Deep radial glow behind moon ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 340,
          height: 340,
          top: -40,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(109,40,217,0.35) 0%, rgba(109,40,217,0.08) 50%, transparent 75%)',
          filter: 'blur(10px)',
        }}
      />

      {/* ── Stars ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          [14, 18], [72, 12], [88, 28], [6, 42], [95, 55],
          [22, 65], [80, 70], [10, 80], [55, 88], [90, 90],
        ].map(([lp, tp], i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: i % 3 === 0 ? 2.5 : 1.5,
              height: i % 3 === 0 ? 2.5 : 1.5,
              left: `${lp}%`,
              top: `${tp}%`,
              opacity: 0.25 + (i % 4) * 0.1,
            }}
          />
        ))}
      </div>

      {/* ── Moon circle ── */}
      <div className="flex justify-center pt-[72px] relative z-10">
        <div className="relative">
          {/* Outer glow ring */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              inset: -18,
              background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
              filter: 'blur(16px)',
            }}
          />
          {/* Dark circle container */}
          <div
            className="flex items-center justify-center rounded-full relative"
            style={{
              width: 164,
              height: 164,
              background: 'radial-gradient(circle at 40% 40%, #1c0d35 0%, #0e0620 100%)',
              boxShadow: '0 0 0 1px rgba(124,58,237,0.15), 0 24px 48px rgba(0,0,0,0.5)',
            }}
          >
            {/* Crescent moon SVG */}
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
              <defs>
                <radialGradient id="wMoonGrad" cx="32%" cy="28%" r="75%">
                  <stop offset="0%" stopColor="#ede9fe" />
                  <stop offset="40%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#5b21b6" />
                </radialGradient>
              </defs>
              {/* Moon body */}
              <circle cx="34" cy="36" r="22" fill="url(#wMoonGrad)" />
              {/* Crescent bite */}
              <circle cx="44" cy="31" r="19" fill="#0e0620" />
              {/* Tiny stars */}
              <circle cx="14" cy="18" r="1.5" fill="rgba(255,255,255,0.75)" />
              <circle cx="58" cy="14" r="1" fill="rgba(255,255,255,0.55)" />
              <circle cx="62" cy="48" r="1" fill="rgba(255,255,255,0.4)" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Dots + brand label ── */}
      <div className="flex items-center justify-center gap-[7px] mt-10 relative z-10">
        <div className="rounded-full" style={{ width: 7, height: 7, background: '#7c3aed' }} />
        <div className="rounded-full" style={{ width: 7, height: 7, background: '#9f67ff' }} />
        <div className="rounded-full" style={{ width: 7, height: 7, background: '#c4a0ff' }} />
        <span
          className="text-[11px] tracking-[3px] uppercase ml-1"
          style={{ fontWeight: 700, color: '#c4a0ff' }}
        >
          Sleep Nudge
        </span>
      </div>

      {/* ── Hero copy ── */}
      <div className="flex flex-col items-center px-8 mt-6 gap-4 relative z-10">
        <h1
          className="text-[34px] text-white text-center leading-[42px] tracking-[-0.85px]"
          style={{ fontWeight: 700 }}
        >
          Welcome to<br />peaceful nights
        </h1>
        <p
          className="text-[15px] text-center leading-[24px] max-w-[300px]"
          style={{ fontWeight: 400, color: 'rgba(255,255,255,0.55)' }}
        >
          Join our community and discover a better way to wind down, relax, and embrace restful sleep.
        </p>
      </div>

      {/* ── CTA buttons ── */}
      <div className="flex flex-col gap-3 px-8 mt-10 relative z-10">
        {/* Get Started */}
        <button
          onClick={() => navigate('/signup')}
          className="w-full py-[18px] rounded-[16px] border-0 cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
            boxShadow: '0 8px 24px rgba(124,58,237,0.35)',
          }}
        >
          <span className="text-[16px] text-white" style={{ fontWeight: 700 }}>Get Started</span>
        </button>

        {/* Sign In */}
        <button
          onClick={() => navigate('/signin')}
          className="w-full py-[17px] rounded-[16px] cursor-pointer"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          <span className="text-[16px] text-white" style={{ fontWeight: 600 }}>Sign In</span>
        </button>
      </div>

      {/* ── Footer tagline ── */}
      <p
        className="text-[12px] text-center mt-8 relative z-10"
        style={{ fontWeight: 400, color: 'rgba(255,255,255,0.28)' }}
      >
        Your journey to better sleep starts here
      </p>
    </div>
  );
}
