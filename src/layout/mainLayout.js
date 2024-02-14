"use client";
import Footer from "./footer";
import Menu from "./menu";
import CustomCursor from "./cursor";
import Preloader from "./preloader";
import ScrollProgress from "./scrollProgress";
import Curtain from "./curtain";
import PentagonAnimation from "./pentagon";

const MainLayout = ({ children, header, footer, noFooter, onePageMenu }) => {
  return (
    <div className="mil-wrapper" id="top">
      <CustomCursor />
      <Preloader />
      <ScrollProgress />
      <Curtain />
      <Menu />
      <div className="mil-frame">
        <div className="mil-frame-top">
          <a href="/" className="mil-logo">
            N.
          </a>
          <div class="mil-menu-btn">
            <span></span>
          </div>
        </div>
      </div>
      <div class="mil-content">
        <div id="swupMain" class="mil-main-transition">
          {children}
        </div>
      </div>
      {!noFooter && <Footer />}
      <PentagonAnimation />
    </div>
  );
};
export default MainLayout;
