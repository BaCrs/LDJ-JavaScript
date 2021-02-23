class Hippopotamus {
    constructor(name, weight, tusksSize) {
        this.name = name;
        this.weight = weight;
        this.tusksSize = tusksSize;
    }

    swim() {
        this.weight -= 0.3;
    }

    eat() {
        this.weight += 1;
    }

    fight(hippopotamus) {
        if (this.tusksSize > hippopotamus.tusksSize) console.log(`${this.name} wins against ${hippopotamus.name}`);
        else if (this.tusksSize < hippopotamus.tusksSize) console.log(`${this.name} loses against ${hippopotamus.name}`);
        else console.log(`${this.name} draws against ${hippopotamus.name}`);
    }

    toString() {
        console.log(`${this.name} weights ${this.weight}kg and has tusks that are ${this.tusksSize}m long.`);
    }
}

// Question a)
let hippopotamus1 = new Hippopotamus("Hippopotamus1", 250, 0.3);
let hippopotamus2 = new Hippopotamus("Hippopotamus2", 300, 0.4);

// Question b)
hippopotamus1.toString();
hippopotamus2.toString();

// Question c)
hippopotamus1.fight(hippopotamus2);

// Question d)
hippopotamus1.toString();
for (let day=0; day<21; day++) {
    for (let hour=0; hour<15; hour++) {
        hippopotamus1.eat();
        hippopotamus1.eat();
        hippopotamus1.swim();
        hippopotamus1.swim();
        hippopotamus1.swim();
    }
    hippopotamus1.toString();
}