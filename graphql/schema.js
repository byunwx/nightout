export default `
type User {
  _id: String
  name: String
  email: String
  password: String
  zip: Int
}
type Itinerary {
  _id: String
  name: String
  date: String
  time: String
  activities: [Restaurant]
}
type Activity {
  name: String
  info: String
  eventLocation: String
  url: String
  startDate: String
  seatMap: String
}
type Restaurant {
  _id: Int
  name: String
  location: String
  url: String
  price: String
  phone: String
  coordinates: [Float]
}
input RestaurantInput {
    _id: Int
    name: String
    location: String
    url: String
    price: String
    phone: String
    coordinates: [Float]
}
type Query {
  yelpSearch(
    search: String
    location: String
  ): [Restaurant]
  eventSearch(
    search: String
    zip: String
  ): [Activity]
  allUsers(
  _id: String
  ): [User!]!,
  getUser(
    _id: String!
  ): User!,
  allItineraries: [Itinerary],
  getItinerary(
    _id: String!
  ): Itinerary!
}

type Mutation {
  createUser(
    name: String
    email: String
    password: String
    zip: Int
  ): User!,
  createItinerary(
    name: String
    date: String
    time: String
    activities: [RestaurantInput]
  ): Itinerary
}
`