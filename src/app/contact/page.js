export const metadata = {
  title: "Contact Us",
  default: "Contact Us",
  description: "",
};
export default function Contact() {
  return (
    <div className="mil-content">
      <div id="swupMain" className="mil-main-transition">
        <div className="mil-inner-banner mil-p-0-120">
          <div className="mil-banner-content mil-center mil-up">
            <div className="container">
              <ul className="mil-breadcrumbs mil-center mil-mb-60">
                <li>
                  <a href="/">Homepage</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
              <h1 className="mil-mb-60">Get in touch!</h1>
              <a
                href="#contact"
                className="mil-link mil-dark mil-arrow-place mil-down-arrow"
              >
                <span>Send message</span>
              </a>
            </div>
          </div>
        </div>
        <section id="contact">
          <div className="container mil-p-120-90">
            <h3 className="mil-center mil-up mil-mb-120">
              Let&apos;s <span className="mil-thin">Talk</span>
            </h3>
            <form className="row align-items-center">
              <div className="col-lg-6 mil-up">
                <input type="text" placeholder="What's your name" />
              </div>
              <div className="col-lg-6 mil-up">
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="col-lg-12 mil-up">
                <textarea
                  placeholder="Tell us about our project"
                  defaultValue={""}
                />
              </div>
              <div className="col-lg-8">
                <p className="mil-up mil-mb-30">
                  <span className="mil-accent">*</span> We promise not to
                  disclose your personal information to third parties.
                </p>
              </div>
              <div className="col-lg-4">
                <div className="mil-adaptive-right mil-up mil-mb-30">
                  <button
                    title="title"
                    type="submit"
                    className="mil-button mil-arrow-place"
                  >
                    <span>Send message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
