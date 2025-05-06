import { useEffect, useState } from "react";

export const useDetectCurrentComponent = (
  ref: React.RefObject<HTMLElement | null>,
  loading: boolean,
  threshold: number = 0.2
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref?.current;
    if (!node) return;
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


      observer.observe(node);
    

    return () => {

        observer.unobserve(node);
        
      
    };
  }, [isVisible, loading, threshold, ref]);
  return isVisible;
};
