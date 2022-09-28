//let
let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x);
}
console.log(x);

//var
for (var i = 0; i < 5; i++) {
	console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);

//const
const RATE = 0.1;

//Default function parameter
function say(message='Hi') {
  console.log(message);
}

say();
say('Hello');


//rest parameter
function sum(...args) {
  let total = 0;
  for (const a of args) {
      total += a;
  }
  return total;
}
sum(1, 2, 3);

//spread operator
const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined);


//Object literal syntax extensions 
let name = 'machine name';
let machine = {
    [name]: 'server',
    'machine hours': 10000
};
console.log(machine[name]);
console.log(machine['machine hours']);

//for...of
let scores = [80, 90, 70];
for (let score of scores) {
    score = score + 5;
    console.log(score);
}

//Octal and binary literals
let a = 051;
console.log(a);

let f = 0b111;
console.log(f);


//template literals
let str = `Template literal in ES6`;

console.log(str);//
console.log(str.length);
console.log(typeof str);