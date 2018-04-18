import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({title: String, author: String});

export default mongoose.model('Book', BookSchema);