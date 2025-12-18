import React from 'react'
import MethodologySection from '../../components/Section1'
import Card from '../../components/Card'
import HeroSection from "../../components/HeroSection";
import iot from '../../assets/images/servicesicon/iot.png'
import hospital from '../../assets/images/servicesicon/hospital.png'
import app from '../../assets/images/servicesicon/update.png'
import workflow from '../../assets/images/servicesicon/workflow.png'
import TechStack from "../../components/techStack/TechStack";
import {automationStack} from "../../components/techStack/TechStackData";
import IOt1_enhanced from "../../assets/images/banner/inner-header/IOt1_enhanced.jpg"


function IotAutomation() {
  return (
    <div>

<div id="page" className="main  site-content ">
        <HeroSection
        imageUrl={IOt1_enhanced}
        title="IoT and Automation"
        description="Providing cutting-edge IoT and automation solutions to enhance businesses."
      />

        <div className="services-section">
          <div className="container">
            <div className="section-header">
              <h2 className="title">
              Innovating with IoT & Automation
              </h2>
               <p   className=" mt-4 mt-sm-0"  > We empower businesses with cutting-edge IoT and Automation solutions to enhance efficiency, optimize operations, and drive innovation. Our expertise in smart connectivity, AI-driven automation, and intelligent data analytics helps businesses streamline workflows. Our IoT solutions enable real-time monitoring, predictive maintenance, and seamless device-to-device communication, ensuring businesses can make data-driven decisions with enhanced visibility.
              .

              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="services grid-wrapper">
                  <Card 
                    title="IoT Device Development"
                    description=" We specialize in end-to-end IoT device development, transforming ideas into smart, connected solutions. From hardware design to software integration, we create secure, scalable, and high-performance IoT devices tailored to your industry needs.
.
"
                    imageSrc={iot} 
                  />
                  <Card 
                    title="IoT Consulting and Strategy"
                    description="We help businesses unlock the full potential of IoT with expert consulting and tailored strategies. Our team guides you through every stage of IoT adoption, from identifying opportunities to designing scalable, secure, and data-driven solutions.
"
                    imageSrc={hospital} 
                  />
                  <Card 
                    title="IoT App Development"
                    description="We specialize in building smart, secure, and scalable IoT applications that connect devices, streamline operations, and enhance user experiences. Our expert team develops custom IoT apps tailored to your business needs, and intelligent automation."
                    imageSrc={app} 
                  />
                  <Card 
                    title="Business Process Automation"
                    description="We streamline and optimize your business operations with cutting-edge Business Process Automation (BPA) solutions. By leveraging AI, RPA, and workflow automation, and enhance productivity—allowing your team to focus on strategic growth"
                    imageSrc={workflow} 
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
        <TechStack techStackData={automationStack} />

        <MethodologySection type="iotAutomation" /> 
      </div>

    
    </div>
  )
}

export default IotAutomation
