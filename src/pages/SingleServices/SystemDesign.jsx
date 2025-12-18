import React from 'react'
import MethodologySection from '../../components/Section1'
import Card from '../../components/Card'
import HeroSection from "../../components/HeroSection";
import AIMLsystemdesign from '../../assets/images/servicesicon/AIMLsystemdesign.png'
import databaseandstoragedesign from '../../assets/images/servicesicon/databaseandstoragedesign.png'
import design from '../../assets/images/servicesicon/design.png'
import Networkingandcomm from '../../assets/images/servicesicon/Networkingandcomm.png'
import TechStack from "../../components/techStack/TechStack";
import { systemDesignStack } from "../../components/techStack/TechStackData";
import sd from "../../assets/images/banner/inner-header/sd.jpg"



function SystemDesign() {
  return (
    <div>

      <div id="page" className="main  site-content ">
        <HeroSection
          imageUrl={sd}
          title="System Design"
          description="Empowering IT infrastructure with scalable, efficient and innovation."
        />

        <div className="services-section">
          <div className="container">
            <div className="section-header ">
              <h2 className="title">
              Architecting Future-Ready Software
              </h2>
               <p  className=" mt-4 mt-sm-0"  >We build scalable, high-performance, and resilient systems tailored to your business needs. Our System Design Services help enterprises, startups, and organizations architect robust software solutions capable of handling complex workflows, high traffic, and mission-critical operations. By leveraging modern design principles, cloud-native architectures, and distributed computing. </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="services grid-wrapper">
                  <Card
                    title="Architectural Design"
                    description=" Bringing visionary concepts to life with innovative, sustainable, and highly functional architectural solutions, our design services seamlessly integrate creativity, cutting-edge technology, and industry expertise to craft aesthetic, efficient, and future-ready spaces tailored to your unique needs."
                    imageSrc={AIMLsystemdesign}
                  />
                  <Card
                    title="Database and Storage Design"
                    description="Our Database & Storage Design Services ensure scalable, high-performance, and secure data solutions tailored to your organization’s needs. Whether you're dealing with structured, semi-structured, or unstructured data, we design robust systems that enable seamless data access, processing, and storage."
                    imageSrc={databaseandstoragedesign}
                  />
                  <Card
                    title="Networking & Communication"
                    description="Empower your business with secure, high-performance, and scalable networking & communication solutions. We provide cutting-edge infrastructure, seamless connectivity, and real-time collaboration tools to enhance productivity, security, and efficiency.
"
                    imageSrc={design}
                  />
                  <Card
                    title="AI/ML System Design"
                    description="Transform your business with custom AI/ML system architectures designed for scalability, efficiency, and real-world impact. Our AI/ML system design services help organizations build robust, production-ready machine learning solutions that integrate seamlessly with existing infrastructures."
                    imageSrc={Networkingandcomm}
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
        <TechStack techStackData={systemDesignStack} />

        <MethodologySection type="systemDesign" /> 

      </div>

    </div>
  )
}

export default SystemDesign