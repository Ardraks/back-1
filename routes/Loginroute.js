const Registermodel = require('../model/Register');

const app = require('express').Router()


app.post ('/loginview',  (request, response) => {
    const { email, password } = request.body;
    // console.log(request.body)
    Registermodel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password){
        response.json({ success: true, message: 'Login successful' });
      }
       else {
        response.json({ success: false, message: 'Invalid Password and email' });
      }
    }
    
    })
  })




  module.exports=app
