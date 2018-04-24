import React, {Component} from "react";
import { Query } from 'react-apollo'
import { ALL_ITINERARIES, GET_ITINERARY } from '../Search/queries'
import ApolloClient from "apollo-boost";
import Itinerary from '../Itinerary/itinerary';
const client = new ApolloClient();
class Home extends Component {
    state = {
        selectedItin: null
    }

    render() {
        return (
            <div>
            <video autoPlay muted id="homeVideo">
                    <source src='http://www.coverr.co/s3/mp4/Broadway.mp4'
                        type="video/mp4" />
                    </video>
                {/*  Left Column
                    tabs: upcoming | Planning | Past
                    Render array of itins*/}
                <div className="center-align">
                    <button className=" search-btn waves-effect waves-light">
                        <a href="/search"  >
                            Plan Your Next Date
                        </a>
                    </button>
                </div>
                <div className="row container content">
                    <div className="sidebar col s12 m3 offset-m1">
                    <Query query={ALL_ITINERARIES}>
                        {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;
                        return data.allItineraries.map(({ _id, name, date, time }) => (
                            <div key={_id}>
                            <h6>{`${name}`}</h6>
                            <p> {`Date: ${date}`}</p>
                            <p> {`Time: ${time}`}</p>
                            <a className="btn" onClick={async () => {
                            const {data} = await client.query({
                            query: GET_ITINERARY,
                            variables: {
                            _id: _id
                            }
                            })
                            this.setState({selectedItin: data.getItinerary})
                            }}>View Details</a>
                            </div>
                        ))}}
                    </Query>
                    </div>
                    <div className="main-content col s12 m7">
                    {this.state.selectedItin ?
                    <div>
                        <h2>Name: {this.state.selectedItin.name}</h2>
                        <p>Date: {this.state.selectedItin.date}</p>
                        <p>Time: {this.state.selectedItin.time}</p>
                        {this.state.selectedItin.activities.map(({name, location, url, phone}) => (
                            <div key={url}>
                                <h6>
                                <a className="x" href={`${url}`} target="_blank">{`${name}`}</a>
                                </h6>
                                <p>{`${location}`}</p>
                                <p>{`${phone}`}</p>
                            </div>))}
                    </div>
                    : <p>Select an Itinerary for more details</p>}
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;
