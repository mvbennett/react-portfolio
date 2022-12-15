import React from "react";
// import ReactDOM from "react-dom";

const BioCard = () => {
  // AOS.init();
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
          <span className="divider">|</span>
          <span className="main-skill">Node</span>
          <span className="divider">|</span>
          <span className="main-skill">ExpressJS</span>
        </h3>
        <p>
          Full stack web developer and freelance photographer in NYC. Studied web development at Le Wagon in Tokyo and helped create two Ruby on Rails based apps in a four-person team. Currently looking for Full Stack web development positions in a small or medium sized company.
        </p>
      </div>
    </div>
  );
};

export default BioCard;
