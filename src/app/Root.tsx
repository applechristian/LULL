import { Outlet } from 'react-router';

export function Root() {
  return (
    <div className="flex items-start justify-center min-h-screen bg-black" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <div className="w-full max-w-[430px] min-h-screen relative overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
}
