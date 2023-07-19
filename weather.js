let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(8);
  }, 2000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(9);
  }, 4000);
});

let pa = Promise.all([p1, p2]);
pa.then((value) => {
  console.log(value);
});
