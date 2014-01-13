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
			var difference = Math.abs(guessNumber-randomNumber);
		
		
			if(difference==0){
				$("#answerbox").text("Correct!");
				$("#number").text(guessNumber)
				$("#guess").val("");
			}else if(difference<10){
				$("#answerbox").text("Hot!");
				$("#number").text(guessNumber)
				$("#guess").val("");
			}else{
				$("#answerbox").text("Cold!");
				$("#number").text(guessNumber);
				$("#guess").val("");
		};
		
				
	});
	
	$("#reset").click(function() {
        location.reload();
    });
		
});