var framesP = {
  estatico: [{
    x: 30,
        y: 0,
        width: 65,
        height: 79
  }],
    caminar: [{
        x: 30,
        y: 0,
        width: 65,
        height: 79
    }, {
        x: 109,
        y: 0,
        width: 65,
        height: 79
    }, {
        x: 188,
        y: 0,
        width: 65,
    height: 79
  }, {
    x: 267,
    y: 0,
    width: 65,
    height: 79
  }, {
    x: 346,
    y: 0,
    width: 65,
    height: 79
  }, {
    x: 425,
    y: 0,
    width: 65,
    height: 79
  }],
    saltarFrames: [{
        x: 109,
        y: 70,
        width: 65,
        height: 79
    }, {
        x: 188,
        y: 70,
        width: 65,
        height: 79
    },{
        x: 188,
        y: 70,
        width: 65,
        height: 79
    }, {
        x: 267,
        y: 70,
        width: 65,
    height: 79
  }, {
        x: 267,
        y: 70,
        width: 65,
    height: 79
  }, {
    x: 346,
    y: 70,
    width: 65,
    height: 79
  }, {
    x: 346,
    y: 70,
    width: 65,
    height: 79
  }, {
    x: 425,
    y: 70,
    width: 65,
    height: 79
  },{
    x: 425,
    y: 70,
    width: 65,
    height: 79
  },{
    x: 425,
    y: 70,
    width: 65,
    height: 79
  },{
    x: 425,
    y: 70,
    width: 65,
    height: 79
  }]
};

var stage,fondo,grupoAssets,puntaje,imagenFondo;
var keyboard = {};
var intv;
var personaje;
var grav = 0.8;
var val_reb = 0;
var b = false; 
var juego = new Game();
var imgH = new Image();
imgH.src = 'imgs/Heroe.png';
var imgEn = new Image();
imgEn.src = 'imgs/enemy.png';
var imgMon = new Image();
imgMon.src = 'imgs/moneda.png';
var imgPlata = new Image();
imgPlata.src = 'imgs/pattern.png';
var imgPuer = new Image();
imgPuer.src = 'imgs/puerta.png';
var imgLla = new Image();
imgLla.src = 'imgs/llave.png';
var imgFon = new Image();
imgFon.src = 'imgs/fondo.jpg';

grupoAssets = new Kinetic.Group({
    x:0,
    y:0
});
if(!stage){
    stage = new Kinetic.Stage({
       container:"game",
       width:960,
       height:500
    });
}
puntaje = new Kinetic.Text({
  text:'Puntaje: 0',
  height:35,
  width: 150,
  x:stage.getWidth()-150,
  y:15,
  fill:'#f7f7f7'
});
imagenFondo = new Kinetic.Image({
  x:0,
  y:0,
  image: imgFon,
  width: stage.getWidth(),
  height: stage. getHeight()
})

