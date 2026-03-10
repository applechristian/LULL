import { useState } from 'react';
import { useNavigate } from 'react-router';
import { NavBar } from '../components/NavBar';

const DAYS = [
  { day: 'MON', date: 21 },
  { day: 'TUE', date: 22 },
  { day: 'WED', date: 23 },
  { day: 'THU', date: 24 },
  { day: 'FRI', date: 25 },
  { day: 'SAT', date: 26 },
];

const LOGS = [
  {
    id: 1,
    label: 'TONIGHT',
    date: 'Thursday, Oct 24',
    mood: '🙂',
    factors: [
      { label: 'CAFFEINE', icon: '☕', color: '#94a3b8' },
      { label: 'QUIET ROOM', icon: '🔇', color: '#94a3b8' },
    ],
  },
  {
    id: 2,
    label: 'YESTERDAY',
    date: 'Wednesday, Oct 23',
    mood: '🤩',
    factors: [
      { label: 'EXERCISE', icon: '⚡', color: '#94a3b8' },
      { label: 'COOL TEMP', icon: '❄️', color: '#94a3b8' },
    ],
  },
  {
    id: 3,
    label: '2 DAYS AGO',
    date: 'Tuesday, Oct 22',
    mood: '😐',
    factors: [
      { label: 'STRESS', icon: '🔴', color: '#F87171', highlight: true },
      { label: 'SCREEN TIME', icon: '📱', color: '#94a3b8' },
    ],
  },
  {
    id: 4,
    label: '3 DAYS AGO',
    date: 'Monday, Oct 21',
    mood: '😐',
    factors: [
      { label: 'LATE MEAL', icon: '🍽️', color: '#94a3b8' },
    ],
  },
];

const BACK_ARROW = "M7.40625 0L7.40625 0L0 6L7.40625 12";
const FILTER_PATH = "M0 12V10H6V12H0V12M2 7V5H10V7H2V7M4 2V0H14V2H4V2";

export function HistoryPage() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(24);
  const [month] = useState('October 2024');

  return (
    <div className="flex flex-col min-h-screen" style={{ background: '#101622', fontFamily: "'Manrope', sans-serif" }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-8 pt-4 pb-0">
        <span className="text-[12px] text-[#f1f5f9]" style={{ fontWeight: 700 }}>9:41</span>
        <div className="flex gap-[6px] items-center">
          <span className="text-[10px] text-[#f1f5f9]">●●●</span>
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
        <h1 className="text-[18px] text-[#f1f5f9] leading-[28px]" style={{ fontWeight: 700 }}>Sleep History</h1>
        <button className="bg-transparent border-0 cursor-pointer p-0">
          <svg fill="none" height="12" viewBox="0 0 14 12" width="14">
            <path d={FILTER_PATH} fill="#135bec" />
          </svg>
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-[100px]">
        <div className="flex flex-col gap-6 px-6">
          {/* Month navigation */}
          <div className="flex items-center justify-between">
            <h2 className="text-[24px] text-[#f1f5f9] leading-[32px]" style={{ fontWeight: 700 }}>{month}</h2>
            <div className="flex gap-2 items-center">
              <button className="text-[#94a3b8] bg-transparent border-0 cursor-pointer text-[18px]">‹</button>
              <button className="text-[#94a3b8] bg-transparent border-0 cursor-pointer text-[18px]">›</button>
            </div>
          </div>

          {/* Week calendar strip */}
          <div className="flex gap-1 justify-between">
            {DAYS.map(({ day, date }) => {
              const isSelected = date === selectedDay;
              return (
                <button
                  key={date}
                  onClick={() => setSelectedDay(date)}
                  className="flex flex-col items-center gap-1 py-2 px-2 rounded-[12px] cursor-pointer border-0 flex-1"
                  style={{
                    background: isSelected ? '#135bec' : 'transparent',
                  }}
                >
                  <span
                    className="text-[10px] uppercase leading-[15px]"
                    style={{ fontWeight: 700, color: isSelected ? 'rgba(255,255,255,0.8)' : '#64748b' }}
                  >
                    {day}
                  </span>
                  <span
                    className="text-[16px] leading-[24px]"
                    style={{ fontWeight: 700, color: isSelected ? 'white' : '#94a3b8' }}
                  >
                    {date}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Monthly summary card */}
          <div
            className="rounded-[16px] flex items-center gap-4 px-5 py-4"
            style={{ background: '#135bec' }}
          >
            <div
              className="flex items-center justify-center rounded-[12px] shrink-0"
              style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.2)' }}
            >
              <span className="text-[24px]">😊</span>
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-[rgba(255,255,255,0.7)] tracking-[1px] uppercase leading-[15px]" style={{ fontWeight: 700 }}>Monthly Mood</p>
              <p className="text-[24px] text-white leading-[32px]" style={{ fontWeight: 700 }}>Good</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-[rgba(255,255,255,0.7)] tracking-[1px] uppercase leading-[15px]" style={{ fontWeight: 700 }}>Avg Sleep</p>
              <p className="text-[24px] text-white leading-[32px]" style={{ fontWeight: 700 }}>7h 45m</p>
            </div>
          </div>

          {/* Recent logs */}
          <div className="flex flex-col gap-1">
            <p className="text-[12px] text-[#64748b] tracking-[1px] uppercase leading-[16px] mb-2" style={{ fontWeight: 700 }}>Recent Logs</p>
            <div className="flex flex-col gap-3">
              {LOGS.map(log => (
                <div
                  key={log.id}
                  className="rounded-[16px] p-[17px] cursor-pointer"
                  style={{ background: '#0f172a', border: '1px solid #1e293b' }}
                  onClick={() => navigate('/log-detail')}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-[12px] text-[#135bec] tracking-[0.5px] uppercase leading-[15px]" style={{ fontWeight: 700 }}>{log.label}</p>
                      <p className="text-[16px] text-[#f1f5f9] leading-[24px]" style={{ fontWeight: 700 }}>{log.date}</p>
                    </div>
                    <span className="text-[24px]">{log.mood}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {log.factors.map((factor, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1 px-2 py-1 rounded-full"
                        style={{
                          background: factor.highlight ? 'rgba(248,113,113,0.1)' : 'rgba(30,41,59,0.8)',
                          border: factor.highlight ? '1px solid rgba(248,113,113,0.3)' : '1px solid #334155',
                        }}
                      >
                        <span className="text-[10px]">{factor.icon}</span>
                        <span
                          className="text-[10px] uppercase tracking-[0.5px]"
                          style={{ fontWeight: 700, color: factor.highlight ? '#F87171' : '#94a3b8' }}
                        >
                          {factor.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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