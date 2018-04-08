import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Nav from "../components/Nav.js";
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
    return (
      <main>
        <Helmet
          title="Blog - Mateo Olarte: Fullstack & UX Developer"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
          link={[{ rel: "shortcut icon", href: `${favicon}` }]}
        />

        <Nav
          currentUrl={window.location.pathname}
          menuScrolled={this.state.scrolledMenu}
        />

        {this.props.children()}
      </main>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
