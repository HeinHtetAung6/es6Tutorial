//array.of
let chars = Array.of('A', 'B', 'C');
console.log(chars.length);
console.log(chars); 


//array.from
function arrayFromArgs() {
  var results = [];
  for (var i = 0; i < arguments.length; i++) {
      results.push(arguments[i]);
  }
  return results;
}
var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
console.log(fruits);

//array find 
let customers = [{
  name: 'ABC Inc',
  credit: 100
}, {
  name: 'ACME Corp',
  credit: 200
}, {
  name: 'IoT AG',
  credit: 300
}];

console.log(customers.find(c => c.credit > 100));

//array findIndex 
let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex(rank => rank === 7);
console.log(index);
