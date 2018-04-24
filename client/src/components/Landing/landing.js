/*dependencies*/
import React, { Component } from "react";

import "./landingvideo.mp4";



class landing extends Component {

  login() {
    this.props.auth.login();
  }

    render() {
      const { isAuthenticated } = this.props.auth;
      //checking for auth
        return (
            <div>
            <video autoPlay muted loop id="myVideo">
                    <source src='http://www.coverr.co/s3/mp4/Ultra_Sunset.mp4'
                    type="video/mp4" />


      Your browser does not support the video tag.
  </video>


          <div className="video-content center-align">
            <h1 className="logo">Let's Go Out</h1>
                    <h3 className="tagline">planning a perfect night has never been so easy</h3>

                    <a onClick={this.login.bind(this)}>
                        <button className="waves-effect waves-light btn-large login-btn">
                            <h6>
                                Log In
                            </h6>
                        </button>
                    </a>


                </div>
          </div>
    )
}
}











/* **THIS IS THE LAST LINE OF CODE** */
export default landing;
