const mongoose=require("mongoose")

let sc=mongoose.Schema;
const userschema=new sc(
    {

        email:String,
        password:String
    }
);
var loginmodel =mongoose.model("login",userschema)
module.exports=loginmodel;
