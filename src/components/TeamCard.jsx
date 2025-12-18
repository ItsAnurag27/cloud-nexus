import { SocialLinks } from "./SocialLinks";

const TeamCard = ({ member }) => (
  <div className="team-item team-style-1">
    <div className="team-img">
      <img className="img-fluid" src={member.image} alt={member.name} />
      <div className="image-overlay">
        <img className="img-fluid" src={member.symbol} alt="symbol" />
      </div>
    </div>
    <div className="team-info">
      <a href="team-detail.html" className="team-title">
        {member.name}
      </a>
      <span className="team-destination">{member.position}</span>
      <SocialLinks />
    </div>
  </div>
);
export default TeamCard;
