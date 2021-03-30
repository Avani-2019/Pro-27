class Rope
{
	constructor(body1,body2, offsetX, offsetY)
	{   
        this.offsetX =offsetX;
        this.offsetY = offsetY;

		var BOB1options = {
            bodyA : body1,
            bodyB : body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
    
        this.body = Constraint.create(BOB1options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var ropeA=this.body.bodyA.position;
            var ropeB=this.body.bodyB.position;		
            
            strokeWeight(3);
            line(ropeA.x,ropeA.y,ropeB.x + this.offsetX,ropeB.y + this.offsetY)
			
	}

}