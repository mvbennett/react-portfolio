import React from "react";
import Title from './Title';
import BioCard from './BioCard';
import Projects from './Projects';
import SkillsBox from './SkillsBox';
import Footer from "./Footer";

const App = () => {
  const stack = {
    ruby: { Ruby: "../assets/images/icons/ruby-plain-wordmark.svg" },
    rails: { 'Ruby on Rails': "../assets/images/icons/rails-plain-wordmark.svg" },
    javascript: { JavaScript: "../assets/images/icons/javascript-original.svg" },
    react: { React: "../assets/images/icons/react-original-wordmark.svg" },
    express: { 'Express.js': "../assets/images/icons/expressjs-icon.svg" },
    postgres: { PostgreSQL: "../assets/images/icons/postgresql-original-wordmark.svg" },
    redux: { Redux: "../assets/images/icons/redux.svg" },
    sass: { Sass: "../assets/images/icons/sass-original.svg" },
    bootstrap: { Bootstrap: "../assets/images/icons/bootstrap-original-wordmark.svg" },
    figma: { Figma: "../assets/images/icons/figma-original.svg" },
    html: { HTML5: "../assets/images/icons/html5-original-wordmark.svg" },
    mongo: { MongoDB: "../assets/images/icons/mongodb-icon.svg" },
    node: { 'Node.js': "../assets/images/icons/nodejs-original.svg" },
    npm: { NPM: "../assets/images/icons/npm-original-wordmark.svg" },
    yarn: { Yarn: "../assets/images/icons/yarn-original-wordmark.svg" },
    webpack: { Webpack: "../assets/images/icons/webpack-icon.svg" }
  };
  return (
    <div id="app">
      <Title />
      <div className="container">
        <BioCard />
        <Projects stack={stack} />
        <SkillsBox stack={stack} />
      </div>
      <Footer />
    </div>

  );
};

export default App;
