import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 bg-graphite/30">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <div className="text-gold text-xs tracking-[0.3em] mb-3">
            FAQ
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl">
            CÂU HỎI THƯỜNG GẶP
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? "bg-graphite border-gold/30"
                    : "bg-graphite/40 border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-paper text-sm sm:text-base">
                    {f.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition ${
                      isOpen
                        ? "bg-gold text-ink"
                        : "bg-white/5 text-mute"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-mute leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}