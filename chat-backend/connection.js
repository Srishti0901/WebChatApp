const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/ChatApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log("Error:", err));
mongoose.set('strictQuery', true);