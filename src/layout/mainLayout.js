"use client";
import { portfolioUtilits } from "@/utility";
import { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";

const MainLayout = ({ children, header, footer, noFooter, onePageMenu }) => {
  useEffect(() => {
    portfolioUtilits.animaiton();
  }, []);

  return (
    <div className="mil-wrapper" id="top">
      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition">
          <div className="mil-ball">
            <span className="mil-icon-1">
              <svg viewBox="0 0 128 128">
                <path d="M106.1,41.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2L116.8,61H11.2l14.9-14.9c1.2-1.2,1.2-3.1,0-4.2	c-1.2-1.2-3.1-1.2-4.2,0l-20,20c-1.2,1.2-1.2,3.1,0,4.2l20,20c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2	L11.2,67h105.5l-14.9,14.9c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l20-20c1.2-1.2,1.2-3.1,0-4.2L106.1,41.9	z" />
              </svg>
            </span>
            <div className="mil-more-text">More</div>
            <div className="mil-choose-text">Сhoose</div>
          </div>
          <div className="mil-progress-track">
            <div className="mil-progress"></div>
          </div>
          <div className="mil-preloader">
            <div className="mil-preloader-animation">
              <div className="mil-pos-abs mil-animation-1">
                <p className="mil-h3 mil-muted mil-thin">Capture</p>
                <p className="mil-h3 mil-muted">Craft</p>
                <p className="mil-h3 mil-muted mil-thin">Inspire</p>
              </div>
              <div className="mil-pos-abs mil-animation-2">
                <div className="mil-reveal-frame">
                  <p className="mil-reveal-box"></p>
                  <p className="mil-h3 mil-muted mil-thin">Night Owl</p>
                </div>
              </div>
            </div>
          </div>
          <Header />
          <div className="mil-content">
            <div id="swupMain" className="mil-main-transition">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
