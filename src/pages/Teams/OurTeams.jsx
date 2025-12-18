import TeamCard from "../../components/TeamCard";

const teamMembers = [
  {
    id: 1,
    name: "Anne Smith",
    position: "Senior Software Engineer",
    image: "/src/assets/images/team/01.jpg",
    symbol: "/src/assets/images/team/symbol.png",
  },
  {
    id: 2,
    name: "John Doe",
    position: "IT Project Manager",
    image: "/src/assets/images/team/02.jpg",
    symbol: "/src/assets/images/team/symbol.png",
  },
  {
    id: 3,
    name: "Mellissa Doe",
    position: "Network Engineer",
    image: "/src/assets/images/team/03.jpg",
    symbol: "/src/assets/images/team/symbol.png",
  },
  {
    id: 4,
    name: "Paul Flavius",
    position: "Frontend Developer",
    image: "/src/assets/images/team/04.jpg",
    symbol: "/src/assets/images/team/symbol.png",
  },
  {
    id: 5,
    name: "Michael Davis",
    position: "Data Analyst",
    image: "/src/assets/images/team/05.jpg",
    symbol: "/src/assets/images/team/symbol.png",
  },
  {
    id: 6,
    name: "Samantha Brown",
    position: "Quality Assurance",
    image: "/src/assets/images/team/06.jpg",
    symbol: "/src/assets/images/team/symbol.png",
  },
  {
    id: 7,
    name: "Kevin Lee",
    position: "IT Support",
    image: "/src/assets/images/team/07.jpg",
    symbol: "/src/assets/images/team/symbol.png",
  },
  {
    id: 8,
    name: "Ashley Williams",
    position: "Systems Administrator",
    image: "/src/assets/images/team/08.jpg",
    symbol: "/src/assets/images/team/symbol.png",
  },
];

const OurTeams = () => {
  const subtitleIcon = "/src/assets/images/subtitle-icon.png";

  return (
    <div>
      <section className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-8">
              <div className="section-title mb-lg-0">
                <span className="sub-title">
                  <img
                    className="img-fluid"
                    src={subtitleIcon}
                    alt="subtitle icon"
                  />{" "}
                  Our Staff
                </span>
                <h2 className="title mb-0">
                  Our team is friendly, talkative, and fully reliable.
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-4 align-self-end">
              <p className="mb-0 ps-xxl-5">
                So, make the decision to move forward. Commit your decision to
                paper, just to bring it into focus. Then, go for it!
              </p>
            </div>
          </div>

          <div className="row mt-xl-5 pt-5">
            <div className="col-md-12">
              <div className="team-boxs grid-wrapper grid-xl-4 grid-lg-3 grid-md-2 grid-sm-2 grid-xs-1">
                {teamMembers.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeams;
