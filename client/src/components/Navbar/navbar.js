/*dependencies*/
import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
    window.location.reload();
  }
    render() {
        const { isAuthenticated } = this.props.auth;
        //checking for auth
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">
                            NightOut
                        </a>
                        {
                          !isAuthenticated() && (
                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <a onClick={this.login.bind(this)}>Log In</a>
                                </li>
                            </ul>
                            )
                        }
                        {
                          isAuthenticated() && (
                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <a href="/search">New</a>
                                </li>
                                <li>
                                    <a href="">Upcoming</a>
                                </li>
                                <li>
                                    <a href="">Planning</a>
                                </li>
                                <li>
                                    <a href="">Past</a>
                                </li>
                                <li>
                                    <a onClick={this.logout.bind(this)}>Log Out</a>
                                </li>
                            </ul>
                            )
                        }
                    </div>
                </nav>
            </div>
        )
    }
}

/* **THIS IS THE LAST LINE OF CODE** */
export default Navbar;
