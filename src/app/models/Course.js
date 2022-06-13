const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Course = new Schema({
    TenSP : {type : String},
    KichThuoc : {type : Number} ,
    GioiThieu : {type : String},
    Gia: {type : Number},
    TenLoaiSP : {type : String},
    TenNoiCC: {type : String},
    Anh: {type : String},
    slug:{type : String , slug:'TenSP',unique : true},
    Donvi:{type : String},
},{
    timestamps : true,
});

module.exports = mongoose.model('Course',Course,'tDanhsach');