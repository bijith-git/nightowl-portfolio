import MainLayout from "@/layout/mainLayout";

export const metadata = {
  title: "Portfolio",
  default: "Portfolio",
  description: "",
};

const Portfolio = () => {
  return (
    <MainLayout>
      <div className="mil-inner-banner">
        <div className="mil-banner-content mil-up">
          <div className="mil-animation-frame">
            <div
              className="mil-animation mil-position-4 mil-dark mil-scale"
              data-value-1={6}
              data-value-2="1.4"
            />
          </div>
          <div className="container">
            <ul className="mil-breadcrumbs mil-mb-60">
              <li>
                <a href="/">Homepage</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
            </ul>
            <h1 className="mil-mb-60">
              Designing a <br />
              Better <span className="mil-thin">World Today</span>
            </h1>
            <a
              href="#portfolio"
              className="mil-link mil-dark mil-arrow-place mil-down-arrow"
            >
              <span>Our works</span>
            </a>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* portfolio */}
      <section id="portfolio">
        <div className="container mil-portfolio mil-p-120-60">
          <div className="mil-lines-place" />
          <div className="mil-lines-place mil-lines-long" />
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <a href="/feny" className="mil-portfolio-item mil-more mil-mb-60">
                <div className="mil-cover-frame mil-vert mil-up">
                  <div className="mil-cover">
                    <img src="img/works/1.png" alt="cover" />
                  </div>
                </div>
                <div className="mil-descr">
                  <div className="mil-labels mil-up mil-mb-15">
                    <div className="mil-label mil-upper mil-accent">
                      Spot Editing
                    </div>
                    <div className="mil-label mil-upper">
                      September 17, 20233
                    </div>
                  </div>
                  <h4 className="mil-up">Feny</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-6">
              <a
                href="/NDSF"
                className="mil-portfolio-item mil-more mil-parallax mil-mb-60"
                data-value-1={60}
                data-value-2={-60}
              >
                <div className="mil-cover-frame mil-hori mil-up">
                  <div className="mil-cover">
                    <img src="img/works/2.jpg" alt="cover" />
                  </div>
                </div>
                <div className="mil-descr">
                  <div className="mil-labels mil-up mil-mb-15">
                    <div className="mil-label mil-upper mil-accent">Design</div>
                    <div className="mil-label mil-upper">may 24 2023</div>
                  </div>
                  <h4 className="mil-up">NDSF</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-6">
              <a
                href="project-3.html"
                className="mil-portfolio-item mil-more mil-parallax mil-mb-60"
                data-value-1={60}
                data-value-2={-60}
              >
                <div className="mil-cover-frame mil-hori mil-up">
                  <div className="mil-cover">
                    <img src="img/works/3.jpg" alt="cover" />
                  </div>
                </div>
                <div className="mil-descr">
                  <div className="mil-labels mil-up mil-mb-15">
                    <div className="mil-label mil-upper mil-accent">Design</div>
                    <div className="mil-label mil-upper">may 24 2023</div>
                  </div>
                  <h4 className="mil-up">VYMK</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-5">
              <a
                href="project-4.html"
                className="mil-portfolio-item mil-more mil-mb-60"
              >
                <div className="mil-cover-frame mil-vert mil-up">
                  <div className="mil-cover">
                    <img src="img/works/4.png" alt="cover" />
                  </div>
                </div>
                <div className="mil-descr">
                  <div className="mil-labels mil-up mil-mb-15">
                    <div className="mil-label mil-upper mil-accent">
                      Photography
                    </div>
                    <div className="mil-label mil-upper">may 24 2023</div>
                  </div>
                  <h4 className="mil-up">MUSEUM</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-5">
              <a
                href="project-5.html"
                className="mil-portfolio-item mil-more mil-mb-60"
              >
                <div className="mil-cover-frame mil-vert mil-up">
                  <div className="mil-cover">
                    <img src="img/works/5.jpg" alt="cover" />
                  </div>
                </div>
                <div className="mil-descr">
                  <div className="mil-labels mil-up mil-mb-15">
                    <div className="mil-label mil-upper mil-accent">Design</div>
                    <div className="mil-label mil-upper">may 24 2023</div>
                  </div>
                  <h4 className="mil-up">STRING PUBLICATIONS</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-6">
              <a
                href="project-6.html"
                className="mil-portfolio-item mil-more mil-parallax mil-mb-60"
                data-value-1={60}
                data-value-2={-60}
              >
                <div className="mil-cover-frame mil-hori mil-up">
                  <div className="mil-cover">
                    <img src="img/works/6.jpg" alt="cover" />
                  </div>
                </div>
                <div className="mil-descr">
                  <div className="mil-labels mil-up mil-mb-15">
                    <div className="mil-label mil-upper mil-accent">Design</div>
                    <div className="mil-label mil-upper">may 24 2023</div>
                  </div>
                  <h4 className="mil-up">HOT DEGREE</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mil-soft-bg">
        <div className="container mil-p-120-120">
          <div className="row">
            <div className="col-lg-10">
              <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
                Looking to make your mark? We&apos;ll help you turn <br />
                your project into a success story.
              </span>
            </div>
          </div>
          <div className="mil-center">
            <h2 className="mil-up mil-mb-60">
              Ready to bring your
              <span className="mil-thin">ideas to</span> life? <br />
              We&apos;re <span className="mil-thin">here to help</span>
            </h2>
            <div className="mil-up">
              <a href="contact.html" className="mil-button mil-arrow-place">
                <span>Contact us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default Portfolio;
