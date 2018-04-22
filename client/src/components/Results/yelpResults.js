/*dependencies*/
import React from "react";
import "./results.css";

//apollo dependencies
import gql from "graphql-tag";
import { Query } from "react-apollo"
import {GET_YELP_RESULT} from '../Search/queries'

const YelpSearch = (search, location) => (
    <Query
      query={GET_YELP_RESULT} variables={{ search, location }}
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
  )

/* **THIS IS THE LAST LINE OF CODE** */
export default YelpSearch;