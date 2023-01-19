const mongoose = require("mongoose")

const connection = () => {
    mongoose.connect("mongodb://localhost:27017/DataScraping", { useNewUrlParser: true, useUnifiedTopology: true })
        .then((res) => console.log("Database connection successfully"))
        .catch((err) => console.log(err.message))
}

module.exports = connection;