function nivelUno(){
    juego.puntaje = 0;
  if(b) return;
  b = true;
  juego.puntaje = 0;
  juego.llave = true;
	fondo = new Kinetic.Layer();
  /*Enemigos*/
  grupoAssets.add(new Enemigo(200,stage.getHeight()-75, imgEn));
  grupoAssets.add(new Enemigo(850,stage.getHeight()/3.9-60,imgEn));
  grupoAssets.add(new Enemigo(170,stage.getHeight()/3-60,imgEn));
  grupoAssets.add(new Enemigo(1020,stage.getHeight()-75,imgEn));
  grupoAssets.add(new Enemigo(1120,stage.getHeight()-75,imgEn));
  grupoAssets.add(new Enemigo(1220,stage.getHeight()-75,imgEn));

/*Plataformas*/
var piso = new Plataforma(0,stage.getHeight()-15,imgPlata);
piso.setWidth(stage.getWidth()*2);
grupoAssets.add(piso);
grupoAssets.add(new Plataforma(20,stage.getHeight()/1.5,imgPlata));
grupoAssets.add(new Plataforma(190,stage.getHeight()/3,imgPlata));
grupoAssets.add(new Plataforma(510,stage.getHeight()/1.6,imgPlata));
grupoAssets.add(new Plataforma(870,stage.getHeight()/3.9,imgPlata));

/*Monedas*/
grupoAssets.add(new Moneda(350,stage.getHeight()/3-130,imgMon));
grupoAssets.add(new Moneda(650,stage.getHeight()/2-130,imgMon));
grupoAssets.add(new Moneda(80,stage.getHeight()/-80,imgMon));
grupoAssets.add(new Moneda(350,stage.getHeight()/3-130,imgMon));
grupoAssets.add(new Moneda(910,stage.getHeight()/-6,imgMon));
grupoAssets.add(new Moneda(1220,stage.getHeight()/-80,imgMon));
/*puerta*/
grupoAssets.add(new Puerta(1450,stage.getHeight()-85, imgPuer));
  /*personaje*/
	personaje = new Heroe(imgH,framesP);
	personaje.setX(0);
	personaje.setY(stage.getHeight()-personaje.getHeight());
	personaje.limiteDer = stage.getWidth() - personaje.getWidth();
	personaje.limiteTope =stage.getHeight();
  fondo.add(imagenFondo); 
	fondo.add(personaje);
  fondo.add(grupoAssets);
  fondo.add(puntaje);
  personaje.start();
	stage.add(fondo);
  intv = setInterval(frameLoop,1000/20);
}
function nivelDos(){
  fondo = new Kinetic.Layer();
  juego.llave = false;
     /*Enemigos*/
  grupoAssets.add(new Enemigo(200,stage.getHeight()/1.5-60, imgEn));
  grupoAssets.add(new Enemigo(850,stage.getHeight()/3.9-60,imgEn));
  grupoAssets.add(new Enemigo(25,stage.getHeight()/3-60,imgEn));
  grupoAssets.add(new Enemigo(500,stage.getHeight()-75,imgEn));
  grupoAssets.add(new Enemigo(650,stage.getHeight()-75,imgEn));
  grupoAssets.add(new Enemigo(850,stage.getHeight()-75,imgEn));
  /*puerta*/
grupoAssets.add(new Puerta(1800,stage.getHeight()-90, imgPuer));
/*Plataformas*/
var piso = new Plataforma(0,stage.getHeight()-15,imgPlata);
piso.setWidth(stage.getWidth()*2);
grupoAssets.add(piso);
grupoAssets.add(new Plataforma(190,stage.getHeight()/1.5,imgPlata));
grupoAssets.add(new Plataforma(10,stage.getHeight()/3,imgPlata));
grupoAssets.add(new Plataforma(310,stage.getHeight()/4,imgPlata));
grupoAssets.add(new Plataforma(870,stage.getHeight()/3.9,imgPlata));
/*llave*/
grupoAssets.add(new Llave(650,stage.getHeight()-80,imgLla));
/*Monedas*/
grupoAssets.add(new Moneda(350,stage.getHeight()/3-130,imgMon));
/*personaje*/
  personaje = new Heroe(imgH,framesP);
  personaje.setX(0);
  personaje.limiteDer = stage.getWidth() - personaje.getWidth();
  personaje.setY (stage.getHeight()-80);
  personaje.limiteTope = stage.getHeight();
  fondo.add(imagenFondo); 
  fondo.add(personaje);
  fondo.add(grupoAssets);
  fondo.add(puntaje);
  personaje.start();
  stage.add(fondo);
  intv = setInterval(frameLoop,1000/20);
}

function nivelTres(){
  fondo = new Kinetic.Layer();
  juego.llave = false;
     /*Enemigos*/
  grupoAssets.add(new Enemigo(200,stage.getHeight()/1.5-60, imgEn));
  grupoAssets.add(new Enemigo(850,stage.getHeight()/3.9-60,imgEn));
  grupoAssets.add(new Enemigo(25,stage.getHeight()/3-60,imgEn));
  grupoAssets.add(new Enemigo(500,stage.getHeight()-75,imgEn));
  grupoAssets.add(new Enemigo(650,stage.getHeight()-75,imgEn));
  grupoAssets.add(new Enemigo(850,stage.getHeight()-75,imgEn));
  grupoAssets.add(new Enemigo(800,stage.getHeight()-50,imgEn));
  grupoAssets.add(new Enemigo(200,stage.getHeight()-65,imgEn));
  grupoAssets.add(new Enemigo(850,stage.getHeight()-75,imgEn));
  grupoAssets.add(new Enemigo(700,stage.getHeight()-80,imgEn));
  /*puerta*/
grupoAssets.add(new Puerta(2000,stage.getHeight()-90, imgPuer));
/*Plataformas*/
var piso = new Plataforma(0,stage.getHeight()-15,imgPlata);
piso.setWidth(stage.getWidth()*2);
grupoAssets.add(piso);
grupoAssets.add(new Plataforma(190,stage.getHeight()/1.5,imgPlata));
grupoAssets.add(new Plataforma(10,stage.getHeight()/3,imgPlata));
grupoAssets.add(new Plataforma(310,stage.getHeight()/4,imgPlata));
grupoAssets.add(new Plataforma(870,stage.getHeight()/3.9,imgPlata));
grupoAssets.add(new Plataforma(900,stage.getHeight()/2.9,imgPlata));
/*llave*/
grupoAssets.add(new Llave(650,stage.getHeight()-80,imgLla));
/*Monedas*/
grupoAssets.add(new Moneda(350,stage.getHeight()/3-130,imgMon));
grupoAssets.add(new Moneda(200,stage.getHeight()/3-80,imgMon));
grupoAssets.add(new Moneda(300,stage.getHeight()/-75,imgMon));
grupoAssets.add(new Moneda(250,stage.getHeight()/1.5,imgMon));
grupoAssets.add(new Moneda(400,stage.getHeight()/3,imgMon));
grupoAssets.add(new Moneda(270,stage.getHeight()/-90,imgMon));
grupoAssets.add(new Moneda(500,stage.getHeight()/-53,imgMon));
grupoAssets.add(new Moneda(550,stage.getHeight()/4,imgMon));
grupoAssets.add(new Moneda(630,stage.getHeight()/5,imgMon));
grupoAssets.add(new Moneda(355,stage.getHeight()/3.5,imgMon));
/*personaje*/
  personaje = new Heroe(imgH,framesP);
  personaje.setX(0);
  personaje.limiteDer = stage.getWidth() - personaje.getWidth();
  personaje.setY (stage.getHeight()-80);
  personaje.limiteTope = stage.getHeight();
  fondo.add(imagenFondo); 
  fondo.add(personaje);
  fondo.add(grupoAssets);
  fondo.add(puntaje);
  personaje.start();
  stage.add(fondo);
  intv = setInterval(frameLoop,1000/20);
}


