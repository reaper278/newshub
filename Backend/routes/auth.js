const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET ='baburao30lakh'


//ROUTE 1: Creating  a user Using: POST "/api/auth/createuser". No login required

router.post('/createuser',[
   body ('name','Enter valid name').isLength({min:3}),
    body('email','Enter valid email').isEmail(),
    body ('password','password must be atleast 8 characters').isLength({min:8}),
],async(req,res)=>{
//if there are errors, return bad request and the errors.
  console.log(req.body);
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(404).json({ errors: errors.array() });
}
// check weither the user with this email exists already!!

try{
let user = await User.findOne({email: req.body.email});

if(user){
  return res.status(404).json({error: "sorry user with this email already exists"})
}
const salt = await bcrypt.genSalt(10);
const secPass = await bcrypt.hash(req.body.password,salt);
// create a new user
 user =await User.create ({
  name: req.body.name,
  password: secPass,
  email: req.body.email,
});
const data ={
  user:{
    id: user.id

  }
}
const authtoken = jwt.sign(data, JWT_SECRET);


// res.json( user)
res.status(200).json({authtoken})
// catch errors
}catch(error){
  console.log(error.message);
  res.status(500).send("Internal server error");
}

})

//ROUTE 2: Authenticate  a user Using: POST "/api/auth/login". No login required
router.post('/login',[
 
   body('email','Enter valid email').isEmail(),
   body('password','password can not be blank').exists(),
   
],async(req,res)=>{

  //if there are errors, return bad request and the errors.
 
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(404).json({ errors: errors.array() });
}

const {email,password} = req.body;
try {
  let user = await User.findOne({email});
  if(!user){
    return res.status(404).json({error: "please try to login with correct credentials"});
  }
    
const passwordCompare = await bcrypt.compare(password, user.password);
if(!passwordCompare){
  return res.status(404).json({error: "please try to login with correct credentials"});
}

const data ={
  user:{
    id: user.id

  }
}
const authtoken = jwt.sign(data, JWT_SECRET);
res.status(200).json({authtoken})
  
}catch(error){
  console.log(error.message);
  res.status(500).send("Internal server error");
}

})

// ROUTE 3: GET Logged in a user Details Using : POST "/api/auth/getuser".  login required
router.post('/getuser', fetchuser, async(req,res)=>{
try {
 const userId = req.user.id;
  const user = await User.findById(userId).select("-password")
  res.send(user)
}catch(error){
  console.log(error.message);
  res.status(500).send("Internal server error");
}
})

module.exports = router
