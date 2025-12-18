import HeroSection from "../../components/HeroSection";
import ContactForm from "./ContactForm";
import CTA from "./CTA";
import pageheader01 from "../../assets/images/banner/inner-header/page-header-01.jpg";

const ContactUs = () => {
  return (
    <div id="page" className="main">
      <HeroSection
        imageUrl={pageheader01}
        title="Contact Us"
        description="Let success motivate you."
      />
      <CTA />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
