import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation: React.FC = ({ text }: { text: string }) => {
  const mySplitText = new SplitType(".split", { types: "chars" });
  const chars = mySplitText.chars;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(chars, {
        yPercent: 200,
        stagger: 0.05,
        duration: 0.4,
        scrollTrigger: {
          trigger: ".split",
          start: "top 80%",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  });

  return <span className="split w-fit">{text}</span>;
};

export default TextAnimation;
