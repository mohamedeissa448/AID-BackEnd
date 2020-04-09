const express=require('express');
const Router=express.Router();
var servicesController=require("../controllers/servicesController")
Router.post('/getServicesForAidedHuman',(req,res,next)=>{
    servicesController.getServicesForAidedHuman(req,res)
})

module.exports=Router;