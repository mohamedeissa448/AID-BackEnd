const jwt = require('jsonwebtoken');
const passport = require("passport");
const config=require("../config")

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
        console.log('req',req.files)
        upload(req,res,function(err){
            if(err){
                 res.status(422).json({error_code:1,err_desc:err});
                 return;
            }
             res.json({error_code:0,err_desc:null});
        });
    }
}