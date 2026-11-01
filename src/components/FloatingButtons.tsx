import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Send } from "lucide-react";
import { siteConfig } from "../config/site";
import { contactHelp, openLink } from "../lib/utils";
import { ToastState } from "./Toast";

export default function FloatingButtons({
  onNotify,
}: {
  onNotify: (t: ToastState) => void;
}) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile contact bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-ink/95 backdrop-blur-xl border-t border-white/10 p-3 flex gap-2">
        <button
          onClick={() => openLink(siteConfig.zaloUrl, contactHelp.zalo)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-gold text-ink text-xs font-semibold"
        >
          <MessageCircle size={14} /> Zalo
        </button>
        <button
          onClick={() => openLink(siteConfig.telegramUrl, contactHelp.telegram)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full border border-gold/40 text-gold text-xs font-semibold"
        >
          <Send size={14} /> Telegram
        </button>
      </div>

      {/* Desktop floating stack */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col gap-2">
        <button
          onClick={() => openLink(siteConfig.zaloUrl, contactHelp.zalo)}
          aria-label="Zalo"
          className="w-12 h-12 rounded-full bg-gold text-ink flex items-center justify-center shadow-lg shadow-gold/30 hover:scale-110 transition"
        >
          <MessageCircle size={20} />
        </button>
        <button
          onClick={() =>
            openLink(siteConfig.telegramUrl, contactHelp.telegram)
          }
          aria-label="Telegram"
          className="w-12 h-12 rounded-full bg-graphite border border-gold/40 text-gold flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <Send size={20} />
        </button>
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Lên đầu trang"
            className="w-12 h-12 rounded-full bg-graphite border border-white/10 text-paper/80 flex items-center justify-center hover:border-gold/40 hover:text-gold transition"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </>
  );
}