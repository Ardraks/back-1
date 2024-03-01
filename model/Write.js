const mongoose=require("mongoose")

let sc=mongoose.Schema;
const Writeschema=new sc(
    {
       title:String,
        desc:String,
        image:{
            data : Buffer,
            contentType : String,
        }

    
    }
);
var Writemodel =mongoose.model("write",Writeschema)
module.exports=Writemodel;