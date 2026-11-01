import { siteConfig } from "../config/site";

export const openLink = (url: string, fallbackMsg: string) => {
  if (!url) {
    alert(fallbackMsg);
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
};

export const contactHelp = {
  zalo: "Kênh Zalo chưa được cấu hình. Vui lòng cập nhật trường 'zaloUrl' trong src/config/site.ts.",
  telegram:
    "Kênh Telegram chưa được cấu hình. Vui lòng cập nhật trường 'telegramUrl' trong src/config/site.ts.",
  email:
    "Email liên hệ chưa được cấu hình. Vui lòng cập nhật trường 'email' trong src/config/site.ts.",
  hotline:
    "Hotline chưa được cấu hình. Vui lòng cập nhật trường 'hotline' trong src/config/site.ts.",
};

export const scrollToId = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const currentYear = new Date().getFullYear();