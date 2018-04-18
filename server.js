import express from 'express'
import bodyParser from 'body-parser'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import mongoose from 'mongoose'

import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'
import User from './models/user'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nightout"
);


const PORT = 3000

const app = express()

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema, context: { User } })
)

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT)

console.log(`YASS QUEEN ON PORT: ${PORT}`)