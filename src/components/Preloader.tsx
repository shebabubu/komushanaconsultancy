import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import logoIcon from "@/assets/komushana-icon.png.asset.json";
import { EASE } from "./motion";

let shownThisSession = false;

/** Short branded intro, shown once per visit. Skipped for reduced motion. */
export function Preloader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (shownThisSession || sessionStorage.getItem("k-intro") || reduce) {
      shownThisSession = true;
      return;
    }
    shownThisSession = true;
    sessionStorage.setItem("k-intro", "1");
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.8, ease: EASE }}
          aria-hidden
        >
          <div className="flex flex-col items-center">
            <motion.img
              src={logoIcon.url}
              alt=""
              width={72}
              height={72}
              className="h-16 w-16 rounded-full bg-primary-foreground/95 object-contain p-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: EASE }}
            />
            <motion.p
              className="mt-5 font-serif text-xl text-primary-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            >
              Komushana
            </motion.p>
            <div className="mt-4 h-px w-32 overflow-hidden bg-primary-foreground/20">
              <motion.div
                className="h-full bg-gold"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.1, ease: EASE }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
