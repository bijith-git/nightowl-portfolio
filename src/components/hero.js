"use client";

export default function Hero() {
  return (
    <section className="mil-banner mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="mil-animation-frame">
          <div
            className="mil-animation mil-position-1 mil-scale"
            data-value-1={7}
            data-value-2="1.6"
          />
          <div
            className="mil-animation mil-position-2 mil-scale"
            data-value-1={4}
            data-value-2={1}
          />
          <div
            className="mil-animation mil-position-3 mil-scale"
            data-value-1="1.2"
            data-value-2=".1"
          />
        </div>
        <div className="mil-gradient" />
        <div className="container">
          <div className="mil-banner-content mil-up">
            <h1 className="mil-muted mil-mb-60">
              <span className="mil-thin"> Unveiling </span>Tomorrow <br />
              Crafting <span className="mil-thin"> Tonight</span>
            </h1>
            <div className="row">
              <div className="col-md-7 col-lg-5">
                <p className="mil-light-soft mil-mb-60">
                  Welcome to Night Owl , where dreams take flight, and every
                  frame is a masterpiece. Explore the magic within the shadows,
                  where your narrative&nbsp;unfolds
                </p>
              </div>
            </div>
            <a
              href="/services"
              className="mil-button mil-arrow-place mil-btn-space"
            >
              <span>What we do</span>
            </a>
            <a href="/portfolio" className="mil-link mil-muted mil-arrow-place">
              <span>View works</span>
            </a>
            <div className="mil-circle-text">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 300 300"
                enableBackground="new 0 0 300 300"
                xmlSpace="preserve"
                className="mil-ct-svg mil-rotate"
                data-value={360}
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                  />
                </defs>
                <circle cx={150} cy={100} r={75} fill="none" />
                <g>
                  <use xlinkHref="#circlePath" fill="none" />
                  <text style={{ letterSpacing: "6.5px" }}>
                    <textPath xlinkHref="#circlePath">
                      Scroll down - Scroll down -
                    </textPath>
                  </text>
                </g>
              </svg>
              <a
                href="#about"
                className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
