import React from 'react'
import MethodologySection from '../../components/Section1'
import Card from '../../components/Card'
import HeroSection from "../../components/HeroSection"
import cloudservice from '../../assets/images/servicesicon/cloud-service.png'
import database from '../../assets/images/servicesicon/database.png'
import update from '../../assets/images/servicesicon/update.png'
import DevOpsService from '../../assets/images/servicesicon/DevOps Service.png'
import TechStack from "../../components/techStack/TechStack";
import {cloudDevopsStack} from "../../components/techStack/TechStackData";
import cloudsa from "../../assets/images/banner/inner-header/cloudsa.jpg"

function CloudDevops() {
  return (
    <div>

<div id="page" className="main  site-content ">
        <HeroSection
        imageUrl={cloudsa}
        title="Cloud & Devops"
        description="We deliver Cloud and DevOps solutions for automation, scalability, and security"
      />

        <div className="services-section">
          <div className="container">
            <div className="section-header ">
              <h2 className="title">Accelerate with Cloud & DevOps
</h2>
               <p  className=" mt-4 mt-sm-0"  > We empower businesses with cutting-edge Cloud and DevOps solutions to enhance agility, scalability, and efficiency. Our services streamline infrastructure management, automate workflows, and accelerate deployment, ensuring seamless operations in cloud environments.By leveraging advanced cloud technologies, CI/CD pipelines, containerization, and infrastructure-as-code.

              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="services grid-wrapper">
                  <Card 
                    title="Cloud Implementing Strategy"
                    description=" We design and execute a seamless Cloud Implementation Strategy to help businesses migrate, optimize, and scale in the cloud. Our approach ensures a smooth transition with minimal disruption, enhanced security, and cost efficiency.
"
                    imageSrc={update} 
                  />
                  <Card 
                    title=" Cloud App Services"
                    description="We offer cutting-edge Cloud Application Services to help businesses scale, innovate, and optimize operations. Our cloud solutions ensure high performance, security, and flexibility, enabling seamless access to applications anytime, anywhere. 
"
                    imageSrc={database} 
                  />
                  <Card 
                    title=" Cloud Management Service"
                    description="We provide end-to-end Cloud Management Services to optimize performance, security, and scalability. Our solutions cover cloud migration, infrastructure management ,and hybrid cloud environments."
                    imageSrc={cloudservice} 
                  />
                  <Card 
                    title="DevOps As A Service"
                    description="We streamline your development and operations with our DevOps as a Service (DaaS) solutions. We enable faster deployments, improved collaboration, and continuous integration & delivery (CI/CD) to enhance your software development lifecycle."
                    imageSrc={DevOpsService} 
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
        <TechStack techStackData={cloudDevopsStack} />

        <MethodologySection type="devOps"/> 
        
      </div>

     
    </div>
  )
}

export default CloudDevops
