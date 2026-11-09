import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { EASE } from "./motion";
import { WHATSAPP_URL } from "@/data/contact";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Komushana Consultancy on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-navy py-3 pl-3 pr-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5 sm:pr-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay: 1.6 }}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-gold-foreground">
        <MessageCircle className="h-4 w-4" />
      </span>
      <span className="hidden sm:inline">WhatsApp us</span>
    </motion.a>
  );
}
