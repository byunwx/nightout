/*dependencies*/
import React, {Component} from "react";
import MapView from '../mapView/mapView';
import Input from './input'
import { ApolloConsumer } from "react-apollo";
import {GET_YELP_RESULT, CREATE_ITINERARY, ALL_ITINERARIES} from './queries'
import {Modal, Button} from 'react-materialize'
import {Mutation} from 'react-apollo'

class Search extends Component {
  state = {
    yelpSearch: null,
    search: '',
    location: '',
    name: '',
    date: '',
    time: '',
    currentItinerary: [],
    itineraries: []
  }

  onYelpFetched = x => this.setState({ yelpSearch: x })

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
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
        <div className="row">
          <div className="sidebar col s12 m3 offset-m1">
            <div className="row">
            <h2>Search</h2>
              {/* <p>Search tabs router goes here</p> */}
              <form>
                <Input className="main-content"
                  onChange={this.handleInputChange}
                  name="search"
                  placeholder="Search term"/>
                <Input
                  onChange={this.handleInputChange}
                  name="location"
                  placeholder="Location (Zip, Address, City"/>
                  <ApolloConsumer>
                    {client => (
                      <div
                        className='btn hoverable'
                        onClick={async() => {
                        const {data} = await client.query({
                          query: GET_YELP_RESULT,
                          variables: {
                            search: this.state.search,
                            location: this.state.location
                          }
                        })
                        this.onYelpFetched(data.yelpSearch)
                      }}>
                        Search
                      </div>
                    )}
                  </ApolloConsumer>
              </form>
              {/* < SbLocation/>
                            < SbMeal/>
                            < SbEvent/>  <Tabs className="tabs">
                            <Tab className="tabs">
                              Location
                            </Tab>
                            <Tab className="tabs">
                                Event
                            </Tab>
                            <Tab className="tabs">
                                Restaurant or Food
                            </Tab>
                        </Tabs>*/}
            </div>
              {this.state.yelpSearch
                ?
                this
                  .state
                  .yelpSearch
                  .map(({name, location, url, price, phone, coordinates}) => (
                    <div key={url}>
                      <h6>
                        <a className="x" href={`${url}`} target="_blank">{`${name}`}</a>
                        {` ${price}`}
                      </h6>
                      <p>{`${location}`}</p>
                      <p>{`${phone}`}</p>
                      <div className='btn hoverable' onClick={async ()=>{
                        const itinItem = {
                          name: name,
                          location: location,
                          url: url,
                          price: price,
                          phone: phone,
                          coordinates: coordinates
                        }
                        await this.setState({currentItinerary: [...this.state.currentItinerary, itinItem]})
                      }}>Add to Itinerary</div>
                    </div>
                  ))
                : <p>Results will appear here after you hit search!</p>}
            </div>
          <div className="main-content col s12 m3">
            <h2>Itinerary</h2>
            {this.state.currentItinerary.length > 0 ? this.state.currentItinerary.map(({name, location, url, phone}, i) => (
                    <div key={url}>
                      <h6>
                        <a className="x" href={`${url}`} target="_blank">{`${name}`}</a>
                      </h6>
                      <p>{`${location}`}</p>
                      <p>{`${phone}`}</p>
                      <div className='btn' onClick={async ()=>{
                        await this.setState((prevState) => ({
                          currentItinerary: prevState.currentItinerary.filter((_, j) => j !== i)
                        }))
                      }}>Remove from Itinerary</div>
                    </div>
            )) : <p>Your Current Itinerary will appear here once you`ve added something to it</p>}
            {this.state.currentItinerary.length > 0 ?
            <Modal
              header='Review Itinerary'
              trigger={<Button className="btn-small finalize-btn">Finalize Itinerary</Button>}
              >
              <Input
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name your Itinerary"/>
              <Input
               onChange={this.handleInputChange}
               name="date"
               type="date"
               placeholder=""/>
              <Input
                onChange={this.handleInputChange}
                name="time"
                type="time"
                placeholder=""/>
              {this.state.currentItinerary.map(({name, location, url, phone}, i) => (
                <div key={url}>
                  <h6>
                    <a className="result-name" href={`${url}`} target="_blank">{`${name}`}</a>
                  </h6>
                  <p className="result-body">{`${location}`}</p>
                  <p className="result-body">{`${phone}`}</p>
                  <div className='btn' onClick={async ()=>{
                        await this.setState((prevState) => ({
                          currentItinerary: prevState.currentItinerary.filter((_, j) => j !== i)
                        }))
                      }}>
                      Remove from Itinerary
                  </div>
                </div>
              ))}
            <Mutation mutation={CREATE_ITINERARY} update={this.updateCache}>
            {createItinerary => (
            <div
              className="btn-large finalize-btn" onClick={async e => {
                e.preventDefault()
                console.log(this.state.currentItinerary)
                 await createItinerary({ variables: { name: this.state.name, date: this.state.date, time: this.state.time, activities: this.state.currentItinerary } })
              }}>
              Add to my Itineraries
            </div>
            )}
            </Mutation>
            </Modal>
            : ''}
            </div>
            {/* end of Itinerary code */}
            <div className="main-content col s12 m3">
            <h2>Map</h2>
            <MapView/>
          </div>
        </div>
      </div>
    )
  }
};

//** THIS IS THE LAST LINE OF CODE **
export default Search;