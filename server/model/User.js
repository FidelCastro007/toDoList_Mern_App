const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:{
        type: Number,
        unique: true,
        required: true
    },
    checked:{
        type:Boolean,
        default: false
    },
    item:{
        type: String,
        required: true  
    }
})

module.exports = mongoose.model('userdatas',userSchema)