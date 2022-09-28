//object.assign
let box = {
  height: 10,
  width: 20
};

let style = {
  color: 'Red',
  borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);

console.log(styleBox);


//object.is
let amount = +0,
    volume = -0;
console.log(Object.is(amount, volume));
