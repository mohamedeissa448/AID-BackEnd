const express=require('express');
const Router=express.Router();
var filesController=require("../controllers/filesController")

Router.post('/upload',(req,res,next)=>{
    filesController.uploadFile(req,res)
})



module.exports=Router;