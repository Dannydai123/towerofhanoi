// Q7 NAVbar  in 45 practices

import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// import {$} from 'jquery'

// import "bootstrap/dist/js/bootstrap.bundle.min";

import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    width: window.innerWidth,
    height: window.innerHeight,

    isCollapsed: false,

    isWide: true,
  };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });

    console.log(this.state.width, this.state.height);
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions, { once: false });
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   window.addEventListener("resize", this.updateDimensions, { once: true });
  // }

  componentWillUnmount() {
    console.log("umount");
    window.removeEventListener("resize", this.updateDimensions);
  }

  handleBtnClick = () => {
    console.log("in handlebtnclick");
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  };

  render() {
    const navbarWide = (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active text-center">
              <a className="nav-link" href="#chapter_1">
                Home{" "}
              </a>
            </li>
            <li className="nav-item active text-center">
              <a className="nav-link" href="#chapter_2">
                Products{" "}
              </a>
            </li>
            <li className="nav-item active text-center">
              <a className="nav-link" href="#">
                Services{" "}
              </a>
            </li>
            <li className="nav-item active text-center">
              <a className="nav-link" href="#">
                Contact Us{" "}
              </a>
            </li>
          </ul>

          <div className="text-center">
            <button
              className="btn btn-success mybtn  my-2 my-sm-0   text-center"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </nav>
    );
    const navNarrow = (
      <div className="navbar navbar-expand-md navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.handleBtnClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    );
    const collapedMenu = (
      <div className="navbar-dark bg-primary  " id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active text-center">
            <a className="nav-link" href="#chapter_4">
              Home{" "}
            </a>
          </li>
          <li className="nav-item active text-center">
            <a className="nav-link" href="#chapter_1">
              Products{" "}
            </a>
          </li>
          <li className="nav-item active text-center">
            <a className="nav-link" href="#chapter_2">
              Services{" "}
            </a>
          </li>
          <li className="nav-item active text-center">
            <a className="nav-link" href="#chapter_3">
              Contact Us{" "}
            </a>
          </li>
        </ul>
        <div className="text-center">
          <button
            className="btn btn-success mybtn  my-2 my-sm-0   text-center"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    );
    let displayedElm;
    if (this.state.width < 768) {
      displayedElm = navNarrow;
    } else {
      displayedElm = navbarWide;
    }

    return (
      <div className="outerdiv">
        {displayedElm} {this.state.isCollapsed ? collapedMenu : null}
      </div>
    );
  }
}

export default Navbar;
