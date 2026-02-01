// utils/useStickyNav.js
import { useState, useEffect, useRef } from "react";

const useStickyNav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-1px 0px 0px 0px" },
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return { isSticky, navRef, sentinelRef };
};

export default useStickyNav;
