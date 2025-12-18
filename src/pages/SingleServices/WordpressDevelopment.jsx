import React from 'react'

import MethodologySection from '../../components/Section1'
import Card from '../../components/Card'
import HeroSection from "../../components/HeroSection";
import CMSdevelopment from '../../assets/images/servicesicon/development.png'
import responsiveWordpressthemeDev from '../../assets/images/servicesicon/responsiveWordpressthemedev.png'
import Customwordpressweb from '../../assets/images/servicesicon/Customwordpressweb.png'
import Wordpressdevelopment from '../../assets/images/servicesicon/Wordpressplugin.png'
import TechStack from "../../components/techStack/TechStack";
import {wordpressStack} from "../../components/techStack/TechStackData";
import wp from "../../assets/images/banner/inner-header/wp.jpg"
function WordpressDevelopment() {
  return (
    <div>

<div id="page" className="main  site-content ">
        <HeroSection
        imageUrl={wp}
        title="Wordpress Development"
        description="Professional WordPress development services delivering custom, scalable, and high-performance websites."
      />

        <div className="services-section">
          <div className="container">
            <div className="section-header ">
              <h2 className="title">
              Innovative WordPress Design
                            </h2>
               <p  className=" mt-4 mt-sm-0" > We craft custom WordPress solutions designed to elevate your brand and drive growth, regardless of your business size. Whether you're a startup, an expanding business, or a large enterprise, our expert developers build scalable, high-performance, and secure WordPress websites that captivate audiences and strengthen your online presence. We focus on innovation, speed, and user experience, transforming your vision into a powerful digital platform. 

              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="services grid-wrapper">
                  <Card 
                    title="CMS development"
                    description=" We offer custom CMS development services to help businesses efficiently manage and update their digital content. Whether you need a simple website or a complex enterprise solution, our scalable and user-friendly CMS platforms empower you to take full control of your online presence.

"
                    imageSrc={CMSdevelopment} 
                  />
                  <Card 
                    title="Responsive Wordpress Theme Development"
                    description="We design and develop custom, fully responsive WordPress themes that provide a flawless user experience across all devices. Our expert developers ensure your website is fast, scalable, and performance-optimized, blending aesthetics with functionality for maximum impact."
                    imageSrc={responsiveWordpressthemeDev} 
                  />
                  <Card 
                    title="Custom Wordpress Web Development"
                    description="We specialize in custom WordPress development, crafting high-performance, scalable, and visually stunning websites tailored to your unique business needs. Whether you're a startup, a growing company, or a large enterprise, our expert developers deliver feature-rich, and drive business growth in the digital landscape."
                    imageSrc={Customwordpressweb} 
                  />
                  <Card 
                    title="Conversion to Wordpress"
                    description="We ensure a smooth transition while preserving your design, content, and SEO rankings. Enjoy the benefits of a flexible, scalable, and easy-to-manage WordPress platform with enhanced performance, security, and customization.
"
                    imageSrc={Wordpressdevelopment} 
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
      <TechStack techStackData={wordpressStack} />
      <MethodologySection type="wordpressDev"/> 

      </div>

     
    </div>
  )
}

export default WordpressDevelopment
