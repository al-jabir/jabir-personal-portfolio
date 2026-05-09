import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export function BackgroundEffects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(440px circle at ${mouseX}px ${mouseY}px, rgba(86, 240, 198, 0.14), transparent 70%)`;

  useEffect(() => {
    const move = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div className="pointer-events-none fixed inset-0 z-0" style={{ background }} />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px] light:opacity-[0.28] light:[background-image:linear-gradient(rgba(15,23,42,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.08)_1px,transparent_1px)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,transparent,rgba(5,7,13,0.72)_62%)] light:bg-[radial-gradient(circle_at_50%_0%,transparent,rgba(255,255,255,0.35)_62%)]" />
    </>
  );
}
