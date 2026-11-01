import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from "lucide-react";

export type ToastState = {
  type: "success" | "error" | "warning" | "info";
  message: string;
};

const icons = {
  success: CheckCircle2,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
};

const styles = {
  success: "border-green-500/40 text-green-300",
  error: "border-red-500/40 text-red-300",
  warning: "border-yellow-500/40 text-yellow-300",
  info: "border-gold/40 text-gold",
};

export default function Toast({
  toast,
  onClose,
}: {
  toast: ToastState | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onClose, 5000);
    return () => clearTimeout(t);
  }, [toast, onClose]);

  const Icon = toast ? icons[toast.type] : Info;

  return (
    <div className="fixed top-20 inset-x-0 z-[70] flex justify-center px-4 pointer-events-none">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`pointer-events-auto max-w-md w-full rounded-xl bg-graphite border ${
              styles[toast.type]
            } p-4 flex items-start gap-3 shadow-2xl`}
          >
            <Icon size={20} className="shrink-0 mt-0.5" />
            <p className="text-sm text-paper/90 flex-1 leading-relaxed">
              {toast.message}
            </p>
            <button
              onClick={onClose}
              className="text-mute hover:text-paper shrink-0"
              aria-label="Đóng"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}