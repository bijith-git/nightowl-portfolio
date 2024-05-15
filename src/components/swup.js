import Swup from "swup";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SwupComponent = () => {
  useEffect(() => {
    const options = {
      containers: ["#swupMain", "#swupMenu"],
      animateHistoryBrowsing: true,
      linkSelector: "a:not([data-no-swup])",
      animationSelector: '[class="mil-main-transition"]',
    };
    const swup = new Swup(options);
    return () => {
      swup.destroy();
    };
  }, []);

  return null;
};

export default SwupComponent;
