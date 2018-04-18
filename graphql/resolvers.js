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