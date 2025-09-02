import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) {
        setHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button")) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-green-500 pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: hovering ? 1.5 : 1,
        opacity: 1,
      }}
      transition={{
        type: "tween",
        duration: 0.15, // faster response
        ease: "easeOut",
      }}
    />
  );
}
