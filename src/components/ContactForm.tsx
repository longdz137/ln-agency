import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { siteConfig } from "../config/site";
import { services } from "../data/services";
import { ToastState } from "./Toast";

const schema = z.object({
  name: z.string().min(2, "Vui lòng nhập họ tên (ít nhất 2 ký tự)."),
  contact: z
    .string()
    .min(5, "Vui lòng nhập kênh liên hệ (Zalo/Telegram/Email/SĐT)."),
  platform: z.string().min(1, "Vui lòng chọn nền tảng."),
  service: z.string().min(1, "Vui lòng chọn dịch vụ quan tâm."),
  message: z.string().min(10, "Mô tả vấn đề ít nhất 10 ký tự."),
  agree: z.literal(true, {
    errorMap: () => ({
      message: "Bạn cần đồng ý với chính sách quyền riêng tư.",
    }),
  }),
  // Honeypot
  website: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const platforms = [
  "Facebook",
  "TikTok",
  "Instagram",
  "YouTube",
  "Khác",
];

export default function ContactForm({
  onNotify,
}: {
  onNotify: (t: ToastState) => void;
}) {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { platform: "", service: "" },
  });

  const onSubmit = async (data: FormData) => {
    if (data.website) {
      // Honeypot filled → silently ignore
      return;
    }

    if (!siteConfig.formEndpoint) {
      onNotify({
        type: "warning",
        message:
          "Form chưa được kết nối backend. Vui lòng cấu hình 'formEndpoint' trong src/config/site.ts hoặc liên hệ trực tiếp qua Zalo/Telegram.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          contact: data.contact,
          platform: data.platform,
          service: data.service,
          message: data.message,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error("Gửi thất bại");
      onNotify({
        type: "success",
        message:
          "Yêu cầu đã được gửi thành công. LN AGENCY sẽ phản hồi sớm nhất.",
      });
      reset();
    } catch {
      onNotify({
        type: "error",
        message:
          "Không thể gửi yêu cầu. Vui lòng thử lại sau hoặc liên hệ Zalo/Telegram.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <div className="text-gold text-xs tracking-[0.3em] mb-3">
            CONTACT
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl">
            BẠN ĐANG GẶP VẤN ĐỀ
            <br />
            <span className="gold-gradient">VỚI TÀI KHOẢN?</span>
          </h2>
          <p className="mt-4 text-mute">
            Hãy gửi thông tin về nhu cầu của bạn. LN AGENCY sẽ tiếp nhận và tư
            vấn phương án phù hợp.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl bg-graphite/60 border border-white/5 p-6 sm:p-9 space-y-5"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Họ và tên" error={errors.name?.message}>
              <input
                type="text"
                placeholder="Nguyễn Văn A"
                {...register("name")}
                className="w-full bg-ink/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold outline-none transition"
              />
            </Field>
            <Field
              label="Kênh liên hệ (Zalo/Telegram/Email/SĐT)"
              error={errors.contact?.message}
            >
              <input
                type="text"
                placeholder="Zalo: 09xxx / email@example.com"
                {...register("contact")}
                className="w-full bg-ink/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold outline-none transition"
              />
            </Field>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Nền tảng cần hỗ trợ"
              error={errors.platform?.message}
            >
              <select
                {...register("platform")}
                className="w-full bg-ink/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold outline-none transition"
              >
                <option value="">— Chọn nền tảng —</option>
                {platforms.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </Field>
            <Field
              label="Dịch vụ quan tâm"
              error={errors.service?.message}
            >
              <select
                {...register("service")}
                className="w-full bg-ink/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold outline-none transition"
              >
                <option value="">— Chọn dịch vụ —</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Khác">Khác / Tư vấn chung</option>
              </select>
            </Field>
          </div>

          <Field label="Mô tả vấn đề" error={errors.message?.message}>
            <textarea
              rows={5}
              placeholder="Mô tả ngắn gọn tình trạng tài khoản, thời điểm, thông báo từ nền tảng (nếu có)..."
              {...register("message")}
              className="w-full bg-ink/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold outline-none transition resize-y"
            />
          </Field>

          {/* Honeypot */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
            className="hidden"
            aria-hidden="true"
          />

          <label className="flex items-start gap-3 text-xs text-mute cursor-pointer">
            <input
              type="checkbox"
              {...register("agree")}
              className="mt-0.5 w-4 h-4 accent-[#D6B36A]"
            />
            <span>
              Tôi đồng ý với{" "}
              <a href="#" className="text-gold hover:underline">
                chính sách quyền riêng tư
              </a>{" "}
              và xác nhận không gửi mật khẩu/OTP/mã khôi phục qua form này.
            </span>
          </label>
          {errors.agree && (
            <p className="text-xs text-red-400">{errors.agree.message}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold text-ink font-semibold hover:bg-gold/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Đang gửi...
              </>
            ) : (
              <>
                <Send size={18} /> GỬI YÊU CẦU TƯ VẤN
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-mute/70">
            LN AGENCY không yêu cầu mật khẩu, OTP, cookie đăng nhập hoặc mã
            khôi phục. Mọi hướng dẫn đều để khách hàng tự thực hiện.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs text-mute mb-1.5">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}