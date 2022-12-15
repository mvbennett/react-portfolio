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
          Full stack web developer and freelance photographer in NYC.
          Studied web development at Le Wagon in Tokyo and created
          two Ruby on Rails based apps in a four-person team.
          Currently looking for Full Stack web development positions in a
          small or medium sized company.
        </p>
      </div>
    </div>
  );
};

export default BioCard;
