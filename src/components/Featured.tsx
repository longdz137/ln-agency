import { motion } from "framer-motion";
import {
  Facebook,
  Music2,
  TrendingUp,
  ArrowRight,
  Users,
  Compass,
  ListChecks,
} from "lucide-react";
import { scrollToId } from "../lib/utils";
import { ToastState } from "./Toast";

const featured = [
  {
    icon: Facebook,
    title: "Facebook Account Recovery Support",
    desc: "Đồng hành khi tài khoản Facebook bị khóa/vô hiệu hóa, hướng dẫn kháng nghị đúng quy trình.",
    audience: "Cá nhân, Fanpage admin, chủ doanh nghiệp nhỏ.",
    scope: [
      "Đánh giá tình trạng tài khoản",
      "Soạn thảo và hướng dẫn gửi kháng nghị",
      "Theo dõi và cập nhật tiến độ",
    ],
    steps: [
      "Mô tả vấn đề qua form/Zalo",
      "Đánh giá và tư vấn phương án",
      "Xác nhận chi phí và triển khai",
    ],
    note: "Không cam kết khôi phục 100%. Kết quả phụ thuộc vào nền tảng.",
  },
  {
    icon: Music2,
    title: "TikTok Account Support",
    desc: "Hỗ trợ khi tài khoản TikTok bị đình chỉ hoặc gặp sự cố đăng nhập, xác minh.",
    audience: "Nhà sáng tạo nội dung, thương hiệu cá nhân, shop online.",
    scope: [
      "Hướng dẫn khiếu nại đúng chính sách",
      "Tư vấn tối ưu hồ sơ",
      "Định hướng nội dung phát triển kênh",
    ],
    steps: [
      "Thu thập thông tin sự cố",
      "Tư vấn phương án phù hợp",
      "Triển khai và theo dõi",
    ],
    note: "Không yêu cầu mật khẩu/OTP. Kết quả phụ thuộc nền tảng.",
  },
  {
    icon: TrendingUp,
    title: "Social Media Growth Solutions",
    desc: "Tư vấn tăng trưởng, quản lý hiện diện số và thiết kế nội dung cho Facebook & TikTok.",
    audience: "Doanh nghiệp, thương hiệu cá nhân, đội marketing.",
    scope: [
      "Chiến lược nội dung",
      "Thiết kế ấn phẩm truyền thông",
      "Tư vấn quảng cáo & marketing số",
    ],
    steps: [
      "Khảo sát mục tiêu & hiện trạng",
      "Đề xuất kế hoạch chi tiết",
      "Triển khai & báo cáo định kỳ",
    ],
    note: "Hiệu quả phụ thuộc vào nhiều yếu tố, không có cam kết cố định.",
  },
];

export default function Featured({
  onNotify,
}: {
  onNotify: (t: ToastState) => void;
}) {
  return (
    <section className="relative py-24 bg-graphite/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-gold text-xs tracking-[0.3em] mb-3">
            FEATURED
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl">
            DỊCH VỤ <span className="gold-gradient">NỔI BẬT</span>
          </h2>
          <p className="mt-4 text-mute">
            Ba giải pháp trọng tâm được thiết kế theo từng tình huống cụ thể.
          </p>
        </div>

        <div className="space-y-6">
          {featured.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl bg-graphite/70 border border-white/5 hover:border-gold/30 transition-all duration-300 p-6 sm:p-9 grid md:grid-cols-[auto,1fr,auto] gap-6 md:gap-8 items-start"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                  <Icon size={30} />
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-mute mb-5">{f.desc}</p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-gold/80 tracking-wider mb-2">
                        <Users size={14} /> ĐỐI TƯỢNG
                      </div>
                      <p className="text-sm text-paper/80">{f.audience}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs text-gold/80 tracking-wider mb-2">
                        <Compass size={14} /> PHẠM VI
                      </div>
                      <ul className="text-sm text-paper/80 space-y-1">
                        {f.scope.map((x) => (
                          <li key={x}>• {x}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex items-center gap-2 text-xs text-gold/80 tracking-wider mb-2">
                        <ListChecks size={14} /> CÁC BƯỚC TRIỂN KHAI
                      </div>
                      <ol className="text-sm text-paper/80 space-y-1">
                        {f.steps.map((x, k) => (
                          <li key={x}>
                            <span className="text-gold font-semibold">
                              0{k + 1}.
                            </span>{" "}
                            {x}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="mt-5 p-3 rounded-lg bg-ink/50 border border-white/5 text-xs text-mute">
                    <strong className="text-gold">Lưu ý:</strong> {f.note}
                  </div>
                </div>

                <div className="md:self-center">
                  <button
                    onClick={() => {
                      onNotify({
                        type: "info",
                        message:
                          "Vui lòng điền form bên dưới để gửi yêu cầu cho dịch vụ này.",
                      });
                      scrollToId("#contact");
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-gold/90 transition whitespace-nowrap"
                  >
                    Gửi yêu cầu <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}