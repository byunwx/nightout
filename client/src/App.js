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

// Apollo Client Config
// import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";
import client from './components/Routers/client';


//auth0 stuff
const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div>
        <Router history={history}>
          <div>
            <Route
              path="/"
              render={(props) =>< Navbar auth = {
              auth
            }
            {
              ...props
            } />}/>
            <h1 className="center-align">
              Welcome to NightOut
            </h1>
            {/* <ApolloProvider client={client}>
            <YelpSearch/>
            </ApolloProvider> */}
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/search" component={Search}/>
            </Switch>
            <Route
              path="/callback"
              render={(props) => {
              handleAuthentication(props);
              return <Callback {...props}/>
            }}/>
          </div>
        </Router>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
