const express=require("express");
const mongoose=require("mongoose");
const app= express();
mongoose.connect("mongodb://localhost:27017/lab",{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  family:4
})
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log(Error);
})
const logindesgin=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        required:true
    }, 
    Phone:{
        type:Number,
        required:true
    },
    DateofBirth:{
        type:String,
        required:true
    }

});
const collection = new mongoose.model("siginin",logindesgin);
module.exports=collection;