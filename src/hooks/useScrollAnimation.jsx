// src/hooks/useScrollAnimation.js
import { useEffect, useRef, useState } from "react";

const useScrollAnimation = (animation = "fade-up") => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return { ref, isVisible, animation };
};

export default useScrollAnimation;
