import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { plans } from "../data/pricing";
import { scrollToId } from "../lib/utils";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-graphite/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-gold text-xs tracking-[0.3em] mb-3">
            PRICING
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl">
            GIẢI PHÁP PHÙ HỢP
            <br />
            <span className="gold-gradient">VỚI NHU CẦU CỦA BẠN</span>
          </h2>
          <p className="mt-4 text-mute">
            Ba gói tham khảo — chi phí cụ thể được xác nhận sau khi tư vấn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-3xl p-7 flex flex-col border transition-all duration-300 hover:-translate-y-1 ${
                p.highlighted
                  ? "bg-gradient-to-b from-gold/10 to-graphite/60 border-gold/50 shadow-glow"
                  : "bg-graphite/60 border-white/5 hover:border-gold/30"
              }`}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gold text-ink text-xs font-semibold flex items-center gap-1">
                  <Sparkles size={12} /> Phổ biến
                </div>
              )}

              <div className="mb-5">
                <div className="text-gold text-xs tracking-[0.2em] mb-2">
                  {p.tag}
                </div>
                <h3 className="font-display font-bold text-2xl mb-2">
                  {p.name}
                </h3>
                <p className="text-sm text-mute">{p.desc}</p>
              </div>

              <div className="text-2xl font-display font-bold mb-5 text-gold">
                Liên hệ báo giá
              </div>

              <ul className="space-y-2.5 mb-7 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-paper/85">
                    <Check size={18} className="text-gold shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollToId("#contact")}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold transition ${
                  p.highlighted
                    ? "bg-gold text-ink hover:bg-gold/90"
                    : "border border-white/15 hover:border-gold/50 hover:text-gold text-paper"
                }`}
              >
                Nhận báo giá <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-mute max-w-2xl mx-auto">
          Bảng giá mang tính tham khảo. Chi phí chính thức được xác nhận trước
          khi triển khai. Không có khoản phí ẩn.
        </p>
      </div>
    </section>
  );
}