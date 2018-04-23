/*dependencies*/
import React, {Component} from "react";
import "./search.css";
import MapView from '../mapView/mapView';
import Input from './input'
import { ApolloConsumer } from "react-apollo";
import {GET_YELP_RESULT} from './queries'
import {Modal, Button} from 'react-materialize'
import createItinerary from './itineraryMutation'
//Right Column Map Itinerary preview yarn install react-mdl for tabs

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
  onItineraryCreated = x => this.setState({ itineraries: [...this.state.itineraries, x] })

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div>
        {/*  Left Column
                        tabs: upcoming | Planning | Past
                        Render array of itins*/}
        <div className="row">
          <div className="col m3 offset-m1">
            <div className="row">
            <h2>Search</h2>
              <p>Search tabs router goes here</p>
              <form>
                <Input
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
                  .map(({name, location, url, price, phone}) => (
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
                          phone: phone
                        }
                        await this.setState({currentItinerary: [...this.state.currentItinerary, itinItem]})
                      }}>Add to Itinerary</div>
                    </div>
                  ))
                : 'Results will appear here after you hit search!'}
            </div>
          <div className="col m3 offset-m1">
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
            )) : 'Your Current Itinerary will appear here once you`ve added something to it'}
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
                    <a className="x" href={`${url}`} target="_blank">{`${name}`}</a>
                  </h6>
                  <p>{`${location}`}</p>
                  <p>{`${phone}`}</p>
                  <div className='btn' onClick={async ()=>{
                        await this.setState((prevState) => ({
                          currentItinerary: prevState.currentItinerary.filter((_, j) => j !== i)
                        }))
                      }}>
                      Remove from Itinerary
                  </div>
                </div>
              ))}
            <div
              className="btn-large finalize-btn"
              onClick={()=>(
               <createItinerary
               name={this.state.name}
               date={this.state.date}
               time={this.state.time}
               activities={this.state.currentItinerary}
               />
              )
              }>
              Add to my Itineraries
            </div>
            </Modal> : ''}
            </div>
            {/* end of Itinerary code */}
            <div className="col m3 offset-m1">
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