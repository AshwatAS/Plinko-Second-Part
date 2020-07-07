class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    score(){
        if(this.body.position.x>=0 && this.body.position.x<=160 && this.body.position.y>=height-divisionHeight/2){
            score=score+100
        }
        if(this.body.position.x>=160 && this.body.position.x<=320 && this.body.position.y>=height-divisionHeight/2){
            score=score+200
        }
        if(this.body.position.x>=320 && this.body.position.x<=480 && this.body.position.y>=height-divisionHeight/2){
            score=score+1000
        }
        if(this.body.position.x>=480 && this.body.position.x<=640 && this.body.position.y>=height-divisionHeight/2){
            score=score+400
        }
        if(this.body.position.x>=640 && this.body.position.x<=800 && this.body.position.y>=height-divisionHeight/2){
            score=score+300
        }
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};