//Javascript document
$(document).ready(function() {
	
    var randomNumber = Math.floor((Math.random()*100)+1);
	
	$("#guess").keypress(function(e) {
        if(e.keyCode==13){
			$("#submit").click();
		};
    });
	
	
	$("#submit").click(function() {
		
			var guessNumber = $("#guess").val();
			
			if (guessNumber<=0 || guessNumber >=101){alert("Choose a number between 1 and 100!")};
			
			if (isNaN(guessNumber)) {alert("That's not a number!")};
		
			var difference = Math.abs(guessNumber-randomNumber);
			var printNumber = $("#number").text(guessNumber);
			
			if(difference==0){
				$("#answerbox").text("Correct! Play Again!");
				printNumber
				$("#guess").val("");	
				randomNumber = Math.floor((Math.random()*100)+1) ;
			}else if(difference<5){
				$("#answerbox").text("Hot!");
				printNumber
				$("#guess").val("");
			}else if(difference<10){
				$("#answerbox").text("Warmer!");
				$("#guess").val("");
			}else if (difference<15){
				$("#answerbox").text("Cold!");
				$("#guess").val("");
			}else{
				$("#answerbox").text("Freezing!");
				printNumber
				$("#guess").val("");
				
		};
		
		
				
	});
	
	$("#reset").click(function() {
        location.reload();
    });
		
});