import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { CardPanel, Col, Row } from "react-materialize";

import "../App.css";

function Header() {
  return (
    <div class='navbar-fixed'>
      <nav>
        <div class='nav-wrapper'>
          {/* need get rid of link but keep styling */}
          <a href='#' class='brand-logo center'>
            Status
          </a>
          {/* <ul id='nav-mobile' class='left hide-on-med-and-down'>
        <li>
          <a href='sass.html'>Sass</a>
        </li>
        <li>
          <a href='badges.html'>Components</a>
        </li>
        <li>
          <a href='collapsible.html'>JavaScript</a>
        </li>
      </ul> */}
        </div>
      </nav>
    </div>
  );
}

export default Header;
