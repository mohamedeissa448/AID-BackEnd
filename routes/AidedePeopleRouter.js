const express=require('express');
const Router=express.Router();
var aidedPeopleController=require("../controllers/AidedPeopleController")
Router.get('/getAllAidedPeople',(req,res,next)=>{
    aidedPeopleController.getAllAidedPeople(req,res)
})
Router.get('/getAidedHuman/:id',(req,res,next)=>{
    aidedPeopleController.getAidedHumanById(req,res)
})
Router.post('/addHuman',(req,res,next)=>{
    aidedPeopleController.addHuman(req,res)
})
Router.post('/editHumanById',(req,res,next)=>{
    aidedPeopleController.editHumanById(req,res)
})
Router.post('/deleteHumanById',(req,res,next)=>{
    aidedPeopleController.deleteHumanById(req,res)
})

module.exports=Router