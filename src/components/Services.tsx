import { useState } from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Music2,
  TrendingUp,
  Layers,
  ArrowRight,
} from "lucide-react";
import { services, Service } from "../data/services";
import ServiceModal from "./ServiceModal";
import { scrollToId } from "../lib/utils";

const iconMap: Record<string, any> = {
  Facebook,
  Music2,
  TrendingUp,
  Layers,
};

export default function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="relative py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-gold text-xs tracking-[0.3em] mb-3">
            SERVICES
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl">
            DỊCH VỤ CỦA CHÚNG TÔI
          </h2>
          <p className="mt-4 text-mute">
            Các giải pháp linh hoạt được thiết kế theo nhu cầu thực tế của từng
            khách hàng.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Layers;
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-glow group relative rounded-2xl bg-graphite/60 border border-white/5 p-6 flex flex-col hover:border-gold/40 hover:bg-graphite/80 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/20 transition">
                  <Icon size={22} />
                </div>
                <div className="text-[10px] tracking-[0.2em] text-gold/70 mb-2">
                  {s.group}
                </div>
                <h3 className="font-display font-semibold text-lg leading-snug mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-mute leading-relaxed flex-1 mb-5">
                  {s.short}
                </p>
                <button
                  onClick={() => setActive(s)}
                  className="inline-flex items-center gap-1.5 text-sm text-gold hover:gap-2.5 transition-all"
                >
                  Tìm hiểu thêm <ArrowRight size={16} />
                </button>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-mute mb-4 max-w-2xl mx-auto">
            Chúng tôi chỉ cung cấp dịch vụ phù hợp với chính sách nền tảng và
            quy định pháp luật. Không cam kết khôi phục 100%, không hướng dẫn
            vượt qua bảo mật hoặc truy cập trái phép.
          </p>
          <button
            onClick={() => scrollToId("#contact")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-gold/90 transition"
          >
            Gửi yêu cầu tư vấn <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <ServiceModal service={active} onClose={() => setActive(null)} />
    </section>
  );
}