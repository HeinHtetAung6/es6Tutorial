//class & gettters and setters
let meeting = {
    attendees: [],
    add(attendee) {
        console.log(`${attendee} joined the meeting.`);
        this.attendees.push(attendee);
        return this;
    },
    get latest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
};

meeting.add('John').add('Jane').add('Peter');
console.log(`The latest attendee is ${meeting.latest}.`);


//class expression
let Person = class {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

//static methods
class People {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    static createAnonymous(gender) {
        let name = gender == "male" ? "John Doe" : "Jane Doe";
        return new People(name);
    }
}

let anonymous = People.createAnonymous("male");


//static properties
class Item {
    static count = 0;
    static getCount() {
        return Item.count;
    }
}

console.log(Item.getCount());


//computed properties
let propName = 'c';

const rank = {
    a: 1,
    b: 2,
    [propName]: 3,
};

console.log(rank.c);

// Inheritance & new-target
function Animal(legs) {
    this.legs = legs;
}

Animal.prototype.walk = function () {
    console.log('walking on ' + this.legs + ' legs');
}

function Bird(legs) {
    Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;


Bird.prototype.fly = function () {
    console.log('flying');
}

var pigeon = new Bird(2);
pigeon.walk();
pigeon.fly();


