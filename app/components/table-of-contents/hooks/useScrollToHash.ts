import { useEffect } from "react";
import { useLocation } from "react-router";

export function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const ele = document.querySelector(hash);
      if (ele) {
        ele.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [hash]);
}
