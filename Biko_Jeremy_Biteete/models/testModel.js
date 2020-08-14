const mongoose = require('mongoose');

const testModel = new mongoose.Schema({
    surname:{
        type: String,
        trim: true
    },
    givenName:{
        type: String,
        trim: true
    },
    dob:{
        type: Date,
        trim: true
    },
    por:{
        type: String,
        trim: true
    },
    occupation:{
        type: String,
        trim: true
    },
    nationality:{
        type: String,
        trim: true
    },
    gender:{
        type:String,
        trim: true
    },
    category:{
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('tests', testModel);