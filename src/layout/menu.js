"use client";
import { useEffect, useState } from "react";

const Menu = () => {
  const isBrowser = typeof document !== "undefined";
  const [currentPath, setCurrentPath] = useState(
    isBrowser ? document.location.pathname : ""
  );

  const highlightActiveMenu = (currentPath) => {
    if (isBrowser) {
      const menuItems = document.querySelectorAll(".mil-main-menu a");

      menuItems.forEach((item) => {
        const itemPath = item.getAttribute("href");

        if (currentPath === itemPath) {
          item.parentNode.classList.add("mil-active");
        } else {
          item.parentNode.classList.remove("mil-active");
        }
      });
    }
  };

  useEffect(() => {
    highlightActiveMenu(currentPath);
    const handleRouteChange = () => {
      const newPath = isBrowser ? document.location.pathname : "";
      setCurrentPath(newPath);
    };
    if (isBrowser) {
      document.addEventListener("popstate", handleRouteChange);
      return () => {
        document.removeEventListener("popstate", handleRouteChange);
      };
    }
  }, [isBrowser, currentPath, highlightActiveMenu]);
  return (
    <>
      <div className="mil-menu-frame">
        <div className="mil-frame-top">
          <a href="/" className="mil-logo">
            N.
          </a>
          <div className="mil-menu-btn">
            <span />
          </div>
        </div>
        <div className="container">
          <div className="mil-menu-content">
            <div className="row">
              <div className="col-xl-5">
                <nav className="mil-main-menu" id="swupMenu">
                  <ul>
                    <li className="mil-has-children">
                      <a href="/">Home</a>
                    </li>
                    <li className="mil-has-children">
                      <a href="/portfolio">Portfolio</a>
                    </li>
                    <li className="mil-has-children">
                      <a href="/services">Services</a>
                    </li>
                    <li className="mil-has-children">
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xl-7">
                <div className="mil-menu-right-frame">
                  <div className="mil-animation-in">
                    <div className="mil-animation-frame">
                      <div
                        className="mil-animation mil-position-1 mil-scale"
                        data-value-1={2}
                        data-value-2={2}
                      />
                    </div>
                  </div>
                  <div className="mil-menu-right">
                    <div className="row">
                      <div className="col-lg-8 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Projects</h6>
                        <ul className="mil-menu-list">
                          <li>
                            <a href="/project" className="mil-light-soft">
                              Feny
                            </a>
                          </li>
                          <li>
                            <a href="/project" className="mil-light-soft">
                              NDSF
                            </a>
                          </li>
                          <li>
                            <a href="/project" className="mil-light-soft">
                              VYMK
                            </a>
                          </li>
                          <li>
                            <a href="/project" className="mil-light-soft">
                              MUSEUM
                            </a>
                          </li>
                          <li>
                            <a href="/project" className="mil-light-soft">
                              STRING PUBLICATIONS
                            </a>
                          </li>
                          <li>
                            <a href="/project" className="mil-light-soft">
                              HOT DEGREE
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Socials</h6>
                        <ul className="mil-menu-list">
                          <li>
                            <a href="" className="mil-light-soft">
                              Instagram
                            </a>
                          </li>
                          <li>
                            <a href="" className="mil-light-soft">
                              LinkedIn
                            </a>
                          </li>
                          <li>
                            <a href="" className="mil-light-soft">
                              Facebook
                            </a>
                          </li>
                          {/* <li>
                            <a href="" className="mil-light-soft">
                              Careers
                            </a>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="mil-divider mil-mb-60" />
                    <div className="row justify-content-between">
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Kerala</h6>
                        <div className="mil-light-soft mil-up">
                          Somratn, 57/627, Water land road Elamkulam, Ernakulam,
                          <span className="mil-no-wrap"> 682020</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
