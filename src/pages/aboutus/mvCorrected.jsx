import mission from "../../assets/images/mv/mission1.png";
import vision from "../../assets/images/mv/vision.png";

const MissionVision = () => {
  return (
    <div className="py-20 bg-transparent text-white mb-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold   mb-6">Vision</h2>
            <p className="text-lg   leading-relaxed">
              To be the global leader in IT solutions and digital product
              innovation, empowering businesses with progressive technology that
              enhances efficiency, scalability, and growth. We envision a future
              where software development and operations seamlessly merge to
              empower organizations worldwide to innovate, iterate, and thrive
              in the digital age. We aspire to be the catalyst for this
              transformation by pioneering cutting-edge DevOps solutions that
              revolutionize how businesses build, deploy, and manage their
              software products.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={vision}
              alt="Our Vision"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col  lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold   mb-6">Mission</h2>
            <ul className="text-lg   space-y-4 list-disc pl-5">
              <li>
                Developing industry-leading IT solutions and products that
                enable businesses to operate efficiently, automate workflows,
                and stay ahead in a rapidly evolving digital world.
              </li>
              <li>
                Transforming outdated methodologies by replacing legacy systems
                with modern, intelligent, and scalable solutions tailored to
                each business needs.
              </li>
              <li>
                Driving digital innovation through AI, cloud computing, and
                automation, ensuring seamless integration of technology into
                daily business operations.
              </li>
              <li>
                Empowering businesses of all sizes with accessible, secure, and
                intelligent IT infrastructure that fosters productivity and
                long-term success.
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={mission}
              alt="Our Mission"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
