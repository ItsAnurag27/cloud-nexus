import MethodologySection from '../../components/Section1'
import Card from "../../components/Card";
import android from "../../assets/images/servicesicon/android.png";
import atom from "../../assets/images/servicesicon/atom.png";
import ios from "../../assets/images/servicesicon/ios.png";
import HeroSection from "../../components/HeroSection";
import TechStack from "../../components/techStack/TechStack";
import { appDevelopmentStack } from "../../components/techStack/TechStackData";
import webappdev2 from "../../assets/images/banner/inner-header/webappdev2.jpg";

function AppDevelopment() {
  return (
    <div>
      <div id="page" className="main  site-content ">
        <HeroSection
        imageUrl={webappdev2}
          title="App Development"
          description="Building innovative, scalable, and user-friendly apps for businesses."
        />

        <div className="services-section">
          <div className="container">
            <div className="section-header ">
              <h2 className="title" >
              Scalable Solutions
              </h2>
               <p  className=" mt-4 mt-sm-0"  >
                We craft high-performance, scalable,user-friendly mobile and web applications tailored to yourbusiness needs. From startups to enterprises, we deliver
                innovative solutions that enhance user experience and drive
                growth. Our team of expert developers, designers, and strategists work collaboratively to create cutting-edge applications that are secure, reliable, and future-proof. 
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="services grid-wrapper">
                  <Card
                    title="IoS App Development App "
                    description=" We craft high-performance, user-friendly iOS apps tailored to your business needs. Our expert developers leverage the latest technologies to build scalable, secure, and engaging applications for iPhones, iPads, and Apple Watch. From concept to deployment, we ensure a seamless user experience and robust functionality to help you stay ahead in the digital landscape.."
                    imageSrc={ios}
                  />
                  <Card
                    title=" Android App Development"
                    description="We specialize in custom Android app development, delivering high-performance, user-friendly, and scalable applications. Whether you're a startup or an enterprise, our expert developers create feature-rich Android apps tailored to your business needs, ensuring seamless functionality, intuitive design, and a superior user experience."
                    imageSrc={android}
                  />
                  <Card
                    title=" React Native App Development"
                    description="We build high-performance, cross-platform mobile apps using React Native to deliver a seamless user experience on both iOS and Android. Our expert developers create scalable, fast, and cost-effective mobile solutions tailored to your business needs."
                    imageSrc={atom}
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
        <MethodologySection type="appDev" /> 

      </div>
    </div>
  );
}

export default AppDevelopment;
