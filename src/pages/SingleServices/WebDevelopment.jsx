import React from 'react'

import MethodologySection from '../../components/Section1'
import Card from '../../components/Card'
import HeroSection from "../../components/HeroSection";
import development from '../../assets/images/servicesicon/development.png'
import commerce from '../../assets/images/servicesicon/commerce.png'
import Responsive from '../../assets/images/servicesicon/responsive-design.png'
import CMS from '../../assets/images/servicesicon/cms.png'
import TechStack from "../../components/techStack/TechStack";
import {appDevelopmentStack} from "../../components/techStack/TechStackData";
import Webdev1enhanced from "../../assets/images/banner/inner-header/Webdev1_enhanced.jpg"

function WebDevelopment() {
  return (
    <div>

<div id="page" className="main  site-content ">
        <HeroSection
        imageUrl={Webdev1enhanced}
        title="Web Development"
        description="Delivering modern, scalable, and high-performance web solutions ."
      />

        <div className="services-section">
          <div className="container">
            <div className="section-header ">
              <h2 className="title">Comprehensive Web Solutions</h2>
              <p  className=" mt-4 mt-sm-0"  >At CloudNexus, we provide end-to-end web development services to help businesses establish a powerful online presence. Our team specializes in creating responsive, secure, and high-performance websites tailored to your unique needs. Whether you need a custom website, eCommerce platform, or web application, we deliver scalable solutions that enhance user experience and drive business growth. 
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="services grid-wrapper">
                  <Card 
                    title="Web App Development"
                    description=" We specialize in building powerful, scalable, and user-friendly web applications tailored to your business needs. Our expert developers leverage the latest technologies to create secure, high-performance web apps that enhance efficiency, engagement, and growth. Whether you need a custom business application, SaaS platform, or enterprise solution."
                    imageSrc={development} 
                  />
                  <Card 
                    title=" E-Commerce Website Development"
                    description="We build powerful, secure, and user-friendly eCommerce websites designed to drive sales and enhance customer experience. Whether you're launching a new online store or upgrading an existing one, our expert team delivers scalable, high-performance solutions with seamless payment integration, intuitive navigation, and mobile optimization."
                    imageSrc={commerce} 
                  />
                  <Card 
                    title=" Responsive Website Design"
                    description="We create stunning, mobile-friendly websites that adapt seamlessly to any device. Our responsive web design ensures optimal user experience, fast loading speeds, and enhanced accessibility across desktops, tablets, and smartphones. Whether you're a startup or an enterprise, we deliver visually appealing and high-performance websites that engage visitors and drive conversions"
                    imageSrc={Responsive} 
                  />
                  <Card 
                    title="CMS Website Development"
                    description="We specialize in CMS website design that empowers businesses with flexible, scalable, and easy-to-manage websites. Our expert team creates visually appealing, user-friendly, and responsive CMS solutions tailored to your needs. Whether it's WordPress, Joomla, Drupal, or a custom CMS, we ensure seamless functionality, robust security, and effortless content management."
                    imageSrc={CMS} 
                  />
                 
                </div>
                <style jsx>{`
.services-section {
    padding: 80px 0;
    background: transparent;
  }

  .section-header {
    margin-bottom: 60px;
  }

  .section-title {
    color: #ffffff;
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 20px;
    background: linear-gradient(145deg, #ffffff, rgba(255,255,255,0.9));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.02em;
  }

  .section-subtitle {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }

  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    padding: 20px;
  }

  @media (max-width: 1310px) {
    .services-section {
      padding: 60px 0;
    }
    .section-title {
      font-size: 2.4rem;
    }
    .grid-wrapper {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
    }
  }

  @media (max-width: 991px) {
    .services-section {
      padding: 50px 0;
    }
    .section-title {
      font-size: 2rem;
    }
    .section-subtitle {
      font-size: 1rem;
    }
    .grid-wrapper {
      gap: 20px;
    }
  }

  @media (max-width: 768px) {
    .services-section {
      padding: 40px 0;
    }
    .section-header {
      margin-bottom: 40px;
    }
    .section-title {
      font-size: 1.75rem;
    }
    .grid-wrapper {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
    }
  }

  @media (max-width: 576px) {
    .services-section {
      padding: 30px 0;
    }
    .section-header {
      margin-bottom: 30px;
    }
    .section-title {
      font-size: 1.5rem;
    }
    .section-subtitle {
      font-size: 0.9rem;
    }
    .grid-wrapper {
      grid-template-columns: 1fr;
      padding: 10px;
    }
  }`}</style>
              </div>
            </div>
          </div>
        </div>
        <TechStack techStackData={appDevelopmentStack} />

        <MethodologySection type="webDev" /> 
      </div>

      {/* <style jsx>{`
        .services-section {
          padding: 80px 0;
          background: transparent;
        }

        .section-header {
          margin-bottom: 60px;
        }

        .section-title {
          color: #ffffff;
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(145deg, #ffffff, rgba(255,255,255,0.9));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .grid-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          padding: 20px;
        }

        @media (max-width: 1310px) {
          .services-section {
            padding: 60px 0;
          }
          .section-title {
            font-size: 2.4rem;
          }
          .grid-wrapper {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
          }
        }

        @media (max-width: 991px) {
          .services-section {
            padding: 50px 0;
          }
          .section-title {
            font-size: 2rem;
          }
          .section-subtitle {
            font-size: 1rem;
          }
          .grid-wrapper {
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 40px 0;
          }
          .section-header {
            margin-bottom: 40px;
          }
          .section-title {
            font-size: 1.75rem;
          }
          .grid-wrapper {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
          }
        }

        @media (max-width: 576px) {
          .services-section {
            padding: 30px 0;
          }
          .section-header {
            margin-bottom: 30px;
          }
          .section-title {
            font-size: 1.5rem;
          }
          .section-subtitle {
            font-size: 0.9rem;
          }
          .grid-wrapper {
            grid-template-columns: 1fr;
            padding: 10px;
          }
        }
      `}</style> */}
    </div>
  )
}

export default WebDevelopment
