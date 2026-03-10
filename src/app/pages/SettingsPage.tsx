import { useState } from 'react';
import { useNavigate } from 'react-router';
import { NavBar } from '../components/NavBar';
import { ConfirmationModal } from '../components/ConfirmationModal';
import svgPaths from '../../imports/svg-ifeixpmlqa';

const BACK_ARROW = "M7.40625 0L0 6L7.40625 12";
const BELL_ICON = "M7.5 15.0375C6.6 15.0375 5.925 14.3625 5.925 13.4625H9.075C9.075 14.3625 8.4 15.0375 7.5 15.0375ZM13.725 11.8875L12.45 10.6125V6.5625C12.45 4.2 10.9875 2.2875 8.7375 1.7625V1.2375C8.7375 0.5625 8.175 0 7.5 0C6.825 0 6.2625 0.5625 6.2625 1.2375V1.7625C4.0125 2.2875 2.55 4.2 2.55 6.5625V10.6125L1.275 11.8875V12.525H13.725V11.8875Z";

type Tone = 'gentle' | 'motivational' | 'firm';
type Timing = '15m' | '30m' | '1h';

const TONE_PREVIEWS: Record<Tone, { emoji: string; message: string }> = {
  gentle: {
    emoji: '🌙',
    message: "Hey there, the stars are out. Time to put the phone away and ease into your wind-down routine. Rest well tonight.",
  },
  motivational: {
    emoji: '🚀',
    message: "You're crushing your sleep goals! Start your wind-down now and wake up feeling absolutely unstoppable tomorrow. Let's go! 💪",
  },
  firm: {
    emoji: '⏰',
    message: "Bedtime is in 30 minutes. Put the phone down and begin your routine NOW. Don't miss your sleep window — you'll feel the difference.",
  },
};

