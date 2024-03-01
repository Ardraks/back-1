// const { request, response } = require('express');

const app = require('express').Router()
const multer = require('multer');
const Writemodel = require('../model/Write');
const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage: storage });






app.get('/writeview',async(request,response)=>{
    var data = await Writemodel.find();
    response.send(data)
  })





//for saving post
app.post('/writesnew', upload.single('image'), async (request, response) => {
console.log("sdfj")
console.log(request.file)
    // console.log(request.body)
    // // try {
    
                const { title,desc } = request.body
                const newdata = new Writemodel({
                    title,
                    desc,
                    image: {
                        data: request.file.buffer,
                        contentType: request.file.mimetype,
                    }
                })
                await newdata.save();
                response.status(200).json({ message: ' successfully' });
        // }
    // catch (error) 
    // {
    //             response.status(500).json({ error: 'Internal Server Error' });
    // }

})


    // 
    app.get('/writesview',async(request,response)=>{
        var data=await Writemodel.find();
        response.send(data)
      })



module.exports=app
