const mongoose = require("mongoose");
// const autoincrement =require("mongoose-auto-increment")

// how our documents look like
const userSchema = mongoose.Schema({
    // name:String,
    // username:String,
    // email:String,
    // phone:Number
    name: String,
    address: String,
    gender: String
})

// autoincrement.initialize(mongoose.Connection);
// userSchema.plugin(autoincrement.plugin, "User")
const postUser = mongoose.model('scrub', userSchema);

module.exports = postUser;