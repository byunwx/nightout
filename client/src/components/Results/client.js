/*dependencies*/
import React, {Component} from "react";

//import component
import YelpSearch from '../Results/yelpResults';

//Import Apollo 
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";

  const client = new ApolloClient();
  client
    .query({
      query: gql`
        {
          yelpSearch(search: "sushi" location: "20011") {
            name
            location
            price
          }
        }
      `
    })
      .then(result => console.log(result));
    
export default client;