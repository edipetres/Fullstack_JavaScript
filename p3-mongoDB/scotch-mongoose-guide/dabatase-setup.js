/**
 * Created by eddmond on 16/03/2017.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/classdemo');
var schema = mongoose.Schema;


var userSchema = new Schema({
    name: String,
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    admin: Boolean,
    location: String,
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
});

var User = mongoose.model('User', userSchema);

module.exports = User;