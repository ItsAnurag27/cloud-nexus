import OurTeams from "./OurTeams";
import HeroSection from "../../components/HeroSection";


function Team() {
  return (
    <div>
      <HeroSection
        imageUrl="src/assets/co-working-people-working-together.jpg"
        title="Meet Our Team"
        description="Our team is dedicated to turning ideas into reality."
      />
      <OurTeams />

    </div>
  );
}

export default Team;
