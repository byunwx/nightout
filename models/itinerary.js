import mongoose from 'mongoose';

const Itinerary = mongoose.model('Itinerary', {
    name: String,
    date: Date,
    time: String,
    activities: Array
})

export default Itinerary;