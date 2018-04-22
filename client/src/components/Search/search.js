/*dependencies*/
import React, {Component} from "react";
// import SearchRouter from "./Routers/SearchRouter.js" Import Components
import SbMeal from '../sbMeal/sbMeal';
import SbLocation from '../sbLocation/sbLocation';
import SbEvent from '../sbEvent/sbEvent';
import Itinerary from '../Itinerary/itinerary';
import "./search.css";
import MapView from '../mapView/mapView';
import YelpSearch from '../Results/yelpResults';
import client from '../Results/client';
import Input from './input'
import Btn from './btn'

//Import Apollo
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import {ApolloProvider, ApolloConsumer} from "react-apollo";
import {Query} from "react-apollo";
const GET_YELP_RESULT = gql`query yelpSearch($search: String  $location: String) {
  yelpSearch(search: $search location: $location) {
    name
    location
    url
    price
    phone
  }
}
`
//Right Column Map Itinerary preview yarn install react-mdl for tabs

class Search extends Component {
  state = {
    yelpSearch: null,
    search: '',
    location: ''
  }

  onYelpFetched = x => this.setState({yelpSearch: x})

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
                            <ApolloProvider client={client}>
                            <ApolloConsumer>
                            {client=>(
                              <div className='btn' onClick={
                                async () => {
                                const { data } = await client.query({
                                  query: GET_YELP_RESULT,
                                  variables: {search:this.state.search, location:this.state.location}
                                })
                                console.log(data.yelpSearch)
                                this.onYelpFetched(data.yelpSearch)
                              }}>
                              Search
                              </div>
                            )}
                            </ApolloConsumer>
                            </ApolloProvider>
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
{this.state.yelpSearch ? this.state.yelpSearch.map(({ name, location, url, price, phone }) => (
  <div key={name}>
    <h6><a className="x" href={`${url}`} target="_blank">{`${name}`}</a>    {`${price}`}  </h6>
   <p> {`${location}`}</p>
     <p> {`${phone} `}</p>
  </div>
)) : ''}
                        </div>
                    </div>
                    <div className="col m7 offset-m1">
                        <div className="row">
                            <MapView />
                        </div>
                    </div>
                </div>
                <div className="row">
                            <Itinerary />
                        </div>
            </div>
        )
    }
};

 //** THIS IS THE LAST LINE OF CODE **
export default Search;