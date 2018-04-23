import gql from 'graphql-tag'

const GET_ITINERARY = gql`
query getItinerary($_id: String!) {
    getItinerary(_id: $_id) {
            name
            date
            time
            activities {
              name
              location
              url
              phone
        }
    }
}
`

const ALL_ITINERARIES = gql`
query allItineraries {
    allItineraries {
        _id
        name
        date
        time
        activities {
            name
            location
            url
            phone
        }
    }
}
`
const CREATE_ITINERARY = gql`
mutation createItinerary($name: String $date: String $time: String $activities: [RestaurantInput]) {
createItinerary(name: $name date: $date time: $time activities: $activities) {
    name
    date
    time
    activities{
        name
        location
        url
        phone
      }
}
}
`

const GET_YELP_RESULT = gql`query yelpSearch($search: String  $location: String) {
    yelpSearch(search: $search location: $location) {
      _id
      name
      location
      url
      price
      phone
      coordinates
    }
  }
  `

export { GET_ITINERARY, ALL_ITINERARIES, CREATE_ITINERARY,   GET_YELP_RESULT }