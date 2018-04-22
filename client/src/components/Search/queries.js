import gql from 'graphql-tag'

const GET_ITINERARY = gql`
query getItinerary($_id: String) {
    getItinerary(_id: $_id) {
        Itinerary
    }
}
`

const ALL_ITINERARIES = gql`
query allItineraries($_id: String) {
    allItineraries(_id: $_id) {
        name
        date
        activities
    }
}
`
const CREATE_ITINERARY = gql`
mutation createItinerary($name: String $activities: [String]) {
createItinerary(name: $name activities: $activities) {
    name
    activities
}
}
`

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

export { GET_ITINERARY, ALL_ITINERARIES, CREATE_ITINERARY,   GET_YELP_RESULT }