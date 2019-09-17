var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
    username: String,
    quantity: String,
    project: String,
    description: String    
})

module.exports = mongoose.model('Order', userSchema)