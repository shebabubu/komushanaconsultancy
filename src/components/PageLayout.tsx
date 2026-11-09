import type { ReactNode } from "react";
import { MotionConfig, motion } from "motion/react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Preloader } from "./Preloader";
import { WhatsAppButton } from "./WhatsAppButton";
import { EASE } from "./motion";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <Preloader />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-background focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <div className="flex min-h-screen flex-col overflow-x-clip">
        <SiteHeader />
        <motion.main
          id="main"
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {children}
        </motion.main>
        <SiteFooter />
      </div>
      <WhatsAppButton />
    </MotionConfig>
  );
}
