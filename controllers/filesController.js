const jwt = require('jsonwebtoken');
const passport = require("passport");
const config=require("../config");
const aidedPeopleController=require("./AidedPeopleController")
var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");

var multer = require('multer');
var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
            cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname)   ;
            console.log('fieldname',file.fieldname)
        }
 });
var upload = multer({ //multer settings
         storage: storage,
         fileFilter : function(req, file, callback) { //file filter
            if (['xls', 'xlsx','csv'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
                return callback(new Error('Wrong extension type'));
            }
            callback(null, true);
        }
    }).single('file');

 
module.exports={
    uploadFile:(req,res)=>{
        var exceltojson; //Initialization
        upload(req,res,function(err){
            if(err){
                 res.status(422).json({error_code:1,err_desc:err});
                 return;
            }
              /** Multer gives us file info in req.file object */
            if(!req.file){
                res.json({error_code:1,err_desc:"No file passed"});
                return;
            }
            //start convert process
            /** Check the extension of the incoming file and
             *  use the appropriate module
             */
            if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
                exceltojson = xlsxtojson;
            } else {
                exceltojson = xlstojson;
            }
            try {
                exceltojson({
                    input: req.file.path, //the same path where we uploaded our file
                    output: null, //since we don't need output.json
                    lowerCaseHeaders:true
                }, function(err,result){
                    if(err) {
                        return res.json({error_code:1,err_desc:err, data: null});
                    }
                    aidedPeopleController.addAidedPeopleFromFileUploaded(req,res,result)
                });
            } catch (e){
                res.json({error_code:1,err_desc:"Corupted excel file"});
            }
        })
        
    }
}