var colors = [];

var ch=6;

var h1=document.querySelector("h1");

var body = document.querySelector("body");
var pickedColor;

var reset = document.querySelector("#reset");
reset.addEventListener("click",function(){
	colors=generateRandomColor(ch);
	result.textContent = "";
	this.textContent="New Colors";
	resetGame();
});


var colorDisplay =  document.querySelector("#colorDisplay");

var squares = document.querySelectorAll(".square");
var result = document.querySelector("#result");

var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	ch=3;

	result.textContent="";

	for(var i=0;i<6;i++)
		squares[i].style.background="#232323";
	resetGame();
});

hard.addEventListener("click",function(){
   hard.classList.add("selected");
   easy.classList.remove("selected");
   ch=6;
   result.textContent="";
   resetGame();
});

function changeColor(color){
	for(var i=0;i<ch;i++)
	  squares[i].style.background = pickedColor;
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	console.log(random);
	return colors[random];
}

function generateRandomColor(num){

	var arr = [];

	for(var i=0;i<num;i++)
	{
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);

		arr.push("rgb("+r+", "+g+", "+b+")");
	}
	return arr;
}

resetGame();

function resetGame(){

	colors = generateRandomColor(ch);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++){
     {
     	if(colors[i])
     	{
     	  squares[i].style.display = "block";
     	  squares[i].style.background = colors[i];
     	}
     	else
     	  squares[i].style.display = "none";
     }	

	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.background;
		console.log(clickedcolor);
		if(clickedcolor === pickedColor)
			 {
			 	console.log(i);
			 	h1.style.background = pickedColor;
			 	result.textContent = "Correct";
				changeColor(pickedColor);
				reset.textContent = "Play Again!";		 	
			 }
		else{
			result.textContent = "Try Again";
		    this.style.background = body.style.background;
		}
	});
}

h1.style.background = "steelblue";

}