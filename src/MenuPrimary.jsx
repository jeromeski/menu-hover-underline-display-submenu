import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuPrimary extends Component {
  state = {
    isOpen: false
  };

  handleMouseEnter = () =>
    this.setState({
      isOpen: true
    });

  handleMouseLeave = () =>
    this.setState({
      isOpen: false
    });

  render() {
    const isOpen = this.state.isOpen ? "is-open" : "";
    console.log(isOpen);
    return (
      <div id="header" className="global-header">
        <nav id="primary-nav" className="navigation__wrapper">
          <ul className="navigation clearfix">
            <li className="first-level">
              <Link
                className="navigation__link"
                onMouseEnter={this.handleMouseEnter}
              >
                NEW ARRIVALS
              </Link>
              <div
                className={`${isOpen} sub-navigation`}
                onMouseLeave={this.handleMouseLeave}
              >
                <nav className="sub-navigation__wrapper sub-navigation_new-arrivals">
                  <div className="sub-navigation__categories">
                    <div className="sub-navigation__category-row">
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>NEW ARRIVALS IS DISPLAYED</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
            <li className="first-level">
              <Link
                className="navigation__link"
                onMouseEnter={this.handleMouseEnter}
              >
                MEN
              </Link>
              <div
                className={`${isOpen ? "is-open" : ""} sub-navigation`}
                onMouseLeave={this.handleMouseLeave}
              >
                <nav className="sub-navigation__wrapper sub-navigation_new-arrivals">
                  <div className="sub-navigation__categories">
                    <div className="sub-navigation__category-row">
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>MEN IS DISPLAYED</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MenuPrimary;
