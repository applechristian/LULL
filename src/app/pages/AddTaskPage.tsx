import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { NavBar } from '../components/NavBar';
import wdSvg from '../../imports/svg-w4wra5b711';
import pwr from '../../imports/svg-pwr0cbpbay';
import { ROUTINE_STORAGE_KEY, DEFAULT_TASKS, getStoredTasks } from './RoutinePage';

// ── Icon paths ──────────────────────────────────────────────────────
const BACK_PATH   = wdSvg.p300a1100;   // ← left arrow
const SEARCH_PATH = wdSvg.p2dbaedc0;  // 🔍

// ── Available tasks catalogue ────────────────────────────────────────
interface CataloguTask {
  id: number;
  title: string;
  desc: string;
  icon: 'shower' | 'brush' | 'meditation' | 'journal' | 'lights' | 'alarm' | 'teeth' | 'meds' | 'skin' | 'read';
  category: string;
  group: string;
}

const ALL_TASKS: CataloguTask[] = [
  // ── Hygiene ──
  { id: 101, title: 'Warm Shower',    desc: 'Relax muscles before bed',          icon: 'shower',     category: 'HYGIENE',      group: 'Hygiene' },
  { id: 102, title: 'Floss & Brush',  desc: 'Complete your nightly routine',      icon: 'brush',      category: 'HYGIENE',      group: 'Hygiene' },
  // ── Mindfulness ──
  { id: 103, title: 'Meditation',     desc: '5-10 mins of mindful breathing',     icon: 'meditation', category: 'MINDFULNESS',  group: 'Mindfulness' },
  { id: 104, title: 'Journaling',     desc: 'Write down three wins from today',   icon: 'journal',    category: 'MINDFULNESS',  group: 'Mindfulness' },
  // ── Environment ──
  { id: 105, title: 'Dim the Lights', desc: 'Signal your body to produce melatonin', icon: 'lights',  category: 'ENVIRONMENT',  group: 'Environment' },
  { id: 106, title: 'Set Morning Alarm', desc: 'Plan your wake up time',          icon: 'alarm',      category: 'ENVIRONMENT',  group: 'Environment' },
  // ── Health ──
  { id: 107, title: 'Take Medication', desc: 'Take any prescribed medication',    icon: 'meds',       category: 'HEALTH',       group: 'Health' },
  { id: 108, title: 'Skincare Routine', desc: 'Nourish and protect your skin',    icon: 'skin',       category: 'SELF CARE',    group: 'Self-Care' },
  // ── Relaxation ──
  { id: 109, title: 'Read for 15 mins', desc: 'Wind down with a good book',       icon: 'read',       category: 'RELAXATION',   group: 'Relaxation' },
  { id: 110, title: 'Brush Teeth',     desc: 'Keep your dental health strong',    icon: 'teeth',      category: 'HYGIENE',      group: 'Hygiene' },
];

// ── Render icon ──────────────────────────────────────────────────────
function TaskIcon({ type }: { type: string }) {
  const color = '#256AF4';
  const bg    = 'rgba(37,106,244,0.1)';
  return (
    <div className="flex items-center justify-center rounded-full shrink-0" style={{ width: 48, height: 48, background: bg }}>
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
      {type === 'teeth' && (
        <svg fill="none" height="20.5" viewBox="0 0 21 20.5" width="21"><path d={pwr.p3707ee50} fill={color} /></svg>
      )}
      {type === 'meds' && (
        <svg fill="none" height="18" viewBox="0 0 14 18" width="14"><path d={pwr.p3be98a0} fill={color} /></svg>
      )}
      {type === 'skin' && (
        <svg fill="none" height="20" viewBox="0 0 20 20" width="20"><path d={pwr.p3e58d900} fill={color} /></svg>
      )}
      {type === 'read' && (
        <svg fill="none" height="16" viewBox="0 0 22 16" width="22"><path d={pwr.p378800} fill={color} /></svg>
      )}
    </div>
  );
}

