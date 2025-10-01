import React from "react";

const BioCard = () => {
  return (
    <div className="bio-block">
      <div className="bio-photo" data-aos="fade-right">
        <img src="./../../assets/images/purple.jpg" alt="" />
      </div>
      <div className="bio-info" data-aos="fade-left">
        <h3>
          <span className="main-skill">Ruby on Rails</span>
          <span className="divider">|</span>
          <span className="main-skill">JavaScript</span>
          <span className="divider">|</span>
          <span className="main-skill">React</span>
        </h3>
        <p>
          Full stack developer in NYC.
          I want to create apps with a tangible impact on society.
          I currently work for DexCare Inc. where the web app features I create
          improve the experience of millions of patients seeking care per day.
        </p>
      </div>
    </div>
  );
};

export default BioCard;
