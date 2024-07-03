"use client";

import { useArrowUpStore } from "@/app/stores/useArrowUpStore";
import { useEffect } from "react";
import { ArrowBigUp } from "lucide-react";

export default function ScrollToTopBtn() {
  const isVisible = useArrowUpStore((state) => state.isVisible);
  const setIsVisible = useArrowUpStore((state) => state.setIsVisible);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility); // 스크롤 이벤트 리스너 추가

    return () => {
      window.removeEventListener("scroll", toggleVisibility); // 컴포넌트가 언마운트 될 때 리스너 제거
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
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full bg-red-600 text-white shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-800"
        >
          <ArrowBigUp size={40} />
        </button>
      )}
    </div>
  );
}
