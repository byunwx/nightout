/*dependencies*/
import React, {Component} from "react";
// import SearchRouter from "./Routers/SearchRouter.js" Import Components
import SbMeal from '../sbMeal/sbMeal';
import SbLocation from '../sbLocation/sbLocation';
import SbEvent from '../sbEvent/sbEvent';
import Btn from './btn';
import Input from './input.js';
import Itinerary from '../Itinerary/itinerary';
import "./search.css";
import MapView from '../mapView/mapView';
//Import Apollo
import gql from "graphql-tag";
import {Query} from 'react-apollo'
import { ApolloProvider } from "react-apollo";
import client from '../Routers/client';
// import YelpSearch from '../Results/yelpResults'

//Right Column Map Itinerary preview yarn install react-mdl for tabs
const GET_YELP_RESULT = gql `
query yelpSearch($search: String  $location: String) {
  yelpSearch(search: $search location: $location) {
    name
    location
    url
    price
    phone
  }
}
`

class Search extends Component {
  state = {
    results: [],
    search: '',
    location: '',
    searched: false
  }

  // componentDidMount(){     this.renderResults() } renderResults = () =>{
  // this.state.results.map(x=>()) }


  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search && this.state.location) {
        this.setState({searched: true})
    }
  }

  render() {
    return (
      <div>
        {/*  Left Column
                        tabs: upcoming | Planning | Past
                        Render array of itins*/}
        <div className="row">
          <div className=" col m3 offset-m1">
            <div className="row">
              <p>
                Search tabs router goes here
              </p>
              <form>
                <Input
                  onChange={this.handleInputChange}
                  name="search"
                  placeholder="Search term"/>
                <Input
                  onChange={this.handleInputChange}
                  name="location"
                  placeholder="Location (Zip, Address, City"/>
                <Btn onClick={this.handleFormSubmit}>Search</Btn>
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
            <div className="row">
            {this.state.searched ? <Query query={GET_YELP_RESULT} search={this.state.search} location={this.state.location}>
            {({loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return data.yelpSearch.map(({name, location, url, price, phone}) => (
            <div key={name}>
            <h6>
            <a className="x" href={`${url}`} target="_blank">{`${name}`}</a>
            {`${price}`}
            </h6>
            <p>
            {`${location}`}</p>
            <p>
            {`${phone} `}</p>
            </div>
        ))
            }}
            </Query> : ''}
            </div>
          </div>
          <div className="col m7 offset-m1">
            <div className="row">
              <MapView/>
            </div>
          </div>
        </div>
        <div className="row">
          <Itinerary/>
        </div>
      </div>
    )
  }
};

//** THIS IS THE LAST LINE OF CODE **
export default Search;