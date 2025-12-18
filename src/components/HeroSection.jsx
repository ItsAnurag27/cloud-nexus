const HeroSection = ({ imageUrl, title, description }) => {
  return (
    <div
      className="inner-header bg-holder"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <h1 className="title pt-14">{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
