function Enemigo(x,y){
    Kinetic.Rect.call(this);
    this.setWidth(60);
    this.setHeight(60);
    this.setX(x);
    this.setY(y);
    this.contador = 0;
    this.setFill('blue');
    this.aleatorio = function(inferior,superior){
          var poisibilidades = superior- inferior;
          var random = Math.random()* poisibilidades;
          random = Math.floor(random);
          return parseInt(inferior) + random;
    }
    this.mover = function(){
   }  
}

Enemigo.prototype = Object.create(Kinetic.Rect.prototype);