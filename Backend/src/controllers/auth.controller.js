const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function userRegisterController(req, res){
    const {username, email, password, bio, profile_pic} = req.body;

    const isUserExists = await userModel.findOne({
        $or:[
            {
                username
            },
            {
                email
            }
        ]
    })

    if(isUserExists){
        return res.status(409).json({
            message:"user exists with this data"
        })
    }

    const hash = await bcrypt.hash(password,10);

    const user = await userModel.create({
        username, email, password:hash, bio, profile_pic
    })


    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,{expiresIn:"1h"})

    res.cookie("token",token);

    res.status(201).json({
        message:"User Registered Successfully.",
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profile_pic:user.profile_pic
        }
    })

}

async function userLoginController(req, res){
    const {username, email, password} = req.body;

    const user = await userModel.findOne({
        $or:[
            {
                username
            },
            {
                email
            }
        ]
    })

    if(!user){
        return res.status(404).json({
            message:"User Not Found"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.status(401).json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign({
        id:user._id,
        username:user.username
    }, process.env.JWT_SECRET,{expiresIn: "1d"})

    res.cookie("token",token)

    res.status(200).json({
        message:"User Logged In Successfully",
        user:{
            username:user.username,
            email:user.email
        }
    })
}

module.exports = {
    userRegisterController,
    userLoginController
}