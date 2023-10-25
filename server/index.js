const express = require("express")
const app= express()
const mongoose =require("mongoose")
const User=require("./models/user.models")
const cors = require("cors")
require("dotenv").config()
app.use(cors({credentials:true,origin:"http://localhost:3000"}))
app.use(express.json())
const URI=process.env.URI


mongoose.connect(URI)

app.get("/test",(req,res)=>{
    res.json("test ok")
})
app.post ("/register",(req,res)=>{
    const{name,email,password}=req.body
    User.create({
        name,email,password
    })
    res.json({name,email,password})
})


app.listen(4000,()=>{
    console.log("running at 4000...")
})