import React, { useEffect, useState } from "react";

const ScrollBtn = () => {
  const [btnVisible, setBtnVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const checkScrollPosition = () => {
    const scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;
    const triggerPosition = 260;

    if (scrollPosition > triggerPosition) {
      setBtnVisible(true);
    } else {
      setBtnVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <>
      {btnVisible && (
        <div className="btn" onClick={scrollToTop}>
          <p>&#8657;</p>
        </div>
      )}
    </>
  );
};

export default ScrollBtn;
