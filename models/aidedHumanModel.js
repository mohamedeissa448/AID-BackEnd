const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  المحافظه: String,
  القضاء: String,
  "البلده او المدينه": String,
  الحي: String,
  الشارع: String,
  البنايه: String,
  الطابق: String,
  "ملك أو ايجار": String,
  "قيمه الايجار": String,
  "هاتف المنزل": String,
  "هاتف خليوي": String,
  "هاتف العمل": String,
  الفاكس: String,
  البريد: String,
  "البريد الالكتروني": String
});
const helpSchema = mongoose.Schema({
  "نوع المساعده": String,
  المصدر: String,
  "القيمه الماديه": Number,
  "تاريخ التسليم": String
});
const aidedHumanSchema = mongoose.Schema({
  //needs modification to use passport
  "اسم الام وشهرتها": String,
  "اسم الاب": String,
  الشهره: String,
  الأسم: String,
  "محل الولاده": String,
  "تاريخ الولاده": String,
  الجنس: String,
  "الوضع العائلي": String,
  "اسم الزوج وشهرته": String,
  "مكان القيد": String,
  "رقم القيد(السجل المدني": String,
  "القضاء للقيد": String,
  "المحافظه للقيد": String,
  الجنسيه: String,
  العنوان: [addressSchema],
  "عدد الأبناء": String,
  "أقرباء-صله القربي": String,
  "المساعدات المقدمه": [helpSchema]
});
module.exports = mongoose.model("AidedHuman", aidedHumanSchema);
