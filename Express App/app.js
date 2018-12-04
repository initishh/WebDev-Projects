var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("home");
});

app.get("/love/:thing",function(req,res){
	var thing = req.params.thing;
	res.render("page",{
		name : thing
	});
});

app.get("/posts",function(req,res){

	var posts = [
		{
			title : "This is good",
			name : "Nitish"
		},
		{
			title : "Pewdipie is dumb.",
			name : "T-Series"	
		},
		{
			title : "T-Series is nothing but bitch lasagnia.",
			name : "Pewds"
		}
	];
	res.render("posts",{
		posts : posts
	});
});

app.get("*",function(req,res){
	res.send("Sorry, Page not found... WTF are you doing with your life.");
});


app.listen(3000,function(){
	console.log("Server started.");
});