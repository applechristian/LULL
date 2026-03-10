import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ConfirmationModal } from '../components/ConfirmationModal';

// Sparkle ✦ positions around the moon (angle, radius from centre)
const SPARKLES = [
  { angle: -50,  r: 118, size: 14, delay: 0    },
  { angle: 15,   r: 106, size: 10, delay: 0.6  },
  { angle: 110,  r: 124, size: 7,  delay: 1.1  },
  { angle: 200,  r: 110, size: 12, delay: 0.3  },
  { angle: 260,  r: 130, size: 8,  delay: 1.5  },
];

function toXY(angle: number, r: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: Math.cos(rad) * r, y: Math.sin(rad) * r };
}

function Sparkle({ angle, r, size, delay }: { angle: number; r: number; size: number; delay: number }) {
  const { x, y } = toXY(angle, r);
  return (
    <motion.div
      animate={{ opacity: [0.2, 1, 0.2], scale: [0.7, 1.15, 0.7] }}
      className="absolute"
      style={{ left: '50%', top: '50%', marginLeft: x - size / 2, marginTop: y - size / 2 }}
      transition={{ duration: 2.8, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
        <path
          d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5Z"
          fill="white"
        />
      </svg>
    </motion.div>
  );
}

function formatTime(secs: number) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  if (h > 0) return `${h}h ${String(m).padStart(2, '0')}m`;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function SleepTrackingPage() {
  const navigate = useNavigate();
  const [elapsed, setElapsed] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => setElapsed(s => s + 1), 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const handleEndSleep = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setShowConfirm(true);
  };

  return (
    <div
      className="flex flex-col min-h-screen relative overflow-hidden"
      style={{ background: '#130e22', fontFamily: "'Manrope', sans-serif" }}
    >
      {/* ── Deep-space star field ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          [8,8],[18,22],[32,6],[60,15],[75,8],[88,18],[95,35],
          [5,48],[12,62],[90,55],[82,72],[70,85],[25,90],[45,96],
          [55,42],[38,70],[65,60],
        ].map(([l, t], i) => (
          <motion.div
            animate={{ opacity: [0.15, 0.6, 0.15] }}
            className="absolute rounded-full bg-white"
            key={i}
            style={{ width: i % 4 === 0 ? 2 : 1.5, height: i % 4 === 0 ? 2 : 1.5, left: `${l}%`, top: `${t}%` }}
            transition={{ duration: 3 + (i % 5) * 0.7, delay: i * 0.18, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* ── Moon section (top ~58%) ── */}
      <div className="flex flex-col items-center justify-center relative z-10" style={{ flex: '0 0 58%', minHeight: '58vh' }}>

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-12 left-5 flex items-center gap-2 border-0 bg-transparent cursor-pointer z-20"
          style={{ color: 'rgba(255,255,255,0.6)' }}
        >
          <svg fill="none" height="12" viewBox="0 0 8 14" width="8">
            <path d="M7 1L1 7L7 13" stroke="rgba(255,255,255,0.6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          </svg>
          <span className="text-[15px]" style={{ fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>Back</span>
        </button>

        {/* Outer ambient glow */}
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.95, 1.05, 0.95] }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 280,
            height: 280,
            background: 'radial-gradient(circle, rgba(109,40,217,0.45) 0%, rgba(109,40,217,0.1) 55%, transparent 75%)',
            filter: 'blur(18px)',
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Moon circle */}
        <motion.div
          animate={{ scale: [1, 1.025, 1] }}
          className="relative flex items-center justify-center rounded-full"
          style={{
            width: 172,
            height: 172,
            background: 'radial-gradient(circle at 38% 38%, #2e1960 0%, #160b30 65%, #0e0620 100%)',
            boxShadow:
              '0 0 0 1px rgba(124,58,237,0.18), 0 0 40px 8px rgba(109,40,217,0.28), 0 24px 60px rgba(0,0,0,0.6)',
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Crescent moon */}
          <svg fill="none" height="80" viewBox="0 0 80 80" width="80">
            <defs>
              <radialGradient cx="30%" cy="28%" id="moonGrad" r="80%">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="35%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#3b0764" />
              </radialGradient>
            </defs>
            <circle cx="38" cy="40" r="26" fill="url(#moonGrad)" />
            <circle cx="50" cy="34" r="22" fill="#0e0620" />
          </svg>

          {/* Sparkles orbiting the moon */}
          {SPARKLES.map((s, i) => <Sparkle key={i} {...s} />)}
        </motion.div>

        {/* Dots indicator */}
        <div className="flex gap-[7px] mt-9">
          <div className="rounded-full" style={{ width: 8, height: 8, background: '#7c3aed' }} />
          <div className="rounded-full" style={{ width: 8, height: 8, background: 'rgba(255,255,255,0.25)' }} />
          <div className="rounded-full" style={{ width: 8, height: 8, background: 'rgba(255,255,255,0.15)' }} />
        </div>
      </div>

      {/* ── Bottom card ── */}
      <div
        className="relative z-10 mx-4 mb-8 rounded-[28px] flex flex-col items-center px-6 pt-7 pb-8 gap-2"
        style={{
          background: 'rgba(30,18,56,0.92)',
          border: '1px solid rgba(124,58,237,0.18)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.35)',
        }}
      >
        {/* Brand label */}
        <div className="flex items-center gap-[6px] mb-1">
          <svg fill="none" height="10" viewBox="0 0 24 24" width="10">
            <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5Z" fill="#a78bfa" />
          </svg>
          <span
            className="text-[10px] tracking-[2.5px] uppercase"
            style={{ fontWeight: 700, color: '#a78bfa' }}
          >
            Sleep Nudge
          </span>
        </div>

        {/* Zzz heading */}
        <motion.h1
          animate={{ y: [0, -5, 0] }}
          className="text-white text-center tracking-[-1px]"
          style={{ fontSize: 46, fontWeight: 700, lineHeight: 1.1 }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          Zzz…
        </motion.h1>

        {/* Subtitle */}
        <p
          className="text-center leading-[22px] mt-1"
          style={{ fontSize: 15, fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}
        >
          Shhhh...sleep tracking in progress
        </p>

        {/* Elapsed time */}
        <div
          className="flex items-center gap-2 mt-3 px-5 py-2 rounded-full"
          style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)' }}
        >
          <svg fill="none" height="14" viewBox="0 0 20 20" width="14">
            <path
              d="M13.3 14.7L14.7 13.3L11 9.6V5H9V10.4L13.3 14.7ZM10 20C8.6 20 7.3 19.74 6.1 19.21C4.9 18.69 3.8 17.97 2.9 17.07C2 16.17 1.3 15.12 0.79 13.9C0.26 12.68 0 11.38 0 10C0 8.6 0.26 7.3 0.79 6.1C1.3 4.9 2 3.8 2.9 2.9C3.8 2 4.9 1.3 6.1 0.79C7.3 0.26 8.6 0 10 0C11.4 0 12.7 0.26 13.9 0.79C15.1 1.3 16.2 2 17.1 2.9C18 3.8 18.7 4.9 19.21 6.1C19.74 7.3 20 8.6 20 10C20 11.38 19.74 12.68 19.21 13.9C18.7 15.12 18 16.17 17.1 17.07C16.2 17.97 15.1 18.69 13.9 19.21C12.7 19.74 11.4 20 10 20Z"
              fill="#a78bfa"
            />
          </svg>
          <span className="text-[14px] tabular-nums" style={{ fontWeight: 600, color: '#c4b5fd' }}>
            {formatTime(elapsed)}
          </span>
        </div>

        {/* End Sleep button */}
        <button
          onClick={handleEndSleep}
          className="w-full flex items-center justify-center gap-[10px] rounded-full border-0 cursor-pointer mt-4"
          style={{
            height: 60,
            background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
            boxShadow: '0 8px 30px rgba(124,58,237,0.45), 0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          {/* Crescent icon */}
          <svg fill="none" height="18" viewBox="0 0 20 20" width="18">
            <path
              d="M10.1 20C8.7 20 7.4 19.73 6.16 19.2C4.94 18.69 3.87 17.95 2.96 17.04C2.05 16.12 1.33 15.06 0.8 13.84C0.27 12.61 0 11.3 0 9.9C0 7.47 0.78 5.32 2.33 3.46C3.88 1.6 5.85 0.45 8.25 0C7.95 1.65 8.04 3.26 8.53 4.84C9.01 6.41 9.84 7.79 11.03 8.97C12.21 10.16 13.59 10.99 15.16 11.48C16.74 11.96 18.35 12.05 20 11.75C19.57 14.15 18.42 16.13 16.55 17.68C14.68 19.23 12.53 20 10.1 20Z"
              fill="white"
            />
          </svg>
          <span className="text-[17px] text-white" style={{ fontWeight: 700 }}>End Sleep</span>
        </button>
      </div>
      <ConfirmationModal
        visible={showConfirm}
        icon={
          <svg fill="none" height="32" viewBox="0 0 32 32" width="32">
            <path d="M16 3C8.82 3 3 8.82 3 16C3 23.18 8.82 29 16 29C23.18 29 29 23.18 29 16C29 8.82 23.18 3 16 3ZM14 22.5L8 16.5L9.41 15.09L14 19.67L22.59 11.09L24 12.5L14 22.5Z"
              fill="#7c3aed" />
          </svg>
        }
        title="Sleep Session Ended"
        message={`You slept for ${formatTime(elapsed)}. Great job winding down — sweet dreams! 🌙`}
        buttonLabel="Back to Home"
        accentColor="#7c3aed"
        onDone={() => { setShowConfirm(false); navigate('/home'); }}
      />
    </div>
  );
}