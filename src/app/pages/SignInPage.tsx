import { useState } from 'react';
import { useNavigate } from 'react-router';

export function SignInPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/sleep-goal');
  };

  return (
    <div
      className="flex flex-col min-h-screen relative overflow-hidden"
      style={{ background: '#150a27', fontFamily: "'Manrope', sans-serif" }}
    >
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 360,
          height: 360,
          top: -80,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(109,40,217,0.25) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[[8,15],[85,10],[92,40],[5,60],[78,75],[20,85]].map(([l,t],i) => (
          <div key={i} className="absolute rounded-full bg-white"
            style={{ width: 1.5, height: 1.5, left: `${l}%`, top: `${t}%`, opacity: 0.2 + i * 0.04 }} />
        ))}
      </div>

      {/* Back button */}
      <div className="pt-[52px] px-5 flex items-center gap-2 relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 border-0 bg-transparent cursor-pointer"
        >
          <svg fill="none" height="12" viewBox="0 0 8 14" width="8">
            <path d="M7 1L1 7L7 13" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[15px]" style={{ fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>Back</span>
        </button>
      </div>

      {/* Card */}
      <div className="flex-1 flex flex-col px-5 pt-6 pb-10 relative z-10">
        <div
          className="rounded-[24px] p-6 flex flex-col gap-6"
          style={{
            background: 'rgba(35,15,65,0.85)',
            border: '1px solid rgba(124,58,237,0.2)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Brand dots */}
          <div className="flex items-center justify-center gap-[6px]">
            <div className="rounded-full" style={{ width: 6, height: 6, background: '#7c3aed' }} />
            <div className="rounded-full" style={{ width: 6, height: 6, background: '#9f67ff' }} />
            <div className="rounded-full" style={{ width: 6, height: 6, background: '#c4a0ff' }} />
            <span
              className="text-[10px] tracking-[2.5px] uppercase ml-1"
              style={{ fontWeight: 700, color: '#c4a0ff' }}
            >
              Sleep Nudge
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h1 className="text-[26px] text-white text-center tracking-[-0.65px] leading-[34px]" style={{ fontWeight: 700 }}>
              Welcome back
            </h1>
            <p className="text-[14px] text-center leading-[22px]" style={{ fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>
              Sign in to continue your journey to better sleep.
            </p>
          </div>

          {/* Moon divider */}
          <div className="flex items-center justify-center">
            <div style={{ flex: 1, height: 1, background: 'rgba(124,58,237,0.2)' }} />
            <span style={{ fontSize: 20, margin: '0 12px' }}>🌙</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(124,58,237,0.2)' }} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[13px] text-white" style={{ fontWeight: 600 }}>Email Address</label>
              <input
                autoComplete="email"
                className="w-full rounded-[12px] px-4 text-[15px] text-white placeholder-[rgba(255,255,255,0.3)] border-0 outline-none"
                onChange={set('email')}
                placeholder="Enter your email"
                style={{
                  height: 52,
                  background: 'rgba(255,255,255,0.07)',
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 400,
                }}
                type="email"
                value={form.email}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-center justify-between">
                <label className="text-[13px] text-white" style={{ fontWeight: 600 }}>Password</label>
                <button
                  type="button"
                  className="border-0 bg-transparent cursor-pointer text-[12px]"
                  style={{ color: '#a78bfa', fontWeight: 600 }}
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  autoComplete="current-password"
                  className="w-full rounded-[12px] px-4 pr-12 text-[15px] text-white placeholder-[rgba(255,255,255,0.3)] border-0 outline-none"
                  onChange={set('password')}
                  placeholder="Enter your password"
                  style={{
                    height: 52,
                    background: 'rgba(255,255,255,0.07)',
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 400,
                  }}
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(v => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 border-0 bg-transparent cursor-pointer"
                  style={{ color: 'rgba(255,255,255,0.4)', fontSize: 16 }}
                >
                  {showPass ? '🙈' : '👁'}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-[18px] rounded-[14px] border-0 cursor-pointer mt-2"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                boxShadow: '0 8px 24px rgba(124,58,237,0.35)',
              }}
            >
              <span className="text-[16px] text-white" style={{ fontWeight: 700 }}>Sign In</span>
            </button>
          </form>

          {/* Divider with OR */}
          <div className="flex items-center gap-3">
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.1)' }} />
            <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>or continue with</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.1)' }} />
          </div>

          {/* Social row */}
          <div className="flex gap-3">
            {[
              { label: 'Google', icon: '🔵' },
              { label: 'Apple', icon: '🍎' },
            ].map(s => (
              <button
                key={s.label}
                type="button"
                onClick={() => navigate('/sleep-goal')}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-[12px] cursor-pointer border-0"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <span style={{ fontSize: 16 }}>{s.icon}</span>
                <span className="text-[13px] text-white" style={{ fontWeight: 600 }}>{s.label}</span>
              </button>
            ))}
          </div>

          {/* Sign up link */}
          <p className="text-[13px] text-center" style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 400 }}>
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="border-0 bg-transparent cursor-pointer"
              style={{ color: '#a78bfa', fontWeight: 700, fontSize: 'inherit' }}
            >
              Get Started
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}