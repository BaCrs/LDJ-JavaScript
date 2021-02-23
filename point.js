class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    toString() {
        console.log(`Point at coordinates (${this.x},${this.y})`);
    }
}

// Question a)
let point = new Point(0, 0);

// Question b)
point.toString();

// Question c)
point.setX(1);
point.setY(2);
console.log(`Get point coordinates : (${point.getX()},${point.getY()})`);
point.toString();

// Export
module.exports = Point;