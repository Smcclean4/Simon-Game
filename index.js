const RED = "red";
const BLUE = "blue";
const YELLOW = "yellow";
const GREEN = "green";
const theAudio = new Audio(
	"https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
);

var simon = {
	sendColor: function(color) {
		if (!simon.sequence.length) {
			// start a new game
			simon.nextSequence();
		} else {
			if (color === simon.sequence[simon.step]) {
				if (simon.step === simon.sequence.length - 1) {
					alert("sequence complete!");
					simon.count++;
					simon.step = 0;
					simon.nextSequence();
				} else {
					simon.step++;
				}
			} else {
				// !!lose condition
				alert("WRONG!!");
				simon.sequence = [];
				simon.step = 0;
				simon.count = 0;
			}
			$("input").attr("placeholder", simon.count);
			if (simon.count === 20) {
				alert("you won!, your really good");
				simon.count = 0;
				simon.sequence = [];
				simon.step = 0;
			}
		}
	},
	sequence: [],
	colors: [RED, BLUE, YELLOW, GREEN],
	step: 0,
	count: 0,
	nextSequence: function() {
		var nextColor = simon.colors[Math.floor(Math.random() * simon.colors.length)];
			function patternBlink(x) {
		setTimeout(function() {																		
			for(var i = 0; i < x.length; i++) {									
				(function(i) { 
					setTimeout(function() {
						theAudio.play();
						$("#"+x[i]).fadeOut(150).fadeIn(150);					
					}, i * 800);
				})(i);																																			
			}		
		}, 1000);
	}
		simon.sequence.push(nextColor);
		patternBlink(simon.sequence);
		console.log("the next sequence is", simon.sequence);
	}
};

$(document).ready(function() {
	
	$("#reset").click(function(){
		location.reload(true);
	});
	
	$("#red").click(function() {
		theAudio.play();
		simon.sendColor(RED);
	});
	$("#blue").click(function() {
		theAudio.play();
		simon.sendColor(BLUE);
	});
	$("#yellow").click(function() {
		theAudio.play();
		simon.sendColor(YELLOW);
	});
	$("#green").click(function() {
		theAudio.play();
		simon.sendColor(GREEN);
	});
});