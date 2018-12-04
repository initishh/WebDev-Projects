var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var reset=document.querySelector("#reset");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var input = document.querySelector("input[type='number']");
var winningScoreDisplay = document.querySelector("p span");

var winningScore=5;
var winningState=false;
var p1Score = 0;
var p2Score = 0;

p1.addEventListener("click",function(){

	if(!winningState){
		p1Score++;
		if(p1Score === winningScore){
      		winningState=true;
      		p1Display.classList.add("winner");
		}
      	p1Display.textContent = p1Score;		
	}
	 
});


p2.addEventListener("click",function(){

	if(!winningState)
	{
		p2Score++;
		if(p2Score === winningScore)
    	 	{
    	 		winningState = true;
    	 		p2Display.classList.add("winner");
			}
     	p2Display.textContent = p2Score;	
    }
     
});

function resetGame(){
	 console.log("item CLicked");
	 p1Score=0;
     p2Score=0;
     p1Display.classList.remove("winner");
     p2Display.classList.remove("winner");
     p1Display.textContent = p1Score;
     p2Display.textContent = p2Score;
     winningState = false;
}

reset.addEventListener("click",function(){
	resetGame();
});

input.addEventListener("change",function(){ 
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	resetGame();
});
