import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Nav from "../components/Nav.js";
import favicon from "../images/favicon.ico";
import "./index.css";

export default function TemplateWrapper({ children }) {
  return (
    <main>
      <Helmet
        title="Blog - Mateo Olarte: Fullstack & UX Developer"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
        link={[
          { href: `${favicon}`, rel: "shortcut icon" },
          {
            href:
              "https://fonts.googleapis.com/css?family=Encode+Sans:300,500,700",
            rel: "stylesheet"
          }
        ]}
      />

      <Nav />

      {children()}
    </main>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};
