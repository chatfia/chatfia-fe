"use client";

import { Button } from "@/components/ui/button";
import { useScrollToTopStore } from "@/hooks/store/use-scrolltotop-store";
import { ArrowUp } from "lucide-react";
import { useEffect } from "react";

export default function ScrollToTop() {
  const isVisible = useScrollToTopStore((state) => state.isVisible);
  const setIsVisible = useScrollToTopStore((state) => state.setIsVisible);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [setIsVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8">
      {isVisible && (
        <Button variant="scrollToTop" size="scrollToTop" onClick={scrollToTop}>
          <ArrowUp size={40} />
        </Button>
      )}
    </div>
  );
}
