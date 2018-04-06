import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import favicon from "../images/favicon.ico"

import Nav from "../components/Nav.js";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <main>
    <Helmet
      title="Blog - Mateo Olarte: Fullstack & UX Developer"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
      link={[
        { rel: "shortcut icon", href: `${favicon}` }
      ]}
    />
    
    <Nav />
    
    {children()}
  </main>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
