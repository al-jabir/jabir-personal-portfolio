import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MagneticButtonProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function MagneticButton({ children, variant = "primary", className = "", ...props }: MagneticButtonProps) {
  const variants = {
    primary: "bg-mint text-ink shadow-lg shadow-mint/20 hover:bg-white",
    secondary: "border border-white/15 bg-white/[0.06] text-white hover:border-coral/60 hover:bg-coral/10 light:border-black/10 light:text-ink",
    ghost: "text-slate-200 hover:text-mint light:text-slate-700 light:hover:text-ink",
  };

  return (
    <motion.a
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`magnetic-btn ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}
