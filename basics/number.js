var secretNumber=9;

var yourNum=Number(prompt("Guess the number"));
if(yourNum<9)
	alert("Number too low");
else if(yourNum>9)
	alert("Number too high");
else
	alert("Congratulations, You guessed it right.");