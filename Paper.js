class Paper {

    constructor(x,y) {
        var options = {
            isStatic : false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage('paper.png');
        World.add(myworld, this.body);
    }
}