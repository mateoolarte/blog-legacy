import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Nav from "../components/Nav.js";
import { withPrefix } from "gatsby-link";
import favicon from "../images/favicon.ico";
import "./index.css";

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolledMenu: ""
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.matchMedia("(min-width: 1600px)").matches) {
        this.addClassMenuScrolled(510);
      } else if (window.matchMedia("(min-width: 568px)").matches) {
        this.addClassMenuScrolled(370);
      } else {
        this.addClassMenuScrolled(340);
      }
    });
  }

  addClassMenuScrolled(pixeles_change) {
    if (window.scrollY >= pixeles_change) {
      this.setState({
        scrolledMenu: "headerScrolled"
      });
    } else {
      this.setState({
        scrolledMenu: ""
      });
    }
  }

  render() {
    var hola = this.props.location.pathname === withPrefix("/") || this.props.location.pathname === withPrefix("/blog/")
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

        <Nav menuScrolled={this.state.scrolledMenu} currentUrl={hola} />

        {this.props.children()}
      </main>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
