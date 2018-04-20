import mongoose from 'mongoose'

const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String,
  zip: Number
})

export default User