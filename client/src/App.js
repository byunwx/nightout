//Import React
import React, {Component} from 'react';
// import { Render } from 'react-dom';
import './App.css';
/*import components*/
import Home from './components/UserHome/userHome';
// import components
import Navbar from './components/Navbar/navbar';

// import MapContainer from '../mapView/mapView';
import Search from './components/Search/search';
// import react router deps
import {Router, Route, Switch} from 'react-router-dom';
// import { Provider } from 'react-redux'; import store, { history } from
// './store';

import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
//auth0 stuff
const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}
//autho0 handler

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Route path="/" render={(props) =><Navbar auth={auth} {...props} />} />
              <h1 className="center-align">
                Welcome to NightOut
              </h1>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/search" component={Search}/>
            </Switch>
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }}/>
          </div>
        </Router>
      </div>
    );
  }
}

// class App extends Component {   render() {     return (       <div
// className="App">         <div className="App-header">           {/* <img
// src={logo} className="App-logo" alt="logo" /> */}           <h2>Welcome to
// React</h2>         </div>         <p className="App-intro">           To get
// started, edit <code>src/App.js</code> and save to reload.         </p>
// </div>     );   } }

export default App;
