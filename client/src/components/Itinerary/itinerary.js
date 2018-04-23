/*dependencies*/
import React, {Component} from "react";
import "./itinerary.css";
import { Query } from 'react-apollo'
import { ALL_ITINERARIES } from '../Search/queries'

const Itinerary = () => (
<Query query={ALL_ITINERARIES}>
{({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data)
    console.log(data.allItineraries)
    console.log(data.allItineraries[6].activities)
return data.allItineraries[6].activities.map(({ name, location, url, phone }) => (
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
