import React, {Component} from "react";
import { Query, Mutation } from 'react-apollo'
import { ALL_ITINERARIES, GET_ITINERARY } from '../Search/queries'
import ApolloClient from "apollo-boost";
import {REMOVE_ITINERARY} from '../Search/queries'
import {Button} from 'react-materialize'
const client = new ApolloClient();

const updateCache = (cache, { data: { removeItinerary } }) => {
    const { allItineraries } = cache.readQuery({ query: ALL_ITINERARIES })

    cache.writeQuery({
      query: ALL_ITINERARIES,
      data: {
        allItineraries: allItineraries.filter(itineraries => itineraries._id !== removeItinerary._id)
      }
    })
  }

class Home extends Component {
    state = {
        selectedItin: null
    }

    render() {
        return (
            <div>
            <video className="hide-on-med-and-down" autoPlay muted id="homeVideo">
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
                            <p className="title">{`${name}`}</p>
                            <p> {`Date: ${date}`}</p>
                            <p> {`Time: ${time}`}</p>
                            <a className="btn-small" onClick={async () => {
                            const {data} = await client.query({
                            query: GET_ITINERARY,
                            variables: {
                            _id: _id
                            }
                            })
                            this.setState({selectedItin: data.getItinerary})
                            }}>View Details</a>
                            <Mutation mutation={REMOVE_ITINERARY}
                            variables={{_id}}
                            update={updateCache}
                            >
                            {(removeItinerary, error) => (
                                <Button
                                className="btn-large finalize-btn" onClick={async e => {
                                    e.preventDefault()
                                      await removeItinerary({ variables: { _id: _id}})
                                      if (error.error !== undefined) {
                                        console.log(error.error)
                                      }
                                }}>Remove
                                </Button>
                            )}
                            </Mutation>
                            </div>
                        ))}}
                    </Query>
                    </div>
                    <div className="main-content col s12 m7">
                    {this.state.selectedItin ?
                    <div>
                        <h4>{this.state.selectedItin.name}</h4>
                        <p className= "center-align">Date: {this.state.selectedItin.date}
                                {"   "}
                                Time: {this.state.selectedItin.time}</p>
                        {this.state.selectedItin.activities.map(({name, location, url, phone}) => (
                            <div key={url}>
                                <h5>
                                <a className="" href={`${url}`} target="_blank">{`${name}`}</a>
                                        </h5>
                                <div className="row">
                                <p className="col offset-s1">{`${location}`}</p>
                                            <p className="col offset-s1">{`${phone}`}</p>
                                </div>
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
