const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post",
        required:[true,"post id required"]
    },
    user:String
},{timestamps:true})

likeSchema.index({postId:1,user:1},{unique:true});

const likeModel = mongoose.model("like",likeSchema);

module.exports = likeModel;



