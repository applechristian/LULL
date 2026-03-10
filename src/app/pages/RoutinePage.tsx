import { useState } from 'react';
import { useNavigate } from 'react-router';
import { NavBar } from '../components/NavBar';
import { ConfirmationModal } from '../components/ConfirmationModal';
import svgPaths from '../../imports/svg-pwr0cbpbay';
import wdSvg from '../../imports/svg-w4wra5b711';

// ── Shared task storage ─────────────────────────────────────────────
export const ROUTINE_STORAGE_KEY = 'sleep-app-routine-tasks';

export interface RoutineTask {
  id: number;
  title: string;
  category: string;
  icon: string;
}

export const DEFAULT_TASKS: RoutineTask[] = [
  { id: 1, title: 'Brush Teeth',      category: 'HYGIENE',     icon: 'teeth' },
  { id: 2, title: 'Take Medication',  category: 'HEALTH',      icon: 'meds' },
  { id: 3, title: 'Skincare Routine', category: 'SELF CARE',   icon: 'skin' },
  { id: 4, title: 'Read for 15 mins', category: 'RELAXATION',  icon: 'read' },
];

export const getStoredTasks = (): RoutineTask[] => {
  try {
    const s = localStorage.getItem(ROUTINE_STORAGE_KEY);
    return s ? JSON.parse(s) : DEFAULT_TASKS;
  } catch {
    return DEFAULT_TASKS;
  }
};

// ── Icon renderer ───────────────────────────────────────────────────
const MOON_PATH = "M8.25 0C3.6975 0 0 3.6975 0 8.25C0 12.8025 3.6975 16.5 8.25 16.5C8.745 16.5 9.24 16.4588 9.7088 16.3763C8.085 15.015 7.08375 13.0088 7.08375 10.7813C7.08375 6.93 10.2262 3.7875 14.0775 3.7875C14.8275 3.7875 15.5363 3.90375 16.2038 4.12125C15.015 1.6875 12.4988 0 8.25 0Z";
const BACK_ARROW = "M7.40625 0L7.40625 0L0 6L7.40625 12";
const PLUS_CIRCLE = "M7.5 12.5H9.16667V9.16667H12.5V7.5H9.16667V4.16667H7.5V7.5H4.16667V9.16667H7.5V12.5V12.5M8.33333 16.6667C7.18056 16.6667 6.09722 16.4479 5.08333 16.0104C4.06944 15.5729 3.1875 14.9792 2.4375 14.2292C1.6875 13.4792 1.09375 12.5972 0.65625 11.5833C0.21875 10.5694 0 9.48611 0 8.33333C0 7.18056 0.21875 6.09722 0.65625 5.08333C1.09375 4.06944 1.6875 3.1875 2.4375 2.4375C3.1875 1.6875 4.06944 1.09375 5.08333 0.65625C6.09722 0.21875 7.18056 0 8.33333 0C9.48611 0 10.5694 0.21875 11.5833 0.65625C12.5972 1.09375 13.4792 1.6875 14.2292 2.4375C14.9792 3.1875 15.5729 4.06944 16.0104 5.08333C16.4479 6.09722 16.6667 7.18056 16.6667 8.33333C16.6667 9.48611 16.4479 10.5694 16.0104 11.5833C15.5729 12.5972 14.9792 13.4792 14.2292 14.2292C13.4792 14.9792 12.5972 15.5729 11.5833 16.0104C10.5694 16.4479 9.48611 16.6667 8.33333 16.6667V16.6667";

