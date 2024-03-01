const mongoose=require("mongoose")

let sc=mongoose.Schema;
const updateschema=new sc(
    {
        
        
        username:String,
        email:String,
        password:String,
        profilephoto:{
            data : Buffer,
            contentType : String,
        }
        
    }
);
var updatemodel =mongoose.model("update",updateschema)
module.exports=updatemodel;
