'use strict'

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

/*
Add Schema and Middleware here
 */
var JokeSchema = new Schema({
    joke: { type: String, required: true, minlength: 5},
    category: { type: Array },
    reference: {
        author: String,
        link: String
    },
    lastEdited: { type: Date, default: Date.now }
});

// Custom schema validator
// same as minlength

// JokeSchema.path('joke').validate(function (v) {
//     return v.length >= 5;
// }, 'Joke must be at least 5 charachers long.');

JokeSchema.pre('save', function (next) {
    var currentDate = new Date();

    // update lastEdited to current date
    this.lastEdited = currentDate;

    // if lastEdited doesn't exist, add to that field
    if (!this.lastEdited)
        this.lastEdited = currentDate;

    next();
})


let JokeModel = mongoose.model("Joke", JokeSchema);
module.exports = JokeModel;


