import mongoose from 'mongoose';

const Itinerary = mongoose.model('Itinerary', {
    name: String,
    date: String,
    time: String,
    activities: Array,
    userauth: String
})

export default Itinerary;
