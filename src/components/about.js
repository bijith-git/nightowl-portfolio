import Link from "next/link";

export default function About() {
  const downloadResume = () => {
    const pdfUrl =
      "https://github.com/bijith-git/nightowl-portfolio/blob/master/public/pdf/NIGHTOWL.pdf?raw=true";
    const aTag = document.createElement("a");
    aTag.href = pdfUrl;
    aTag.setAttribute("download", "Bijith P N Resume");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              <div className="sec-title">
                <span className="title">About Company</span>
                <h2 className="mil-up mil-mb-30">
                  Discover Our <span className="mil-thin">Studio</span>
                </h2>
              </div>
              <div className="text">
                Welcome to Night Owl, where creativity meets impact. Our
                expertise lies in advertising, branding, and design, where we
                craft compelling narratives that resonate deeply. Our
                collaboration with renowned brands stands as a testament to our
                ability to illuminate your vision and elevate your brand to new
                heights. Join us on a journey where the night becomes a canvas
                for innovation and excellence. At Night Owl, your story
                isn&apos;t just told, it&apos;s vividly brought to life.
              </div>
              <ul className="list-style-one">
                <li>12+ Branding</li>
                <li>3+ Production</li>
                <li>30+ Digital Ads</li>
              </ul>
              <div className="btn-box">
                <Link legacyBehavior href="">
                  <button
                    onClick={() => downloadResume()}
                    style={{ backgroundColor: "#FF9800", width: 240 }}
                    className="btn px-4 py-3 mt-4 text-white d-flex align-items-center justify-content-between"
                  >
                    <span>Grab Our Brochure</span>
                    <svg
                      width="25px"
                      fill="currentColor"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 489 489"
                      style={{ enableBackground: "new 0 0 489 489" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M329.2,327.2c-4.5,0-8.1,3.4-8.6,7.9c-3.9,38.6-36.5,68.7-76.2,68.7c-39.6,0-72.2-30.1-76.2-68.7
        c-0.5-4.4-4.1-7.9-8.6-7.9h-104c-21.8,0-39.5,17.7-39.5,39.5v82.8c0,21.8,17.7,39.5,39.5,39.5h377.8c21.8,0,39.5-17.7,39.5-39.5
        v-82.7c0-21.8-17.7-39.5-39.5-39.5H329.2V327.2z"
                          />
                          <path
                            d="M303.5,198.6l-30.9,30.9V28.1C272.6,12.6,260,0,244.5,0l0,0c-15.5,0-28.1,12.6-28.1,28.1v201.4l-30.9-30.9
        c-9.5-9.5-24.7-11.9-35.9-4.4c-15.3,10.2-16.8,31.1-4.5,43.4l82.8,82.8c9.2,9.2,24.1,9.2,33.3,0l82.8-82.8
        c12.3-12.3,10.8-33.2-4.5-43.4C328.2,186.6,313,189,303.5,198.6z"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInLeft">
              <figure className="image-1">
                <a href="" className="lightbox-image" data-fancybox="images">
                  <img
                    src="img/photo/about_main.jpg"
                    alt=""
                    width={420}
                    height={510}
                  />
                </a>
              </figure>
              <figure className="image-2">
                <a href="" className="lightbox-image" data-fancybox="images">
                  <img src="img/photo/about_sub.jpg" alt="" />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 p-4 p-sm-5 order-2 order-sm-1">
            <h1 className="h2 mb-4" style={{ fontWeight: 600 }}>
              Our <span style={{ color: "#FF9800" }}>Vision</span>
            </h1>
            <p className="text-secondary" style={{ lineHeight: 2 }}>
              To ascend to the forefront of the media production industry,
              becoming a respected and sought-after partner for businesses
              seeking to elevate their brand image and achieve marketing goals.
              This will be achieved through a continued focus on delivering
              exceptional creative talent, fostering a team of passionate and
              skilled professionals who consistently produce high-quality work.
              The company will also strive for unwavering commitment to client
              satisfaction, ensuring clear communication, exceeding
              expectations, and building long-term partnerships.
            </p>
          </div>
          <div className="col-md-6 p-0 text-center order-1 order-sm-2">
            <img
              src="img/photo/our_vision.jpg"
              width={500}
              height={333}
              // className="w-100"
              alt=""
            />
          </div>
          <div className="col-md-6 p-0 text-center">
            <img
              src="img/photo/our_mission.jpg"
              // className="w-100"
              alt=""
            />
          </div>
          <div className="col-md-6 p-4 p-sm-5">
            <h1 className="h2 mb-4" style={{ fontWeight: 600 }}>
              Our <span style={{ color: "#FF9800" }}>Mission</span>
            </h1>
            <p className="text-secondary" style={{ lineHeight: 2 }}>
              Collaborate with clients to develop a vision and plan to craft
              exceptional media productions that resonate with target audiences
              and deliver a message with clarity and impact. Embrace innovation
              in storytelling methods and production techniques to captivate
              viewers and ensure the content remains fresh and engaging over
              time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
