import { useState } from 'react';
import { useNavigate } from 'react-router';
import { NavBar } from '../components/NavBar';
import { ConfirmationModal } from '../components/ConfirmationModal';
import svgPaths from '../../imports/svg-9ybsdinr8k';

const MOODS = [
  { id: 'awful', emoji: '😫', label: 'Awful' },
  { id: 'poor', emoji: '😕', label: 'Poor' },
  { id: 'okay', emoji: '😐', label: 'Okay' },
  { id: 'good', emoji: '🙂', label: 'Good' },
  { id: 'great', emoji: '🤩', label: 'Great' },
];

const INFLUENCES = [
  { id: 'stress', label: 'Stress', color: '#F87171', emoji: '🔴' },
  { id: 'caffeine', label: 'Caffeine', color: '#135BEC', emoji: '☕' },
  { id: 'screen', label: 'Screen Time', color: '#60A5FA', emoji: '📱' },
  { id: 'quiet', label: 'Quiet Room', color: '#135BEC', emoji: '🔇' },
  { id: 'meal', label: 'Late Meal', color: '#FB923C', emoji: '🍽️' },
  { id: 'exercise', label: 'Exercise', color: '#4ADE80', emoji: '⚡' },
];

const BACK_ARROW = "M7.40625 0L7.40625 0L0 6L7.40625 12";

