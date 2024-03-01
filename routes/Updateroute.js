const app = require('express').Router()
const multer = require('multer');

const updatemodel = require('../model/Update');
const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage: storage });
const fs = require('fs');




// Route to fetch user details with specific MongoDB ID
app.get('/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching user details:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  


// Route to update user details with specific MongoDB ID
app.post('/:userId/update', upload.single('profilephoto'), async (req, res) => {
    try {
      const userId = req.params.userId;
      const { username, email, password } = req.body;
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Update user details
      if (username) user.username = username;
      if (email) user.email = email;
      if (password) user.password = password;
      if (req.file) {
        // If profile photo is uploaded, update profile photo path
        if (user.profilephoto) {
          fs.unlinkSync(user.profilephoto);
        }
        user.profilephoto = req.file.path;
      }
  
      // Save updated user data
      const updatedUser = await user.save();
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Error updating user details:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  






//for saving post
app.post('/pnew', upload.single('profilephoto'), async (request, response) => {
    console.log("sdfj")
    console.log(request.file)
        console.log(request.body)
        // // try {
        
                    const { username,email,password } = request.body
                    const newdata = new updatemodel({
                        username,
                        email,
                        password,
                        profilephoto: {
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
    
    
    app.put('/sedit/:id',async(request,response)=>{
        let id = request.params.id
        await updatemodel.findByIdAndUpdate(id,request.body)
        response.send("Record updated")
    })
    
     
    module.exports=app


