const mongoose=require('mongoose');
const userSchema=mongoose.Schema({//needs modification to use passport
      "اسم الام وشهرتها":String,
      "اسم الاب":String,
      "الشهره":String,
      "الأسم":String,
})
module.exports=mongoose.model('User',userSchema)