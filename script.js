class Shape{
    constructor(color, name){
        this.color = color;
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

class Circle extends Shape {
    constructor(radius, color, name){
        super(color,name);
        this.radius = radius;
    }

    getRadius(){
        return this.radius;
    }

    getArea(){
        let area = Math.PI * Math.pow(this.radius,2);
        return area;
    }
}

class Square extends Shape {
    constructor(size, color, name){
        super(color,name);
        this.size = size;
    }

    getSize(){
        return this.size;
    }

    getArea(){
        return Math.pow(this.size,2);
    }
}

class Rectangle extends Shape{
    constructor(width, height, color, name){
        super(color,name);
        this.width = width;
        this.height = height;
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

    getArea(){
        return this.width * this.height;
    }
}

var c1 = new Circle(1.5,"blue", "c1");
var c2 = new Circle(10,"red", "c2");
var c3 = new Circle(20,"yellow", "c3");

var s1 = new Square(2,"black", "s1");
var s2 = new Square(5,"green", "s2");
var s3 = new Square(100,"orange", "s3");

var r1 = new Rectangle(2,5,"black","r1");
var r2 = new Rectangle(5,10,"green","r2");
var r3 = new Rectangle(100,100,"orange","r3");

var circle = new Circle(22,"teal", "Circle_12");

document.body.innerHTML = c1.getArea() + "<br/>"+c2.getArea() + "<br/>"+c3.getArea() + "<br/>"+
    s1.getArea() + "<br/>"+s2.getArea() + "<br/>"+s3.getArea() + "<br/>"+
    r1.getArea() + "<br/>"+r2.getArea() + "<br/>"+r3.getArea() + "<br/>";

document.body.innerHTML += "<br/>Naam: "+ circle.name + " Oppervlakte: " + circle.getArea();

