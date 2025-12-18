import React from 'react'
import MethodologySection from '../../components/Section1'
import Card from '../../components/Card'
import HeroSection from "../../components/HeroSection";
import cloudandinfrastructure from '../../assets/images/servicesicon/cloudandinfrastructure.png'
import Cyberstrategy from '../../assets/images/servicesicon/Cyberstrategy.png'
import dataprotectionandpriv from '../../assets/images/servicesicon/dataprotectionandpriv.png'
import IAM from '../../assets/images/servicesicon/IAM.png'
import TechStack from "../../components/techStack/TechStack";
import { cyberSecurityStack} from "../../components/techStack/TechStackData";
import cyberSecurity4_enhanced from "../../assets/images/banner/inner-header/cyberSecurity4_enhanced.jpg"


function CyberSecurity() {
  return (
    <div>

<div id="page" className="main  site-content ">
        <HeroSection
        imageUrl={cyberSecurity4_enhanced}
        title="Cyber Security"
        description="Protecting your digital assets with cutting-edge cybersecurity solutions, 24/7"
      />

        <div className="services-section">
          <div className="container">
            <div className="section-header ">
              <h2 className="title">
              Protecting Your Business Digitally
</h2>
               <p  className=" mt-4 mt-sm-0" > We provide cutting-edge cybersecurity solutions to safeguard your data, systems, and networks from cyber threats. Our end-to-end security services help businesses prevent breaches, detect vulnerabilities, and ensure compliance with industry standards.Our solutions include threat detection and prevention, network security, data encryption, cloud security, endpoint protection, and incident response.

              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="services grid-wrapper">
                  <Card 
                    title="Cyber Strategy"
                    description=" We help businesses build robust cybersecurity strategies to protect their digital assets, mitigate risks, and ensure compliance. Our tailored Cyber Strategy services align security with business objectives, enabling resilience against evolving cyber threats."
                    imageSrc={cloudandinfrastructure} 
                  />
                  <Card 
                    title=".Identity & Access Management(IAM)"
                    description="We provide robust Identity & Access Management (IAM) solutions to secure and streamline user access across your digital ecosystem. Our IAM services ensure that the right individuals have the right access to the right resources—at the right time—enhancing security."
                    imageSrc={Cyberstrategy} 
                  />
                  <Card 
                    title="Data Protection and Privacy"
                    description="We help businesses safeguard sensitive data and ensure compliance with global privacy regulations. Our Data Protection & Privacy solutions are designed to secure your digital assets, mitigate risks, and build customer trust."
                    imageSrc={dataprotectionandpriv} 
                  />
                  <Card 
                    title="Clous & Infrastructure Security"
                    description="We provide robust Cloud & Infrastructure Security solutions to protect your digital assets from evolving cyber threats. Our comprehensive security services ensure data integrity, compliance, and resilience across cloud and on-premises environments."
                    imageSrc={IAM} 
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
        <TechStack techStackData={cyberSecurityStack} />

        <MethodologySection type="cyberSecurity" /> 
      </div>

     
    </div>
  )
}

export default CyberSecurity