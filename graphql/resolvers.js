import axios from 'axios'

export default {
  Query : {
    allUsers: async(root, args, {User}) => {
      const users = await User.find(args)
      return users.map(x => {
        x._id = x
          ._id
          .toString()
        return x
      })
    },
    getUser: async(root, args, {User}) => {
      const user = await User.findById(args.id)
      return user
    },
    allItineraries: async(root, args, {Itinerary}) => {
      const itineraries = await Itinerary.find(args)
      return itineraries.map(x => {
        x._id = x
          ._id
          .toString()
        return x
      })
    },
    getItinerary: async(root, args, {Itinerary}) => {
      const itinerary = await Itinerary.findById(args.id)
      return itinerary
    },
    yelpSearch: async(root, args) => {
      const searchObj = {
        method: 'GET',
        url: `https://api.yelp.com/v3/businesses/search?term=${args.search}&location=${args.location}`,
        headers: {
          'Authorization': 'Bearer pXXnRa6C4iBeCevtqx0sY-fy-foonaKcKeRRLC9mjb2iDcyBAS8atAR2FDRzgYgewOFlqMout' +
              'S50Vwhgax964JKjJN7VwLYY9_GSsoEjiqxIwFskAP5hSQTJ2H-cWnYx'
        },
        json: true
      }
      const results = await axios(searchObj)
      const restaurants = await results.data.businesses
      return restaurants.map(x => {
        if (x.location.display_address.length === 2) {
          x.location = x
            .location
            .display_address[0]
            .concat(x.location.display_address[1])
        } else if (x.location.display_address.length === 3) {
          x.location = x
            .location
            .display_address[0]
            .concat(x.location.display_address[1])
            .concat(x.location.display_address[2])
        }
        x.coordinates = [x.coordinates.latitude, x.coordinates.longitude]
        x.phone = x.display_phone
        return x
      })
    }
  },
  Mutation : {
    createUser: async(root, args, {User}) => {
      const user = await new User(args).save()
      user._id = user
        ._id
        .toString()
      return user
    },
    createItinerary: async(root, args, {Itinerary}) => {
      const itinerary = await new Itinerary(args).save()
      itinerary._id = itinerary
        ._id
        .toString()
      return itinerary
    }
  }
}