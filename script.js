var font;
p5.disableFriendlyErrors = true;
var vehicles = [];

function preload(){
	font = loadFont('Montserrat-Regular.otf');
	word = ':shrimp:';
	fontSize = 300;
}

function setup() {
	createCanvas(1900, 900);
	background(51);
	var points = font.textToPoints(':shrimp:', ((width / 2) - (word.length*70)), (height / 1.75), fontSize);

	for (var i = 0; i < points.length; i++){
		var pt = points[i];
		var vehicle = new Vehicle(pt.x - 10, pt.y);
		vehicles.push(vehicle);
	}
}
function draw() {
	background(51);
	for (var i = 0; i < vehicles.length; i++){
		var v = vehicles[i];
		v.behaviors();
		v.update();
		v.show();
	}
}
