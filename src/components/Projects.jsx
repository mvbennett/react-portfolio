import React from "react";

import ProjectCard from "./ProjectCard";

const Projects = ({ stack }) => {
  const projects = {
    abandonya: {
      name: 'Abandonya',
      img: '../../assets/images/Abandonya.png',
      url: 'https://abandonya.herokuapp.com/',
      description: 'An app that allows you to rent various locations with a spooky twist',
      role: 'Lead Developer',
      github: 'https://github.com/mvbennett/abandonya',
      stack: [
        stack.rails,
        stack.sass,
        stack.javascript,
        stack.html,
        stack.bootstrap,
        stack.node,
        stack.yarn,
        stack.postgres
      ]
    },
    myGameShelf: {
      name: 'My Game Shelf',
      img: '../../assets/images/MyGameShelf.png',
      url: 'https://mvbgameshelf.herokuapp.com',
      description: 'Manage all the games that you own and want',
      role: 'Lead Developer and Front End Developer',
      github: 'https://github.com/mvbennett/my-game-shelf',
      stack: [
        stack.rails,
        stack.sass,
        stack.javascript,
        stack.figma,
        stack.html,
        stack.bootstrap,
        stack.node,
        stack.yarn,
        stack.postgres
      ]
    },
    photofolio: {
      name: 'Photofolio',
      img: '../../assets/images/photofolio.png',
      url: 'http://fotofolio.herokuapp.com/',
      description: 'An app completely focused on photos for photographers and fans of photography',
      role: 'Solo Project',
      github: 'https://github.com/mvbennett/photofolio',
      stack: [
        stack.react,
        stack.rails,
        stack.sass,
        stack.node,
        stack.postgres,
        stack.webpack
      ]
    }
  };
  return (
    <div>
      <h2>Projects</h2>
      <ProjectCard project={projects.abandonya} />
      <ProjectCard project={projects.myGameShelf} />
      <ProjectCard project={projects.photofolio} />
    </div>
  );
};

export default Projects;
