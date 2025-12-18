import History from "./History";
 import ClientLogo from "../../components/ClientLogo";
import AboutInfo from "./AboutInfo";
import HeroSection from "../../components/HeroSection";
import abu from "../../assets/abu.jpg"
import MissionVision from "./mvCorrected";

// import OurTeams from "../teams/OurTeams";


function Aboutus() {
  return (
    <>
      <div className="site-content">
        <div className="container-fluid">
          <div className="item-efftect">
            <div className="efftect overflow-hidden" />
            <div className="efftect overflow-hidden" />
            <div className="efftect overflow-hidden" />
            <div className="efftect overflow-hidden" />
            <div className="efftect overflow-hidden" />
          </div>
        </div>
        {/* <HeroSection
        imageUrl={abu}
        title="About Us"
        description="Our Expertise. Know more about what we do."
      /> */}
        <div className="content-wrapper">
          <AboutInfo />
    
          <ClientLogo />
          <MissionVision /> 
          {/* <History /> */}
          {/* <OurTeams /> */}

        </div>
      </div>
    </>
  );
}

export default Aboutus;
