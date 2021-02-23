const Point = require("./point");

class Circle {
    constructor(point, radius) {
        this.point = point;
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius**2;
    }

    containsPoint(point) {
        let distance = Math.sqrt(Math.abs(point.getX()-this.point.getX())**2 + Math.abs(point.getY()-this.point.getY())**2);
        return distance <= this.radius;
    }

    toString() {
        console.log(`Circle at coordinates (${this.point.getX()},${this.point.getY()}) and radius ${this.radius}`);
    }
}

// Question a)
let circle = new Circle(new Point(2,2), 4);

// Question b)
circle.toString();

// Question c)
console.log(`Area: ${circle.area()}`);
let point1 = new Point(0,0);
let point2 = new Point(-4, 7);
console.log(circle.containsPoint(point1)); // true
console.log(circle.containsPoint(point2)); // false