"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
function Footer() {
  return (
    <footer className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between">
            <div className="col-md-4 col-lg-4 mil-mb-60">
              <div className="mil-muted mil-logo mil-up mil-mb-30">
                Night Owl.
              </div>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-end">
                <div className="col-md-6 col-lg-7">
                  <nav className="mil-footer-menu mil-mb-60">
                    <ul>
                      <li className="mil-up mil-active">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="mil-up">
                        <Link href="/portfolio">Portfolio</Link>
                      </li>
                      <li className="mil-up">
                        <Link href="/services">Services</Link>
                      </li>
                      <li className="mil-up">
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-6 col-lg-5">
                  <ul className="mil-menu-list mil-up mil-mb-60">
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
            </div>
          </div>
          <div className="row justify-content-between flex-sm-row-reverse">
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-between">
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">Kerala</h6>
                  <div className="mil-light-soft mil-up">
                    Somratn, 57/627, Water land road Elamkulam, Ernakulam,
                    <span className="mil-no-wrap">682020</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 mil-mb-60">
              <div className="mil-vert-between">
                <div className="mil-mb-30">
                  <ul className="mil-social-icons mil-up">
                    <li>
                      <Link href="" target="_blank" className="social-icon">
                        <i className="far fa-circle" />
                      </Link>
                    </li>
                    <li>
                      <Link href="" target="_blank" className="social-icon">
                        <i className="far fa-circle" />
                      </Link>
                    </li>
                    <li>
                      <Link href="" target="_blank" className="social-icon">
                        <i className="far fa-circle" />
                      </Link>
                    </li>
                    <li>
                      <Link href="" target="_blank" className="social-icon">
                        <i className="far fa-circle" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mil-light-soft mil-up">
                  © Copyright 2024 - Night Owl. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
