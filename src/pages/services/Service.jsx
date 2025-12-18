import Services from "./Services";
import HeroSection from "../../components/HeroSection";
import ser from "../../assets/ser.jpg"
import Industries from "./Industries";
function Service() {
  return (
    <div>
      <div className="site-content">
      <HeroSection
        imageUrl={ser}
        title="Services"
        description="Transforming businesses through technology.."
      />
        <div className="content-wrapper">
          <Services />
          <Industries />
        </div>
      </div>
    </div>
  );
}

export default Service;
