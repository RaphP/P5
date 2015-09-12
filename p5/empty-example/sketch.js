var x = 000;
var y = 000;
r = 100;
g = 100;
c = 0;

function setup() {
  	createCanvas(windowWidth, windowHeight);
}

function draw() {
  	if (y < windowHeight/2 - 18){
  		ellipse(x, y, 70, 100);
  		ellipse(windowWidth - x, y, 70, 100);
  		x += windowWidth/250.;
  		y += windowHeight/250.;
	}
	else if (y < windowHeight ){
		ellipse(x, y, 70, 100);
  		ellipse(windowWidth - x, y, 70, 100);	
  		x -= windowWidth/250.;
  		y += windowHeight/250.;
	}
	else if (c==0){
		fill(100,5,200);
		textFont("Calibri");
		textAlign(CENTER);
		textSize(120);
		text("J'apprends le P5.JS !", windowWidth/2, windowHeight/2);
		c+=1;
	}
	else{
		r+= 10 - random()*20;
		g+= 10 - random()*20;
		fill(r,g,0);
		textAlign(RIGHT);
		textSize(80);
		text("Merci à PH", windowWidth,windowHeight);
		fill(r,g,0,10);
		ellipse(mouseX,mouseY,50,50)
	}
}