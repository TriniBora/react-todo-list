import React, { Component } from "react";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
    render() {
        return (
            <footer>

              <a href='https://www.freepik.com/photos/business' target="_blank" rel="noreferrer"><i>
                <FontAwesomeIcon id="link" icon={ [ "fas", "link" ] }/></i> BG Photo Author</a>
                <p>&copy;2021, made by MTMB </p>
            </footer>
        );
    }
}

export default Footer;
