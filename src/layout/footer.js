"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  const [currentPath, setCurrentPath] = useState(
    typeof document !== "undefined" ? document.location.pathname : ""
  );

  useEffect(() => {
    const handleRouteChange = () => {
      const newPath =
        typeof document !== "undefined" ? document.location.pathname : "";
      setCurrentPath(newPath);
      updateActiveMenu(newPath);
    };
    updateActiveMenu(currentPath);
    if (typeof document !== "undefined") {
      document.addEventListener("popstate", handleRouteChange);
      return () => {
        document.removeEventListener("popstate", handleRouteChange);
      };
    }
  }, [currentPath]);
  const updateActiveMenu = (path) => {
    const menuItems = document.querySelectorAll(".mil-footer-menu a");
    menuItems.forEach((item) => {
      const itemPath = item.getAttribute("href");
      if (path === itemPath) {
        item.parentNode.classList.add("mil-active");
      } else {
        item.parentNode.classList.remove("mil-active");
      }
    });
  };

  return (
    <footer className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between">
            <div className="col-md-4 col-lg-4 mil-mb-60">
              <div className="mil-muted mil-logo mil-up mil-mb-30">
                <img
                  src="/img/icons/logo-02.png"
                  width={400}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-end">
                <div className="col-md-6 col-lg-7">
                  <nav className="mil-footer-menu mil-mb-60">
                    <ul>
                      <li className="mil-up">
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
                  <h6 className="mil-muted mil-mb-30">Socials</h6>
                  <ul className="mil-menu-list mil-up mil-mb-60">
                    <li>
                      <Link href="#." className="mil-light-soft">
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link href="#." className="mil-light-soft">
                        LinkedIn
                      </Link>
                    </li>
                    <li>
                      <Link href="#." className="mil-light-soft">
                        Facebook
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
                        <Image
                          src="/circle.svg"
                          width={18}
                          height={18}
                          alt="Cicle"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="" target="_blank" className="social-icon">
                        <Image
                          src="/circle.svg"
                          width={18}
                          height={18}
                          alt="Cicle"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="" target="_blank" className="social-icon">
                        <Image
                          src="/circle.svg"
                          width={18}
                          height={18}
                          alt="Cicle"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="" target="_blank" className="social-icon">
                        <Image
                          src="/circle.svg"
                          width={18}
                          height={18}
                          alt="Cicle"
                        />
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
const CircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      fill="#ffffff"
      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
    />
  </svg>
);