function TaskIcon({ type, active }: { type: string; active: boolean }) {
  const color = active ? '#6E30E8' : '#94A3B8';
  const bg    = active ? 'rgba(110,48,232,0.1)' : 'rgba(255,255,255,0.05)';
  return (
    <div className="flex items-center justify-center rounded-[24px] shrink-0" style={{ width: 40, height: 40, background: bg }}>
      {type === 'teeth' && (
        <svg fill="none" height="20.5" viewBox="0 0 21 20.5" width="21"><path d={svgPaths.p3707ee50} fill={color} /></svg>
      )}
      {type === 'meds' && (
        <svg fill="none" height="18" viewBox="0 0 14 18" width="14"><path d={svgPaths.p3be98a0} fill={color} /></svg>
      )}
      {type === 'skin' && (
        <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><path d={svgPaths.p3e58d900} fill={color} /></svg>
      )}
      {type === 'read' && (
        <svg fill="none" height="16" viewBox="0 0 22 16" width="22"><path d={svgPaths.p378800} fill={color} /></svg>
      )}
      {type === 'shower' && (
        <svg fill="none" height="18" viewBox="0 0 14 18" width="14"><path d={wdSvg.p1c327580} fill={color} /></svg>
      )}
      {type === 'brush' && (
        <svg fill="none" height="22" viewBox="0 0 18 22" width="18"><path d={wdSvg.p14f6a6c0} fill={color} /></svg>
      )}
      {type === 'meditation' && (
        <svg fill="none" height="16" viewBox="0 0 18 16" width="18"><path d={wdSvg.p9ab9180} fill={color} /></svg>
      )}
      {type === 'journal' && (
        <svg fill="none" height="16" viewBox="0 0 18 16" width="18"><path d={wdSvg.p1b961100} fill={color} /></svg>
      )}
      {type === 'lights' && (
        <svg fill="none" height="20" viewBox="0 0 15 20" width="15"><path d={wdSvg.pb720300} fill={color} /></svg>
      )}
      {type === 'alarm' && (
        <svg fill="none" height="19.65" viewBox="0 0 21.3 19.65" width="21.3"><path d={wdSvg.p35eb4600} fill={color} /></svg>
      )}
      {/* Fallback for unknown icon types */}
      {!['teeth','meds','skin','read','shower','brush','meditation','journal','lights','alarm'].includes(type) && (
        <span style={{ fontSize: 18 }}>✨</span>
      )}
    </div>
  );
}

function CheckCircle({ checked, onToggle }: { checked: boolean; onToggle: () => void }) {
  if (checked) {
    return (
      <button
        onClick={onToggle}
        className="flex items-center justify-center rounded-full border-0 cursor-pointer shrink-0"
        style={{ width: 28, height: 28, background: '#6e30e8', border: '2px solid #6e30e8' }}
      >
        <svg fill="none" height="10.2" viewBox="0 0 13.4 10.2" width="13.4">
          <path d={svgPaths.p2ef5ab00} fill="white" />
        </svg>
      </button>
    );
  }
  return (
    <button
      onClick={onToggle}
      className="rounded-full cursor-pointer shrink-0 bg-transparent"
      style={{ width: 28, height: 28, border: '2px solid rgba(255,255,255,0.2)' }}
    />
  );
}

