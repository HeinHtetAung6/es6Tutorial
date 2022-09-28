//promise
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: 'Ag Ag', email: 'agag@gmail.com' },
        { username: 'Su Su', email: 'susu@gmail.com' },
      ]);
    }, 1000);
  }).then(() => {
    console.log(getUsers);
  })
}
getUsers();

//promise.all
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved');
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved');
    resolve(20);
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved');
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((p, c) => p + c);

  console.log(`Results: ${results}`);
  console.log(`Total: ${total}`);
});

//promise.race
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);
  }, 1 * 1000);

});

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The second promise has resolved');
      resolve(20);
  }, 2 * 1000);
});


Promise.race([p4, p5])
  .then(value => console.log(`Resolved: ${value}`))
  .catch(reason => console.log(`Rejected: ${reason}`));
