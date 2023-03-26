const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect('mongodb+srv://AtlasS:AtlasS123@cluster0.fnvbswe.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log("Error:", err));
mongoose.set('strictQuery', true);