export function RoutinePage() {
  const navigate = useNavigate();
  const [tasks]  = useState<RoutineTask[]>(getStoredTasks);
  const [completed, setCompleted] = useState<Set<number>>(new Set([1, 2]));
  const [showConfirm, setShowConfirm] = useState(false);

  const toggle = (id: number) => {
    setCompleted(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const doneCount = completed.size;
  const progress  = (doneCount / Math.max(tasks.length, 1)) * 100;

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
            "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 390 884\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(90.525 0 0 90.525 195 0)\"><stop stop-color=\"rgba(46,27,91,1)\" offset=\"0\"/><stop stop-color=\"rgba(34,22,62,1)\" offset=\"0.4\"/><stop stop-color=\"rgba(22,17,33,1)\" offset=\"0.8\"/></radialGradient></defs></svg>')",
        }}
      />

      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full bg-white opacity-20" style={{ width: 4, height: 4, left: '25%', top: '25%' }} />
        <div className="absolute rounded-full opacity-30" style={{ width: 6, height: 6, right: '25%', top: '33%', background: 'rgba(110,48,232,0.2)' }} />
        <div className="absolute rounded-full opacity-10" style={{ width: 8, height: 8, left: '10%', bottom: '33%', background: 'rgba(110,48,232,0.1)', filter: 'blur(2px)' }} />
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-8 pt-4 pb-2 opacity-80 relative z-10">
        <span className="text-[14px] text-[#f1f5f9] tracking-[-0.35px]" style={{ fontWeight: 600 }}>9:41</span>
        <div className="flex gap-[6px] items-center">
          <svg fill="none" height="10.7" viewBox="0 0 10 10.7" width="10"><path d={svgPaths.p337a600} fill="#f1f5f9" /></svg>
          <svg fill="none" height="10.4" viewBox="0 0 14.7 10.4" width="14.7"><path d={svgPaths.p2521d800} fill="#f1f5f9" /></svg>
          <svg fill="none" height="13.3" viewBox="0 0 6.7 13.3" width="6.7"><path d={svgPaths.p3fe576a0} fill="#f1f5f9" /></svg>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-[160px] relative z-10">
        <div className="px-6 pt-4 pb-6">

          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <button
              className="bg-transparent border-0 cursor-pointer p-0"
              onClick={() => navigate('/home')}
            >
              <svg fill="none" height="12" viewBox="0 0 7.41 12" width="7.41">
                <path d={BACK_ARROW} fill="#135bec" fillRule="evenodd" strokeLinecap="round" />
              </svg>
            </button>
            <h1 className="text-[24px] text-[#f1f5f9] leading-[32px]" style={{ fontWeight: 700 }}>Wind Down Routine</h1>
            <span className="text-[14px] text-[#6e30e8]" style={{ fontWeight: 600 }}>
              {doneCount} / {tasks.length} Done
            </span>
          </div>

          {/* Progress bar */}
          <div className="rounded-full overflow-hidden mb-8" style={{ height: 8, background: 'rgba(255,255,255,0.1)' }}>
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%`, background: '#6e30e8', boxShadow: '0px 0px 15px 2px rgba(110,48,232,0.4)' }}
            />
          </div>

          {/* Task list */}
          <div className="flex flex-col gap-4">
            {tasks.map(task => {
              const isCompleted = completed.has(task.id);
              return (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-[17px] rounded-[16px]"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div className="flex items-center gap-4">
                    <TaskIcon type={task.icon} active={isCompleted} />
                    <div>
                      <p className="text-[16px] leading-[24px]" style={{ fontWeight: 600, color: isCompleted ? '#f1f5f9' : '#cbd5e1' }}>
                        {task.title}
                      </p>
                      <p className="text-[11px] tracking-[0.55px] uppercase leading-[16.5px]" style={{ fontWeight: 400, color: isCompleted ? '#94a3b8' : '#64748b' }}>
                        {task.category}
                      </p>
                    </div>
                  </div>
                  <CheckCircle checked={isCompleted} onToggle={() => toggle(task.id)} />
                </div>
              );
            })}

            {/* ── Add Task button ── */}
            <button
              onClick={() => navigate('/add-task')}
              className="relative w-full flex items-center justify-center gap-2 py-[18px] rounded-[16px] cursor-pointer border-0"
              style={{ background: 'rgba(255,255,255,0.05)' }}
            >
              {/* Dashed border overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[16px] pointer-events-none"
                style={{ border: '2px dashed rgba(255,255,255,0.18)' }}
              />
              <svg fill="none" height="16.67" viewBox="0 0 16.67 16.67" width="16.67">
                <path d={PLUS_CIRCLE} fill="#94A3B8" />
              </svg>
              <span className="text-[16px] text-[#94a3b8]" style={{ fontWeight: 600 }}>Add Task</span>
            </button>
          </div>
        </div>
      </div>

      {/* Finish & Sleep button */}
      <div className="fixed z-20 px-6" style={{ bottom: 90, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 430 }}>
        <button
          className="w-full flex items-center justify-center gap-2 py-4 rounded-[16px] cursor-pointer border-0"
          onClick={() => setShowConfirm(true)}
          style={{ background: '#6e30e8', boxShadow: '0px 20px 25px -5px rgba(110,48,232,0.2), 0px 8px 10px -6px rgba(110,48,232,0.2)' }}
        >
          <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
            <path d={MOON_PATH} fill="white" />
          </svg>
          <span className="text-[16px] text-white" style={{ fontWeight: 700 }}>Finish &amp; Sleep</span>
        </button>
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-20">
        <NavBar activeTab="routine" variant="purple" />
      </div>

      <ConfirmationModal
        visible={showConfirm}
        icon={
          <svg fill="none" height="28" viewBox="0 0 20 20" width="28">
            <path d={MOON_PATH} fill="#6e30e8" />
          </svg>
        }
        title="Sleep tight! 🌙"
        message="Your wind-down routine is complete. Time to drift off and get some rest."
        buttonLabel="Start Sleeping"
        accentColor="#6e30e8"
        onDone={() => { setShowConfirm(false); navigate('/sleep-tracking'); }}
      />
    </div>
  );
}