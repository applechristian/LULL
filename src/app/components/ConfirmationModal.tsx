import { motion, AnimatePresence } from 'motion/react';

interface ConfirmationModalProps {
  visible: boolean;
  icon: React.ReactNode;
  title: string;
  message: string;
  buttonLabel?: string;
  accentColor?: string;
  onDone: () => void;
}

export function ConfirmationModal({
  visible,
  icon,
  title,
  message,
  buttonLabel = 'Done',
  accentColor = '#6e30e8',
  onDone,
}: ConfirmationModalProps) {
  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            style={{ background: 'rgba(8,4,20,0.72)', backdropFilter: 'blur(6px)' }}
          />

          {/* Card */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6 pointer-events-none">
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="w-full pointer-events-auto flex flex-col items-center text-center rounded-[28px] px-7 py-9 gap-4"
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              style={{
                maxWidth: 360,
                background: 'rgba(22,14,42,0.97)',
                border: '1px solid rgba(124,58,237,0.22)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
                fontFamily: "'Manrope', sans-serif",
              }}
              transition={{ type: 'spring', stiffness: 340, damping: 28 }}
            >
              {/* Icon circle */}
              <motion.div
                animate={{ scale: 1 }}
                className="flex items-center justify-center rounded-full"
                initial={{ scale: 0.6 }}
                style={{
                  width: 72,
                  height: 72,
                  background: `radial-gradient(circle at 38% 38%, ${accentColor}33 0%, ${accentColor}11 70%)`,
                  border: `1.5px solid ${accentColor}44`,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.08 }}
              >
                {icon}
              </motion.div>

              {/* Title */}
              <h2
                className="text-white tracking-[-0.4px] leading-[1.2]"
                style={{ fontSize: 22, fontWeight: 700 }}
              >
                {title}
              </h2>

              {/* Message */}
              <p
                className="leading-[22px]"
                style={{ fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}
              >
                {message}
              </p>

              {/* Button */}
              <button
                onClick={onDone}
                className="w-full flex items-center justify-center rounded-[14px] border-0 cursor-pointer mt-2"
                style={{
                  height: 52,
                  background: accentColor,
                  boxShadow: `0 8px 24px ${accentColor}55`,
                  fontSize: 16,
                  fontWeight: 700,
                  color: 'white',
                }}
              >
                {buttonLabel}
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}