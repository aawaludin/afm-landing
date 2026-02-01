import { useEffect } from "react";

const usePreventHorizontalScroll = () => {
  useEffect(() => {
    // Prevent horizontal scroll on body
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";

    return () => {
      document.body.style.overflowX = "auto";
      document.documentElement.style.overflowX = "auto";
    };
  }, []);
};

export default usePreventHorizontalScroll;
