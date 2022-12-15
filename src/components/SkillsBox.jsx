import React from "react";

const SkillsBox = ({ stack }) => {
  const skills = Object.values(stack).map((tool) => {
    console.log(Object.values(tool)[0]);
    return (
      <img src={Object.values(tool)[0]} alt={Object.keys(tool)[0]} className="skill-logo" data-aos="zoom-in" />
    );
  });
  return (
    <div>
      <h2>
        Technical Skills
      </h2>
      <div className="skills-box">
        {skills}
      </div>
    </div>
  );
};

export default SkillsBox;
