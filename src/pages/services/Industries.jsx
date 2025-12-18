import React from "react";
import subtitleIcon from "../../assets/images/subtitle-icon.png";
// Import industry icons
import financial from "../../assets/images/industries/financial.svg";
import automotive from "../../assets/images/industries/automotive.svg";
import technology from "../../assets/images/industries/technology.svg";
import consumer from "../../assets/images/industries/consumer.svg";
import supply from "../../assets/images/industries/supply.svg";
import hospitality from "../../assets/images/industries/hospilaity.svg";
 
const Industries = () => {
  const industriesData = [
    {
      id: 1,
      icon: financial,
      title: "FinTech",
      description:
        "A secure and AI-driven personal finance app that helps users track expenses, manage budgets and invest smartly.",
    },
    {
      id: 2,
      icon: automotive,
      title: "Automotive",
      description:
        "Automotive and industrial sectors with improved precision, speed, and efficiency.",
    },
    {
      id: 3,
      icon: technology,
      title: "Cloud Services ",
      description:
        "We offer cloud migration, management, and optimization services.",
    },
    {
      id: 4,
      icon: consumer,
      title: "UI/UX",
      description:
        "Our expert designers craft intuitive and engaging user interfaces, enhancing user experience.",
    },
    {
      id: 5,
      icon: supply,
      title: "SaaS Development ",
      description:
        "From multi-tenant applications to cloud-native SaaS platforms , high-performance software solutions.",
    },
    {
      id: 6,
      icon: hospitality,
      title: "Tech Consulting ",
      description:
        "We provide expert IT consulting services, guiding businesses in adopting the right technology stack.",
    },
  ];
 
  return (
    <section
      className="space-ptb bg-dark"
      style={{ paddingTop: "20px", paddingBottom: "20px" }}
    >
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-4">
            <div className="section-title mb-5">
              <span className="sub-title d-flex align-items-center mb-3">
                <img className="img-fluid me-2" src={subtitleIcon} alt="" />
                Industries
              </span>
              <h3 className=" text-white display-7 fw-bold mb-4">
                Industries We Serve
              </h3>
              <div className="industry-description">
                <p className="text-white-50 lead mb-4">
 
                </p>
                <p className="text-white-50 mb-3">
                  We provide comprehensive Security & Compliance solutions tailored to various industries- Cloud Services, Automative, Tech Consulting, SaaS Development, UI/UX, FinTech. No matter the industry, we help businesses stay secure, compliant, and
                  resilient in a rapidly evolving digital landscape.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="d-flex align-items-center mb-3">
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    <span className="text-white-50">
                      Customized industry solutions
                    </span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    <span className="text-white-50">Data-driven insights</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    <span className="text-white-50">Scalable solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
 
          {/* Right Column - Honeycomb Grid */}
          <div className="col-lg-8">
            <div className="honeycomb">
              {industriesData.map((industry, index) => (
                <div
                  key={industry.id}
                  className={`honeycomb-cell ${
                    index % 2 === 0 ? "even" : "odd"
                  }`}
                >
                  <div className="honeycomb-cell-inner">
                    <div className="honeycomb-content">
                      <span className="icon-wrapper">
                        <img
                          src={industry.icon}
                          alt={industry.title}
                          width="44"
                          height="44"
                        />
                      </span>
                      <h3 className="title text-white">{industry.title}</h3>
                      <p className="text-white-50">{industry.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
 
      <style jsx>{`
        .honeycomb {
          display: flex;
          flex-wrap: wrap;
          margin: 0 auto;
          transform: translateY(25px);
          padding-bottom: 50px;
        }
 
        .honeycomb-cell {
          flex: 0 1 250px;
          max-width: 250px;
          height: 280px;
          margin: 65px 12px 25px;
          position: relative;
          padding: 0.5em;
        }
 
        .honeycomb-cell.odd {
          margin-top: -32px;
        }
 
        .honeycomb-cell-inner {
          height: 100%;
          width: 100%;
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          transition: all 0.3s ease;
        }
 
        .honeycomb-cell-inner:hover {
          background: linear-gradient(
            135deg,
            rgba(54, 99, 216, 0.1) 0%,
            rgba(119, 190, 255, 0.1) 100%
          );
          transform: translateY(-5px);
        }
 
        .honeycomb-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 2rem;
        }
 
        .icon-wrapper {
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
        }
 
        .title {
          font-size: 1.1rem;
          margin: 0.5rem 0;
        }
 
        .text-white-50 {
          font-size: 0.875rem;
          line-height: 1.4;
        }
 
        @media (max-width: 1199px) {
          .section-title .title {
            font-size: 2.25rem;
          }
        }
 
        @media (max-width: 991px) {
          .honeycomb-cell {
            flex: 0 1 200px;
            max-width: 200px;
            height: 230px;
          }
        }
 
        @media (max-width: 767px) {
          .honeycomb {
            justify-content: center;
          }
          .honeycomb-cell.odd {
            margin-top: 65px;
          }
          .section-title .title {
            font-size: 1.75rem;
          }
        }
 
        @media (max-width: 576px) {
          .honeycomb-cell {
            flex: 0 1 100%;
            max-width: 100%;
            margin: 2rem 0;
          }
        }
 
        @media (max-width: 1027px) {
          .honeycomb {
            justify-content: center;
            gap: 20px;
          }
 
          .honeycomb-cell {
            flex: 0 1 300px;
            max-width: 300px;
            height: auto;
            min-height: 280px;
            margin: 15px;
          }
 
          .honeycomb-cell.odd {
            margin-top: 15px;
          }
 
          .honeycomb-cell-inner {
            clip-path: none;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.05);
          }
 
          .honeycomb-content {
            padding: 2rem;
          }
 
          .icon-wrapper {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};
 
export default Industries;
 