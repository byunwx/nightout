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
  activities: [String]
}

type Query {
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
  ): Itinerary!,
}
type Mutation {
  createUser(
    name: String
    email: String
    password: String
    zip: Int
  ): User!

}
`