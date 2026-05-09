import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const updateHover = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest("a, button, input, textarea, [data-cursor='hover']")));
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", updateHover);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", updateHover);
    };
  }, []);

  return (
    <>
      <span className={`custom-cursor ${hovering ? "is-hovering" : ""}`} style={{ left: position.x, top: position.y }} />
      <span className="cursor-dot" style={{ left: position.x, top: position.y }} />
    </>
  );
}
