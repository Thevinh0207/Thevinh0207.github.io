import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504610926078-a1611febcad3?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542903660-eedba2cda473?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
];

const ROW1 = IMAGES.slice(0, 11);
const ROW2 = IMAGES.slice(11);

export function MarqueeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const o = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(o);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const triple = (arr: string[]) => [...arr, ...arr, ...arr];

  return null;
}
