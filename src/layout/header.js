"use client";
import Link from "next/link";

const Header = () => {
  return (
    <div className="mil-menu-frame">
      <div className="mil-frame-top">
        <Link href="/" className="mil-logo">
          N.
        </Link>
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
                  <li className="mil-has-children mil-active">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="mil-has-children">
                    <Link href="/">Portfolio</Link>
                  </li>
                  <li className="mil-has-children">
                    <Link href="/">Services</Link>
                  </li>
                  <li className="mil-has-children">
                    <Link href="/">Contact</Link>
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
                          <Link
                            href="project-1.html"
                            className="mil-light-soft"
                          >
                            Interior design studio
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="project-2.html"
                            className="mil-light-soft"
                          >
                            Home Security Camera
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="project-3.html"
                            className="mil-light-soft"
                          >
                            Kemia Honest Skincare
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="project-4.html"
                            className="mil-light-soft"
                          >
                            Cascade of Lava
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="project-5.html"
                            className="mil-light-soft"
                          >
                            Air Pro by Molekule
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="project-6.html"
                            className="mil-light-soft"
                          >
                            Tony&apos;s Chocolonely
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">Useful links</h6>
                      <ul className="mil-menu-list">
                        <li>
                          <Link href="#." className="mil-light-soft">
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link href="#." className="mil-light-soft">
                            Terms and conditions
                          </Link>
                        </li>
                        <li>
                          <Link href="#." className="mil-light-soft">
                            Cookie Policy
                          </Link>
                        </li>
                        <li>
                          <Link href="#." className="mil-light-soft">
                            Careers
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mil-divider mil-mb-60" />
                  <div className="row justify-content-between">
                    <div className="col-lg-4 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">Kerala</h6>
                      <div className="mil-light-soft mil-up">
                        Somratn, 57/627, Water land road Elamkulam,Ernakulam
                        682020
                        <span className="mil-no-wrap">+91 8113864689</span>
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
  );
};
export default Header;
