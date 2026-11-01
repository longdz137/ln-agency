import { Facebook, Music2, Instagram, Youtube, Mail } from "lucide-react";
import { navLinks, siteConfig } from "../config/site";
import { services } from "../data/services";
import { currentYear, openLink, contactHelp } from "../lib/utils";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl border border-gold/40 bg-gold/5 flex items-center justify-center font-display font-bold text-gold">
                LN
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold">{siteConfig.brand}</div>
                <div className="text-[10px] tracking-[0.3em] text-gold/80">
                  SOCIAL MEDIA
                </div>
              </div>
            </div>
            <p className="text-sm text-mute leading-relaxed mb-4">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              <SocialBtn
                Icon={Facebook}
                url={siteConfig.socials.facebook}
                name="Facebook"
              />
              <SocialBtn
                Icon={Music2}
                url={siteConfig.socials.tiktok}
                name="TikTok"
              />
              <SocialBtn
                Icon={Instagram}
                url={siteConfig.socials.instagram}
                name="Instagram"
              />
              <SocialBtn
                Icon={Youtube}
                url={siteConfig.socials.youtube}
                name="YouTube"
              />
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gold mb-4 text-sm tracking-wider">
              ĐIỀU HƯỚNG
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-mute hover:text-gold transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gold mb-4 text-sm tracking-wider">
              DỊCH VỤ
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-mute hover:text-gold transition"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gold mb-4 text-sm tracking-wider">
              LIÊN HỆ
            </h4>
            <ul className="space-y-2.5 text-sm text-mute">
              <li>
                <button
                  onClick={() => openLink(siteConfig.zaloUrl, contactHelp.zalo)}
                  className="hover:text-gold transition"
                >
                  Zalo hỗ trợ
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    openLink(siteConfig.telegramUrl, contactHelp.telegram)
                  }
                  className="hover:text-gold transition"
                >
                  Telegram
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    siteConfig.email
                      ? (window.location.href = `mailto:${siteConfig.email}`)
                      : alert(contactHelp.email)
                  }
                  className="hover:text-gold transition inline-flex items-center gap-1.5"
                >
                  <Mail size={14} />
                  {siteConfig.email || "Email liên hệ"}
                </button>
              </li>
              <li>{siteConfig.hotline || "Hotline: đang cập nhật"}</li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 space-y-4">
          <div className="flex flex-wrap gap-5 text-xs text-mute">
            <a href="#" className="hover:text-gold transition">
              Chính sách quyền riêng tư
            </a>
            <a href="#" className="hover:text-gold transition">
              Điều khoản dịch vụ
            </a>
          </div>
          <p className="text-xs text-mute/70 leading-relaxed">
            LN AGENCY là đơn vị dịch vụ độc lập, không phải đại diện chính thức
            của Meta, Facebook, TikTok, Instagram hoặc YouTube, trừ khi có xác
            nhận hợp lệ từ các bên liên quan.
          </p>
          <p className="text-xs text-mute/60">
            © {currentYear} {siteConfig.brand}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({
  Icon,
  url,
  name,
}: {
  Icon: any;
  url: string;
  name: string;
}) {
  return (
    <button
      onClick={() =>
        openLink(
          url,
          `Kênh ${name} chưa được cấu hình. Vui lòng cập nhật trong src/config/site.ts.`
        )
      }
      aria-label={name}
      className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold/20 hover:text-gold flex items-center justify-center text-mute transition"
    >
      <Icon size={16} />
    </button>
  );
}