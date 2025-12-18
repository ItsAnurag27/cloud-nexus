import React from 'react'
import MethodologySection from '../../components/Section1'
import Card from '../../components/Card'
import HeroSection from "../../components/HeroSection";
import BIgdatasecandgov from '../../assets/images/servicesicon/BIgdatasecandgov.png'
import Bigdataandmanage from '../../assets/images/servicesicon/Bigdataandmanage.png'
import cloudandHybridbigdata from '../../assets/images/servicesicon/cloudandHybridbigdata.png'
import dataintandETL from '../../assets/images/servicesicon/dataintandETL.png'
import TechStack from "../../components/techStack/TechStack";
import {bigDataStack} from "../../components/techStack/TechStackData";
import bigdata2_enhanced from "../../assets/images/banner/inner-header/Bigdata2_enhanced.jpg"



function BigData() {
  return (
    <div>

<div id="page" className="main  site-content ">
        <HeroSection
        imageUrl={bigdata2_enhanced}
        title="Big Data"
        description="Unlock powerful insights and drive smarter decisions with our cutting-edge Big Data solutions."
      />

        <div className="services-section">
          <div className="container">
            <div className="section-header">
              <h2 className="title">
              Harness Big Data for Growth
              </h2>
               <p  className=" mt-4 mt-sm-0" > Big Data services empower organizations to seamlessly collect, store, process, and analyze vast volumes of structured and unstructured data, unlocking deep insights, optimizing decision-making, and driving sustainable business growth. They facilitate data collection and integration from diverse sources, including traditional databases, social media, IoT devices, and web logs, then provide the means to integrate this data into a unified platform.  
                  </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="services grid-wrapper">
                  <Card 
                    title="Cloud and Hybrid Big Data Solutions"
                    description=" Cloud and Hybrid Big Data Solutions help businesses manage, process, and analyze vast amounts of data efficiently by leveraging cloud computing and hybrid architectures. Whether you need a fully cloud-based solution or a hybrid setup that integrates on-premises and cloud environments, we provide scalable, secure, and high-performance big data solutions tailored to your business needs.

"
                    imageSrc={BIgdatasecandgov} 
                  />
                  <Card 
                    title="Big Data Security and Governance"
                    description="Big Data Security and Governance services empower organizations to secure, manage, and maintain compliance across their data ecosystems. As businesses generate, process, and store vast volumes of data, the need for robust security measures, regulatory adherence, and data integrity becomes paramount.
"
                    imageSrc={Bigdataandmanage} 
                  />
                  <Card 
                    title="Data Storage and Management"
                    description="Data Storage and Management service provides businesses and individuals with secure, scalable, and efficient solutions for storing, organizing, and accessing data. Whether you need cloud-based, on-premises, or hybrid storage, our service ensures seamless data handling with advanced security measures, high availability, and easy accessibility."
                    imageSrc={cloudandHybridbigdata} 
                  />
                  <Card 
                    title="Data Integration and ETL Services"
                    description="Data Integration and ETL (Extract, Transform, Load) Services help organizations seamlessly consolidate, process, and manage data from multiple sources into a unified, high-quality dataset. We ensure that your data is efficiently extracted, transformed into the desired format, and loaded into the target system for analytics, reporting, and operational use.
"
                    imageSrc={dataintandETL} 
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
        <TechStack techStackData={bigDataStack} />
        <MethodologySection type="bigData" /> 

      </div>

    
    </div>
  )
}

export default BigData
