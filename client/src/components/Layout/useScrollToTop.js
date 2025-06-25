import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Har page change pe scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]); // location.pathname change hone pe trigger hoga
};

export default useScrollToTop;