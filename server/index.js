const express = require("express")
const app= express()
var cookieParser = require('cookie-parser')
const mongoose =require("mongoose")
const User=require("./models/user.models")
const bcrypt=require("bcrypt")
const cors = require("cors")
const jwt = require("jsonwebtoken")
require("dotenv").config()
app.use(cors({credentials:true,origin:"http://localhost:3000"}))
app.use(express.json())
app.use(cookieParser())
const URI=process.env.URI
let secret=process.env.SECRET
console.log(secret)


mongoose.connect(URI)

app.get("/test",(req,res)=>{
    res.json("test ok")
})
app.post ("/register",async(req,res)=>{
    try {
        
        const{name,email,password}=req.body
        const hashPasswrod=await bcrypt.hash(password,10)
        const passEmail=await User.findOne({email})
        if(!passEmail){
    
            let userDoc=await User.create({
                name,email,password:hashPasswrod
            })
           return res.status(200).json(userDoc)
        
        }else{
            return res.status(202).json({err:"Already registerd"})
        }
    } catch (error) {
       return res.json({error})
    }
    
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body
 
    const userDoc=await User.findOne({email})
    if(userDoc){
        const pass=await bcrypt.compare(password,userDoc.password)
        if(pass){
            jwt.sign({email:userDoc.email,id:userDoc._id,name:userDoc.name},secret,{},(error,token)=>{
                if(error) throw error
                return res.cookie("token",token).status(200).json({id:userDoc._id,name:userDoc.name,email:userDoc.email})
            })
        }else{
           return res.status(202).json("Wrong credentials")
        }
    }else{
        return res.status(404).json("please register your serlf")
    }
    
})
app.post("/profile",(req,res)=>{
    const {token}=req.cookies
    console.log(token)
   return res.json({token})
})
app.get("/profile",(req,res)=>{
    const {token} =req.cookies
    if(token){
        jwt.verify(token,secret,{},(error,user)=>{
            if(error) throw error
          return  res.json(user)
        })
        if(!token){
          return  res.json({msg:"guest user"})
        }
    }
    
})
app.post("/logout",(req,res)=>{
   const {token}=req.cookies
   jwt.verify(token,secret,{},(err,info)=>{
    if(err) throw err
       res.cookie("token","").json({msg:"loggedout succesfully"})
   })
})



app.listen(4000,()=>{
    console.log("running at 4000...")
})