var AidedHuman=require("../models/aidedHumanModel")
module.exports={
    addHuman:(req,res)=>{
        const newHuman=new AidedHuman({
            "اسم الام وشهرتها":req.body["اسم الام وشهرتها"],
            "اسم الاب":req.body["اسم الاب"],
            "الشهره":req.body["الشهره"],
            "الأسم":req.body["الأسم"],
        });
        newHuman.save((err,document)=>{
            if (err) {
                res.send({ message: false });
              } else if (document) {
                res.status(201).send({ message: true });     
              } else {
                res.stats(422).send({ message: "couldnot create a human" });
              }
        })
       
    },
    getAidedPeople:(req,res)=>{
        
    },
    getAllAidedPeople:(req,res)=>{
        AidedHuman.find().exec()
        .then((allPeople)=>{
            res.send({message:"success",people:allPeople});
        })
        .catch(err=>next(err))
    },
    getAidedHumanById:(req,res)=>{
        
    },
    addAidedPeopleFromFileUploaded:(req,res,people)=>{
        people.forEach(human=>{
            addHumanHelperFn(req,res,human)
        })
        res.status(201).send({ message: true });
    },
    editHumanById:(req,res)=>{
        console.log('req.body',req.body)
        var myquery = { _id: req.body._id };
        var newvalues = {
            "اسم الام وشهرتها":req.body["اسم الام وشهرتها"],
            "اسم الاب":req.body["اسم الاب"],
            "الشهره":req.body["الشهره"],
            "الأسم":req.body["الأسم"],
        };
        AidedHuman.findOneAndUpdate(myquery, newvalues, function(err, field) {
            if (err) {
                return res.send({
                message: "Error"
                });
            }
            if (!field) {
                return res.send({
                  message: "human not exists"
                });
              } else {
                return res.send({
                  message: true,updated:field
                });
              }
        })
    }
}
function addHumanHelperFn(req,res,human){

    const newHuman=new AidedHuman({
        "اسم الام وشهرتها":human["اسم الام وشهرتها"],
        "اسم الاب":human["اسم الاب"],
        "الشهره":human["الشهره"],
        "الأسم":human["الأسم"],
    });
    newHuman.save((err,document)=>{
        if (err) {
            res.send({ message: false });
          } else if (document) {
              
            
          } else {
            res.stats(422).send({ message: "couldnot create a human" });
          }
    })
}