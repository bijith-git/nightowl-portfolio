export default function Menu() {
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
                    <li className="mil-has-children mil-active">
                      <a href="/">Home</a>
                    </li>
                    <li className="mil-has-children">
                      <a href="portfolio-1.html">Portfolio</a>
                    </li>
                    <li className="mil-has-children">
                      <a href="services.html">Services</a>
                    </li>
                    <li className="mil-has-children">
                      <a href="contact.html">Contact</a>
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
                            <a href="project-1.html" className="mil-light-soft">
                              Interior design studio
                            </a>
                          </li>
                          <li>
                            <a href="project-2.html" className="mil-light-soft">
                              Home Security Camera
                            </a>
                          </li>
                          <li>
                            <a href="project-3.html" className="mil-light-soft">
                              Kemia Honest Skincare
                            </a>
                          </li>
                          <li>
                            <a href="project-4.html" className="mil-light-soft">
                              Cascade of Lava
                            </a>
                          </li>
                          <li>
                            <a href="project-5.html" className="mil-light-soft">
                              Air Pro by Molekule
                            </a>
                          </li>
                          <li>
                            <a href="project-6.html" className="mil-light-soft">
                              Tony&apos;s Chocolonely
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Useful links</h6>
                        <ul className="mil-menu-list">
                          <li>
                            <a href="#." className="mil-light-soft">
                              Privacy Policy
                            </a>
                          </li>
                          <li>
                            <a href="#." className="mil-light-soft">
                              Terms and conditions
                            </a>
                          </li>
                          <li>
                            <a href="#." className="mil-light-soft">
                              Cookie Policy
                            </a>
                          </li>
                          <li>
                            <a href="#." className="mil-light-soft">
                              Careers
                            </a>
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
    </>
  );
}
