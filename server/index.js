const express = require("express")
const app= express()
const mongoose =require("mongoose")
const User=require("./models/user.models")
const bcrypt=require("bcrypt")
const cors = require("cors")
require("dotenv").config()
app.use(cors({credentials:true,origin:"http://localhost:3000"}))
app.use(express.json())
const URI=process.env.URI


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
            return res.status(403).json({err:"Already registerd"})
        }
    } catch (error) {
       return res.json({error})
    }
    
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    console.log(email)
    const userDoc=await User.findOne({email})
    if(userDoc){
        const pass=await bcrypt.compare(password,userDoc.password)
        if(pass){
           return res.status(200).json("ok")
        }else{
           return res.status(202).json("Wrong credentials")
        }
    }else{
        return res.status(404).json("nothing")
    }
    
})


app.listen(4000,()=>{
    console.log("running at 4000...")
})