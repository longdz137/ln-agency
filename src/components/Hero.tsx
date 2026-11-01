import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Youtube,
  Music2,
  TrendingUp,
  Users,
  Activity,
  ArrowRight,
} from "lucide-react";
import { scrollToId } from "../lib/utils";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-radial-gold opacity-60 blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(214,179,106,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,#08090C)]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        {/* LEFT */}
        <div>
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs tracking-[0.15em] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            DIGITAL SOLUTIONS FOR SOCIAL GROWTH
          </motion.div>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
          >
            GIẢI PHÁP
            <br />
            MẠNG XÃ HỘI
            <br />
            <span className="gold-gradient">CHO KỶ NGUYÊN SỐ</span>
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 text-mute text-base sm:text-lg max-w-xl leading-relaxed"
          >
            LN AGENCY đồng hành cùng cá nhân, nhà sáng tạo nội dung và doanh
            nghiệp trong việc quản lý, hỗ trợ và phát triển hệ thống mạng xã
            hội.
          </motion.p>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollToId("#services")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-gold/90 transition shadow-[0_0_40px_rgba(214,179,106,0.25)]"
            >
              Khám phá dịch vụ <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToId("#contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:border-gold/50 hover:text-gold transition text-paper"
            >
              Liên hệ tư vấn
            </button>
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex items-center gap-6 text-xs text-mute/70"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Minh bạch quy trình
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Tôn trọng quyền riêng tư
            </div>
          </motion.div>
        </div>

        {/* RIGHT — Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-[420px] sm:h-[480px] w-full max-w-[520px] mx-auto"
        >
          {/* Center glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
          </div>

          {/* Orbit dashed */}
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 w-full h-full text-gold/20"
          >
            <circle
              cx="200"
              cy="200"
              r="150"
              fill="none"
              stroke="currentColor"
              strokeDasharray="2 8"
            />
            <circle
              cx="200"
              cy="200"
              r="100"
              fill="none"
              stroke="currentColor"
              strokeDasharray="2 6"
            />
          </svg>

          {/* Platform icons */}
          <PlatformIcon
            Icon={Facebook}
            pos="top-0 left-1/2 -translate-x-1/2"
            delay={0.5}
          />
          <PlatformIcon
            Icon={Music2}
            pos="top-1/4 right-0"
            delay={0.65}
          />
          <PlatformIcon
            Icon={Instagram}
            pos="bottom-0 right-1/4"
            delay={0.8}
          />
          <PlatformIcon
            Icon={Youtube}
            pos="top-1/4 left-0"
            delay={0.95}
          />

          {/* Center dashboard card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] rounded-2xl bg-graphite/90 border border-white/10 backdrop-blur-xl p-4 shadow-glow">
            <div className="flex items-center justify-between text-[10px] text-mute tracking-widest mb-3">
              <span>DEMO DASHBOARD</span>
              <Activity size={12} className="text-gold" />
            </div>
            <div className="space-y-3">
              <MiniStat icon={<Users size={14} />} label="Người theo dõi" value="+12.4%" />
              <MiniStat
                icon={<TrendingUp size={14} />}
                label="Tương tác"
                value="+8.1%"
              />
              <MiniStat
                icon={<Activity size={14} />}
                label="Tiếp cận"
                value="+5.7%"
              />
            </div>
            <div className="mt-3 text-[9px] text-mute/60 italic">
              * Dữ liệu minh họa, không phải chỉ số thực tế.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PlatformIcon({
  Icon,
  pos,
  delay,
}: {
  Icon: any;
  pos: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute ${pos} w-14 h-14 rounded-2xl bg-graphite/90 border border-gold/30 flex items-center justify-center text-gold shadow-lg shadow-gold/10`}
    >
      <Icon size={22} />
    </motion.div>
  );
}

function MiniStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between text-xs">
      <div className="flex items-center gap-2 text-paper/80">
        <span className="text-gold">{icon}</span>
        {label}
      </div>
      <span className="text-gold font-semibold">{value}</span>
    </div>
  );
}