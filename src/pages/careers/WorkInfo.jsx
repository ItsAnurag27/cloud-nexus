import { Link } from "react-router-dom";
import StepItem from "../../components/StepItem";
import o1 from "../../assets/images/steps/01.png"
import o3 from "../../assets/images/steps/03.png"
import o4 from "../../assets/images/steps/04.png"
import o2 from "../../assets/images/steps/02.png"
import subtitleicon from "../../assets/images/subtitle-icon.png"

const steps = [
  {
    number: "Step 01",
    title: "Understanding Your Needs",
    description:
      "We begin by thoroughly analyzing your business challenges and goals to craft tailored solutions.",
    list: [
      "Market research",
      "Business process optimization",
      "Custom software solutions",
      "Web and mobile development",
      "Brand identity design",
      "Cloud integration",
    ],
    image:o1,
  },
  {
    number: "Step 02",
    title: "Strategic Planning & Roadmap",
    description:
      "We define a clear execution plan, ensuring alignment with your business vision and industry trends.",
    list: ["Technology consultation", "Agile development planning"],
    image: o2,
  },
  {
    number: "Step 03",
    title: "Agile Execution & Iteration",
    description:
      "With a flexible and collaborative approach, we build and refine solutions that adapt to your evolving needs.",
    list: [
      "Software development",
      "IT infrastructure setup",
      "Automation solutions",
    ],
    image:o3,
  },
  {
    number: "Step 04",
    title: "Delivering Impactful Results",
    description:
      "Our focus is on delivering high-quality, scalable solutions that drive business growth and efficiency.",
    list: [
      "Product launch support",
      "Ongoing maintenance",
      "Performance optimization",
    ],
    image:o4,
  }
];

const WorkInfo = () => {
  return (
    <section className="space-pt ellipse-top relative z-[999]">
      <div className="space-pb ellipse-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="sticky-top top-[80px]">
                <div className="section-title mb-0">
                  <span className="sub-title">
                    <img
                      className="img-fluid"

                      src={subtitleicon}
                      alt="Subtitle Icon"
                    />{" "}
                    How It Works
                  </span>
                  <h2 className="title">
                    Four reasons why you should choose our service
                  </h2>
                </div>
                <div  className=" mt-4 mt-sm-0" >
                  <p  className=" mt-4 mt-sm-0" >
                    We all carry a lot of baggage, thanks to our upbringing. The
                    majority of people carry with them, an entire series of
                    self-limiting beliefs.
                  </p>
                  {/* <Link className="btn btn-effect" to="/contact-us">
                    <span>Get Started</span>
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_59_256)">
                        <path
                          d="M19.4854 11.4293L17.0513 12.221C13.1214 13.4993 10.3036 16.9595 9.84784 21.0668C9.49371 16.981 6.71926 13.5081 2.81255 12.2604L0.210283 11.4293"
                          stroke="white"
                          strokeWidth="2"
                        />
                        <path
                          d="M9.83594 20.8889L9.83594 0"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </g>
                    </svg>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="steps-wrapper">
                {steps.map((step, index) => (
                  <StepItem key={index} {...step} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkInfo;
