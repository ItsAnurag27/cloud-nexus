import about_04 from "/src/assets/images/about/dw.jpg";
import subtitle_icon from "/src/assets/images/subtitle-icon.png";
import arrow_right from "/src/assets/images/arrow-right.png";
const About = () => {
  return (
    <>
      <section className="space-ptb ellipse-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mb-5 mb-md-0">
              <img
                className="img-fluid mx-lg-5 radius-10"
                src={about_04}
                alt="About Us"
              />
            </div>
            <div className="col-md-7">
              <div className="section-title pe-xl-5">
                
                <h2 className="title">
                  <span className="relative text-blue-300 transition-colors duration-300 hover:text-blue-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full">
                    CloudNexus :
                  </span>{" "}
                  Your Partner in Digital Excellence
                </h2>
              </div>
              <div className="ps-sm-5">
                <p className="mb-4">
                  Success is not as complicated as it seems. Many people believe
                  it must be difficult to achieve, often using challenges as an
                  excuse to stay in their comfort zone. In reality, success
                  comes from persistence, smart strategies, and a willingness to
                  adapt. At CloudNexus, we don’t just offer IT solutions—we create transformative experiences that drive innovation, efficiency, and growth.
                </p>
                <div className="list-wrapper">
                  <ul className="list">
                    <li>
                      <img
                        className="img-fluid"
                        src={arrow_right}
                        alt="Arrow"
                      />
                      Success is something of which we all want more
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src={arrow_right}
                        alt="Arrow"
                      />
                      Most people believe that success is difficult
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src={arrow_right}
                        alt="Arrow"
                      />
                      There are basically six key areas to higher achievement
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src={arrow_right}
                        alt="Arrow"
                      />
                      Believing in yourself and those around you
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src={arrow_right}
                        alt="Arrow"
                      />
                      Making a decision to do something
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
