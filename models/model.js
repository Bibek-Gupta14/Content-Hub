const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    }
})

let user = mongoose.model("User", userSchema);

module.exports = user;