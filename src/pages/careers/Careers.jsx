import HeroSection from "../../components/HeroSection";
import About from "./About";
import JobPosting from "./JobPosting";
import WorkInfo from "./WorkInfo";
import car from "../../assets/car.jpg"

const Careers = () => {
  return (
    <div id="page" className="main  ">
      <HeroSection
        imageUrl={car}
        title="Careers"
        description="Give yourself the power of responsibility."
      />
      <About />
      <JobPosting />
      <WorkInfo />
    </div>
  );
};

export default Careers;
