let mongoose = require('mongoose');
let schema = mongoose.Schema({
	email:{type:String,unique:true},
	name:{type:String},
	password:{type:String},
	image:{type:String}
},{versionKey:false});

module.exports = mongoose.model('user',schema);