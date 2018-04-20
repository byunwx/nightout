/*dependencies*/
import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" clasName="brand-logo">
                            NightOut
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <a href="#">New</a>
                            </li>
                            <li>
                                <a href="#">Upcoming</a>
                            </li>
                            <li>
                                <a href="#">Planning</a>
                            </li>
                            <li>
                                <a href="#">Past</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

/* **THIS IS THE LAST LINE OF CODE** */
export default Navbar;
