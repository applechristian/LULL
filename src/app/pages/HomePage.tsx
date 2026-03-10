import { useNavigate } from 'react-router';
import { NavBar } from '../components/NavBar';
import imgProfile from '../../assets/8e73ef03f06c6bd9c6d45daa5425dcb089c27f74.png';
import svgPaths from '../../imports/svg-mpulvj5hjk';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen relative" style={{ background: '#05070a', fontFamily: "'Manrope', sans-serif" }}>
      {/* Radial gradient */}
      <div
        className="absolute right-[-50px] top-[-100px] rounded-full pointer-events-none z-0"
        style={{ width: 256, height: 256, background: 'rgba(129,140,248,0.1)', filter: 'blur(50px)' }}
      />
      <div
        className="absolute left-0 right-0 top-0 h-[400px] pointer-events-none z-0"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 390 400\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(27.933 0 0 27.933 195 200)\"><stop stop-color=\"rgba(99,102,241,0.15)\" offset=\"0\"/><stop stop-color=\"rgba(99,102,241,0)\" offset=\"0.7\"/></radialGradient></defs></svg>')",
        }}
      />

      {/* Status bar */}
      <div className="flex items-center justify-between px-8 pt-4 pb-0 z-10">
        <span className="text-[14px] text-[#f1f5f9]" style={{ fontWeight: 600 }}>9:41</span>
        <div className="flex gap-[6px] items-center">
          <svg fill="none" height="8" viewBox="0 0 7.5 8" width="7.5">
            <path d={svgPaths.p3eb59a00} fill="#f1f5f9" />
          </svg>
          <svg fill="none" height="8" viewBox="0 0 10.4 7.6" width="10.4">
            <path d={svgPaths.p3ff75100} fill="#f1f5f9" />
          </svg>
          <svg fill="none" height="10" viewBox="0 0 5 10" width="5">
            <path d={svgPaths.p10357e00} fill="#f1f5f9" />
          </svg>
        </div>
      </div>

      {/* Scrollable main */}
      <div className="flex-1 overflow-y-auto pb-[100px] z-10">
        <div className="flex flex-col gap-8 px-6 pt-4">

          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-[30px] text-[#f1f5f9] tracking-[-0.75px] leading-[36px]" style={{ fontWeight: 700 }}>
                Good Morning, Alex
              </h1>
            </div>
            <div
              className="relative rounded-full shrink-0 cursor-pointer"
              style={{ width: 48, height: 48, border: '2px solid rgba(129,140,248,0.3)' }}
            >
              <img alt="Profile" className="w-full h-full rounded-full object-cover" src={imgProfile} />
            </div>
          </div>

          {/* Log Last Night's Sleep */}
          <div
            className="relative rounded-[16px] cursor-pointer overflow-hidden"
            onClick={() => navigate('/log')}
            style={{ padding: 2, background: 'linear-gradient(135deg, #818cf8, #6366f1)' }}
          >
            <div className="rounded-[14px] px-6 py-5 flex items-center justify-between" style={{ background: '#0f1420' }}>
              <div>
                <p className="text-[18px] text-white leading-[28px]" style={{ fontWeight: 700 }}>Log Last Night's Sleep</p>
                <p className="text-[12px] text-[#94a3b8] leading-[16px] mt-[2px]" style={{ fontWeight: 400 }}>How did you feel waking up?</p>
              </div>
              <div className="flex gap-2">
                <span className="text-[24px]">😴</span>
                <span className="text-[24px]">😊</span>
              </div>
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-[18px] text-[#f1f5f9] leading-[28px]" style={{ fontWeight: 700 }}>Today's Schedule</h2>
              <button
                className="text-[12px] text-[#38bdf8] bg-transparent border-0 cursor-pointer"
                onClick={() => navigate('/history')}
                style={{ fontWeight: 600 }}
              >
                View All
              </button>
            </div>
            <div className="flex gap-4">
              {/* Bedtime Goal */}
              <div
                className="flex-1 rounded-[16px] relative cursor-pointer"
                onClick={() => navigate('/sleep-goal')}
                style={{ background: '#0f1420', border: '1px solid #1e293b', minHeight: 120 }}
              >
                <div
                  className="absolute top-[17px] left-[17px] rounded-[8px] flex items-center justify-center"
                  style={{ width: 32, height: 32, background: 'rgba(99,102,241,0.1)' }}
                >
                  <svg fill="none" height="11.6" viewBox="0 0 10.4 11.6" width="10.4">
                    <path d={svgPaths.p29e59cc0} fill="#818CF8" />
                  </svg>
                </div>
                <div className="absolute top-[61px] left-[17px] right-[17px]">
                  <p className="text-[10px] text-[#64748b] tracking-[0.5px] uppercase leading-[15px]" style={{ fontWeight: 700 }}>Bedtime Goal</p>
                </div>
                <div className="absolute top-[80px] left-[17px] right-[17px]">
                  <p className="text-[20px] text-white leading-[28px]" style={{ fontWeight: 700 }}>10:30 PM</p>
                </div>
              </div>

              {/* Start Wind-Down */}
              <div
                className="flex-1 rounded-[16px] relative cursor-pointer overflow-hidden"
                onClick={() => navigate('/nudge')}
                style={{ background: '#0f1420', border: '1px solid rgba(110,48,232,0.35)', minHeight: 120 }}
              >
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(110,48,232,0.04)' }} />
                <div
                  className="absolute top-[17px] left-[17px] rounded-[8px] flex items-center justify-center"
                  style={{ width: 32, height: 32, background: 'rgba(110,48,232,0.15)' }}
                >
                  <svg fill="none" height="14" viewBox="0 0 14 14" width="14">
                    <path
                      d="M7 0C3.15 0 0 3.15 0 7C0 10.85 3.15 14 7 14C7.42 14 7.84 13.965 8.225 13.895C6.895 12.775 6.022 11.122 6.022 9.24C6.022 5.88 8.75 3.15 12.11 3.15C12.74 3.15 13.335 3.255 13.895 3.465C12.775 1.435 10.605 0 7 0Z"
                      fill="#6E30E8"
                    />
                  </svg>
                </div>
                <div className="absolute top-[61px] left-[17px] right-[17px]">
                  <p className="text-[10px] text-[#64748b] tracking-[0.5px] uppercase leading-[15px]" style={{ fontWeight: 700 }}>Wind-Down</p>
                </div>
                <div className="absolute top-[80px] left-[17px] right-[17px]">
                  <p className="text-[16px] text-white leading-[24px]" style={{ fontWeight: 700 }}>Start Now</p>
                </div>
                <div
                  className="absolute bottom-[-10px] right-[-10px] rounded-full pointer-events-none"
                  style={{ width: 50, height: 50, background: 'rgba(110,48,232,0.12)', filter: 'blur(10px)' }}
                />
              </div>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[18px] text-[#f1f5f9] leading-[28px]" style={{ fontWeight: 700 }}>Quick Shortcuts</h2>
            <div className="flex flex-col gap-3">
              {/* Nudge Settings */}
              <div
                className="flex items-center gap-4 p-[17px] rounded-[16px] cursor-pointer"
                onClick={() => navigate('/settings')}
                style={{ background: '#0f1420', border: '1px solid #1e293b' }}
              >
                <div className="rounded-[12px] flex items-center justify-center shrink-0" style={{ width: 48, height: 48, background: 'rgba(129,140,248,0.1)' }}>
                  <svg fill="none" height="20" viewBox="0 0 21.2 20" width="21.2">
                    <path d={svgPaths.p21277580} fill="#818CF8" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] text-white leading-[20px]" style={{ fontWeight: 700 }}>Nudge Settings</p>
                  <p className="text-[12px] text-[#64748b] leading-[16px]" style={{ fontWeight: 400 }}>Customize your nightly alerts</p>
                </div>
                <svg fill="none" height="11.2" viewBox="0 0 6.6 11.2" width="6.6">
                  <path d={svgPaths.p1fe2da80} fill="#475569" />
                </svg>
              </div>
              {/* Sleep Insights */}
              <div
                className="flex items-center gap-4 p-[17px] rounded-[16px] cursor-pointer"
                onClick={() => navigate('/history')}
                style={{ background: '#0f1420', border: '1px solid #1e293b' }}
              >
                <div className="rounded-[12px] flex items-center justify-center shrink-0" style={{ width: 48, height: 48, background: 'rgba(56,189,248,0.1)' }}>
                  <svg fill="none" height="21" viewBox="0 0 20 21" width="20">
                    <path d={svgPaths.p15e38e00} fill="#38BDF8" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] text-white leading-[20px]" style={{ fontWeight: 700 }}>Sleep Insights</p>
                  <p className="text-[12px] text-[#64748b] leading-[16px]" style={{ fontWeight: 400 }}>Analyze your weekly patterns</p>
                </div>
                <svg fill="none" height="11.2" viewBox="0 0 6.6 11.2" width="6.6">
                  <path d={svgPaths.p1fe2da80} fill="#475569" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-20">
        <NavBar activeTab="home" />
      </div>
    </div>
  );
}