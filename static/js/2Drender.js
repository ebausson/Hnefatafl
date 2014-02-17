
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
	}

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

		if (selectedCase) {
			drawRect(context, selectedCase.xPos, selectedCase.yPos, "#33FF00");
			//TODO : possible moves?
		}
	}

	var clearCanvas = function() {
		var h = context.canvas.height;
		var w  = context.canvas.width;
		context.fillStyle = bgColor;
		context.fillRect(0,0,h,w);
	}

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
	}

	var drawRect = function(context, xPos, yPos, color){
		context.strokeStyle = color;
		var x = xPos * 40;
		var y = yPos * 40;
		context.strokeRect(x, y, 40, 40);
	}

	var onclick = function(game, x, y){
		var xPos = Math.floor(x/40);
		var yPos = Math.floor(y/40);
		var clikedCaseContent = game.getAt(game, xPos, yPos);

			// selection
		if ( clikedCaseContent != 0) {
			if (game.getCurrentPlayer() == 1 && clikedCaseContent == 1) {
				selectedCase = {xPos:xPos, yPos:yPos};
			} else if (game.getCurrentPlayer() == 2 && clikedCaseContent != 1) {
				selectedCase = {xPos:xPos, yPos:yPos};
			}
			render(game);
			return;
		}

		else {
			// at that point, clikedCaseContent == 0
			if ( selectedCase != null) {
				var origin = core.getAsPositionString(selectedCase.xPos, selectedCase.yPos);
				var dest = core.getAsPositionString(xPos, yPos);
				if (game.canMove(origin, dest)) {
					game.move(origin, dest);
					selectedCase = null;
					render(game);
				}
			}
		}
	}

	return {
		init: init,
		render: render,
		onclick : onclick
	}
}()
