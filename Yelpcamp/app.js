var express    = require("express");
    app        = express();
    mongoose   = require("mongoose");
	bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

var compoundSchema = new mongoose.Schema({
											name : String,
											url  : String,
											desc : String
										});

var Compound = mongoose.model("Compound",compoundSchema);

// Compound.create({
// 	name : "Camp Side 2", 
// 	url  : "https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144591f1c77ba5ebb1_340.jpg",
// 	desc : "This is a beautiful hillside camping ground site."
//     },function(err,compound){
// 	    if(err)
// 		 console.log("Error Occurred.");
//      	else{
// 		 console.log("Camp ground added successfully");
// 		 console.log(compound);}
// });

app.get("/",function(req,res){
	res.redirect("index");
});

app.get("/index",function(req,res){

	Compound.find({},function(err,compounds){
		if(err)
			console.log(err);
		else
		{
				res.render("index",{
				compounds : compounds
				});
		}
	});
});

app.post("/index",function(req,res){
	var name=req.body.name;
	var image=req.body.image;
	var desc=req.body.desc;
	var camp={name : name, url : image, desc:desc};
	Compound.create(camp,function(err,camp){
		if(err) console.log(err);
		else console.log("New Camp added.");
	});
	res.redirect("/index");
});

app.get("/index/new",function(req,res){
	res.render("new");
});

app.get("/index/:id",function(req,res){
	Compound.findById(req.params.id,function(err,camp){
			if(err)
				console.log(err);
			else
				res.render("show",{ camp:camp });
	});	
});

app.listen(3000,function(){
	console.log("Yelpcamp server is listening!");
});