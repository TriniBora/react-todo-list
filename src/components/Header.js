import React, { Component } from "react";
import "../css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
    render() {
        return (
            <div className="header">

                <h1><i>
                <FontAwesomeIcon id="check" icon={ [ "fas", "check" ] }/>
              </i> to do list</h1>
            </div>
        );
    }
}

export default Header;
