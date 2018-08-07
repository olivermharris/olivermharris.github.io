let x = 0;
let y = 0;
let spacing;
let prob = 0.01;
let change = 0.001;

function setup() {

	createCanvas(windowWidth,windowHeight);
	spacing = windowHeight / 100;
	background(0);

}

function draw() {
	stroke(255);
	for (i = 0; i < 10; i++) {
		tenPrint();
		probChange();
	}


if (y > height) {
	frameRate(0);
}
}

function probChange() {
	prob = prob + change;

	if (prob > 1) {
		change = -0.001;
	} else if (prob < 0) {
		change = 0.001;
	}
}

function tenPrint() {
		if (random(1) < prob) {
			line(x, y, x + spacing, y + spacing)
		} else {
			line(x, y + spacing, x + spacing, y)
		}

		x = x + spacing;
		if (x > width) {
			x = 0;
			y = y + spacing;
	}
}
