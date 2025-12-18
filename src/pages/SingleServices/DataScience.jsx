import React from 'react'
import MethodologySection from '../../components/Section1'
import Card from '../../components/Card'
import HeroSection from "../../components/HeroSection";
import TechStack from "../../components/techStack/TechStack";
import {dataScienceStack} from "../../components/techStack/TechStackData";
import analysis from '../../assets/images/servicesicon/analysis.png'
import bigdata from '../../assets/images/servicesicon/big-data.png'
import machine from '../../assets/images/servicesicon/machine.png'
import storagesolutions from '../../assets/images/servicesicon/storage-solutions.png'
import ds from "../../assets/images/banner/inner-header/ds.jpg"


function DataScience() {
  return (
    <div>

<div id="page" className="main  site-content ">
        <HeroSection
        imageUrl={ds}
        title="Data Science"
        description="Empowering businesses with AI-driven data science solutions for and actionable insights."
      />

        <div className="services-section">
          <div className="container">
            <div className="section-header ">
              <h2 className="title">
              Data-Driven Intelligence              </h2>
               <p className=" mt-4 mt-sm-0"  > We transform raw data into actionable insights, empowering businesses to make informed decisions, optimize operations, and gain a competitive edge. Our expert Data Science solutions leverage artificial intelligence, machine learning, and advanced analytics to uncover hidden patterns, predict trends, and drive business growth.We offer a wide range of data-driven services, including predictive analytics, and big data processing.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="services grid-wrapper">
                  <Card 
                    title="Data Analytics & Visualisation"
                    description=" Unlock the power of data with CloudNexus! Our Data Analytics & Visualization services help businesses transform raw data into actionable insights, enabling smarter decision-making and enhanced performance."
                    imageSrc={analysis} 
                  />
                  <Card 
                    title="Big Data Solution"
                    description="Our Big Data Solution empowers businesses to efficiently store, process, analyze, and visualize large volumes of structured and unstructured data. We leverage advanced technologies, including cloud computing, AI,  and drive business growth.
"
                    imageSrc={bigdata} 
                  />
                  <Card 
                    title="ML & AI"
                    description="We provide cutting-edge Artificial Intelligence (AI) and Machine Learning (ML) solutions that help businesses automate processes, gain actionable insights, and drive innovation. Our expert team develops intelligent systems tailored to your unique needs, and customer experience."
                    imageSrc={machine} 
                  />
                  <Card 
                    title="Data Storage Solution"
                    description="Data Storage Solution provides secure, scalable, and high-performance data storage tailored to your business needs. Whether you require cloud-based, on-premises, or hybrid storage,accessibility, and disaster recovery."
                    imageSrc={storagesolutions} 
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
        <TechStack techStackData={dataScienceStack} />

        <MethodologySection type="dataScience" /> 

      </div>

      
    </div>
  )
}

export default DataScience