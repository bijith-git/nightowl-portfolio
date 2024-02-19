import MainLayout from "@/layout/mainLayout";

export const metadata = {
  title: "Services",
};

const Services = () => {
  return (
    <MainLayout>
      <>
        <div className="mil-dark-bg">
          <div className="mil-inner-banner">
            <div className="mi-invert-fix">
              <div className="mil-banner-content mil-up">
                <div className="mil-animation-frame">
                  <div
                    className="mil-animation mil-position-4 mil-scale"
                    data-value-1={6}
                    data-value-2="1.4"
                  />
                </div>
                <div className="container">
                  <ul className="mil-breadcrumbs mil-light mil-mb-60">
                    <li>
                      <a href="/">Homepage</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                  </ul>
                  <h1 className="mil-muted mil-mb-60">
                    This is <span className="mil-thin">what</span>
                    <br />
                    we do <span className="mil-thin">best</span>
                  </h1>
                  <a
                    href="#services"
                    className="mil-link mil-accent mil-arrow-place mil-down-arrow"
                  >
                    <span>Our services</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <section id="services">
            <div className="mi-invert-fix">
              <div className="container mil-p-120-60">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="mil-lines-place mil-light" />
                  </div>
                  <div className="col-lg-7">
                    <div className="row">
                      <div className="col-md-6 col-lg-6">
                        <a
                          href="/contact"
                          className="mil-service-card-lg mil-more mil-accent-cursor mil-offset"
                        >
                          <h4 className="mil-muted mil-up mil-mb-30">
                            Branding and <br />
                            Identity Design
                          </h4>
                          <p className="mil-descr mil-light-soft mil-up mil-mb-30">
                            Branding is about creating a distinctive mix of
                            visual elements, messaging, and values that set a
                            brand apart from its rivals
                          </p>
                          <ul className="mil-service-list mil-light mil-mb-30">
                            <li className="mil-up">Brand Strategys</li>
                            <li className="mil-up">Logo Design</li>
                            <li className="mil-up">Brand Guidelines</li>
                            <li className="mil-up">Brand Identity</li>
                          </ul>
                          <div className="mil-link mil-accent mil-arrow-place mil-up">
                            <span>Know more</span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <a
                          href="/contact"
                          className="mil-service-card-lg mil-more mil-accent-cursor"
                        >
                          <h4 className="mil-muted mil-up mil-mb-30">
                            Website Design <br />
                            and Development
                          </h4>
                          <p className="mil-descr mil-light-soft mil-up mil-mb-30">
                            Crucial for designing an engaging, functional, and
                            intuitive online presence that harmonizes with your
                            brand&apos;s essence. An agile and comprehensive
                            approach to developing and maintaining cutting-edge
                            websites and web applications
                          </p>
                          <ul className="mil-service-list mil-light mil-mb-30">
                            <li className="mil-up">Web Development</li>
                            <li className="mil-up">User Experience (UX)</li>
                            <li className="mil-up">Frontend & Backend</li>
                            <li className="mil-up">Visual Design</li>
                          </ul>
                          <div className="mil-link mil-accent mil-arrow-place mil-up">
                            <span>Know more</span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <a
                          href="/contact"
                          className="mil-service-card-lg mil-more mil-accent-cursor mil-offset"
                        >
                          <h4 className="mil-muted mil-up mil-mb-30">
                            Advertising and <br />
                            Digital Marketing
                          </h4>
                          <p className="mil-descr mil-light-soft mil-up mil-mb-30">
                            Advertisement production focuses on crafting
                            impactful content to promote products, services, or
                            brands effectively.Digital marketing transcends
                            borders, connecting you with a diverse, global
                            audience through innovative strategies
                          </p>
                          <ul className="mil-service-list mil-light mil-mb-30">
                            <li className="mil-up">Advertising Production</li>
                            <li className="mil-up">Analytics</li>
                            <li className="mil-up">Content Strategy</li>
                            <li className="mil-up">
                              SEO (Search Engine Optimization)
                            </li>
                          </ul>
                          <div className="mil-link mil-accent mil-arrow-place mil-up">
                            <span>Know more</span>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <a
                          href="/contact"
                          className="mil-service-card-lg mil-more mil-accent-cursor"
                        >
                          <h4 className="mil-muted mil-up mil-mb-30">
                            Photography and <br />
                            Videography
                          </h4>
                          <p className="mil-descr mil-light-soft mil-up mil-mb-30">
                            We capture the essence of all your special events,
                            from weddings and parties to corporate seminars and
                            exhibitions, with our versatile photography services
                          </p>
                          <ul className="mil-service-list mil-light mil-mb-30">
                            <li className="mil-up">UX Audits</li>
                            <li className="mil-up">Design thinking</li>
                            <li className="mil-up">Methodologies</li>
                            <li className="mil-up">Wireframing</li>
                          </ul>
                          <div className="mil-link mil-accent mil-arrow-place mil-up">
                            <span>Know more</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
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
                Let’s make an <span className="mil-thin">impact</span>
                <br />
                together. Ready <span className="mil-thin">when you are</span>
              </h2>
              <div className="mil-up">
                <a href="/contact" className="mil-button mil-arrow-place">
                  <span>Contact us</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </MainLayout>
  );
};
export default Services;
