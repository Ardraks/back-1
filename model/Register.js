const mongoose=require("mongoose")

let sc=mongoose.Schema;
const Registerschema=new sc(
    {
        username:String,
        email:String,
        password:String,
    
    }
);
var Registermodel =mongoose.model("register",Registerschema)
module.exports=Registermodel;
