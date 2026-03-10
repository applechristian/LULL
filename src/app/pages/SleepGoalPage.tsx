import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { NavBar } from '../components/NavBar';
import { ConfirmationModal } from '../components/ConfirmationModal';
import imgBackground from '../../assets/b697051867651c1c70feda63d623241c5e5b60a0.png';
import svgPaths from '../../imports/svg-kwxfom8chf';

// ── Geometry helpers ──────────────────────────────────────────
const RADIUS = 120;
const CX = 144;
const CY = 144;
const toRad = (d: number) => (d * Math.PI) / 180;

/** Map a 24-h time (e.g. 22, 30) → SVG angle (degrees) where midnight = top = −90° */
const timeToAngle = (hours: number, minutes: number): number =>
  -90 + ((hours + minutes / 60) / 24) * 360;

/** Map an SVG angle (degrees) back to a time string, snapped to 15-min */
const angleToTime = (angleDeg: number): string => {
  let clock = ((angleDeg + 90 + 720) % 360); // 0 at midnight, CW
  const totalMins = Math.round(((clock / 360) * 24 * 60) / 15) * 15;
  const h = Math.floor(totalMins / 60) % 24;
  const m = totalMins % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
};

/** Position of a handle on the circle rim (SVG coords) */
const rimPos = (angleDeg: number) => ({
  x: CX + RADIUS * Math.cos(toRad(angleDeg)),
  y: CY + RADIUS * Math.sin(toRad(angleDeg)),
});

