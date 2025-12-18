import { methodologyData } from "./MethodologyData";

const styles = {
  methodologyWrapper: {
    background: "linear-gradient(145deg, #1a1e2c 0%, #282d3e 100%)",
    borderRadius: "16px",
    boxShadow: "0 4px 24px 0 rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
  },
  methodologyHeader: {
    background: "linear-gradient(45deg, #2563eb 0%, #3b82f6 100%)",
    transition: "transform 0.3s ease",
  },
  iconWrapper: {
    width: "48px",
    height: "48px",
    transition: "transform 0.3s ease",
  },
  stepItem: {
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateX(10px)",
      background: "rgba(255, 255, 255, 0.05)",
    },
  },
  numberCircle: {
    width: "40px",
    height: "40px",
    background: "linear-gradient(45deg, #4f46e5 0%, #6366f1 100%)",
    transition: "transform 0.3s ease",
  },
};

const MethodologySection = ({ type }) => {
  const methodology = methodologyData[type];

  if (!methodology) return null;

  return (
    <section className="pb-37">
      <div className="container">
        <div className="row ">
          <div className="col-lg-9">
            <div className="section-title text-center mb-5 attract-hover">
              <h3 className="title">
                Our <span className="text-primary">{methodology.title}</span>{" "}
                Methodology
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div
              className="methodology-wrapper p-4 p-md-5 shadow-lg hover-translate"
              style={styles.methodologyWrapper}
            >
              <div
                className="methodology-header d-flex align-items-center mb-4 p-3 rounded-lg hover-effect"
                style={styles.methodologyHeader}
              >
                <div className="methodology-icon me-3">
                  <span
                    className="icon-wrapper d-flex align-items-center justify-content-center bg-white rounded-circle p-3"
                    style={styles.iconWrapper}
                  >
                    {methodology.icon}
                  </span>
                </div>
                <h3 className="h4 text-white mb-0">
                  {methodology.title} Process
                </h3>
              </div>

              <div className="methodology-steps">
                {methodology.steps.map((step, index) => (
                  <div
                    key={index}
                    className="methodology-step d-flex gap-4  mb-4 rounded-lg "
                    style={styles.stepItem}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="step-number">
                      <div
                        className="number-circle d-flex align-items-center justify-content-center rounded-circle text-white"
                        style={styles.numberCircle}
                      >
                        <span className="h5 mb-0">{index + 1}</span>
                      </div>
                    </div>
                    <div className="step-content flex-grow-1">
                      <h4 className="step-title h5 text-white mb-2">
                        {step.title}
                      </h4>
                      <p className="ps-lg-3 mt-4 mt-sm-0">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
