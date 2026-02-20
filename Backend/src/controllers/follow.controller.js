const mongoose = require("mongoose");
const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followUserController(req, res){
    const followerUsername = req.user.username;
    const followeeUsername = req.params.username;

    if(followerUsername === followeeUsername){
        return res.status(400).json({
            message:"you cannot follow yourself"
        })
    }

    const isFolloweeExists = await userModel.findOne({
        username:followeeUsername
    })

    if(!isFolloweeExists){
        return res.status(404).json({
            message:"user did not exist"
        })
    }

    const isAlreadyFollow = await followModel.findOne({
        follower:followerUsername,
        followee:followeeUsername
    })

    if(isAlreadyFollow){
        return res.status(409).json({
            message:`you already follow ${followeeUsername}`,
            follow:isAlreadyFollow
        })
    }

    const followRecord = await followModel.create({
        follower:followerUsername,
        followee:followeeUsername,
    })

    res.status(201).json({
        message:"user followed Successfully",
        followRecord
    })
}

async function unfollowUserController(req, res){
    const followerUsername = req.user.username;
    const followeeUsername = req.params.username;

    const unfollowUser = await followModel.findOneAndDelete({
        follower:followerUsername,
        followee:followeeUsername
    })

    res.status(200).json({
        message:`You unfollowed ${followeeUsername}`
    })
    
}

async function updateFollowStatus(req, res){
    const followRequest = req.params.requestId;
    const followeeUsername = req.user.username;
    const {action} = req.body;

    if(!mongoose.Types.ObjectId.isValid(followRequest)){
        return res.status(400).json({
            message:"Invalid Request"
        })
    }

    const requestData = await followModel.findById(followRequest)

    if(!requestData){
        return res.status(404).json({
            message:"Invalid Request"
        })
    }

    if(requestData.followee !==  followeeUsername){
        return res.status(403).json({
            message:"you are not autharized for this request"
        })
    }

    if(requestData.status !== "pending"){
        return res.status(409).json({
            message:"Request already processed",
            requestData
        })
    }

    const allowed = ["accept","reject"];

    if(!allowed.includes(action)){
        return res.status(400).json({
            message:"Invalid Status"
        })
    }

    const userRequest = await followModel.findByIdAndUpdate(followRequest,{
        status:action === "accept" ? "accecpted":"rejected"
    },{new:true})

    res.status(200).json({
        message:`user ${userRequest.status} your request`,
        userRequest
    })
    
}


module.exports = {
    followUserController,
    unfollowUserController,
    updateFollowStatus
}