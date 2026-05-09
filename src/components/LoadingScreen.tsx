import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.85, delay: 1.05, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] grid place-items-center bg-night"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-center"
      >
        <div className="mx-auto mb-6 grid size-20 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            className="block size-10 rounded-full border-2 border-mint border-t-transparent"
          />
        </div>
        <p className="font-outfit text-2xl font-semibold text-white">Al Jabir</p>
        <p className="mt-2 text-sm uppercase tracking-[0.35em] text-mint">Portfolio loading</p>
      </motion.div>
    </motion.div>
  );
}
