const mongoose=require('mongoose');
const userSchema=mongoose.Schema({//needs modification to use passport
      userName:String,
      password:String,
})
module.exports=mongoose.model('User',userSchema)