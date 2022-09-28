//String startsWith()
const title = 'Jack and Jill Went Up the Hill';

console.log(title.startsWith('Jack'));
console.log(title.startsWith('jack'));
console.log(title.startsWith('Jill', 9));

//String endsWith()
const title1 = 'Jack and Jill Went Up the Hill';

console.log(title1.endsWith('Hill'));
console.log(title1.endsWith('hill'));
console.log(title1.endsWith('Up', 21));

//String.includes
let str = 'JavaScript String';
console.log(str.includes('Script'));
