import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useSiteMetadata from './SiteMetadata'
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      active: false,
      navBarActiveClass: "",
      activeNav: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    let { children, title } = this.props;
    const githubElement = (
      <a
                className="navbar-item"
                href="https://github.com/daredoes/netlify-web-development"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => {
                  this.setState({
                    activeNav: "github"
                  })
                }}
                onMouseLeave={() => {
                  this.setState({
                    activeNav: ""
                  })
                }}
              >
                <span className="icon">
                  <FontAwesomeIcon size="2x" icon={['fab', 'github']} inverse={this.state.activeNav !== "github"} />
                </span>
              </a>
    );
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="is-size-3">{title}</Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.active ? 'hamburger' : ''} ${this.state.navBarActiveClass}`}
          >
            { children ? <div className="navbar-start has-text-centered">
              {children}
            </div> : null }
            <div className="navbar-end has-text-centered">
              {githubElement}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
