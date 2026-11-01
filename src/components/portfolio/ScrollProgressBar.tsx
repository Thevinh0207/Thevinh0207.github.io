import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressBarProps {
  thickness?: number;
  opacity?: number;
  color?: string;
  stiffness?: number;
  damping?: number;
}


export function ScrollProgressBar({
  thickness = 2.5,
  opacity = 1,
  color = "var(--page-fg)",
  stiffness = 100,
  damping = 20,
}: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness,
    damping,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 origin-left"
      style={{
        height: `${thickness}px`,
        scaleX: smoothProgress,
        background: color,
        opacity,
      }}
      aria-hidden="true"
    />
  );
}
