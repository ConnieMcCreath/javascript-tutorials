function Vector2D(x,y) {

  this.x = x;

  this.y = y;		

}
Vector2D.prototype = {		

  lengthSquared: function(){

    return this.x*this.x + this.y*this.y;
 // (x^2+y^2)
  },
  
	length: function(){

    return Math.sqrt(this.lengthSquared());
 // to find r: pythagoras theorum (x^2+y^2)^1/2
  },
	
	subtract: function(vec) {

    return new Vector2D(this.x - vec.x,this.y - vec.y);
 // used to find r (r = r2 - r1)
  },

   multiply: function(dt) {

     return new Vector2D(dt*this.x,dt*this.y);

   },
   addScaled: function(vec,dt) {

     return new Vector2D(this.x + dt*vec.x, this.y + dt*vec.y);
 // euler integration
   }
 
};
