import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <span>
          <a href="https://landed.com/">Copyright </a> &copy; Landed, Inc. DRE
          #01988003.
        </span>
        <span className="ml-auto">
          <a href="https://landed.com/">
            Landed was founded in 2015 in San Francisco.
          </a>
        </span>
      </footer>
    );
  }
}

export default Footer;
