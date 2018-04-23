//Import React
import React, {Component} from 'react';
// import { Render } from 'react-dom';
import './App.css';
/*import components*/
import Home from './components/UserHome/userHome';
import Navbar from './components/Navbar/navbar';
import Search from './components/Search/search';
import Landing from './components/Landing/landing';

// import react router deps
import {Redirect, Router, Route, Switch} from 'react-router-dom';
// import { Provider } from 'react-redux'; import store, { history } from
// './store';

import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

// Apollo Client Config
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
const client = new ApolloClient();

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
        <ApolloProvider client={client}>
        <Router history={history}>
          <div>
          <Route exact path="/" render={(props) =>(
            !auth.isAuthenticated() ? (
              <Landing auth={auth} {...props} />
            ) : (
              <Redirect to="/home"/>
            )
          )} />
            <Route
              path="/"
              render={(props) =><Navbar auth = {
              auth
            }
            {
              ...props
            } />}/>

            {/* <ApolloProvider client={client}>
            <YelpSearch/>
            </ApolloProvider> */}
            <Switch>
              <Route exact path="/home" render={(props) =>(
                !auth.isAuthenticated() ? (
                  <Redirect to="/"/>
                ) : (
                  <Home auth={auth} {...props} />
                )
              )} />
              <Route exact path="/search" render={(props) =>(
                !auth.isAuthenticated() ? (
                  <Redirect to="/"/>
                ) : (
                  <Search auth={auth} {...props} />
                )
              )} />
            </Switch>
            <Route
              path="/callback"
              render={(props) => {
              handleAuthentication(props);
              return <Callback {...props}/>
            }}/>
          </div>
        </Router>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;