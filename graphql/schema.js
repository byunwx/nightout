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
  activities: [Activity]
}
type Activity {
  name: String
  location: String
  url: String
}
type Restaurant {
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
  allUsers(
    name: String
    email: String
    password: String
    zip: Int
  ): [User!]!,
  getUser(
    id: String!
  ): User!,
  allItineraries(
    name: String
    date: String
    time: String
    activities: [String]
  ): [Itinerary]!,
  getItinerary(
    id: String!
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
    activities: [String]
  ): Itinerary!,
}
`