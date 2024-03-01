const express=require("express")
const cors=require("cors")
const db=require("./connection/Database")


const loginrouter=require('./routes/Loginroute')
const registerroutes=require('./routes/registerroutes')
const updaterouter=require('./routes/Updateroute')
const writerouter=require('./routes/Writeroute')



const updatemodel = require('./model/Update')
const loginmodel = require('./model/Login')
const Registermodel = require('./model/Register')
const Writemodel = require('./model/Write')


const  app=new express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());


app.get('/',(request,response)=>{
    response.send("hai")
})

  
 
app.use("/login",loginrouter)
app.use("/register",registerroutes)
app.use("/update",updaterouter)
app.use("/write",writerouter)





app.listen(4007,(request,response)=>{
    console.log("port is running in 4007")
})
