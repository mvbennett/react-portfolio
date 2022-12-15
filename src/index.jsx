import '../assets/stylesheets/application.scss';
import React from "react";
import ReactDOM from "react-dom/client";
import AOS from "aos";
import App from './components/App';

const container = document.getElementById('root');
if (container) {
  AOS.init();
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