export function LogPage() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState('okay');
  const [selectedInfluences, setSelectedInfluences] = useState<Set<string>>(new Set(['caffeine', 'quiet']));
  const [reflection, setReflection] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  const toggleInfluence = (id: string) => {
    setSelectedInfluences(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="flex flex-col min-h-screen" style={{ background: '#101622', fontFamily: "'Manrope', sans-serif" }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-8 pt-4 pb-0">
        <span className="text-[12px] text-[#f1f5f9]" style={{ fontWeight: 700 }}>9:41</span>
        <div className="flex gap-[6px] items-center">
          <svg fill="none" height="9.4" viewBox="0 0 8.75 9.35" width="8.75">
            <path d={svgPaths.p1e40b640} fill="#f1f5f9" />
          </svg>
          <svg fill="none" height="9.1" viewBox="0 0 12.85 9.08" width="12.85">
            <path d={svgPaths.p16155f80} fill="#f1f5f9" />
          </svg>
          <svg fill="none" height="11.6" viewBox="0 0 5.85 11.65" width="5.85">
            <path d={svgPaths.p33e4e300} fill="#f1f5f9" />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <button
          className="bg-transparent border-0 cursor-pointer p-0"
          onClick={() => navigate('/home')}
        >
          <svg fill="none" height="12" viewBox="0 0 7.41 12" width="7.41">
            <path d={BACK_ARROW} fill="#135bec" fillRule="evenodd" strokeLinecap="round" />
          </svg>
        </button>
        <h1 className="text-[18px] text-[#f1f5f9] tracking-[-0.45px]" style={{ fontWeight: 700 }}>Log Sleep</h1>
        <div style={{ width: 7.41 }} />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-[100px]">
        <div className="flex flex-col gap-8 px-6 pt-4">
          {/* Date */}
          <div>
            <p className="text-[14px] text-[#94a3b8] leading-[20px] uppercase" style={{ fontWeight: 500 }}>For Last Night</p>
            <h2 className="text-[24px] text-[#f1f5f9] leading-[32px]" style={{ fontWeight: 700 }}>Thursday, Oct 24</h2>
          </div>

          {/* Mood selector */}
          <div className="flex flex-col gap-4">
            <p className="text-[14px] text-[#cbd5e1] leading-[20px]" style={{ fontWeight: 600 }}>How do you feel after waking up?</p>
            <div
              className="rounded-[12px] relative"
              style={{ background: 'rgba(19,91,236,0.1)', border: '1px solid rgba(19,91,236,0.1)' }}
            >
              <div className="flex items-center justify-between px-4 py-4">
                {MOODS.map(mood => {
                  const isSelected = selectedMood === mood.id;
                  return (
                    <button
                      key={mood.id}
                      onClick={() => setSelectedMood(mood.id)}
                      className="flex flex-col items-center gap-[6px] cursor-pointer bg-transparent border-0 relative"
                    >
                      {isSelected && (
                        <div
                          className="absolute rounded-[8px]"
                          style={{ inset: '-8px -8px -8px -8px', background: 'rgba(19,91,236,0.2)', border: '2px solid #135bec', boxShadow: '0px 0px 0px 2px #135bec' }}
                        />
                      )}
                      <span className="text-[28px] relative z-10" style={{ transform: isSelected ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.2s' }}>
                        {mood.emoji}
                      </span>
                      <span
                        className="text-[10px] relative z-10"
                        style={{ fontWeight: 700, color: isSelected ? '#135bec' : '#64748b' }}
                      >
                        {mood.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Influences */}
          <div className="flex flex-col gap-4">
            <p className="text-[14px] text-[#cbd5e1] leading-[20px]" style={{ fontWeight: 600 }}>What influenced your sleep?</p>
            <div className="flex flex-wrap gap-2">
              {INFLUENCES.map(inf => {
                const isSelected = selectedInfluences.has(inf.id);
                return (
                  <button
                    key={inf.id}
                    onClick={() => toggleInfluence(inf.id)}
                    className="flex items-center gap-2 px-[17px] py-[9px] rounded-full cursor-pointer relative"
                    style={{
                      background: isSelected ? 'rgba(19,91,236,0.2)' : '#0f172a',
                      border: isSelected ? '2px solid #135bec' : '1px solid #1e293b',
                    }}
                  >
                    <span className="text-[10.5px]">{inf.emoji}</span>
                    <span
                      className="text-[14px] text-[#f1f5f9] leading-[20px]"
                      style={{ fontWeight: isSelected ? 600 : 500 }}
                    >
                      {inf.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Personal Reflection */}
          <div className="flex flex-col gap-4">
            <p className="text-[14px] text-[#cbd5e1] leading-[20px]" style={{ fontWeight: 600 }}>Personal Reflection</p>
            <div className="relative rounded-[12px] overflow-hidden" style={{ background: '#0f172a', border: '1px solid #1e293b' }}>
              <textarea
                className="w-full bg-transparent px-[17px] pt-[17px] pb-[57px] text-[14px] text-[#f1f5f9] resize-none outline-none border-0 leading-[20px]"
                onChange={e => setReflection(e.target.value)}
                placeholder="Why did you feel this way? Any specific dreams or events?"
                rows={4}
                style={{ fontFamily: "'Manrope', sans-serif", color: reflection ? '#f1f5f9' : undefined }}
                value={reflection}
              />
              <div className="absolute bottom-3 right-3">
                <svg fill="none" height="11.25" viewBox="0 0 13.6 11.25" width="13.6">
                  <path d={svgPaths.pcb8e900} fill="#94a3b8" />
                </svg>
              </div>
            </div>
          </div>

          {/* Consistency Nudge */}
          <div
            className="rounded-[12px] relative overflow-hidden"
            style={{ background: 'rgba(19,91,236,0.1)', border: '1px solid rgba(19,91,236,0.2)' }}
          >
            <div className="flex items-center gap-4 px-[17px] pt-[25px] pb-[17px]">
              <div className="flex items-center justify-center rounded-[8px] shrink-0" style={{ width: 48, height: 48, background: '#135bec' }}>
                <svg fill="none" height="22" viewBox="0 0 22 22" width="22">
                  <path d={svgPaths.p26ed17a0} fill="white" />
                </svg>
              </div>
              <div>
                <p className="text-[14px] text-[#135bec] leading-[20px]" style={{ fontWeight: 700 }}>Consistency Nudge</p>
                <p className="text-[11px] text-[#94a3b8] leading-[13.75px]" style={{ fontWeight: 400 }}>
                  You've logged 4 days in a row! Keeping track helps identify your best sleep patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Log Sleep Session button */}
      <div
        className="fixed z-20 flex flex-col items-center"
        style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 430, background: 'rgba(16,22,34,0.8)', borderTop: '1px solid #1e293b', backdropFilter: 'blur(8px)', paddingTop: 17 }}
      >
        <button
          className="flex items-center justify-center gap-2 py-[14px] rounded-[12px] cursor-pointer border-0 relative"
          onClick={() => setShowConfirm(true)}
          style={{ width: 342, background: '#135bec', boxShadow: '0px 10px 15px -3px rgba(19,91,236,0.3), 0px 4px 6px -4px rgba(19,91,236,0.3)' }}
        >
          <svg fill="none" height="15" viewBox="0 0 15 15" width="15">
            <path d={svgPaths.pa8fa780} fill="white" />
          </svg>
          <span className="text-[14px] text-white" style={{ fontWeight: 700 }}>Log Sleep Session</span>
        </button>
        <div className="w-full">
          <NavBar activeTab="log" />
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        visible={showConfirm}
        icon={
          <svg fill="none" height="32" viewBox="0 0 32 32" width="32">
            <path d="M16 3C8.82 3 3 8.82 3 16C3 23.18 8.82 29 16 29C23.18 29 29 23.18 29 16C29 8.82 23.18 3 16 3ZM14 22.5L8 16.5L9.41 15.09L14 19.67L22.59 11.09L24 12.5L14 22.5Z"
              fill="#135bec" />
          </svg>
        }
        title="Sleep Log Saved!"
        message="Your sleep log has been recorded. Keep tracking to uncover your sleep patterns."
        buttonLabel="Go to Dashboard"
        accentColor="#135bec"
        onDone={() => { setShowConfirm(false); navigate('/home'); }}
      />
    </div>
  );
}