const mongoose =require("mongoose")
const {Schema}=mongoose

const UserSchema=new Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String,unique:true,trim:true,required:true},
    password:{type:String,trim:true,required:true}
})
const UserModel=mongoose.model("User",UserSchema)
module.exports=UserModel