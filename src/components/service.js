export default function Service() {
  return (
    <section className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="mil-animation-frame">
          <div
            className="mil-animation mil-position-1 mil-scale"
            data-value-1="2.4"
            data-value-2="1.4"
            style={{ top: 300, right: "-100px" }}
          />
          <div
            className="mil-animation mil-position-2 mil-scale"
            data-value-1={2}
            data-value-2={1}
            style={{ left: 150 }}
          />
        </div>
        <div className="container mil-p-120-0">
          <div className="mil-mb-120">
            <div className="row">
              <div className="col-lg-10">
                <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up">
                  Professionals focused on helping your brand
                  <br />
                  grow and move forward.
                </span>
              </div>
            </div>
            <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
              <span className="mil-text-image">
                <img src="/img/photo/2.jpg" alt="team" />
              </span>
              <h2 className="mil-h1 mil-muted mil-center">
                Unique <span className="mil-thin">Ideas</span>
              </h2>
            </div>
            <div className="mil-complex-text justify-content-center mil-up">
              <h2 className="mil-h1 mil-muted mil-center">
                For Your <span className="mil-thin">Business.</span>
              </h2>
              <a
                href="/services"
                className="mil-services-button mil-button mil-arrow-place"
              >
                <span>What we do</span>
              </a>
            </div>
          </div>
          <div className="row mil-services-grid m-0">
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="/services" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  Branding and <br />
                  Identity Design
                </h5>
                <p className="mil-light-soft mil-mb-30">
                  Our creative agency is a team of professionals focused on
                  helping your brand grow.
                </p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place" />
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="/services" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  Website Design <br />
                  and Development
                </h5>
                <p className="mil-light-soft mil-mb-30">
                  An agile and comprehensive approach to developing and
                  maintaining web applications.
                </p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place" />
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="/services" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  Advertisement and <br />
                  Digital Marketing
                </h5>
                <p className="mil-light-soft mil-mb-30">
                  Focuses on crafting impactful content to promote
                  products,brands effectively.
                </p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place" />
              </a>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <a href="/services" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  Photography and <br />
                  Videography
                </h5>
                <p className="mil-light-soft mil-mb-30">
                  We capture the essence of all your special events with our
                  versatile photography services
                </p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
