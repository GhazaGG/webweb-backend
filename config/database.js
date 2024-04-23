const mongoose = require('mongoose');
const uri = "mongodb+srv://ghazagg7:zbPbj7AJlRzHd0r6@sti202102370.himyzhq.mongodb.net/?retryWrites=true&w=majority&appName=sti202102370";

mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose;
