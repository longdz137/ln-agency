import { AnimatePresence, motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { Service } from "../data/services";
import { scrollToId } from "../lib/utils";

export default function ServiceModal({
  service,
  onClose,
}: {
  service: Service | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl bg-graphite border border-gold/20 shadow-glow max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 text-mute hover:text-paper"
              aria-label="Đóng"
            >
              <X size={20} />
            </button>

            <div className="p-7">
              <div className="text-[10px] tracking-[0.2em] text-gold/70 mb-2">
                {service.group}
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-mute mb-6">{service.short}</p>

              <h4 className="text-sm font-semibold text-gold mb-3">
                Phạm vi hỗ trợ
              </h4>
              <ul className="space-y-2.5 mb-7">
                {service.items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-sm text-paper/85">
                    <Check size={18} className="text-gold shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-xl bg-ink/60 border border-white/5 text-xs text-mute leading-relaxed mb-6">
                <strong className="text-gold">Lưu ý:</strong> Kết quả phụ thuộc
                vào tình trạng tài khoản và quyết định của nền tảng. LN AGENCY
                không yêu cầu mật khẩu, mã OTP hoặc mã khôi phục của khách hàng.
              </div>

              <button
                onClick={() => {
                  onClose();
                  setTimeout(() => scrollToId("#contact"), 200);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-gold/90 transition"
              >
                Gửi yêu cầu tư vấn <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}