class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.path = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.position.x > 200 && this.body.velocity.x>10 && gameState !== "onSling"){
      var pos = [this.body.position.x,this.body.position.y];
      this.path.push(pos);
    }

    for(var i =0; i< this.path.length; i++){
      image(this.smokeImage, this.path[i][0], this.path[i][1]);
    }

    super.display();
  }
}
