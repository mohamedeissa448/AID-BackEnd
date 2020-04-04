const express=require('express');
const Router=express.Router();
var organizationController=require("../controllers/organizationsControllers")
Router.get('getOrganizations',(req,res,next)=>{
    organizationController.getOrganizations(req,res)
})
Router.get('/organization/:id',(req,res,next)=>{
    organizationController.getOrganizationById(req,res)
})
Router.post('addOrganization',(req,res,next)=>{
    organizationController.addOrganization(req,res)
})



module.exports=Router;