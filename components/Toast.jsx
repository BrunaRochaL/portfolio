"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsCheckCircleFill, BsExclamationCircleFill, BsXLg } from "react-icons/bs";

const Toast = ({ toast, onClose, duration = 4500 }) => {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [toast, onClose, duration]);

  const isSuccess = toast?.type === "success";

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="pointer-events-auto flex w-[320px] max-w-[90vw] items-start gap-3 overflow-hidden rounded-xl border border-white/10 bg-secondary/95 p-4 shadow-2xl backdrop-blur"
          >
            <div
              className={`mt-0.5 text-xl ${
                isSuccess ? "text-accent" : "text-accent2"
              }`}
            >
              {isSuccess ? <BsCheckCircleFill /> : <BsExclamationCircleFill />}
            </div>
            <p className="flex-1 text-sm leading-snug text-white/90">
              {toast.message}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="text-white/40 transition-colors hover:text-white"
            >
              <BsXLg className="text-sm" />
            </button>

            {/* progress bar */}
            <motion.span
              key={toast.id}
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: duration / 1000, ease: "linear" }}
              className={`absolute bottom-0 left-0 h-0.5 ${
                isSuccess ? "bg-accent" : "bg-accent2"
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
