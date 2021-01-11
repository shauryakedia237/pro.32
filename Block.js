class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            isStatic:false
           
        }
        this.visibility=255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      
      display(){
        block1.Score();
        block2.Score();
        block3.Score();
        block4.Score();
        block5.Score();
        block6.Score();
        block7.Score();
        block8.Score();
        block9.Score();
        block10.Score();
        block11.Score();
        block12.Score();
        block13.Score();
        block14.Score();
        block15.Score();
        block16.Score();
        block17.Score();
        block18.Score();
        block19.Score();
        block20.Score();
        block21.Score();
        block22.Score();
        block23.Score();
        block24.Score();
        block25.Score();

        if (this.body.speed < 3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        }else{
          World.remove(world,this.body)
          push();
          this.visibility=this.visibility-5;
          pop();
        }
        
        
      }
      
 Score (){
  if ( this.visibility<0 && this.visibility>-105) {
    score++
  }
}

}