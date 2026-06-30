import { useEffect, useRef, memo } from "react";

export const Reveal = memo(function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.1, // Customizable for different screen needs
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          // JS immediately adds the class, CSS handles the delay smoothly
          el.classList.add("is-visible");
          observer.unobserve(el); // Stop observing once revealed
        }
      },
      { 
        threshold, 
        // Using % makes it responsive for mobile vs desktop screens
        rootMargin: "0px 0px -10% 0px" 
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <div 
      ref={ref} 
      className={`reveal ${className}`}
      // CSS will read this and apply the hardware-accelerated delay
      style={{ transitionDelay: `${delay}ms`, willChange: "opacity, transform" }}
    >
      {children}
    </div>
  );
});