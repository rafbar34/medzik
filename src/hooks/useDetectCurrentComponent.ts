import { useEffect, useState } from "react";

export const useDetectCurrentComponent = (
  ref: React.RefObject<HTMLElement | null>,
  loading: boolean,
  threshold: number = 0.2
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isVisible) setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, isVisible, loading]);
  return isVisible;
};