export function AddTaskPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [addedIds, setAddedIds] = useState<Set<number>>(() => {
    // Pre-mark tasks already in the routine
    const existing = getStoredTasks();
    const existingTitles = new Set(existing.map(t => t.title.toLowerCase()));
    return new Set(
      ALL_TASKS.filter(t => existingTitles.has(t.title.toLowerCase())).map(t => t.id)
    );
  });

  const handleAdd = (task: CataloguTask) => {
    if (addedIds.has(task.id)) return;
    // Load current tasks and append new one
    const current = getStoredTasks();
    const newTask = { id: Date.now(), title: task.title, category: task.category, icon: task.icon };
    localStorage.setItem(ROUTINE_STORAGE_KEY, JSON.stringify([...current, newTask]));
    setAddedIds(prev => new Set([...prev, task.id]));
  };

  // Filter and group tasks
  const filtered = useMemo(() => {
    if (!search.trim()) return ALL_TASKS;
    const q = search.toLowerCase();
    return ALL_TASKS.filter(t =>
      t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || t.group.toLowerCase().includes(q)
    );
  }, [search]);

  const groups = useMemo(() => {
    const map = new Map<string, CataloguTask[]>();
    for (const t of filtered) {
      if (!map.has(t.group)) map.set(t.group, []);
      map.get(t.group)!.push(t);
    }
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: '#101622', fontFamily: "'Manrope', sans-serif" }}
    >
      {/* ── Header ── */}
      <div
        className="flex items-center justify-between px-4 pt-14 pb-3 shrink-0"
        style={{ background: '#101622', borderBottom: '1px solid #1e293b' }}
      >
        <button
          className="flex items-center justify-center border-0 cursor-pointer rounded-full"
          onClick={() => navigate('/routine')}
          style={{ width: 48, height: 48, background: 'transparent' }}
        >
          <svg fill="none" height="9" viewBox="0 0 16 9" width="16">
            <path d={BACK_PATH} fill="#F1F5F9" />
          </svg>
        </button>

        <h1
          className="text-[18px] text-[#f1f5f9] text-center tracking-[-0.27px]"
          style={{ fontWeight: 700 }}
        >
          Add Wind-down Task
        </h1>

        {/* Spacer to keep title centred */}
        <div style={{ width: 48 }} />
      </div>

      {/* ── Search bar ── */}
      <div className="px-4 py-3 shrink-0" style={{ background: '#101622' }}>
        <div
          className="flex items-center gap-3 px-4 rounded-full"
          style={{ height: 48, background: 'rgba(30,41,59,0.5)', border: '1px solid #1e293b' }}
        >
          <svg fill="none" height="15" viewBox="0 0 15 15" width="15">
            <path d={SEARCH_PATH} fill="#94A3B8" />
          </svg>
          <input
            autoComplete="off"
            className="flex-1 bg-transparent border-0 outline-none text-[15px] text-[#f1f5f9] placeholder-[#64748b]"
            onChange={e => setSearch(e.target.value)}
            placeholder="Search tasks (e.g. Read, Stretch)"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400 }}
            value={search}
          />
          {search && (
            <button
              className="text-[#64748b] border-0 bg-transparent cursor-pointer"
              onClick={() => setSearch('')}
            >✕</button>
          )}
        </div>
      </div>

      {/* ── Scrollable task list ── */}
      <div className="flex-1 overflow-y-auto pb-[100px]">
        {groups.length === 0 && (
          <div className="flex flex-col items-center justify-center pt-20 gap-3">
            <span style={{ fontSize: 40 }}>🔍</span>
            <p className="text-[#64748b] text-[14px]" style={{ fontWeight: 500 }}>No tasks match your search</p>
          </div>
        )}

        {groups.map(([group, tasks]) => (
          <div key={group}>
            {/* Category heading */}
            <div className="px-5 pt-5 pb-2">
              <p className="text-[18px] text-[#f1f5f9] tracking-[-0.27px]" style={{ fontWeight: 700 }}>{group}</p>
            </div>

            {/* Task rows */}
            <div
              className="mx-4 rounded-[16px] overflow-hidden"
              style={{ background: '#0f172a', border: '1px solid #1e293b' }}
            >
              {tasks.map((task, idx) => {
                const isAdded = addedIds.has(task.id);
                return (
                  <div key={task.id}>
                    {idx > 0 && <div style={{ borderTop: '1px solid #1e293b' }} />}
                    <div className="flex items-center justify-between px-4 py-4 gap-4">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <TaskIcon type={task.icon} />
                        <div className="flex-1 min-w-0">
                          <p className="text-[15px] text-[#f1f5f9] leading-[24px]" style={{ fontWeight: 500 }}>
                            {task.title}
                          </p>
                          <p className="text-[13px] text-[#94a3b8] leading-[20px]" style={{ fontWeight: 400 }}>
                            {task.desc}
                          </p>
                        </div>
                      </div>

                      {/* Add / Added button */}
                      <button
                        onClick={() => handleAdd(task)}
                        disabled={isAdded}
                        className="shrink-0 flex items-center justify-center rounded-full border-0 cursor-pointer transition-all duration-200"
                        style={{
                          minWidth: 64,
                          height: 32,
                          paddingLeft: 16,
                          paddingRight: 16,
                          background: isAdded ? 'rgba(16,185,129,0.15)' : '#256AF4',
                          cursor: isAdded ? 'default' : 'pointer',
                        }}
                      >
                        {isAdded ? (
                          <span className="text-[13px] text-[#10b981]" style={{ fontWeight: 700 }}>✓ Added</span>
                        ) : (
                          <span className="text-[13px] text-white" style={{ fontWeight: 600 }}>Add</span>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Bottom info note */}
        {groups.length > 0 && (
          <p className="text-[12px] text-[#475569] text-center mt-6 px-8" style={{ fontWeight: 400 }}>
            Added tasks appear in your Wind-Down Routine. Tap "Back" to return.
          </p>
        )}
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-20">
        <NavBar activeTab="routine" variant="purple" />
      </div>
    </div>
  );
}
