/*dependencies*/
import React from "react";
import "./results.css";

//apollo dependencies
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";




const YelpSearch = () => (
    <Query
      query={gql`
        {
          yelpSearch(search: "sushi" location: "20011") {
            name
            location
            url
            price
            phone
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return data.yelpSearch.map(({ name, location, url, price, phone }) => (
          <div key={name}>
            <h6><a className="x" href={`${url}`} target="_blank">{`${name}`}</a>    {`${price}`}  </h6>
           <p> {`${location}`}</p>
        
      
             <p> {`${phone} `}</p>
           
          </div>
        ));
      }}
    </Query>
  );



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

/* **THIS IS THE LAST LINE OF CODE** */ 
export default YelpSearch;
