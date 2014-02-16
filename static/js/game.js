
var core = function (){
	var gameSize;
	var gameboard = [
		[4,0,0,1,1,1,1,1,0,0,4],
		[0,0,0,0,0,1,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0],
		[1,0,0,0,0,2,0,0,0,0,1],
		[1,0,0,0,2,2,2,0,0,0,1],
		[1,1,0,2,2,3,2,2,0,1,1],
		[1,0,0,0,2,2,2,0,0,0,1],
		[1,0,0,0,0,2,0,0,0,0,1],
		[0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,0,0,0],
		[4,0,0,1,1,1,1,1,0,0,4]
	];

	var getGameBoard = function(){
		return gameboard;
	};

	var init = function(){
		var newgame = {};
		newgame.gameboard = gameboard;
		gameSize = newgame.gameboard.length;

		// building starting positions from gameboard
		var currentboard = [];
		for (var i = 0; i < gameSize; i++) {
			currentboard[i] = [];
			for (var j = 0; j < gameSize; j++) {
				// quite ulgy, I agree
				currentboard[i][j] = newgame.gameboard[i][j]%4;
			}
		};
		newgame.currentboard = currentboard;

		// black player start.
		newgame.currentplayer = 1;

		return newgame;
	};

	var getAt = function(game, x, y){
		if (x >= 0 && x < gameSize && y >= 0 && y < gameSize) {
			return game.currentboard[x][y];
		}
		return -1;
	};

	var getSize = function() {return gameSize;};

	var getAsPositionObject = function(positionString){
		//TODO : modify if different gamesize
		if (/^[A-K](\d{1}|10|11)$/.test(positionString)){
			var x = positionString.charCodeAt(0)-65;
			var y = positionString.subString(1) - 1;
			return {'x':x,'y':y};
		}
		return false;
	}
	var getAsPositionString = function(xpos, ypos){
		if (xpos >= 0 && xpos < gameSize && ypos >= 0 && ypos < gameSize) {
			return String.fromCharCode(65 + xpos) + (ypos+1);
		}
		return false;
	}

	var move = function(game, originStr, destinationStr) {
		var origin = getAsPositionObject(originStr);
		var destination = getAsPositionObject(destinationStr);

		return "";
	};

	return {
		init: init,
		move: move,
		getSize : getSize,
		getAt : getAt
	}
}();
