
var render2D = function (){
	var context;
	var selectedCase = null;

	var bordercolor  = "#555555";
	var bgColor      = "antiquewhite";
	var player1color = "#3355DD";
	var player2color = "#DD5533";
	var player2crown = "#801000";


	var init = function(canvas, game){
		context = canvas.getContext('2d');
		render(game);
	};

	var render = function(core){
		//cleaning game board.
		clearCanvas();

		// drawing current game.
		var board = core.gameboard;
		var game = core.currentboard;
		for (var i = 0; i < game.length; i++) {
			for (var j = 0; j < game.length; j++) {
				if (game[i][j]) {
					renderUnit(context, i, j, game[i][j]);
				}
			}
		}
	};

	var clearCanvas = function() {
		var h = context.canvas.height;
		var w  = context.canvas.width;
		context.fillStyle = bgColor;
		context.fillRect(0,0,h,w);
	};

	var renderUnit = function(context, xPos, yPos, type) {
		context.fillStyle = (type==1) ? player1color : player2color;
		context.beginPath();
		var x = (20 * (1 + 2 * xPos));
		var y = (20 * (1 + 2 * yPos));
		context.arc(x,y,15,0,2*Math.PI);
		context.fill();
		context.closePath();
		if (type == 3) {
			context.fillStyle= player2crown;
			context.beginPath();
			var x = (20 * (1 + 2 * xPos));
			var y = (20 * (1 + 2 * yPos));
			context.arc(x,y,8,0,2*Math.PI);
			context.fill();
			context.closePath();
		}
	};

	var onclick = function(game, x, y){
		var xPos = Math.floor(x/40);
		var yPos = Math.floor(y/40);
		var clikedCaseContent = core.getAt(game, xPos, yPos);
		console.log(clikedCaseContent);
		if (selectedCase == null && clikedCaseContent%4 > 0) {

		} else if ( selectedCase != null && clikedCaseContent%4 == 0) {

		}
	}

	return {
		init: init,
		render: render,
		onclick : onclick
	};
}();