export function SleepGoalPage() {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [bedtime, setBedtime] = useState('22:30');
  const [wakeup, setWakeup] = useState('06:45');
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef<'bed' | 'wake' | null>(null);

  // ── Duration calc ──────────────────────────────────────────
  const calcDuration = useCallback(() => {
    const [bh, bm] = bedtime.split(':').map(Number);
    const [wh, wm] = wakeup.split(':').map(Number);
    let mins = (wh * 60 + wm) - (bh * 60 + bm);
    if (mins < 0) mins += 24 * 60;
    return { h: Math.floor(mins / 60), m: mins % 60, total: mins };
  }, [bedtime, wakeup]);

  const { h: durH, m: durM, total } = calcDuration();
  const isOptimal = total >= 7 * 60 && total <= 9 * 60;

  const formatTime = (val: string) => {
    const [hh, mm] = val.split(':').map(Number);
    const period = hh >= 12 ? 'PM' : 'AM';
    const h12 = hh % 12 || 12;
    return `${h12.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')} ${period}`;
  };

  const nudgeTime = () => {
    const [bh, bm] = bedtime.split(':').map(Number);
    let t = bh * 60 + bm - 15;
    if (t < 0) t += 24 * 60;
    const h = Math.floor(t / 60) % 24;
    const m = t % 60;
    const period = h >= 12 ? 'PM' : 'AM';
    return `${(h % 12 || 12)}:${m.toString().padStart(2, '0')} ${period}`;
  };

  // ── Arc geometry ───────────────────────────────────────────
  const [bh, bm] = bedtime.split(':').map(Number);
  const [wh, wm] = wakeup.split(':').map(Number);
  const bedAngle = timeToAngle(bh, bm);
  const wakeAngle = timeToAngle(wh, wm);
  const bedPos = rimPos(bedAngle);
  const wakePos = rimPos(wakeAngle);
  let sweep = wakeAngle - bedAngle;
  if (sweep < 0) sweep += 360;
  const largeArc = sweep > 180 ? 1 : 0;

  // ── Global pointer listeners for drag ─────────────────────
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const time = angleToTime(angle);
      if (dragging.current === 'bed') setBedtime(time);
      else setWakeup(time);
    };
    const onUp = () => { dragging.current = null; };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  const startDrag = (handle: 'bed' | 'wake') => (e: React.PointerEvent) => {
    e.preventDefault();
    dragging.current = handle;
  };

  // ── Adjust time buttons (+/- 15 min) ──────────────────────
  const adjustTime = (which: 'bed' | 'wake', delta: number) => {
    const setter = which === 'bed' ? setBedtime : setWakeup;
    const val = which === 'bed' ? bedtime : wakeup;
    const [hh, mm] = val.split(':').map(Number);
    let t = hh * 60 + mm + delta;
    t = ((t % (24 * 60)) + 24 * 60) % (24 * 60);
    const nh = Math.floor(t / 60);
    const nm = t % 60;
    setter(`${nh.toString().padStart(2, '0')}:${nm.toString().padStart(2, '0')}`);
  };

  return (
    <div className="flex flex-col min-h-screen relative" style={{ background: '#0c111d', fontFamily: "'Manrope', sans-serif" }}>
      {/* Background image */}
      <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
        <img alt="" className="w-full h-full object-cover" src={imgBackground} />
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-8 pt-4 pb-0 relative z-10">
        <span className="text-[14px] text-[#f1f5f9]" style={{ fontWeight: 700 }}>9:41</span>
        <div className="flex gap-[6px] items-center">
          <svg fill="none" height="9.4" viewBox="0 0 8.75 9.35" width="8.75">
            <path d={svgPaths.p2b580700} fill="#f1f5f9" />
          </svg>
          <svg fill="none" height="9.1" viewBox="0 0 12.85 9.07" width="12.85">
            <path d={svgPaths.p24631200} fill="#f1f5f9" />
          </svg>
          <svg fill="none" height="11.6" viewBox="0 0 5.85 11.65" width="5.85">
            <path d={svgPaths.p33dbb200} fill="#f1f5f9" />
          </svg>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-8 pt-4 relative z-10">
        <div className="rounded-full overflow-hidden" style={{ height: 6, background: '#1e293b' }}>
          <div className="h-full rounded-full" style={{ width: '33.33%', background: '#135bec' }} />
        </div>
      </div>

      {/* Header */}
      <div className="px-8 pt-6 relative z-10">
        <h1 className="text-[30px] text-[#f1f5f9] tracking-[-0.75px] leading-[36px]" style={{ fontWeight: 800 }}>Set Your Sleep Goal</h1>
        <p className="text-[14px] text-[#94a3b8] leading-[22.75px] mt-2" style={{ fontWeight: 400 }}>
          Consistency is key. Adjust your ideal sleep window.
        </p>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-[100px] relative z-10">
        <div className="flex flex-col items-center px-8 pt-8 gap-8">

          {/* ── Interactive circular dial ── */}
          <div
            ref={containerRef}
            className="relative select-none"
            style={{ width: 288, height: 288, touchAction: 'none', cursor: 'default' }}
          >
            {/* Glow */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{ inset: 0, background: 'rgba(19,91,236,0.18)', filter: 'blur(32px)' }}
            />
            {/* Outer track ring */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{ inset: 0, border: '16px solid rgba(30,41,59,0.5)' }}
            />
            {/* Arc SVG */}
            <svg className="absolute" height="288" style={{ top: 0, left: 0 }} viewBox="0 0 288 288" width="288">
              <defs>
                <linearGradient id="arcGradSG" gradientUnits="userSpaceOnUse"
                  x1={bedPos.x} y1={bedPos.y} x2={wakePos.x} y2={wakePos.y}>
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#818CF8" />
                </linearGradient>
              </defs>
              {/* Dashed guide ring */}
              <circle cx="144" cy="144" r="120" fill="none"
                stroke="rgba(51,65,85,0.4)" strokeWidth="1" strokeDasharray="4 6" />
              {/* Sleep arc */}
              <path
                d={`M ${bedPos.x.toFixed(2)} ${bedPos.y.toFixed(2)} A ${RADIUS} ${RADIUS} 0 ${largeArc} 1 ${wakePos.x.toFixed(2)} ${wakePos.y.toFixed(2)}`}
                fill="none"
                stroke="url(#arcGradSG)"
                strokeLinecap="round"
                strokeWidth="44"
              />
            </svg>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-[10px] text-[#64748b] tracking-[1px] uppercase" style={{ fontWeight: 700 }}>Total Duration</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-[34px] text-white" style={{ fontWeight: 800 }}>{durH}h {durM}m</p>
              </div>
              {isOptimal ? (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full mt-1"
                  style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                  <svg fill="none" height="10" viewBox="0 0 10 10" width="10">
                    <path d={svgPaths.p308e100} fill="#10B981" />
                  </svg>
                  <span className="text-[10px] text-[#10b981]" style={{ fontWeight: 700 }}>OPTIMAL</span>
                </div>
              ) : (
                <span className="text-[10px] text-[#f59e0b] mt-1" style={{ fontWeight: 600 }}>
                  {total < 7 * 60 ? 'Too Short' : 'Too Long'}
                </span>
              )}
            </div>

            {/* ── Bedtime handle (moon) — draggable ── */}
            <div
              className="absolute flex items-center justify-center rounded-full cursor-grab active:cursor-grabbing"
              style={{
                width: 44,
                height: 44,
                left: bedPos.x - 22,
                top: bedPos.y - 22,
                background: '#1e3a5f',
                border: '2.5px solid #3b82f6',
                boxShadow: '0 0 14px rgba(59,130,246,0.45)',
                zIndex: 10,
                touchAction: 'none',
              }}
              onPointerDown={startDrag('bed')}
            >
              <svg fill="none" height="17" viewBox="0 0 15 15" width="17">
                <path d={svgPaths.p39c0a880} fill="#93C5FD" />
              </svg>
            </div>

            {/* ── Wake-up handle (sun) — draggable ── */}
            <div
              className="absolute flex items-center justify-center rounded-full cursor-grab active:cursor-grabbing"
              style={{
                width: 44,
                height: 44,
                left: wakePos.x - 22,
                top: wakePos.y - 22,
                background: '#2e1b5e',
                border: '2.5px solid #818cf8',
                boxShadow: '0 0 14px rgba(129,140,248,0.45)',
                zIndex: 10,
                touchAction: 'none',
              }}
              onPointerDown={startDrag('wake')}
            >
              <svg fill="none" height="18" viewBox="0 0 18.4 18.4" width="18">
                <path d={svgPaths.p3cbc5d00} fill="#A5B4FC" />
              </svg>
            </div>
          </div>

          {/* ── Time cards ── */}
          <div className="flex gap-4 w-full">
            {/* Bedtime card */}
            <div
              className="flex-1 rounded-[16px] flex flex-col items-center gap-2 p-4"
              style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(59,130,246,0.3)' }}
            >
              <p className="text-[11px] text-[#64748b] tracking-[0.8px] uppercase" style={{ fontWeight: 700 }}>Bedtime</p>
              {/* +/- buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => adjustTime('bed', -15)}
                  className="w-7 h-7 rounded-full flex items-center justify-center border-0 cursor-pointer"
                  style={{ background: 'rgba(59,130,246,0.15)', color: '#93c5fd', fontSize: 18, lineHeight: 1 }}
                >−</button>
                <p className="text-[20px] text-white text-center" style={{ fontWeight: 700, minWidth: 90 }}>
                  {formatTime(bedtime)}
                </p>
                <button
                  onClick={() => adjustTime('bed', 15)}
                  className="w-7 h-7 rounded-full flex items-center justify-center border-0 cursor-pointer"
                  style={{ background: 'rgba(59,130,246,0.15)', color: '#93c5fd', fontSize: 18, lineHeight: 1 }}
                >+</button>
              </div>
              <p className="text-[11px] text-[#64748b]">drag 🌙 on dial</p>
            </div>

            {/* Wake-up card */}
            <div
              className="flex-1 rounded-[16px] flex flex-col items-center gap-2 p-4"
              style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(129,140,248,0.3)' }}
            >
              <p className="text-[11px] text-[#64748b] tracking-[0.8px] uppercase" style={{ fontWeight: 700 }}>Wake Up</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => adjustTime('wake', -15)}
                  className="w-7 h-7 rounded-full flex items-center justify-center border-0 cursor-pointer"
                  style={{ background: 'rgba(129,140,248,0.15)', color: '#a5b4fc', fontSize: 18, lineHeight: 1 }}
                >−</button>
                <p className="text-[20px] text-white text-center" style={{ fontWeight: 700, minWidth: 90 }}>
                  {formatTime(wakeup)}
                </p>
                <button
                  onClick={() => adjustTime('wake', 15)}
                  className="w-7 h-7 rounded-full flex items-center justify-center border-0 cursor-pointer"
                  style={{ background: 'rgba(129,140,248,0.15)', color: '#a5b4fc', fontSize: 18, lineHeight: 1 }}
                >+</button>
              </div>
              <p className="text-[11px] text-[#64748b]">drag ☀️ on dial</p>
            </div>
          </div>

          {/* Bedtime nudge info */}
          <div
            className="w-full rounded-[12px]"
            style={{ background: 'rgba(19,91,236,0.1)', border: '1px solid rgba(19,91,236,0.2)' }}
          >
            <div className="flex items-center gap-4 p-[17px]">
              <div
                className="flex items-center justify-center rounded-full shrink-0"
                style={{ width: 40, height: 40, background: 'rgba(19,91,236,0.2)' }}
              >
                <svg fill="none" height="16.25" viewBox="0 0 16.64 16.25" width="16.64">
                  <path d={svgPaths.p38fd3200} fill="#135BEC" />
                </svg>
              </div>
              <div>
                <p className="text-[14px] text-[#f1f5f9] leading-[20px]" style={{ fontWeight: 700 }}>Bedtime Nudge</p>
                <p className="text-[12px] text-[#94a3b8] leading-[16px]" style={{ fontWeight: 400 }}>
                  We'll remind you to wind down at {nudgeTime()}.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="w-full flex flex-col gap-3">
            <button
              className="w-full flex items-center justify-center gap-2 py-4 rounded-[12px] cursor-pointer border-0 relative"
              onClick={() => setShowConfirm(true)}
              style={{ background: '#135bec', boxShadow: '0px 10px 15px -3px rgba(19,91,236,0.2), 0px 4px 6px -4px rgba(19,91,236,0.2)' }}
            >
              <span className="text-[16px] text-white" style={{ fontWeight: 700 }}>Set Sleep Goal</span>
              <svg fill="none" height="9.35" viewBox="0 0 9.35 9.35" width="9.35">
                <path d={svgPaths.p3fb3c700} fill="white" />
              </svg>
            </button>
            <p className="text-[12px] text-[#475569] text-center" style={{ fontWeight: 500 }}>
              You can change this anytime in Settings.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-20">
        <NavBar activeTab="settings" />
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        visible={showConfirm}
        icon={
          <svg fill="none" height="32" viewBox="0 0 24 24" width="32">
            <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"
              stroke="#135bec" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        }
        title="Sleep Goal Set!"
        message={`Bedtime ${formatTime(bedtime)} · Wake ${formatTime(wakeup)} · ${durH}h ${durM}m tracked nightly.`}
        buttonLabel="Go to Dashboard"
        accentColor="#135bec"
        onDone={() => { setShowConfirm(false); navigate('/home'); }}
      />
    </div>
  );
}