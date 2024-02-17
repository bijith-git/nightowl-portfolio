export default function About() {
  return (
    <section id="about">
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-xl-5">
            <div className="mil-mb-90">
              <h2 className="mil-up mil-mb-60">
                Discover <br />
                Our <span className="mil-thin">Studio</span>
              </h2>
              <p className="mil-up mil-mb-30">
                Welcome to Night Owl, where creativity meets impact. Our
                expertise lies in advertising, branding, and design, where we
                craft compelling narratives that resonate deeply. Our
                collaboration with renowned brands stands as a testament to our
                ability to illuminate your vision and elevate your brand to new
                heights. Join us on a journey where the night becomes a canvas
                for innovation and excellence. At Night Owl, your story
                isn&apos;t just told, it&apos;s vividly brought to life.
              </p>
              {/* <p className="mil-up mil-mb-60">
                Collaboration is at the heart of what we do. Our team
                thrives on the synergy that arises when unique
                perspectives converge, fostering an environment of
                boundless creativity. By harnessing our collective
                expertise, we produce extraordinary results that
                consistently surpass expectations.
              </p> */}
              {/* <div className="mil-about-quote">
                <div className="mil-avatar mil-up">
                  <img src="img/faces/customers/2.jpg" alt="Founder" />
                </div>
                <h6 className="mil-quote mil-up">
                  Passionately Creating
                  <span className="mil-thin">Design Wonders:</span> Unleashing
                  <span className="mil-thin">Boundless Creativity</span>
                </h6>
              </div> */}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="mil-about-photo mil-mb-90">
              <div className="mil-lines-place" />
              <div
                className="mil-up mil-img-frame"
                style={{ paddingBottom: "160%" }}
              >
                <img
                  src="img/photo/main-logo.png"
                  alt="img"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  className="mil-scale"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