function moverPersonaje(){
  if(personaje.getAnimation() != 'caminar' && (keyboard[37] || keyboard[39])){
    personaje.setAnimation('caminar');
  }
	if(keyboard[37]){
        personaje.retroceder();
	}
	if(keyboard[39]){
		personaje.caminar();
	}
	if(keyboard[38] && personaje.contador < 1){
		personaje.saltar();
	}	
  if(!(keyboard[39] || keyboard[38] || keyboard[37]) && !personaje.estaSaltado){
      personaje.setAnimation('estatico');
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
	if(b.getX() + b.getWidth() >= a.getX() && b.getX() < a.getX() + a.getWidth())
    {
        //Colisiones verticales
        if(b.getY() + b.getHeight() >= a.getY() && b.getY() < a.getY() + a.getHeight())
        	hit = true;
    }
    //colision de a con b
    if(b.getX() <= a.getX() && b.getX() + b.getWidth() >= a.getX() + a.getWidth())
    {
    	if(b.getY() <= a.getY() && b.getX() + b.getWidth() >= a.getY() + a.getWidth())
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
function moverFondo(){
 if(personaje.getX()  > (stage.getWidth()/2) && keyboard[39]){
    personaje.vx = 2;
    for(i in grupoAssets.children){
        var asset = grupoAssets.children[i];
        if(asset.move) asset.move(-5,0)
    };
  }
  else{
    personaje.vx = 10;
  }
}
function moverEnemigos(){
  var enemigos = grupoAssets.children;
  for(var i=0; i<enemigos.length; i++){
      var enemigo = enemigos[i];
      if(enemigo instanceof Enemigo )
       enemigo.mover();
  }
}
function aplicarFuerzas(){
	personaje.aplicarGravedad(grav,val_reb);
} 
function detectarColPlataformas(){
  var plataformas = grupoAssets.children;
  for(var i=0; i<plataformas.length; i++){
    var plataforma = plataformas[i];
    if(hit(plataforma,personaje)){
       if(plataforma instanceof Enemigo){
          if(personaje.vy > 2 && personaje.getY() < plataforma.getY()){
              plataforma.remove();
              juego.puntaje +=5;
              console.log(juego.puntaje);
            }
          else{
            grupoAssets.removeChildren();
            document.querySelector('#lose').style.display = 'block';
             document.querySelector('#game').style.display = 'none';
             window.clearInterval(intv);
             b = false;
          }
       }

      else if(plataforma instanceof Plataforma && personaje.getY() < plataforma.getY() && personaje.vy >=0){
        personaje.contador = 0;
        personaje.setY(plataforma.getY() - personaje.getHeight());
        personaje.vy *= val_reb;
       }
        else if(plataforma instanceof Moneda){
           plataforma.remove();
           juego.puntaje++;
        }
        else if(plataforma instanceof Llave){
            plataforma.remove();
            juego.llave = true;
            continue;
    }

        else if(plataforma instanceof Puerta && juego.llave){
            if(juego.nivel == 1){
               grupoAssets.removeChildren();
               window.clearInterval(intv);
               juego.nivel = 2;
               nivelDos();
            }
            else if(juego.nivel ==2){
             grupoAssets.removeChildren();
             document.querySelector('#win').style.display = 'block';
             document.querySelector('#game').style.display = 'none';
             document.querySelector('#score').innerHTML = juego.puntaje;
             window.clearInterval(intv);
             b = false;
           }
            else if(juego.nivel ==3){
             grupoAssets.removeChildren();
             document.querySelector('#win').style.display = 'block';
             document.querySelector('#game').style.display = 'none';
             document.querySelector('#score').innerHTML = juego.puntaje;
             window.clearInterval(intv);
             b = false;
           }
        }
     }
   }
}

function actualizarTexto(){
  puntaje.setText('puntaje: '+juego.puntaje)
}
 
addkeyBoardEvents();
 
function frameLoop(){
	  aplicarFuerzas();
    actualizarTexto();
    detectarColPlataformas();
    moverFondo();
    moverPersonaje();
    moverEnemigos();
    stage.draw();
};