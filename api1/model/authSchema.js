const mongoose = require("mongoose")

const authSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        unique:true,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("users",authSchema);