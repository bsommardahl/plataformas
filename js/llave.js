function Llave(x,y,img){
	Kinetic.Image.call(this);
	this.setWidth(30);
	this.setX(x);
	this.setY(y);
	this.setImage(img);
	this.setHeight(40);

}

Llave.prototype = Object.create(Kinetic.Image.prototype);