import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { navLinks, siteConfig } from "../config/site";
import { scrollToId } from "../lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    scrollToId(href);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("#home");
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl border border-gold/40 bg-gold/5 flex items-center justify-center font-display font-bold text-gold group-hover:bg-gold/10 transition">
            LN
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-paper tracking-wide">
              {siteConfig.brand}
            </div>
            <div className="text-[10px] tracking-[0.3em] text-gold/80">
              SOCIAL MEDIA
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-paper/70">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                go(l.href);
              }}
              className="hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("#contact");
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-ink font-semibold text-sm hover:bg-gold/90 transition shadow-[0_0_30px_rgba(214,179,106,0.25)]"
          >
            <Sparkles size={16} />
            Nhận tư vấn ngay
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-paper p-2 rounded-lg hover:bg-white/5"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(l.href);
                }}
                className="py-3 px-2 text-paper/80 hover:text-gold transition-colors text-sm border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                go("#contact");
              }}
              className="mt-3 py-3 rounded-full bg-gold text-ink font-semibold text-center text-sm"
            >
              Nhận tư vấn ngay
            </a>
          </div>
        </div>
      )}
    </header>
  );
}