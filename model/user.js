const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const NinjaSchema = new Schema
({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    password:{
        type:String,
        required: [true, 'password field is required']
    },
    gender:{
        type:String
    }
    // add in geo location
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;


