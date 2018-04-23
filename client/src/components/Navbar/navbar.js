/*dependencies*/
import React, { Component } from "react";


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
          window.location.pathname===""||window.location.pathname==="/" ? <div/>:
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">
                            NightOut
                        </a>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons">
                                    menu
                                </i>
                            </a>
                        {
                            !isAuthenticated() && (
                                <ul id="nav-mobile" className="right hide-on-med-and-down">
                                    <li>
                                        <a onClick={this.login.bind(this)}>Log In</a>
                                    </li>
                                </ul>
                            )
                        }
                        {
                                isAuthenticated() && (
                                <div>
                                <ul id="nav-mobile" className="right hide-on-med-and-down">
                                    <li>
                                            <a href="/search">
                                                Plan a Date
                                            </a>
                                    </li>
                                    <li>
                                        <a href="/home">
                                            See your Planned Dates
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={this.logout.bind(this)}>
                                            Log Out
                                        </a>
                                    </li>
                                </ul>

                              <ul className="sidenav" id="mobile-demo">
                                <li>
                                    <a href="/search">
                                        New
                                    </a>
                                </li>
                                <li>
                                    <a href="/home">See your Planned Dates</a>
                                </li>
                                <li>
                                    <a onClick={this.logout.bind(this)}>Log Out</a>
                                </li>
                                        </ul>
                            </div>
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
