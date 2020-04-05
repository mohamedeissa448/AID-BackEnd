const express=require('express');
const Router=express.Router();
var aidedPeopleController=require("../controllers/AidedPeopleController")
Router.get('/getAidedPeople',(req,res,next)=>{
    aidedPeopleController.getAidedPeople(req,res)
})
Router.get('/getAidedHuman/:id',(req,res,next)=>{
    aidedPeopleController.getAidedHumanById(req,res)
})
Router.post('/addAidedHuman',(req,res,next)=>{
    aidedPeopleController.addAidedHuman(req,res)
})



module.exports=Router