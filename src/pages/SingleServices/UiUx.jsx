import React from 'react'
import MethodologySection from '../../components/Section1'
import Card from '../../components/Card'
import HeroSection from "../../components/HeroSection";
import MobileUIUXdes from '../../assets/images/servicesicon/MobileUIUXdes.png'
import Testingandoptimisation from '../../assets/images/servicesicon/Testingandoptimisation.png'
import Wearableuiux from '../../assets/images/servicesicon/Wearableuiux.png'
import WebUIUXdesign from '../../assets/images/servicesicon/WebUIUXdesign.png'
import TechStack from "../../components/techStack/TechStack";
import {uiuxStack} from "../../components/techStack/TechStackData";
import UiUx3_enhanced from "../../assets/images/banner/inner-header/UiUx3_enhanced.jpg"



function UiUx() {
  return (
    <div>

<div id="page" className="main  site-content ">
        <HeroSection
        imageUrl={UiUx3_enhanced}
        title="Ui/Ux"
        description="Crafting seamless, user-centric designs that elevate experiences and drive engagement"
      />

        <div className="services-section">
          <div className="container">
            <div className="section-header ">
              <h2 className="title">
              User-Focused Design
                            </h2>
               <p className=" mt-4 mt-sm-0"  > We craft exceptional UI/UX designs that drive conversions by focusing on intuitive and visually compelling interfaces.  Our approach centers around several key principles.  We prioritize seamless navigation, ensuring users can easily find what they need through clear menus, calls to action, and streamlined user flows. 
                </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="services grid-wrapper">
                  <Card 
                    title="Mobile UI/UX Design"
                    description=" We craft intuitive and visually stunning mobile experiences that enhance user engagement and drive conversions. Our UI/UX design services focus on usability, aesthetics, and seamless navigation to create apps that delight users."
                    imageSrc={MobileUIUXdes} 
                  />
                  <Card 
                    title="Web UI/UX Design"
                    description="We create intuitive, visually stunning, and user-friendly web experiences that engage users and drive conversions. Our UI/UX design services focus on seamless navigation, responsive design, and a customer-centric approach to enhance usability and brand identity."
                    imageSrc={Testingandoptimisation} 
                  />
                  <Card 
                    title="Wearables UI/UX Design"
                    description="We create intuitive and engaging UI/UX designs for wearable devices, ensuring seamless user experiences across smartwatches, fitness trackers, AR/VR headsets, and other IoT wearables. Our designs prioritize usability, aesthetics, and functionality, and responsive."
                    imageSrc={Wearableuiux} 
                  />
                  <Card 
                    title="Testing and Optimisation"
                    description="We ensure your digital solutions are flawless, high-performing, and user-friendly through comprehensive testing and optimization. Our expert team leverages cutting-edge tools and methodologies to enhance functionality, speed, and user experience."
                    imageSrc={WebUIUXdesign} 
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
        <TechStack techStackData={uiuxStack} />

        <MethodologySection type="uiux" /> 
      </div>

      
    </div>
  )
}

export default UiUx