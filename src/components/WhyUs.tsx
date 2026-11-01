import { motion } from "framer-motion";
import { HeartHandshake, Route, ReceiptText, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: HeartHandshake,
    title: "Tư vấn theo từng trường hợp",
    desc: "Mỗi tình huống tài khoản là khác nhau — chúng tôi đánh giá riêng trước khi đề xuất phương án.",
  },
  {
    icon: Route,
    title: "Quy trình rõ ràng",
    desc: "4 bước minh bạch, thông tin tiến độ được cập nhật trong suốt quá trình hỗ trợ.",
  },
  {
    icon: ReceiptText,
    title: "Minh bạch chi phí & phạm vi",
    desc: "Báo giá trước khi triển khai. Không phát sinh ngoài thỏa thuận.",
  },
  {
    icon: ShieldCheck,
    title: "Tôn trọng quyền riêng tư",
    desc: "Không yêu cầu mật khẩu, OTP hay mã khôi phục. Thông tin khách hàng được bảo mật.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-gold text-xs tracking-[0.3em] mb-3">
            WHY US
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl">
            VÌ SAO CHỌN <span className="gold-gradient">LN AGENCY?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl bg-graphite/60 border border-white/5 p-6 hover:border-gold/30 hover:bg-graphite/80 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {it.title}
                </h3>
                <p className="text-sm text-mute leading-relaxed">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}