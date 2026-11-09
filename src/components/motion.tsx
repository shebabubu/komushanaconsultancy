import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/** Shared easing: a calm "expo out" used for every reveal on the site. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Image that unveils with a clip-path wipe when scrolled into view. */
export function RevealImage({
  src,
  alt,
  width,
  height,
  className,
  eager,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  eager?: boolean;
}) {
  return (
    <motion.div
      className={`overflow-hidden ${className ?? ""}`}
      initial={{ clipPath: "inset(12% 0 12% 0)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0% 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, ease: EASE }}
    >
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        className="h-full w-full object-cover"
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE }}
      />
    </motion.div>
  );
}

const wordParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const wordChild: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
};

/** Headline whose words rise into place one after another. */
export function SplitHeadline({
  text,
  as: Tag = "h1",
  className,
  delay = 0,
  accent,
}: {
  text: string;
  as?: "h1" | "h2";
  className?: string;
  delay?: number;
  /** Words (exact match) rendered in the accent italic style. */
  accent?: string[];
}) {
  const MotionTag = Tag === "h1" ? motion.h1 : motion.h2;
  return (
    <MotionTag
      className={className}
      variants={wordParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ delayChildren: delay }}
      aria-label={text}
    >
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            variants={wordChild}
            className={`inline-block ${accent?.includes(w) ? "font-normal italic text-navy-soft" : ""}`}
          >
            {w}
            {"\u00A0"}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${
        light ? "text-gold" : "text-navy-soft"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-gold" : "bg-navy-soft"}`} />
      {children}
    </span>
  );
}
