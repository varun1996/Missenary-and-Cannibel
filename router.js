let express = require('express');
let router = express.Router();
let api = require('./api');
let path =require('path');
let multer = require('multer');
let storage = multer.diskStorage({
	destination:function(req,file,cb) {
		cb(null,'./upload');
	},
	filename:function(req,file,cb) {
		cb(null,file.originalname);
	}
})

let upload = multer({storage:storage});

router.post('/singup',upload.single('image'), async function(req,res,next){
	
	req.body.image = req.file.originalname;
	//console.log(req.body.image);
	next();
})

router.post('/singup',async function(req,res) {
	try {

		let result = await api.singUp(req.body);
		res.render("newhome");
	} catch(err) {
		res.render("singup",{drinks:"Email already exists"});
	}

})

router.get("/singup",function(req,res){

//console.log("singupcallllllllll");
res.render("singup",{drinks:""});



})

module.exports = router;