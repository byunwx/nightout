/*dependencies*/
import React, {Component} from "react";
import { Query } from 'react-apollo'
import { ALL_ITINERARIES } from '../Search/queries'

const Itinerary = () => (
<Query query={ALL_ITINERARIES}>
{({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return data.allItineraries[2].activities.map(({ name, location, url, phone }) => (
    <div key={url}>
      <h6><a className="x" href={`${url}`} target="_blank">{`${name}`}</a></h6>
     <p> {`${location}`}</p>
       <p> {`${phone} `}</p>
    </div>
  )
)}
}
</Query>
)

/* **THIS IS THE LAST LINE OF CODE** */
export default Itinerary;
