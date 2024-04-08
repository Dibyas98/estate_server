const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    usename:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    }

},{timestamps:true});

const userModel = mongoose.model('users',userSchema);
module.exports = userModel;

