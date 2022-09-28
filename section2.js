//array destructuring 
function getScores() {
    return [70, 80, 90, 100];
}

let [p, q, r] = getScores();

console.log(p);
console.log(q);
console.log(r);

//object destructing
let person = {
    firstName: 'John',
    lastName: 'Doe',
    currentAge: 28
};

let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;

console.log(middleName);
console.log(age);