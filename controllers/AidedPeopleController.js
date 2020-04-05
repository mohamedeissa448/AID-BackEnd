var AidedHuman=require("../models/aidedHumanModel")
module.exports={
    addAidedHuman:(req,res,human)=>{
    
    },
    getAidedPeople:(req,res)=>{
        
    },
    getAidedHumanById:(req,res)=>{
        
    },
    addAidedPeopleFromFileUploaded:(req,res,people)=>{
        people.forEach(human=>{
            addHuman(req,res,human)
        })
        res.status(201).send({ message: true });
    }
}
function addHuman(req,res,human){

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