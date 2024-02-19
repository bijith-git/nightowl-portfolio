import MainLayout from "@/layout/mainLayout";
export const metadata = {
  title: "NDSF",
  default: "NDSF",
  description: "",
};
export default function NDSF() {
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
              <li>
                <a href="/projects">NDSF</a>
              </li>
            </ul>
            <h1 className="mil-mb-60">
              NDSF
              {/* <span className="mil-thin">of Lava</span> */}
            </h1>
            <a
              href="#project"
              className="mil-link mil-dark mil-arrow-place mil-down-arrow"
            >
              <span>Read more</span>
            </a>
          </div>

          <section id="project">
            <div className="container mil-p-120-120">
              <div className="swiper-container mil-2-slider mil-up">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="mil-image-frame mil-vertical mil-drag">
                      <img src="img/works/4/1.jpg" alt="image" />
                      <a
                        data-fancybox="gallery"
                        data-no-swup=""
                        href="img/works/4/1.jpg"
                        className="mil-zoom-btn"
                      >
                        <img src="img/icons/zoom.svg" alt="zoom" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="mil-image-frame mil-vertical mil-drag">
                      <img src="img/works/4/2.jpg" alt="image" />
                      <a
                        data-fancybox="gallery"
                        data-no-swup=""
                        href="img/works/4/2.jpg"
                        className="mil-zoom-btn"
                      >
                        <img src="img/icons/zoom.svg" alt="zoom" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="mil-image-frame mil-vertical mil-drag">
                      <img src="img/works/4/3.jpg" alt="image" />
                      <a
                        data-fancybox="gallery"
                        data-no-swup=""
                        href="img/works/4/3.jpg"
                        className="mil-zoom-btn"
                      >
                        <img src="img/icons/zoom.svg" alt="zoom" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="mil-image-frame mil-vertical mil-drag">
                      <img src="img/works/4/4.jpg" alt="image" />
                      <a
                        data-fancybox="gallery"
                        data-no-swup=""
                        href="img/works/4/4.jpg"
                        className="mil-zoom-btn"
                      >
                        <img src="img/icons/zoom.svg" alt="zoom" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="mil-image-frame mil-vertical mil-drag">
                      <img src="img/works/4/5.jpg" alt="image" />
                      <a
                        data-fancybox="gallery"
                        data-no-swup=""
                        href="img/works/4/5.jpg"
                        className="mil-zoom-btn"
                      >
                        <img src="img/icons/zoom.svg" alt="zoom" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="mil-image-frame mil-vertical mil-drag">
                      <img src="img/works/4/6.jpg" alt="image" />
                      <a
                        data-fancybox="gallery"
                        data-no-swup=""
                        href="img/works/4/6.jpg"
                        className="mil-zoom-btn"
                      >
                        <img src="img/icons/zoom.svg" alt="zoom" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mil-info mil-up">
                <div>
                  Client: &nbsp;
                  <span className="mil-dark">Envato Market</span>
                </div>
                <div>
                  Date: &nbsp;<span className="mil-dark">April 2023</span>
                </div>
                <div>
                  Author: &nbsp;<span className="mil-dark">Paul Trueman</span>
                </div>
              </div>
              <div className="row justify-content-center mil-center mil-p-120-120">
                <div className="col-lg-8">
                  <h3 className="mil-up mil-mb-60">
                    Lava Photos taken at Hawaii <br />
                    Volcanoes National Park.
                  </h3>
                  <p className="mil-text-lg mil-up">
                    This collection of Hawaii photography is focused on the
                    immense power of lava at the Volcanos National Park on the
                    Big Island of Hawaii. One of the most truly mystical scenes
                    I have ever had the pleasure of capturing. For this
                    collection I wanted to showcase this beauty in my own
                    artistic way, through fine art landscape photography.
                    However still keep these scenes natural and true to what I
                    witnessed on my journey. For that reason, these images have
                    been only lightly processed. All of these images are single
                    exposures, unless listed otherwise in the caption below the
                    photo.
                  </p>
                </div>
              </div>
              <div className="mil-image-frame mil-horizontal mil-up mil-mb-120">
                <img src="img/works/4/7.jpg" alt="image" />
                <a
                  data-fancybox="gallery"
                  data-no-swup=""
                  href="img/works/4/7.jpg"
                  className="mil-zoom-btn"
                >
                  <img src="img/icons/zoom.svg" alt="zoom" />
                </a>
              </div>
              <div className="mil-works-nav mil-up">
                <a
                  href="/feny"
                  className="mil-link mil-dark mil-arrow-place mil-icon-left"
                >
                  <span>Prev project</span>
                </a>
                <a href="/portfolio" className="mil-link mil-dark">
                  <span>All projects</span>
                </a>
                <a href="/vymk" className="mil-link mil-dark mil-arrow-place">
                  <span>Next project</span>
                </a>
              </div>
            </div>
          </section>
          {/* project end */}
          {/* call to action */}
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
          <div className="mil-hidden-elements">
            <div className="mil-dodecahedron">
              <div className="mil-pentagon">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="mil-pentagon">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="mil-pentagon">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="mil-pentagon">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="mil-pentagon">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="mil-pentagon">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="mil-pentagon">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="mil-pentagon">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="mil-pentagon">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="mil-pentagon">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="mil-pentagon">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="mil-pentagon">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="mil-arrow"
            >
              <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
            </svg>
            <svg
              width={250}
              viewBox="0 0 300 1404"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mil-lines"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 892L1 941H299V892C299 809.71 232.29 743 150 743C67.7096 743 1 809.71 1 892ZM0 942H300V892C300 809.157 232.843 742 150 742C67.1573 742 0 809.157 0 892L0 942Z"
                className="mil-move"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M299 146V97L1 97V146C1 228.29 67.7096 295 150 295C232.29 295 299 228.29 299 146ZM300 96L0 96V146C0 228.843 67.1573 296 150 296C232.843 296 300 228.843 300 146V96Z"
                className="mil-move"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M299 1H1V1403H299V1ZM0 0V1404H300V0H0Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M150 -4.37115e-08L150 1404L149 1404L149 0L150 -4.37115e-08Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M150 1324C232.29 1324 299 1257.29 299 1175C299 1092.71 232.29 1026 150 1026C67.7096 1026 1 1092.71 1 1175C1 1257.29 67.7096 1324 150 1324ZM150 1325C232.843 1325 300 1257.84 300 1175C300 1092.16 232.843 1025 150 1025C67.1573 1025 0 1092.16 0 1175C0 1257.84 67.1573 1325 150 1325Z"
                className="mil-move"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M300 1175H0V1174H300V1175Z"
                className="mil-move"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M150 678C232.29 678 299 611.29 299 529C299 446.71 232.29 380 150 380C67.7096 380 1 446.71 1 529C1 611.29 67.7096 678 150 678ZM150 679C232.843 679 300 611.843 300 529C300 446.157 232.843 379 150 379C67.1573 379 0 446.157 0 529C0 611.843 67.1573 679 150 679Z"
                className="mil-move"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M299 380H1V678H299V380ZM0 379V679H300V379H0Z"
                className="mil-move"
              />
            </svg>
          </div>
          {/* hidden elements end */}
        </div>
      </div>
    </MainLayout>
  );
}
