import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export default {
  Query: {
    allUsers: async (parent, args, { User }) => {
      const users = await User.find(args)
      return users.map(x => {
        x._id = x._id.toString()
        return x
      })
    },
    getUser: async (parent, args, { User }) => {
      const user = await User.findById(args.id)
      return user
    },
    allItineraries: async (parent, args, { Itinerary }) => {
      const itineraries = await Itinerary.find(args)
      return itineraries.map(x => {
        x._id = x._id.toString()
        return x
      })
    },
    getItinerary: async (parent, args, { Itinerary }) => {
      const itinerary = await Itinerary.findById(args.id)
      return itinerary
    }
  },
  Mutation: {
    createUser: async (parent, args, { User }) => {
      const user = await new User(args).save()
      user._id = user._id.toString()
      return user
    }
  }
}