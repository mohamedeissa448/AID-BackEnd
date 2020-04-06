const mongoose=require('mongoose');
const aidedHumanSchema=mongoose.Schema({//needs modification to use passport
      "اسم الام وشهرتها":String,
      "اسم الاب":String,
      "الشهره":String,
      "الأسم":String,
})
module.exports=mongoose.model('AidedHuman',aidedHumanSchema)