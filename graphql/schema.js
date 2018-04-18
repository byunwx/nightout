export default `
type User {
  _id: String
  name: String
  email: String
  password: String
  zip: Int
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
  ): User!
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