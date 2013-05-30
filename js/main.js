var stage,fondo,grupoAssets;
var keyboard = {};
var intv;
var personaje;
var grav = 0.8;
var val_reb =0;

grupoAssets = new Kinetic.Group({
    x:0,
    y:0
});
stage = new Kinetic.Stage({
   container:"game",
   width:960,
   height:500
});
function nivelUno(){
	fondo = new Kinetic.Layer();
  /*Enemigos*/
  grupoAssets.add(new Enemigo(200,stage.getHeight()-75));
  grupoAssets.add(new Enemigo(850,stage.getHeight()/3.9-60));
  grupoAssets.add(new Enemigo(170,stage.getHeight()/3-60));
  grupoAssets.add(new Enemigo(1020,stage.getHeight()-75));
  grupoAssets.add(new Enemigo(1120,stage.getHeight()-75));
  grupoAssets.add(new Enemigo(1220,stage.getHeight()-75));
	personaje = new Heroe();
	personaje.setX(0);
	personaje.setY(stage.getHeight()-personaje.getHeight());
	personaje.limiteDer = stage.getWidth() - personaje.getWidth();
	personaje.limiteTope =stage.getHeight(); 
	fondo.add(personaje);
  fondo.add(grupoAssets);
	stage.add(fondo);
}
function moverPersonaje(){
	if(keyboard[37]){
        personaje.retroceder();
	}
	if(keyboard[39]){
		personaje.caminar();
	}
	if(keyboard[38] && personaje.contador < 1){
		personaje.saltar();
	}	
}

function addkeyBoardEvents(){
	 addEvent(document,"keydown",function(e){
          keyboard[e.keyCode] = true;
     });
	 addEvent(document,"keyup",function(e){
          keyboard[e.keyCode] = false;
     });

	function addEvent(element,eventName,func){
		if(element.addEventListener){
           element.addEventListener(eventName,func,false);
		}
          else if(element.attchEvent){
              element.attchEvent(eventName,func);
          }
	}
}
function hit(a,b){
	var hit = false;
	//Colsiones horizontales
	if(b. getX() + b.getWidth() >= a.getX() && b.getX() <a.getX() + a.getWidth())
    {
        //Colisiones verticales
        if(b.getY() + b.getHeight() >= a.getY() && b.getY() < a.getY() + a.getHeight())
        	hit = true;
    }
    //colision de a con b
    if(b.getX() <= a.getX() && b.getx() + b.getWidth() >= a.getX() + a.getWidth())
    {
    	if(b.getY() <= a.getY() && b.getx() + b.getWidth() >= a.getY() + a.getWidth())
    		hit = true;
    }
    //colision b con a 
    if(a.getX() <=b.getX() && a.getX() + a.getWidth() >= b.getX() + b.getWidth())
    {
    	if(a.getY() <=b.getY() && a.getY() + a.getWidth() >= b.getY() + b.getWidth())
    		hit = true;
    }
    return hit;
} 
function moverEnemigos(){
  var enemigos = grupoAssets.children;
  for(i in enemigos){
      var enemigo = enemigos[i];
       enemigo.mover();
  }
}
function aplicarFuerzas(){
	personaje.aplicarGravedad(grav,val_reb);
} 
addkeyBoardEvents();
nivelUno();  
intv = setInterval(frameLoop,1000/20);
function frameLoop(){
	aplicarFuerzas();
    moverPersonaje();
    moverEnemigos();
    stage.draw();
}