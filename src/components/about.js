export default function About() {
  return (
    <section id="about">
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="mil-mb-90" style={{ textAlign: "center" }}>
            <h2 className="mil-up mil-mb-30">
              Discover Our <span className="mil-thin">Studio</span>
            </h2>
            <div
              className="mil-up mil-mb-20"
              style={{
                textAlign: "center",
                fontSize: "25px",
                lineHeight: "1.6",
              }}
            >
              Welcome to Night Owl, where creativity meets impact. Our expertise
              lies in advertising, branding, and design, where we craft
              compelling narratives that resonate deeply. Our collaboration with
              renowned brands stands as a testament to our ability to illuminate
              your vision and elevate your brand to new heights. Join us on a
              journey where the night becomes a canvas for innovation and
              excellence. At Night Owl, your story isn&apos;t just told,
              it&apos;s vividly brought to life.
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html: `
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      color: #333;
    }

    .header {
      background-color: #f2f2f2;
      padding: 20px;
      text-align: center;
      font-size: 30px;
    }

    .header a {
      color: #333;
      text-decoration: none;
      margin: 0 5px;
    }

    .content {
      padding: 40px;
      text-align: center;
      font-size: 30px;
    }

    .services-container {
      display: flex;
      flex-wrap: wrap;
    }

    .service {
      flex: 0 0 33.33%; /* Each service takes up 1/3 of the container width */
      text-align: center;
      padding: 20px;
      box-sizing: border-box;
    }
       .service h2 {
        color: rgb(255, 152, 0);
        margin-bottom: 5px;
      }

    .service p {
      margin-top: 5px;
      textAlign: "center",
      lineHeight: "1.2",
    }

    .service img {
      width: 100%;
      height: auto;
    }

    /* Media query for smaller screen sizes */
    @media (max-width: 768px) {
      .service {
        flex: 0 0 50%; 
      }
    }

    /* Media query for even smaller screen sizes */
    @media (max-width: 480px) {
      .service {
        flex: 0 0 100%;
      }
    }
  `,
              }}
            />
            <div className="content">
              <p
                style={{
                  textAlign: "center",
                  padding: "10px 0",
                  lineHeight: "1.2",
                }}
              >
                <strong>Media Production and Management</strong> | Content
                Creation &amp; Development
              </p>
              <p
                style={{
                  textAlign: "center",
                  padding: "10px 0",
                  lineHeight: "1.2",
                }}
              >
                Event Coordination &amp; Coverage |
                <strong>Advertisement Content &amp; Creation</strong>
              </p>
              <p
                style={{
                  textAlign: "center",
                  padding: "10px 0",
                  lineHeight: "1.2",
                }}
              >
                Product Design |
                <strong>Branding , Posters &amp; Animation</strong>
              </p>
              <p
                style={{
                  textAlign: "center",
                  padding: "10px 0",
                  lineHeight: "1.2",
                }}
              >
                Exhibition Designs | <strong>3D Modeling</strong> | Documentary
                &amp; Brand Videos
              </p>
              <div class="services-container">
                <div class="service">
                  <h2>12+</h2>
                  <p>Branding</p>
                </div>
                <div class="service">
                  <h2>3+</h2>
                  <p>Production</p>
                </div>
                <div class="service">
                  <h2>30+</h2>
                  <p>Digital Ads</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
