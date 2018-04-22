//Import React
import React, {Component} from 'react';
// import { Render } from 'react-dom';
import './App.css';
/*import components*/
import Home from './components/UserHome/userHome';
import Navbar from './components/Navbar/navbar';
import Search from './components/Search/search';
import landing from './components/Landing/landing';

// import react router deps
import {Router, Route, Switch} from 'react-router-dom';
// import { Provider } from 'react-redux'; import store, { history } from
// './store';

import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

// Apollo Client Config
// import ApolloClient from "apollo-boost";
// import gql from "graphql-tag";
// import { ApolloProvider } from "react-apollo";
// import { Query } from "react-apollo";

// const YelpSearch = () => (
//   <Query
//     query={gql`
//       {
//         yelpSearch(search: "sushi" location: "20011") {
//           name
//           location
//           url
//           price
//           phone
//         }
//       }
//     `}
//   >
//     {({ loading, error, data }) => {
//       if (loading) return <p>Loading...</p>;
//       if (error) return <p>Error :(</p>;
//       return data.yelpSearch.map(({ name, location, url, price, phone }) => (
//         <div key={name}>
//           <p>{`${name}
//           ${location}
//           ${url}
//           ${price}
//           ${phone}
//           `}</p>
//         </div>
//       ));
//     }}
//   </Query>
// );

//auth0 stuff
const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}
//autho0 handler

// const client = new ApolloClient();
// client
//   .query({
//     query: gql`
//       {
//         yelpSearch(search: "sushi" location: "20011") {
//           name
//           location
//           price
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));


class App extends Component {
  render() {
    return (
      <div>

     
        <Router history={history}>
          <div>
          <Route exact path="/" component={landing}/>
            <Route
              path="/home"
              render={(props) =>< Navbar auth = {
              auth
            }
            {
              ...props
            } />}/>
     
            {/* <ApolloProvider client={client}>
            <YelpSearch/>
            </ApolloProvider> */}
            <Switch>
              <Route exact path="/home" component={Home}/>
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
    );
  }
}

// class App extends Component {   render() {     return (       <div
// className="App">         <div className="App-header">           {/* <img
// src={logo} className="App-logo" alt="logo" /> */}           <h2>Welcome to
// React</h2>         </div>         <p className="App-intro">           To get
// started, edit <code>src/App.js</code> and save to reload.         </p> </div>
//     );   } }

export default App;
