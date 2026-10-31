import { motion, type HTMLMotionProps } from "framer-motion";
import { useMemo, type ReactNode, type ElementType } from "react";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "as"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as,
  className,
  ...rest
}: FadeInProps) {
  const Comp = useMemo(() => (as ? motion.create(as as ElementType) : motion.div) as typeof motion.div, [as]);
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
