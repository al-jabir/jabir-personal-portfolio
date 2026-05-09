import { useScrollProgress } from "../hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-[80] h-1 w-full bg-transparent" aria-hidden="true">
      <div
        className="h-full rounded-r-full bg-gradient-to-r from-mint via-skyglow to-coral"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
