var game;

window.onload = function(){
	var canvas = document.getElementById('game');

	game = core.init();

	render2D.init(canvas, game);



	canvas.addEventListener('click', function(event) {
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    render2D.onclick(game, x, y);
    render2D.render(game);
  });
}
