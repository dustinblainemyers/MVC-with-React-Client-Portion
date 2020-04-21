import React, { Component } from "react";

import "../App.css";

class Nav extends Component {
  render() {
    const { link } = this.props;
    console.log("link", link);

    return (
      <nav>
        <ul class='nav'>
          {link.length > 0 ? (
            link.map((link) => (
              <a href={link.href} className='button solid'>
                {link.name}
              </a>
            ))
          ) : (
            <p>no data</p>
          )}
        </ul>
      </nav>
    );
  }
}

export default Nav;