export function SettingsPage() {
  const navigate = useNavigate();
  const [tone, setTone] = useState<Tone>('gentle');
  const [timing, setTiming] = useState<Timing>('30m');
  const [weekendNudges, setWeekendNudges] = useState(true);
  const [quietHours, setQuietHours] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const toneOptions: { id: Tone; label: string; desc: string }[] = [
    { id: 'gentle', label: 'Gentle 🌙', desc: 'Soft, calming reminders to start winding down.' },
    { id: 'motivational', label: 'Motivational 🚀', desc: 'Energetic encouragement to stay on track with goals.' },
    { id: 'firm', label: 'Firm ⏰', desc: "Direct alerts to ensure you don't miss your sleep window." },
  ];

  const timingOptions: { id: Timing; label: string }[] = [
    { id: '15m', label: '15m' },
    { id: '30m', label: '30m' },
    { id: '1h', label: '1h' },
  ];

  const preview = TONE_PREVIEWS[tone];

  return (
    <div className="flex flex-col min-h-screen" style={{ background: '#101622', fontFamily: "'Manrope', sans-serif" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-12 pb-4 relative" style={{ backdropFilter: 'blur(10px)', background: 'rgba(16,22,34,0.8)' }}>
        <button
          className="bg-transparent border-0 cursor-pointer p-0"
          onClick={() => navigate('/home')}
        >
          <svg fill="none" height="12" viewBox="0 0 7.41 12" width="7.41">
            <path d={BACK_ARROW} fill="#135bec" fillRule="evenodd" strokeLinecap="round" />
          </svg>
        </button>
        <h1
          className="absolute text-[18px] text-[#f1f5f9] leading-[28px]"
          style={{ fontWeight: 700, left: '50%', transform: 'translateX(-50%)' }}
        >
          Nudge
        </h1>
        <div style={{ width: 7.41 }} />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-[100px]">
        <div className="flex flex-col gap-8 px-6 pt-8">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[30px] text-white tracking-[-0.75px] leading-[36px]" style={{ fontWeight: 700 }}>Nudge Settings</h2>
            <p className="text-[16px] text-[#94a3b8] leading-[24px]" style={{ fontWeight: 400 }}>
              Customize how you want to be reminded to start your wind-down routine.
            </p>
          </div>

          {/* Notification preview — live changes with tone */}
          <div
            className="rounded-[16px] relative overflow-hidden transition-all duration-300"
            style={{ background: 'rgba(19,91,236,0.05)', border: '1px solid rgba(19,91,236,0.2)' }}
          >
            <div className="flex flex-col gap-3 p-[21px]">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-[8px] shrink-0" style={{ width: 27, height: 27, background: '#135bec' }}>
                  <svg fill="none" height="15" viewBox="0 0 15 15" width="15">
                    <path d={BELL_ICON} fill="white" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] tracking-[1px] uppercase leading-[15px]" style={{ fontWeight: 700, color: 'rgba(19,91,236,0.8)' }}>Notification Preview</p>
                  <p className="text-[14px] text-[#f1f5f9] leading-[20px]" style={{ fontWeight: 600 }}>Tonight at 9:30 PM</p>
                </div>
              </div>
              <div
                className="rounded-[12px] p-[17px]"
                style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid #334155' }}
              >
                <p className="text-[13px] leading-[20px]" style={{ fontWeight: 500, color: 'rgba(255,255,255,0.85)' }}>
                  <span className="mr-1">{preview.emoji}</span>
                  {preview.message}
                </p>
              </div>
            </div>
            <div
              className="absolute bottom-[-15px] right-[-15px] opacity-10"
              style={{ width: 80, height: 80 }}
            >
              <svg fill="none" height="80" viewBox="0 0 80 80" width="80">
                <path d={svgPaths.p1b031998} fill="#135BEC" />
              </svg>
            </div>
          </div>

          {/* Nudge Tone */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] text-[#f1f5f9] leading-[28px]" style={{ fontWeight: 700 }}>Nudge Tone</h3>
              <div className="px-2 py-1 rounded-full" style={{ background: 'rgba(19,91,236,0.1)' }}>
                <span className="text-[12px] text-[#135bec] leading-[16px]" style={{ fontWeight: 700 }}>ACTIVE</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {toneOptions.map(opt => {
                const isSelected = tone === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setTone(opt.id)}
                    className="flex items-center p-[18px] rounded-[16px] cursor-pointer w-full text-left transition-all duration-200"
                    style={{
                      background: '#0f172a',
                      border: isSelected ? '2px solid #135bec' : '2px solid transparent',
                    }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[16px] text-[#f1f5f9] leading-[24px]" style={{ fontWeight: 700 }}>{opt.label}</span>
                        {isSelected && (
                          <svg fill="none" height="15" viewBox="0 0 15 15" width="15">
                            <path d={svgPaths.p3e48b80} fill="#135BEC" />
                          </svg>
                        )}
                      </div>
                      <p className="text-[14px] text-[#94a3b8] leading-[20px]" style={{ fontWeight: 400 }}>{opt.desc}</p>
                    </div>
                    {/* Radio indicator */}
                    <div
                      className="rounded-full shrink-0 ml-4"
                      style={{
                        width: 20,
                        height: 20,
                        border: isSelected ? '6px solid #135bec' : '2px solid #334155',
                        background: '#334155',
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Timing */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[18px] text-[#f1f5f9] leading-[28px]" style={{ fontWeight: 700 }}>Timing</h3>
            <p className="text-[14px] text-[#94a3b8] leading-[20px]" style={{ fontWeight: 400 }}>How long before bed should we nudge you?</p>
            <div className="flex gap-3">
              {timingOptions.map(opt => {
                const isSelected = timing === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setTiming(opt.id)}
                    className="flex-1 py-3 rounded-[12px] cursor-pointer border-0"
                    style={{ background: isSelected ? '#135bec' : '#1e293b' }}
                  >
                    <span
                      className="text-[16px] leading-[24px]"
                      style={{ fontWeight: 700, color: isSelected ? 'white' : '#94a3b8' }}
                    >
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Toggles */}
          <div className="rounded-[16px] overflow-hidden" style={{ background: '#0f172a', border: '1px solid #1e293b' }}>
            {/* Weekend Nudges */}
            <div className="flex items-center justify-between px-4 py-4">
              <div className="flex items-center gap-3">
                <svg fill="none" height="20" viewBox="0 0 18 20" width="18">
                  <path d={svgPaths.pdbf5c00} fill="#94A3B8" />
                </svg>
                <span className="text-[14px] text-[#f1f5f9] leading-[20px]" style={{ fontWeight: 500 }}>Weekend Nudges</span>
              </div>
              <button
                onClick={() => setWeekendNudges(v => !v)}
                className="relative rounded-full cursor-pointer border-0 transition-colors duration-200"
                style={{ width: 44, height: 24, background: weekendNudges ? '#135bec' : '#334155' }}
              >
                <div
                  className="absolute top-[4px] rounded-full bg-white shadow-sm transition-all duration-200"
                  style={{ width: 16, height: 16, left: weekendNudges ? 24 : 4 }}
                />
              </button>
            </div>
            {/* Divider */}
            <div style={{ borderTop: '1px solid #1e293b' }} />
            {/* Quiet Hours */}
            <div className="flex items-center justify-between px-4 py-[17px]">
              <div className="flex items-center gap-3">
                <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                  <path d={svgPaths.p28b89db4} fill="#94A3B8" />
                </svg>
                <span className="text-[14px] text-[#f1f5f9] leading-[20px]" style={{ fontWeight: 500 }}>Quiet Hours</span>
              </div>
              <button
                onClick={() => setQuietHours(v => !v)}
                className="relative rounded-full cursor-pointer border-0 transition-colors duration-200"
                style={{ width: 44, height: 24, background: quietHours ? '#135bec' : '#334155' }}
              >
                <div
                  className="absolute top-[4px] rounded-full bg-white shadow-sm transition-all duration-200"
                  style={{ width: 16, height: 16, left: quietHours ? 24 : 4 }}
                />
              </button>
            </div>
          </div>

          {/* Save Configuration */}
          <div className="flex flex-col items-center gap-3">
            <button
              className="w-full flex items-center justify-center py-4 rounded-[16px] cursor-pointer border-0 relative"
              onClick={() => setShowConfirm(true)}
              style={{ background: '#135bec', boxShadow: '0px 10px 15px -3px rgba(19,91,236,0.2), 0px 4px 6px -4px rgba(19,91,236,0.2)' }}
            >
              <span className="text-[16px] text-white" style={{ fontWeight: 700 }}>Save Configuration</span>
            </button>
            <p className="text-[12px] text-[#64748b] text-center leading-[16px]" style={{ fontWeight: 400 }}>
              Consistent nudge timing improves sleep quality by 24%.
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
          <svg fill="none" height="32" viewBox="0 0 32 32" width="32">
            <path d="M4 8H28V24C28 25.1 27.1 26 26 26H6C4.9 26 4 25.1 4 24V8ZM4 8V7C4 5.9 4.9 5 6 5H26C27.1 5 28 5.9 28 7V8M12 13L15 16L20 11"
              stroke="#135bec" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" />
          </svg>
        }
        title="Settings Saved!"
        message="Your nudge configuration has been updated and will apply starting tonight."
        buttonLabel="Done"
        accentColor="#135bec"
        onDone={() => setShowConfirm(false)}
      />
    </div>
  );
}