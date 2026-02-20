const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true, "username already exists"],
        required:true
    },
    email:{
        type:String,
        unique:[true, "email already exists"],
        required:true
    },
    password:{
        type:String,
        required:true
    },
    bio:String,
    profile_pic:{
        type:String,
        default:"https://ik.imagekit.io/ngap1v1ph/profile.webp"
    }
})

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;