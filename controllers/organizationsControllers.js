var OrganizationModel=require('../models/organizationModel')
module.exports={
    addOrganization:(req,res)=>{
        console.log("req.body",req.body)
        const newOrganization=new OrganizationModel({
            Name:req.body.Name,
            Location: req.body.Location,
            userName:req.body.userName,
            password:req.body.password,
        })
        newOrganization.save(function(error, doneadd) {
            if (error) {
              return res.send({
                message: error
              });
            } else {
              return res.send({
                message: true
              });
            }
          })
    },
    getOrganizations:(req,res)=>{
        OrganizationModel.find({})
          .exec(function(err, organizations) {
            if (err) {
              return res.send({
                message: err
              });
            } else if (organizations) {
              console.log(organizations);
              res.send(organizations);
            } else {
              res.send("no organizations");
            }
          });
    },
    getOrganizationById:(req,res)=>{
        
    },
    editOrganizationById:(req,res)=>{
        var newvalues = {
            $set: {
                Name: req.body.Name,
                Location: req.body.Location,
                userName: req.body.userName,
                password: req.body.password,
            }
          };
          var myquery = { _id: req.params.id };
          User.findOneAndUpdate(myquery, newvalues, { new: true }, function(
            err,
            newOrganization
          ) {
            if (err) {
              res.send({ message: false });
            } else if (newOrganization) {
                
              res.send({ message: true });
            } else {
              res.send({ message: "user does not Exist" });
            }
          });
    }
}