class Polygon{
    constructor(x,y,radius){
        var options = {
            
            'restituion': 0.3,
            'friction': 1.0,
            'density': 1.0
        }
        this.radius = 80;
        this.body = Bodies.circle(x,y,this.radius,options);
       this.radius = radius;
        this.image = loadImage("is.png");
        World.add(world,this.body);
    }
    display(){
                
                imageMode(RADIUS);
                image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);

    }

}